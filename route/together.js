const DESTROY_LATENCY = 1000 * 60 * 5; // 5min

import { EventEmitter } from "events";

function randomId(l = 6) {
	const cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let r = "";
	for (let i = 0; i < l; i++)
		r += cs.charAt(Math.floor(Math.random() * cs.length));
	return r;
}

async function getName(req) {
	if (!req.session.get("name")) {
		req.session.set("name", "user-" + randomId());
		await req.session.save();
	}
	return req.session.get("name");
}

const togetherPool = new Map();
class TogetherRoom {
	constructor(url, name, id) {
		this.url = url;
		this.id = id;
		this.name = name;
		this.connSet = new Map();
		this.online = new Set();
		this.ee = new EventEmitter();

		this.timeout = null;

		this.time = 0;
		this.playing = false;
	}

	addConn(connId, conn, name) {
		this.connSet.set(connId, conn);
		this.ee.emit("join");

		this.broadcast({
			event: "join",
			name,
		});
		this.broadcast({
			event: "pause",
			data: this.time,
			name,
		});
		this.playing = false;

		clearTimeout(this.timeoutId);
	}

	removeConn(connId, name) {
		this.connSet.delete(connId);
		this.ee.emit("leave");

		this.broadcast({
			event: "leave",
			name,
		});
		this.online.delete(name);

		if (!this.connSet.size)
			this.timeoutId = setTimeout(() => {
				togetherPool.delete(this.id);
			}, DESTROY_LATENCY);
	}

	rename({ previous, now }) {
		this.online.delete(previous);
		this.online.add(now);
	}

	broadcast(data) {
		for (const [id, conn] of this.connSet) {
			conn.socket.send(JSON.stringify(data));
		}
	}
}

export default (app, opts, next) => {
	app.get("/ws/:id", { websocket: true }, async (conn, req) => {
		const sess = req.session;
		const { id: tId } = req.params;

		if (!togetherPool.has(tId)) return;
		const room = togetherPool.get(tId);

		const connId = randomId(8);
		room.addConn(connId, conn, await getName(req));

		conn.socket.on("close", async () => {
			togetherPool.get(tId).removeConn(connId, await getName(req));
		});

		conn.socket.on("message", async (m) => {
			const u = JSON.parse(m);
			const { event, data } = u;
			const room = togetherPool.get(tId);

			if (event === "timeupdate") {
				room.time = data;
				return;
			}
			if (event === "pause" && room.playing) {
				room.playing = false;
				room.broadcast({
					event,
					data,
					name: await getName(req),
				});
				return;
			}
			if (event === "play" && !room.playing) {
				room.playing = true;
				room.broadcast({
					event,
					data,
					name: await getName(req),
				});
				return;
			}
			if (event === "rename") {
				room.rename(data);
				sess.set("name", data.now);
				await sess.save();
			}

			room.broadcast({
				event,
				data,
				name: await getName(req),
			});
		});
	});

	app.get("/url/:id", async (req, res) => {
		const { id } = req.params;

		if (!togetherPool.has(id)) return res.code(404).send();

		const room = togetherPool.get(id);

		const name = await getName(req);

		room.online.add(name);

		return res.send({
			url: room.url,
			playing: room.playing,
			time: room.time,
			name,
			online: [...room.online.keys()],
		});
	});

	app.get("/list", async (req, res) => {
		return res.send(
			[...togetherPool.entries()].map((u) => {
				const [id, room] = u;
				return {
					online: room.online.size,
					name: room.name,
					id: room.id,
				};
			})
		);
	});

	app.post("/add", async (req, res) => {
		const { url, name } = req.body;
		const id = randomId();

		togetherPool.set(id, new TogetherRoom(url, name, id));

		return res.send({ id });
	});

	next();
};
