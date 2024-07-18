#!/usr/bin/env node

const app = (await import("fastify")).default({
	logger: {
		level: "error",
	},
});

import danmakuRoute from "./route/danmaku.js";
import addTorrentRoute, { downloading } from "./route/addTorrent.js";
import togetherRoute from "./route/together.js";

import fs from "fs";
import path from "path";
import mime from "mime";
import parseRange from "range-parser";
import axios from "axios";
import {
	getAlistFiles,
	getFiles,
	getDirs,
	getAlistPath,
} from "./lib/getFiles.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// import { renderToStringAsync } from "solid-js/web";

import {
	rootPath,
	axiosProxy,
	announceList,
	extMatcher,
	alist,
} from "./config.js";

if (alist.enable) {
	axios
		.post(alist.base_url + "/api/auth/login", {
			username: alist.username,
			password: alist.password,
		})
		.then(({ data }) => {
			alist.axios = axios.create({
				baseURL: alist.base_url,
				headers: {
					Authorization: data.data.token,
				},
			});
		});
}

app.register((await import("@fastify/cookie")).default);
app.register((await import("@fastify/session")).default, {
	secret: "cf4456458bfc4216b4dd0167ffe11783",
	cookie: {
		secure: false,
	},
});
app.register((await import("@fastify/compress")).default);
app.register((await import("@fastify/websocket")).default);

app.register((await import("@fastify/static")).default, {
	root: path.join(path.dirname(__filename), "fe/dist/assets"),
	prefix: "/assets/",
	decorateReply: false,
});

app.post("/scandir", async (req, res) => {
	const { path: dirpath } = req.body;

	if (dirpath === "/") {
		return res.send(getDirs());
	}

	const alist_file_path = path.join(rootPath, dirpath, "alist");

	if (alist.enable && fs.existsSync(alist_file_path)) {
		const alist_path = getAlistPath(alist_file_path);
		return res.send(await getAlistFiles(alist_path));
	}

	return res.send(getFiles(dirpath));
});

app.post("/geturl", async (req, res) => {
	// return "https://ccp-bj29-video-preview.oss-enet.aliyuncs.com/lt/77BED2A77DB6EBB7D6261E4F724E72D950B20CA9_343476597__sha1_bj29/SD/media.m3u8?di=bj29&dr=741812470&f=6691d0e3e3c3a70e7c694e80885c07d3237cd09f&pds-params=%7B%22ap%22%3A%2276917ccccd4441c39457a04f6084fb2f%22%7D&security-token=CAISvgJ1q6Ft5B2yfSjIr5bGHo36j5Fr%2FJK%2BZFXQrFYFPd9ttbPDsDz2IHhMf3NpBOkZvvQ1lGlU6%2Fcalq5rR4QAXlDfNSGIVRezq1HPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41Uh1jgjtPzkkpfFtkGF1GeXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLs0ARrv4r1fMUqW2X543AUgFLhy2KKMPY99xpFgh9a7j0iCbSGyUu%2FhcRm5sw9%2Byfo34lVYneU7ZESoVHObP7AhWvDNQ3S7jN6YihvSt3zmA4YsrdqJPW1dKDogPIx4aBwHbHMFKlwddMkwui1O4j8vXtuMkagAF78Rw8jLu%2FcQtasnSU4jeq%2Blyy643eBIj4fdkcs%2Bh7a7JHadZUeoVbneOFjxYc%2FaXhYg1aIh9vdtOR7bPt%2F8XZrAhEpak%2F%2B3cTxqme5qdvSHA%2FAM3dihvsbvCt3H%2FsA%2FroSMFTVRPuauXR58WdTQxlnCUvAr6RYaqbd1PDG72DoSAA&u=bb20bb5fc2b84ae4b4afac5f459ba1da&x-oss-access-key-id=STS.NUsU7NbNJKPUfsaHVP1PAZvhR&x-oss-expires=1721312255&x-oss-process=hls%2Fsign%2Cparams_ZGksZHIsZix1LHBkcy1wYXJhbXM%3D&x-oss-signature=56PCkakVs8MOPE8jn%2BPi1dQjDJy%2ByEHT6qbrXk3UDSg%3D&x-oss-signature-version=OSS2";

	const { dir, ep } = req.body;

	const alist_file_path = path.join(rootPath, dir, "alist");

	if (alist.enable && fs.existsSync(alist_file_path)) {
		const alist_path = getAlistPath(alist_file_path);

		const { data } = await alist.axios.post("/api/fs/get", {
			path: path.join(alist_path, ep),
		});

		return res.send(data.data.raw_url);
	} else {
		return res.callNotFound();
	}
});

app.get("/video/*", async (req, res) => {
	res.header("Accept-Ranges", "bytes");

	const ep = decodeURI(req.url.slice(7));
	const r = path.join(rootPath, ep);

	const { file = null, pl = Infinity } = downloading.get(ep) ?? {};

	if (!file && !fs.existsSync(r)) return res.callNotFound();

	res.type(file ? file.type : mime.getType(r));
	if (!req.headers.range) {
		const stream = fs.createReadStream(r);
		return res.send(stream);
	}

	const fsize = file ? file.length : fs.statSync(r).size;

	const range = parseRange(fsize, req.headers.range);
	if (range instanceof Number || range.type !== "bytes" || range.length !== 1)
		return res.code(416);

	res.code(206);

	const start = range[0].start;
	const expected_end = start + pl - 1;
	const end = Math.min(range[0].end, expected_end);
	res.header("Content-Range", `bytes ${start}-${end}/${fsize}`);

	const stream = file
		? file.createReadStream({ start, end })
		: fs.createReadStream(r, { start, end });
	return res.send(stream);
});

app.register(danmakuRoute, { prefix: "danmaku/v3" });
app.register(addTorrentRoute, { prefix: "add" });
app.register(togetherRoute, { prefix: "together" });

// await app.register((await import("@fastify/vite")).default, {
// 	dev: process.argv.includes("--dev"),
// 	root: import.meta.url,
// 	createRenderFunction({ appRouter }) {
// 		return async () => {
// 			return {
// 				element: await renderToStringAsync(appRouter()),
// 			};
// 		};
// 	},
// });

app.get("/*", (req, res) => {
	res.type("text/html").send(fs.createReadStream("./fe/dist/index.html"));
});

// app.get("/*", async (req, res) => {
// 	return res.html(await res.render());
// });
// await app.vite.ready();

await app.listen({ host: "0.0.0.0", port: 3000 });
