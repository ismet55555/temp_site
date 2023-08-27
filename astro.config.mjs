import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ismet55555.github.io",
  base: "/temp_site",
  integrations: [sitemap(), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
