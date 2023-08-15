#!/usr/bin/env node

// Require the framework and instantiate it
import fastify from "fastify";
import fastify_static from "@fastify/static";
import fastify_websocket from "@fastify/websocket";
const app = fastify({
	logger: {
		level: "error",
	},
});

import danmakuRoute from "./route/danmaku.js";

import fs from "fs";
import path from "path";
import mime from "mime";
import parseRange from "range-parser";
import WebTorrent from "webtorrent";
import events from "events";
import axios from "axios";
import getFiles from "./lib/getFiles.js";
import parseTitle from "./lib/parser.js";
import RssParser from "rss-parser";
const rssParser = new RssParser();
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

import {
	rootPath,
	axiosProxy,
	announceList,
	extMatcher,
	browseSource,
} from "./config.js";

const client = new WebTorrent({
	maxConns: 40960,
	// uploadLimit: 0,
	// downloadLimit: 1024 * 1024 * 4,
});
const downloading = new Map();

async function addTorrent(torrentUrl, dir) {
	const torrentOpts = {
		maxWebConns: 1024,
		announce: announceList,
		path: path.join(rootPath, dir),
	};
	let r;
	if (torrentUrl.startsWith("http"))
		r = await axios
			.get(torrentUrl, { proxy: axiosProxy, responseType: "arraybuffer" })
			.then((u) => u.data);
	else if (torrentUrl.startsWith("magnet")) r = torrentUrl;
	else throw new Error("unsupported torrent type");
	const torrent = client.add(r, torrentOpts, (torrent) => {
		for (const file of torrent.files) {
			console.log(">>>>>>>>started downloading", file.path);
			downloading.set(file.path, { file, pl: torrent.pieceLength });
		}
		torrent.on("done", () => {
			for (const file of torrent.files) {
				console.log(">>>>>>>>downloading completed", file.path);
				downloading.delete(file.path);
			}
			torrent.destroy();
		});
	});
	torrent.on("error", (err) => {
		console.log(err.message);
	});
}

app.register(fastify_static, {
	root: path.join(path.dirname(__filename), "fe/dist/assets"),
	prefix: "/assets/",
	decorateReply: false,
});

app.register(fastify_websocket);
const connpool = new Set();
app.register(async (app) => {
	app.get("/ws", { websocket: true }, async (conn, req) => {
		connpool.add(conn);
		conn.socket.on("close", () => {
			connpool.delete(conn);
		});
	});
});

app.post("/add/torrent", async (req, res) => {
	const { i, name } = req.body;
	addTorrent(i, name);
});
app.get("/add/browse", async (req, res) => {
	const data = await axios
		.get(browseSource, { proxy: axiosProxy })
		.then((u) => u.data);
	const result = await rssParser.parseString(data);
	return res.send(
		result.items.map((u) => {
			const parsed = parseTitle(u.title);
			u.episode = parsed.episode;
			u.name = parsed.name;
			return u;
		})
	);
});
app.post("/add/search", async (req, res) => {
	const { s } = req.body;
	const data = await axios
		.get(
			"https://share.dmhy.org/topics/rss/rss.xml?keyword=" +
				encodeURIComponent(s) +
				"&sort_id=0&team_id=816&order=date-desc",
			{ proxy: axiosProxy }
		)
		.then((u) => u.data);
	const result = await rssParser.parseString(data);
	return res.send(
		result.items.map((u) => {
			const parsed = parseTitle(u.title);
			u.episode = parsed.episode;
			u.name = parsed.name;
			return u;
		})
	);
});
app.post("/scandir", async (req, res) => {
	const { path } = req.body;
	return res.send(getFiles(path));
});
app.get("/speed", async (req, res) => {
	return res.send({ down: client.downloadSpeed, up: client.uploadSpeed });
});

app.get("/video/:dir/:ep", async (req, res) => {
	res.header("Accept-Ranges", "bytes");

	const { dir, ep } = req.params;

	const r = path.resolve(rootPath, dir, ep);
	const { file = null, pl = Infinity } = downloading.get(ep) ?? {};

	if (!file && !fs.existsSync(r)) return res.callNotFound();

	res.header("Content-Type", file ? file.type : mime.getType(r));
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

app.get("/*", async (req, res) => {
	res.header("Content-Type", "text/html");
	return res.send(fs.createReadStream("./fe/dist/index.html"));
});
app.listen({ host: "0.0.0.0", port: 3000 });
