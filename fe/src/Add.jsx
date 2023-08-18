import { createSignal, createEffect, onMount } from "solid-js";
import MagnetInput from "./component/magnetInput";
import { useLocation } from "@solidjs/router";
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";
import { Popover } from "bootstrap";

function escapeName(name) {
	name.replaceAll(/[\\|\/|\:|\*|\?|\||"|<|>]/g, "");
	const i = name.indexOf(" - ");
	if (i === -1) return name;
	return name.slice(0, i).trim();
}

function enablePopover() {
	document
		.querySelectorAll('[data-bs-toggle="popover"]')
		.forEach((u) => new Popover(u));
}

function getTimeString(d) {
	d = moment(d);
	if (d.year() === new Date().getFullYear()) return d.format("MM/DD kk:mm");
	return d.format("YY/MM/DD kk:mm");
}

export default function Add() {
	const [speed, setSpeed] = createSignal({ up: 0, down: 0 });

	const rssLoading = [{ name: "正在加载", episode: "~" }];
	const [rss, setRss] = createSignal(rssLoading);

	function Bytes2MBytes(bytes, base = 100) {
		return Math.round(((bytes + Number.EPSILON) / 1024 / 1024) * base) / base;
	}

	const s = useLocation();
	if (s.query.s) {
		onMount(() => {
			document.forms["search"]["text"].value = s.query.s;
			axios.post("/add/search", { s: s.query.s }).then((u) => {
				setRss(u.data);
				enablePopover();
			});
		});
	} else {
		axios.get("/add/browse").then((u) => {
			setRss(u.data);
			enablePopover();
		});
	}

	(function getSpeed() {
		axios.get("/add/speed").then((u) => {
			setSpeed(u.data);
		});
		setTimeout(getSpeed, 2000);
	})();

	function searchTorrent(e) {
		e.preventDefault();
		setRss(rssLoading);
		const input = document.forms["search"]["text"];
		axios.post("/add/search", { s: input.value }).then((u) => {
			setRss(u.data);
			enablePopover();
		});
	}

	return (
		<div class="container-md mt-4">
			<div class="row">
				<div class="col-md-4 col-sm-8">
					<MagnetInput
						resolve={async (u) => {
							axios.post("/add/torrent", u).then(() => {
								Swal.fire({
									icon: "success",
									title: "Whooray",
									text: "已经开始下载力~",
								});
							});
						}}
					/>
				</div>
				<div
					class="col-md-2 col-sm-4"
					style="display: flex;align-items: center;"
				>
					<span>
						{Bytes2MBytes(speed().up)}MB/s↑ {Bytes2MBytes(speed().down)}MB/s↓
					</span>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-sm-12 mt-4">
					<form class="input-group" name="search">
						<input
							type="text"
							class="form-control"
							placeholder="番剧名称"
							name="text"
						/>
						<button class="btn btn-outline-secondary" on:click={searchTorrent}>
							搜索
						</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-sm-12 p-4">
					<div class="list">
						<For each={rss()}>
							{(u) => (
								<div class="link-wrapper">
									<div
										class="list-item list-item-flex"
										on:click={() => {
											axios
												.post("/add/torrent", {
													i: u.enclosure.url,
													name: escapeName(u.name),
												})
												.then(() => {
													Swal.fire({
														icon: "success",
														title: "Whooray",
														text: "已经开始下载力~",
													});
												});
										}}
										data-bs-toggle="popover"
										data-bs-trigger="hover focus"
										data-bs-content={u.title}
									>
										<span class="list-item-name">{u.name}</span>
										<div>
											<span class="badge bg-secondary list-item-badge">
												{u.episode}
											</span>
											<span class="badge bg-info list-item-badge">
												{u.pubDate ? getTimeString(u.pubDate) : "~"}
											</span>
										</div>
									</div>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
}
