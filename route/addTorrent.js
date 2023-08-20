import axios from "axios";
import WebTorrent from "webtorrent";
import RssParser from "rss-parser";
import parseTitle from "../lib/parser.js";
import OpenCC from "wasm-opencc";
import path from "path";

const rssParser = new RssParser();
const dictSource = new OpenCC.DictSource("t2s.json");
const converter = new OpenCC.Converter(...(await dictSource.get()));

import {
	rootPath,
	axiosProxy,
	announceList,
	torrentClientConfig,
	sources,
} from "../config.js";

const client = new WebTorrent(torrentClientConfig);

export const downloading = new Map();

async function rssRawConvert(data) {
	const result = await rssParser.parseString(data);
	return result.items.map((u) => {
		const parsed = parseTitle(u.title);
		return {
			title: converter.convert(u.title),
			enclosure: u.enclosure,
			pubDate: u.pubDate,
			episode: converter.convert(parsed.episode),
			name: converter.convert(parsed.name),
			rawName: parsed.name,
		};
	});
}

async function addTorrent(torrentUrl, dir) {
	const torrentOpts = {
		maxWebConns: 1024,
		announce: announceList,
		path: path.join(rootPath, dir),
	};

	const torrent = client.add(torrentUrl, torrentOpts, (torrent) => {
		for (const file of torrent.files) {
			console.log(">>>>>>>>started downloading", file.path);
			downloading.set(path.join(dir, file.path), {
				file,
				pl: torrent.pieceLength,
			});
		}
		torrent.on("done", () => {
			for (const file of torrent.files) {
				console.log(">>>>>>>>downloading completed", file.path);
				downloading.delete(dir + "/" + file.path);
			}
			torrent.destroy();
		});
	});
	torrent.on("error", (err) => {
		console.log(err.message);
	});
}

export default (app, opts, next) => {
	app.post("/torrent", async (req, res) => {
		const { i, name } = req.body;
		let r;
		if (i.startsWith("http")) {
			r = await axios
				.get(i, { proxy: axiosProxy, responseType: "arraybuffer" })
				.then((u) => u.data);
		} else if (i.startsWith("magnet")) {
			r = i;
		} else {
			return res.code(400);
		}
		addTorrent(r, name);
	});
	app.get("/browse", async (req, res) => {
		const { p = 0, sub = 0 } = req.query;
		const data = await axios
			.get(sources.browse(p, sub), { proxy: axiosProxy })
			.then((u) => rssRawConvert(u.data));
		return res.send(data);
	});
	app.post("/search", async (req, res) => {
		const { s, p = 0, sub = 0 } = req.body;
		const data = await axios
			.get(sources.search(s, p, sub), { proxy: axiosProxy })
			.then((u) => rssRawConvert(u.data));
		return res.send(data);
	});
	app.get("/speed", async (req, res) => {
		return res.send({ down: client.downloadSpeed, up: client.uploadSpeed });
	});

	next();
};
