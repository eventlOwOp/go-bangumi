export default function MagnetInput(props) {
	function inputMagnet(e) {
		e.preventDefault();
		const magnet_input = document.forms["addTorrent"]["uri"];
		console.log(magnet_input.value);
		props.resolve({
			i: magnet_input.value,
			name: "default",
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
			<button class="btn btn-outline-secondary" on:click={inputMagnet}>
				下载
			</button>
		</form>
	);
}
