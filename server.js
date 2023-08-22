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
import getFiles from "./lib/getFiles.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// import { renderToStringAsync } from "solid-js/web";

import { rootPath, axiosProxy, announceList, extMatcher } from "./config.js";

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
	const { path } = req.body;
	return res.send(getFiles(path));
});

app.get("/video/*", async (req, res) => {
	res.header("Accept-Ranges", "bytes");

	const ep = decodeURI(req.url.slice(7));

	const r = path.resolve(rootPath, ep);
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
