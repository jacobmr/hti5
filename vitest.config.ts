import path from "node:path";
import { defineConfig } from "vitest/config";

// vite.config.ts sets `root: client` for the browser build, which would scope
// vitest to the client only and silently skip the api/ tests. This config exists
// so tests run from the repo root across both. `vite build` still uses
// vite.config.ts, so the production build is unaffected.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@data": path.resolve(import.meta.dirname, "data"),
    },
  },
  test: {
    root: import.meta.dirname,
    include: ["client/src/**/*.test.{ts,tsx}", "api/**/*.test.js"],
    environment: "node",
  },
});
