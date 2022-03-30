/**
 * filkaan waa configuration vite wax walba oo vite quesya halkaan baan ku
 * configure greynyenaa
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/scss/_normalizer.scss', './src/scss/variables','./src/scss/mixins';`,
      },
    },
  },
  server: {
    host: true,
  },
});
