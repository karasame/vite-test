import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 開発環境に外部APIを叩くための代理設定
  server: {
    proxy: {
      "/api": {
        target: "https://httpbin.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  //SSRの設定
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ssr: resolve(__dirname, "src/entry-server.tsx"),
      },
    },
  },
  ssr: {
    noExternal: ["react-router-dom"], //build時にreact-router-domも連れて行く
  },
});
