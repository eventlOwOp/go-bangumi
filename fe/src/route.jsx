/* @refresh reload */
import { lazy } from "solid-js";

import "./css/bootstrap.scss";
import "./App.css";

import { Router, Route, Routes } from "@solidjs/router";

// import Together from "./Together";
// import Player from "./Player";
// import Add from "./Add";
// import App from "./App";

export function appRouter() {
	return () => {
		const App = lazy(() => import("./App"));
		const Add = lazy(() => import("./Add"));
		const Player = lazy(() => import("./Player"));
		const Together = lazy(() => import("./Together"));

		return (
			<Router>
				<Routes>
					<Route path="/" component={App} />
					<Route path="/anime/*path" component={Player} />
					<Route path="/add" component={Add} />
					<Route path="/together/:id" component={Together} />
				</Routes>
			</Router>
		);
	};
}
