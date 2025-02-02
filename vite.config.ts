import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import pagesPlugin from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    pagesPlugin({
      dirs: [
        {
          dir: path.resolve(__dirname, "src/app"),
          baseRoute: "",
          // filePattern: "**/[a-z0-9]*.tsx",
          filePattern: "**/[a-z0-9\\[\\]]*.tsx",
        },
      ],
    }),
  ],
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
