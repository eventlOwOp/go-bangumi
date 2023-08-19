export default function MagnetInput(props) {
	function inputMagnet(e) {
		e.preventDefault();
		const magnet_input = document.forms["addTorrent"]["uri"];
		const magnet_dir = document.forms["addTorrent"]["dir"];
		console.log(magnet_input.value);
		props.resolve({
			i: magnet_input.value,
			name: magnet_dir.value,
		});
		magnet_input.value = "";
	}
	return (
		<form class="input-group" name="addTorrent">
			<input
				type="text"
				class="form-control"
				placeholder="磁力链接 magnet:?"
				name="uri"
			/>
			<input
				type="text"
				class="form-control"
				placeholder="文件夹"
				value="default"
				name="dir"
			/>
			<button class="btn btn-outline-secondary" on:click={inputMagnet}>
				下载
			</button>
		</form>
	);
}
