import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extendRoute(route) {
        if (!route.path || route.path === "/") {
          return route;
        }
        // {route.path}/index.htmlが出力されるように設定
        return {
          ...route,
          path: route.path + ".html",
        };
      },
    }),
  ],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
});
