import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	base: "/slides-template",
	integrations: [svelte()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: (source, path) =>
						path.endsWith("abstract.scss")
							? source
							: `@use "src/styles/_abstract" as *; ${source}`,
				},
			},
		},
	},
});