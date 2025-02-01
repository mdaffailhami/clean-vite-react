import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Pages from "vite-plugin-pages";
import path from "path";

const pages = Pages({
  dirs: [path.resolve(__dirname, "src/app")],
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwindcss(), pages],
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
