import parseTitle from "./parser.js";
import fs from "fs";
import { diffWords } from "diff";
import path from "path";
import { rootPath, extMatcher } from "../config.js";
export default function getFiles(curPath) {
	if (curPath === "/") {
		return fs
			.readdirSync(rootPath, { withFileTypes: true })
			.filter((u) => u.isDirectory())
			.map((u) => ({ name: u.name }));
	}

	const files = fs
		.readdirSync(path.resolve(rootPath, curPath), { withFileTypes: true })
		.filter((u) => u.isFile() && extMatcher.test(u.name))
		.map((u) => u.name);

	const tryParse = files.map((u) => ({
		name: parseTitle(u)?.episode?.padStart(2, "0"),
		file: u,
	}));
	if (tryParse.every((u) => u.name)) return tryParse;

	let c = files[0];
	for (let i = 1; i < files.length; ++i)
		c = diffWords(c, files[i])
			.filter((u) => !u.added && !u.removed)
			.map((u) => u.value)
			.join("");

	for (let i = 0; i < files.length; ++i) {
		const namec = diffWords(c, files[i])
			.filter((u) => u.added)
			.map((u) => u.value.trim())
			.join(" ");
		files[i] = {
			file: files[i],
			name: namec === "" ? files[i].replace(extMatcher, "") : namec,
		};
	}
	return files;
}
