import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid()],
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				dir: "./dist",
			},
		},
		target: "esnext",
	},
});
