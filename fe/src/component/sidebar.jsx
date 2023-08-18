import { For } from "solid-js";
import "../css/sidebar.scss";
export default function Sidebar(props) {
	const [video, setVideo] = props.videoSignal;
	return (
		<div class="sidebar">
			<div class="item-control-wrap">
				<span class="item item-control" on:click={() => (location.href = "/")}>
					返回
				</span>
				<span
					class="item item-control"
					on:click={() =>
						(location.href = "/add?s=" + encodeURIComponent(props.name))
					}
				>
					更新
				</span>
			</div>
			<For each={props.file()}>
				{(u) => (
					<span
						classList={{
							item: true,
							active: u.file === video(),
						}}
						on:click={() => setVideo(u.file)}
					>
						{u.name}
					</span>
				)}
			</For>
		</div>
	);
}
