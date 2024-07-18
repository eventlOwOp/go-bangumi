import { createResource } from "solid-js";
import { useParams, useLocation, A } from "@solidjs/router";
import { For } from "solid-js/web";
import axios from "axios";

export default function App() {
	const params = useParams();
	const location = useLocation();

	const [filelist] = createResource(async () => {
		const path =
			location.pathname === "/" ? "/" : decodeURIComponent(params.name);
		if (path === undefined) throw new Error("invalid anime name");
		const d = await axios.post("/scandir", { path });
		return d.data;
	});

	const [rooms] = createResource(async () => {
		const d = await axios.get("/together/list");
		return d.data;
	});

	return (
		<div class="container-md">
			<div class="row">
				<div class="col-md-6 col-xs-12 p-4">
					<div class="list">
						<Show
							when={!filelist.loading}
							fallback={
								<div class="link-wrapper">
									<span class="link-wrapper list-item">Loading...</span>
								</div>
							}
						>
							<For each={filelist()}>
								{(u) => (
									<div class="link-wrapper">
										<A class="list-item" href={"/anime/" + encodeURI(u.name)}>
											{u.name}
										</A>
									</div>
								)}
							</For>
						</Show>
						<div class="link-wrapper mt-3">
							<button
								class="btn btn-info"
								on:click={(e) => {
									e.preventDefault();
									window.location.href = "/add";
								}}
							>
								添加
							</button>
						</div>
						<Show
							when={!rooms.loading}
							fallback={
								<div class="link-wrapper">
									<span class="link-wrapper list-item">Loading...</span>
								</div>
							}
						>
							<For each={rooms()}>
								{(u) => (
									<div class="link-wrapper">
										<A class="list-item" href={"/together/" + u.id}>
											{u.name}
										</A>
									</div>
								)}
							</For>
						</Show>
					</div>
				</div>
			</div>
		</div>
	);
}
