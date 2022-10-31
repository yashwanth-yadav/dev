import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://3.22.198.76:3000',
    viewportHeight: 820,
    viewportWidth: 1570
  },
});
