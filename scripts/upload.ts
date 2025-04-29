import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { ScreepsAPI } from "screeps-api";

const { BRANCH, SERVER, DRY_RUN } = process.env;

if (!BRANCH || !SERVER) {
  console.error("Missing environment variables: BRANCH, SERVER");
  process.exit(1);
}

if (DRY_RUN === "true") {
  console.log("DRY_RUN=true, will not upload to Screeps.");
  process.exit(0);
}

async function upload() {
  console.log("Connecting to Screeps...");
  const api = await ScreepsAPI.fromConfig(SERVER);
  console.log("Connected as:", (await api.me()).username);

  const files = readdirSync("dist").filter((f) => f.endsWith(".js"));
  const code: Record<string, string> = {};

  for (const file of files) {
    const key = file.replace(/\.js$/, "");
    code[key] = readFileSync(join("dist", file), "utf8");
  }

  console.log("Uploading to Screeps...");
  // @ts-expect-error Not need hash parameter here.
  const { ok, timestamp } = await api.code.set(BRANCH, code);
  const timeString = new Date(timestamp).toLocaleString();
  console.log(`Upload ${ok ? "success" : "error"} at ${timeString}`);
}

upload();
