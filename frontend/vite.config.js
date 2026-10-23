import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const djangoDevServer = process.env.DJANGO_DEV_SERVER;

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/static/frontend/",
  plugins: [react(), tailwindcss()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    proxy: djangoDevServer
      ? {
          "/api": { target: djangoDevServer, changeOrigin: true },
          "/media": { target: djangoDevServer, changeOrigin: true },
        }
      : undefined,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          charts: ["recharts"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
}));
