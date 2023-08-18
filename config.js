export const rootPath = "D:\\BTPlayer";
export const axiosProxy = {
	protocol: "http",
	host: "localhost",
	port: 1080,
};
export const torrentClientConfig = {
	maxConns: 40960,
	// uploadLimit: 0,
	// downloadLimit: 1024 * 1024 * 4,
};
export const sources = {
	search: (s, i, sub = 0) =>
		`https://share.dmhy.org/topics/rss/rss.xml?keyword=${encodeURIComponent(
			s
		)}&sort_id=0&team_id=${sources.subId[sub]}&order=date-desc`,
	browse: (i, sub = 0) =>
		`https://share.dmhy.org/topics/rss/team_id/${sources.subId[sub]}/rss.xml`,
	subNames: ["ANi", "Lilith-Raws", "NC-Raws", "桜都字幕组", "LoliHouse"],
	subId: [816, 803, 801, 619, 657],
};
export const announceList = [
	"http://tracker.gbitt.info/announce",
	"udp://tracker.opentrackr.org:1337/announce",
	"udp://tracker.sylphix.com:6969/announce",
	"https://tracker.lilithraws.cf/announce",
	"https://tracker1.520.jp/announce",
	"http://www.wareztorrent.com/announce",
	"https://tr.burnabyhighstar.com/announce",
	"http://tk.greedland.net/announce",
	"http://trackme.theom.nz:80/announce",
	"https://tracker.foreverpirates.co:443/announce",
	"http://tracker3.ctix.cn:8080/announce",
	"https://tracker.m-team.cc/announce.php",
	"https://tracker.loligirl.cn/announce",
	"https://tp.m-team.cc:443/announce.php",
	"https://tr.abir.ga/announce",
	"http://tracker.electro-torrent.pl/announce",
	"http://1337.abcvg.info/announce",
	"https://trackme.theom.nz:443/announce",
	"https://tracker.tamersunion.org:443/announce",
	"https://tr.abiir.top/announce",
	"http://www.all4nothin.net:80/announce.php",
	"https://tracker.kuroy.me:443/announce",
	"https://1337.abcvg.info:443/announce",
	"http://torrentsmd.com:8080/announce",
	"udp://tracker4.itzmx.com:2710/announce",
	"udp://tracker3.itzmx.com:6961/announce",
	"udp://tracker2.itzmx.com:6961/announce",
	"udp://tracker1.itzmx.com:8080/announce",
	"http://t.acg.rip:6699/announce",
	"udp://tr.bangumi.moe:6969/announce",
];
export const extMatcher = /\.(mp4|mkv|mov)$/;
