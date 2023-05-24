import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  base: "/slides-template",
  integrations: [svelte(), vue()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (source, path) => path.endsWith("abstract.scss") ? source : `@use "src/styles/_abstract" as *; ${source}`
        }
      }
    }
  }
});