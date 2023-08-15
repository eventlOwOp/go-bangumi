import axios from "axios";
export default (app, opts, next) => {
	app.get("/", async (req, res) => {
		function htmlEncode(str) {
			return str
				? str
						.replace(/&/g, "&amp;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;")
						.replace(/"/g, "&quot;")
						.replace(/'/g, "&#x27;")
						.replace(/\//g, "&#x2f;")
				: "";
		}
		const { id } = req.query;
		const qres = await axios.post(
			"https://ani.gamer.com.tw/ajax/danmuGet.php",
			{ sn: id },
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Cookie:
						"nologinuser=03f1dd64639c97704e7490bcc6dfdbe2e79e1f749de442bf64d63c194914; buap_modr=p005; buap_puoo=p101; __cf_bm=8zpffUIk5n0VEE4EhhwQcdXoiZy3m5.BowCg93VtLrE-1691774813-0-AWUbuAb6jRtgsSG0G+ET26+nVCBE9AiByRwkPtk5bK2L9MXhM2CcNietRK4A9H2Smaei3Rk4zYuyn7B0YCfb7QQ=; ckM=2019816873; BAHAID=bossbabyyang; BAHAHASHID=67f8306d3e2e1a3f30193d379b59012fdb35b4f55b1c1f3e8f14ff038a427376; BAHANICK=bossbabyyang; BAHAENUR=c14e4ef1c01a8b3253a01f7380fad1e3; BAHARUNE=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ1c2VyaWQiOiJib3NzYmFieXlhbmciLCJ1c2VybmFtZSI6ImJvc3NiYWJ5eWFuZyIsIm1vYmlsZVZlcmlmeSI6ZmFsc2UsImRlbnlQb3N0IjpmYWxzZSwiYXZhdGFyTGV2ZWwiOjEsIm1pZCI6MjAxOTgxNjg3Mywibm9uY2UiOjE5MjI3MzQ2NTgsImppZCI6ImJvc3NiYWJ5eWFuZ0BsaXRlLmdhbWVyLmNvbS50dyIsImV4cCI6MTY5MzA4MzYwMH0.vjyrLBzQIC42Ovo7Vyd5ICRew9lxwblex1BfziokNl6ZLMypzd7fPRW-GL0y3xb1i7x7FlwUgp3lqWFLvsKNGg; BAHALV=1; BAHAFLT=1691774904; MB_BAHAID=bossbabyyang; MB_BAHANICK=bossbabyyang; MB_BAHARUNE=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ1c2VyaWQiOiJib3NzYmFieXlhbmciLCJ1c2VybmFtZSI6ImJvc3NiYWJ5eWFuZyIsIm1vYmlsZVZlcmlmeSI6ZmFsc2UsImRlbnlQb3N0IjpmYWxzZSwiYXZhdGFyTGV2ZWwiOjEsIm1pZCI6MjAxOTgxNjg3Mywibm9uY2UiOjE5MjI3MzQ2NTgsImppZCI6ImJvc3NiYWJ5eWFuZ0BsaXRlLmdhbWVyLmNvbS50dyIsImV4cCI6MTY5MzA4MzYwMH0.vjyrLBzQIC42Ovo7Vyd5ICRew9lxwblex1BfziokNl6ZLMypzd7fPRW-GL0y3xb1i7x7FlwUgp3lqWFLvsKNGg; avtrv=1691774905; age_limit_content=0; ga_class1=C; ANIME_SIGN=0222a1e45b4eab3716f24d0bab4b9eb37245aa271f04f1b164d66fbc; ANIME_dark_theme=0; ckBahaAd=--------B-------",
				},
				proxy: axiosProxy,
			}
		);
		const data = qres.data.map((u) => [
			u.time / 10,
			u.position,
			parseInt(u.color.slice(1), 16),
			htmlEncode(u.userid),
			htmlEncode(u.text),
		]);
		return res.send({ code: 0, data });
	});

	next();
};
