/**
 * filkaan waa configuration vite wax walba oo vite quesya halkaan baan ku
 * configure greynyenaa
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compress";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/scss/variables','./src/scss/mixins';`,
      },
    },
  },
  server: {
    host: true,
  },
});
