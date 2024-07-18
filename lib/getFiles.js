import parseTitle from "./parser.js";
import fs from "fs";
import { diffWords } from "diff";
import path from "path";
import { rootPath, extMatcher, alist } from "../config.js";

function simplifyFilenames(files, url) {
	const tryParse = files.map((u) => ({
		name: parseTitle(u)?.episode?.padStart(2, "0"),
		file: u,
	}));
	if (tryParse.every((u) => u.name)) return tryParse;

	let names = files.map((u) => u.replace(extMatcher, ""));

	let c = names[0];
	for (let i = 1; i < names.length; ++i)
		c = diffWords(c, names[i])
			.filter((u) => !u.added && !u.removed)
			.map((u) => u.value)
			.join("");

	for (let i = 0; i < names.length; ++i) {
		const namec = diffWords(c, names[i])
			.filter((u) => u.added)
			.map((u) => u.value.trim())
			.join(" ");
		files[i] = {
			file: files[i],
			name: namec === "" ? names[i].replace(extMatcher, "") : namec,
		};
	}
	return files;
}

export function getAlistPath(alist_conf_file) {
	return decodeURIComponent(
		fs.readFileSync(alist_conf_file).toString("utf-8").trim()
	);
}

export function getDirs() {
	return fs
		.readdirSync(rootPath, { withFileTypes: true })
		.filter((u) => u.isDirectory())
		.map((u) => ({ name: u.name }));
}

export function getFiles(dirpath) {
	const files = fs
		.readdirSync(path.join(rootPath, dirpath), { withFileTypes: true })
		.filter((u) => u.isFile() && extMatcher.test(u.name))
		.map((u) => u.name);

	return {
		data: simplifyFilenames(files),
	};
}

export async function getAlistFiles(alist_path) {
	const { data } = await alist.axios.post("/api/fs/list", {
		path: alist_path,
	});
	const files = data.data.content
		.filter((u) => !u.is_dir && extMatcher.test(u.name))
		.map((u) => u.name)
		.sort();

	return {
		data: simplifyFilenames(files),
		alist: true,
	};
}
