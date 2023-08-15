/* @refresh reload */
import { render } from "solid-js/web";

import "https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.bundle.min.js?url";
// import "./assets/DPlayer.min.css";
import "./assets/bootstrap.min.css";
import "./App.css";

import App from "./App";
import Add from "./Add";
import Player from "./Player";

import { Router, Route, Routes } from "@solidjs/router";

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={App} />
				<Route path="/anime/:path" component={Player} />
				<Route path="/add" component={Add} />
			</Routes>
		</Router>
	),
	document.getElementById("root")
);
