import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: "./uno.config.ts",
    }),
    react(),
    svgr(),
  ],
});
