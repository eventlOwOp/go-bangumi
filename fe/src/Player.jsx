import { createSignal, createEffect, onMount } from "solid-js";
import Sidebar from "./component/sidebar";
import { useParams } from "@solidjs/router";
import axios from "axios";

import state from "./assets/img/state.svg";
import indicator from "./assets/img/indicator.svg";
import ploading from "./assets/img/ploading.svg";
import Artplayer from "artplayer";

function replaceHash(hash) {
	const baseUrl = location.href.split("#")[0];
	location.replace(baseUrl + "#" + hash);
}

export default function App() {
	let { path } = useParams();
	path = decodeURI(path);

	const [filelist, setFilelist] = createSignal([]);
	const scandirPromise = axios
		.post("/scandir", { path: decodeURI(path) })
		.then((u) => setFilelist(u.data));

	let ep = decodeURIComponent(location.hash.slice(1));
	if (ep === "") ep = localStorage.getItem(path) ?? null;
	const [episode, setEpisode] = createSignal(ep);

	onMount(() => {
		function initTime() {
			art.currentTime = localStorage.getItem(episode()) ?? 0;
		}

		(async function () {
			await scandirPromise;
			if (ep === null) {
				setEpisode(filelist()[0].file);
				initTime();
			}
			if (filelist().every((u) => u.file != ep)) {
				setEpisode(filelist()[0].file);
				localStorage.removeItem(episode());
				initTime();
			}
		})();

		const art = new Artplayer({
			container: document.getElementById("artplayer"),
			url: `/video/${path}/${encodeURI(episode())}`,
			screenshot: true,
			theme: "#23ade5",
			fullscreen: true,
			fullscreenWeb: true,
			miniProgressBar: true,
			pip: true,
			setting: true,
			useSSR: true,

			icons: {
				loading: `<img src="${ploading}">`,
				state: `<img width="150" heigth="150" src="${state}">`,
				indicator: `<img width="16" heigth="16" src="${indicator}">`,
			},
		});
		art.on("resize", () => {
			art.autoHeight();
		});
		art.on("video:timeupdate", () => {
			art.currentTime && localStorage.setItem(episode(), art.currentTime);
		});
		art.on("video:ended", () => {
			const nextVideo = getNextVideo();
			if (nextVideo) setEpisode(nextVideo);
		});
		createEffect(async () => {
			replaceHash(episode());
			localStorage.setItem(path, episode());
			await art.switchUrl(`/video/${path}/${encodeURI(episode())}`);
			art.pause();
			art.currentTime = localStorage.getItem(episode()) ?? 0;
		});
		window.art = art;

		document.addEventListener("keypress", async (event) => {
			if (["TEXTAREA", "INPUT"].includes(event.target.tagName)) return;
			if (event.key === "f") {
				event.preventDefault();
				art.fullscreenWebToggle();
			} else if (event.key === " ") {
				event.preventDefault();
				art.toggle();
			} else if (event.key === "k") {
				event.preventDefault();
				art.forward(80);
			} else if (/\d/.test(event.key)) {
				event.preventDefault();
				const speed = parseInt(event.key);
				if (speed) art.playbackRate = speed;
			}
		});
		if (ep) initTime();
	});
	function getNextVideo() {
		let id = 0;
		let nextvideo = null;
		while (filelist()[id].file != episode()) ++id;
		if (++id < filelist().length) nextvideo = filelist()[id].file;
		return nextvideo;
	}

	console.log(Artplayer.html);

	return (
		<div class="container-md mt-4" id="container">
			<div class="row mb-4">
				<div class="col-md-10 col-sm-12 mb-3 player-wrapper">
					<div id="artplayer" innerHTML={Artplayer.html}></div>
				</div>
				<div
					class="col-md-2 col-sm-12 mb-3 sidebar-wrapper"
					style="position: relative"
				>
					<Sidebar
						file={filelist}
						videoSignal={[episode, setEpisode]}
						name={path}
					/>
				</div>
			</div>
		</div>
	);
}
