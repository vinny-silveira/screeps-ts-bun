import { rm } from "node:fs/promises";
import glob from "tiny-glob";

const { BUILD_ALL } = process.env;

const entrypoints =
  BUILD_ALL === "true" ? await glob("./src/**/*.ts") : ["./src/main.ts"];

console.log(
  "Building",
  BUILD_ALL === "true" ? `all ${entrypoints.length} files` : "only main.ts",
  "...",
);

await rm("dist", { recursive: true, force: true });

await Bun.build({
  entrypoints,
  outdir: "dist",
  target: "node",
  minify: process.env.DRY_RUN !== "true",
  format: "cjs",
  sourcemap: "inline",
  splitting: false,
});

console.log("Build finished!");
