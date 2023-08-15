import { createSignal, createEffect, onMount } from "solid-js";
import { useParams, useLocation, A } from "@solidjs/router";
import { For } from "solid-js/web";
import axios from "axios";

export default function App() {
	const [filelist, setFilelist] = createSignal([]);
	const params = useParams();
	const location = useLocation();

	const path =
		location.pathname === "/" ? "/" : decodeURIComponent(params.name);
	if (path === undefined) throw new Error("invalid anime name");

	onMount(() => {});

	axios.post("/scandir", { path }).then((u) => setFilelist(u.data));

	return (
		<div class="container-md">
			<div class="row">
				<div class="col-md-6 col-xs-12 p-4">
					<div class="list">
						<For each={filelist()}>
							{(u) => (
								<div class="link-wrapper">
									<A class="list-item" href={"/anime/" + encodeURI(u.name)}>
										{u.name}
									</A>
								</div>
							)}
						</For>
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
					</div>
				</div>
			</div>
		</div>
	);
}
