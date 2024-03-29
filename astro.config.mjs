import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import glsl from "vite-plugin-glsl";

// https://astro.build/config
export default defineConfig({
	site: "https://jsulpis.github.io",
	base: "/talk-animation-techniques",
	integrations: [svelte(), vue(), react()],
	vite: {
		assetsInclude: ["**/*.mov", "**/*.lottie"],
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
		plugins: [glsl()],
	},
});
