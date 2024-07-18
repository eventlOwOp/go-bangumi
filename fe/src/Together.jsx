import { createSignal, createEffect, onMount, createResource } from "solid-js";
import { useParams } from "@solidjs/router";
import axios from "axios";

import state from "./assets/img/state.svg";
import indicator from "./assets/img/indicator.svg";
import ploading from "./assets/img/ploading.svg";
import poster from "./assets/img/poster.jpg";
import Artplayer from "artplayer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";

import Swal from "sweetalert2";

import "./css/player.scss";
import "./css/sidebar.scss";

export default function App() {
	import("bootstrap");
	Artplayer.CONTROL_HIDE_TIME = 1000;

	let { id } = useParams();

	const [message, setMessage] = createSignal([]);
	const [name, setName] = createSignal("");

	function addText(text) {
		setMessage([text, ...message()]);
	}

	function sendWS(obj) {
		if (ws.readyState != ws.OPEN) return;
		ws.send(JSON.stringify(obj));
	}

	function copyLink() {
		navigator.clipboard.writeText(
			"http://eventloop.i234.me:6789/together/url/" + id
		);
	}

	function rename() {
		const newname = document.forms["rename"]["name"].value;

		if (newname === "" || newname === name()) return;

		sendWS({
			event: "rename",
			data: {
				previous: name(),
				now: newname,
			},
		});
		addText("我从 " + name() + " 改名为 " + newname);
		setName(newname);
	}

	function reportPlay() {
		sendWS({
			event: "play",
			data: art.currentTime,
		});
		addText("我 开始了播放");
	}
	function reportPause() {
		sendWS({
			event: "pause",
			data: art.currentTime,
		});
		addText("我 暂停了");
	}

	axios
		.get("/together/url/" + id)
		.catch((u) => {
			console.log(u.status);
			if (u.status === 404) {
				// todo: notice
			}
			return history.back();
		})
		.then((u) => {
			u = u.data;
			setName(u.name);
			addText("当前在线 " + u.online.join(", "));

			window.ws = new WebSocket(`ws://${location.host}/together/ws/${id}`);
			ws.onclose = async (e) => {
				Swal.fire({
					icon: "error",
					title: "Oops",
					text: "连接断开了, 请刷新页面",
				});
			};
			ws.onmessage = async (e) => {
				const u = JSON.parse(e.data);
				if (!art) return;
				if (u.name === name()) return;
				if (u.event === "danmu") {
					u.data.time = undefined;
					u.data.border = false;
					art.plugins.artplayerPluginDanmuku.emit(u.data);

					addText(u.name + " 发送弹幕 " + u.data.text);
				}
				if (u.event === "pause") {
					if (art.playing) {
						art.off("pause", reportPause);
						await art.pause();
						art.currentTime = u.data;
						art.on("pause", reportPause);
					}
					addText(u.name + " 暂停了");
				}
				if (u.event === "seek") {
					art.currentTime = u.data;
					addText(u.name + " 跳转到 " + artUtils.secondToTime(u.data));
				}
				if (u.event === "play") {
					if (!art.playing) {
						art.off("play", reportPlay);
						await art.play();
						art.currentTime = u.data;
						art.on("play", reportPlay);
					}
					addText(u.name + " 开始了播放");
				}
				if (u.event === "join") {
					addText(u.name + " 加入了");
				}
				if (u.event === "leave") {
					addText(u.name + " 离开了");
				}
				if (u.event === "rename") {
					addText(u.data.previous + " 改名为 " + u.data.now);
				}
			};

			onMount(async () => {
				window.artUtils = Artplayer.utils;
				window.art = new Artplayer({
					container: document.getElementById("artplayer"),
					url: u.url,
					screenshot: true,
					theme: "#23ade5",
					fullscreen: true,
					fullscreenWeb: true,
					miniProgressBar: true,
					pip: true,
					useSSR: true,
					poster: poster,
					plugins: [
						artplayerPluginDanmuku({
							danmuku: [],
							lockTime: 0,
						}),
					],

					icons: {
						loading: `<div style="display:flex;flex-direction:column;align-items:center;"><img src="${ploading}" width="24" height="24"/><span style="font-style:normal;">Loading</span></div>`,
						state: `<img width="150" heigth="150" src="${state}"/>`,
						indicator: `<img width="16" heigth="16" src="${indicator}"/>`,
					},
				});
				art.on("ready", () => {
					art.currentTime = u.time;
				});
				art.on("resize", () => {
					art.autoHeight();
				});
				art.on("video:timeupdate", () => {
					sendWS({
						event: "timeupdate",
						data: art.currentTime,
					});
				});
				art.on("pause", reportPause);
				art.on("play", reportPlay);
				art.on("seek", () => {
					sendWS({
						event: "seek",
						data: art.currentTime,
					});
					addText("我 跳转到 " + artUtils.secondToTime(art.currentTime));
				});

				art.on("artplayerPluginDanmuku:emit", (danmu) => {
					sendWS({
						event: "danmu",
						data: danmu,
					});
					addText("我 发送弹幕 " + danmu.text);
				});
			});
		});

	return (
		<>
			<div class="modal fade" id="renameModal" tabindex="-1">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">
								更改昵称
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
							></button>
						</div>
						<div class="modal-body">
							<form name="rename" class="input-group">
								<input
									name="name"
									type="text"
									class="form-control"
									placeholder="昵称"
									value={name()}
								></input>
							</form>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								关闭
							</button>
							<button
								type="button"
								class="btn btn-primary"
								data-bs-dismiss="modal"
								on:click={rename}
							>
								提交
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="container-md mt-4" id="container">
				<div class="row">
					<div class="col-md-10 col-sm-12 mb-3 player-wrapper">
						<div id="artplayer" innerHTML={Artplayer.html}></div>
					</div>
					<div
						class="col-md-2 col-sm-12 mb-3 sidebar-wrapper"
						style="position: relative"
					>
						<div class="sidebar sidebar-message">
							<div class="mb-2">
								<button
									type="button"
									class="btn btn-primary"
									data-bs-toggle="modal"
									data-bs-target="#renameModal"
								>
									更改昵称
								</button>
								<button
									type="button"
									class="btn btn-primary ms-2"
									on:click={copyLink}
								>
									复制链接
								</button>
							</div>
							<For each={message()}>{(u) => <p>{u}</p>}</For>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
