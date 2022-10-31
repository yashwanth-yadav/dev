import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://3.144.239.72/',
    viewportHeight: 820,
    viewportWidth: 1570
  },
});
