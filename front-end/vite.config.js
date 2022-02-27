import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      filter: /\.(js|mjs|json|css|html|svg|jpg|jpeg|png|gif)$/i,
    }),
  ],
});
