const attrRegexp = /\[(.+?)\]/g;
import { extMatcher } from "../config.js";

function getEpisodeAndName(title) {
	const i = title.lastIndexOf("-");
	return {
		episode: title.slice(i + 1).trim(),
		name: title.slice(0, i).trim(),
	};
}
export function ANiParser(title) {
	const attr = [...title.matchAll(attrRegexp)].map((u) => u[1]);
	title = title.replaceAll(attrRegexp, "").trim();
	const [sub, ...others] = attr;
	const { episode, name } = getEpisodeAndName(title);

	return {
		episode,
		name,
		sub,
		attr: others,
	};
}
export function LilithRawsParser(title) {
	const attr = [...title.matchAll(attrRegexp)].map((u) => u[1]);
	title = title.replaceAll(attrRegexp, "").trim();
	const [sub, ...others] = attr;
	const { episode, name } = getEpisodeAndName(title);

	return {
		episode,
		name,
		sub,
		attr: others,
	};
}
export default function parseTitle(title) {
	title = title.trim().replace(extMatcher, "");
	if (title.startsWith("[ANi]")) return ANiParser(title);
	else if (title.startsWith("[Lilith-Raws]")) return LilithRawsParser(title);
	else return title;
}
