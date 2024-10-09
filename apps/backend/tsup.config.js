import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/app.ts"],
  splitting: false,
  bundle: true,
  outDir: "./dist",
  clean: true,
  env: { IS_SERVER_BUILD: "true" },
  minify: true,
  sourcemap: true,
});
