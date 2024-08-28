import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": import.meta.env,
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "@components": path.join(__dirname, "./src/components"),
      "@pages": path.join(__dirname, "./src/pages"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 这里可以配置 Less 的全局变量
        additionalData: `@import "@/styles/variables.less";`,
        javascriptEnabled: true,
      },
    },
  },
});
