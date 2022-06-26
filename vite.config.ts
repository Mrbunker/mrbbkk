import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [preact()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
