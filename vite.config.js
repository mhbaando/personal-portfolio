/**
 * filkaan waa configuration vite wax walba oo vite quesya halkaan baan ku
 * configure greynyenaa
 */

import { defineConfig } from "vite";
import path from "path";
const pathSrc = path.resolve(scss, "./src");
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${pathSrc}/variables','${pathSrc}/mixns' `,
      },
    },
  },
});
