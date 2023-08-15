import { createSignal, createEffect, onMount } from "solid-js";
import Sidebar from "./component/sidebar";
import DPlayer from "dplayer";
import { useParams } from "@solidjs/router";
import axios from "axios";

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
		(async function () {
			await scandirPromise;
			if (ep === null) {
				setEpisode(filelist()[0].file);
				initDplayer();
			}
			if (filelist().every((u) => u.file != ep)) {
				localStorage.removeItem(episode());
				setEpisode(filelist()[0].file);
				initDplayer();
			}
		})();
		const dp = new DPlayer({
			container: document.getElementById("dplayer"),
			screenshot: true,
			video: {
				url: `/video/${path}/${encodeURI(episode())}`,
			},
			// danmaku: {
			//     id: '34055',
			//     api: 'http://localhost:3000/danmaku/',
			//     // bottom: '15%',
			//     // unlimited: true,
			//     // speedRate: 0.5,
			// },
		});
		document.addEventListener("keypress", async (event) => {
			if (["TEXTAREA", "INPUT"].includes(event.target.tagpath)) return;
			if (event.key === "f") {
				event.preventDefault();
				if (dp.video.hasAttribute("fullscreen")) {
					dp.fullScreen.cancel();
					dp.video.removeAttribute("fullscreen");
				} else {
					dp.fullScreen.request();
					dp.video.setAttribute("fullscreen", "");
				}
			} else if (event.key === "k") {
				event.preventDefault();
				dp.seek(dp.video.currentTime + 80);
			} else if (/\d/.test(event.key)) {
				event.preventDefault();
				const speed = parseInt(event.key);
				if (speed) dp.video.playbackRate = speed;
			}
		});
		if (ep) initDplayer();

		function initDplayer() {
			dp.video.currentTime = localStorage.getItem(episode()) ?? 0;
			dp.on("timeupdate", async () => {
				if (dp.video.currentTime)
					localStorage.setItem(episode(), dp.video.currentTime);
			});
			dp.on("ended", async () => {
				localStorage.removeItem(episode());
				dp.video.currentTime = 0;
				const nextVideo = getNextVideo();
				if (nextVideo) setEpisode(nextVideo);
			});
			createEffect(() => {
				dp.switchVideo({
					url: `/video/${path}/${encodeURI(episode())}`,
				});
				dp.video.currentTime = localStorage.getItem(episode()) ?? 0;
				replaceHash(episode());
				localStorage.setItem(path, episode());
			});
		}
	});
	function getNextVideo() {
		let id = 0;
		let nextvideo = null;
		while (filelist()[id].file != episode()) ++id;
		if (++id < filelist().length) nextvideo = filelist()[id].file;
		return nextvideo;
	}

	return (
		<div class="container-md mt-4" id="container">
			<div class="row mb-4">
				<div class="col-md-10 col-sm-12 mb-3 player-wrapper">
					<div id="dplayer"></div>
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
