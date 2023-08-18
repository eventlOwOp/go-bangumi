/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";

import * as bootstrap from "bootstrap";
// import "./assets/DPlayer.min.css";
import "./css/index.scss";
import "./App.css";

import { Router, Route, Routes } from "@solidjs/router";

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={lazy(() => import("./App"))} />
				<Route path="/anime/*path" component={lazy(() => import("./Player"))} />
				<Route path="/add" component={lazy(() => import("./Add"))} />
			</Routes>
		</Router>
	),
	document.getElementById("root")
);
