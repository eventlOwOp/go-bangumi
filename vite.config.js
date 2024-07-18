import { join, dirname } from "path";
import { fileURLToPath } from "url";
import solid from "vite-plugin-solid";
// Import plugins

export default {
	root: join(dirname(fileURLToPath(new URL(import.meta.url))), "fe"),
	plugins: [solid({ ssr: true })],
};
