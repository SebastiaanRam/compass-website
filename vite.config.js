import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), cloudflare()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
  },
});