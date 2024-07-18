import { createSignal, createEffect, onMount, For } from "solid-js";
import { useParams } from "@solidjs/router";
import axios from "axios";

import state from "./assets/img/state.svg";
import indicator from "./assets/img/indicator.svg";
import ploading from "./assets/img/ploading.svg";
import poster from "./assets/img/poster.jpg";
import Artplayer from "artplayer";

import "./css/player.scss";
import "./css/sidebar.scss";

function replaceHash(hash) {
	const baseUrl = location.href.split("#")[0];
	location.replace(baseUrl + "#" + hash);
}

export default function App() {
	Artplayer.CONTROL_HIDE_TIME = 1000;

	let { path } = useParams();
	path = decodeURI(path);

	const [filelist, setFilelist] = createSignal([]);
	const [dirconf, setDirconf] = createSignal({});

	const scandirPromise = axios
		.post("/scandir", { path: decodeURI(path) })
		.then(({ data }) => {
			setFilelist(data.data);
			setDirconf({
				alist: data.alist,
			});
		});

	let ep = decodeURIComponent(location.hash.slice(1));
	if (ep === "") ep = localStorage.getItem(path) ?? null;
	const [episode, setEpisode] = createSignal(ep);

	async function getUrl(ep) {
		if (!dirconf().alist) {
			return `/video/${encodeURI(path)}/${encodeURI(ep)}`;
		}
		return await axios
			.post("/geturl", { dir: path, ep })
			.then(({ data }) => data);
	}

	onMount(async () => {
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

		window.art = new Artplayer({
			container: document.getElementById("artplayer"),
			url: await getUrl(episode()),
			screenshot: true,
			theme: "#23ade5",
			fullscreen: true,
			fullscreenWeb: true,
			miniProgressBar: true,
			pip: true,
			hotkey: false,
			useSSR: true,
			poster: poster,

			icons: {
				loading: `<div style="display:flex;flex-direction:column;align-items:center;"><img src="${ploading}" width="24" height="24"/><span style="font-style:normal;">Loading</span></div>`,
				state: `<img width="150" heigth="150" src="${state}"/>`,
				indicator: `<img width="16" heigth="16" src="${indicator}"/>`,
			},
		});
		art.on("resize", () => {
			art.autoHeight();
		});
		art.on("video:timeupdate", () => {
			art.currentTime && localStorage.setItem(episode(), art.currentTime);
		});
		art.on("video:ended", () => {
			localStorage.removeItem(episode());
			const nextVideo = getNextVideo();
			if (nextVideo) setEpisode(nextVideo);
		});
		createEffect(async () => {
			replaceHash(episode());
			localStorage.setItem(path, episode());
			await art.switchUrl(await getUrl(episode()));
			art.pause();
			initTime();
		});

		document.addEventListener("keydown", async (event) => {
			if (["TEXTAREA", "INPUT"].includes(event.target.tagName)) return;
			if (event.key === "f") {
				event.preventDefault();
				art.fullscreenWebToggle();
			} else if (event.key === " ") {
				event.preventDefault();
				art.toggle();
			} else if (event.key === "k") {
				event.preventDefault();
				art.forward = 80;
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				art.forward = Artplayer.SEEK_STEP;
			} else if (event.key === "ArrowLeft") {
				event.preventDefault();
				art.backward = Artplayer.SEEK_STEP;
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				art.volume += Artplayer.VOLUME_STEP;
			} else if (event.key === "ArrowDown") {
				event.preventDefault();
				art.volume -= Artplayer.VOLUME_STEP;
			} else if (/^\d$/.test(event.key)) {
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
	async function togetherStart() {
		const id = await axios
			.post("/together/add", {
				url: await getUrl(episode()),
				name: `${path} ${episode()}`,
			})
			.then((u) => u.data.id);
		location.href = `/together/${id}`;
	}

	return (
		<div class="container-md mt-4" id="container">
			<div class="row">
				<div class="col-md-10 col-sm-12 mb-3 player-wrapper">
					<div id="artplayer" innerHTML={Artplayer.html}></div>
				</div>
				<div
					class="col-md-2 col-sm-12 mb-3 sidebar-wrapper"
					style="position: relative"
				>
					<div class="sidebar">
						<div class="item-control-wrap">
							<span
								class="item item-control"
								on:click={() => (location.href = "/")}
							>
								返回
							</span>
							<span
								class="item item-control"
								on:click={() =>
									(location.href = "/add?s=" + encodeURIComponent(path))
								}
							>
								更新
							</span>
							<span class="item item-control" on:click={togetherStart}>
								一起看
							</span>
						</div>
						<For each={filelist()}>
							{(u) => (
								<span
									classList={{
										item: true,
										active: u.file === episode(),
									}}
									on:click={() => setEpisode(u.file)}
									title={u.name}
								>
									{u.name}
								</span>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
}
