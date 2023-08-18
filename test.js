import OpenCC from "wasm-opencc";
const dictSource = new OpenCC.DictSource("s2t.json");

dictSource.get().then((args) => {
	const converter = new OpenCC.Converter(...args);
	console.log(converter.convert("繁体"));
	// 注意當不再需要使用converter時，請調用delete方法以釋放內存
	converter.delete();
});

const conv = new OpenCC.Converter(...(await dictSource.get()));
console.log(conv.convert("关闭"));
