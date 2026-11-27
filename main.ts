// FridayFinds hand-in builder.
// Copies app/ and screenshots/ into the output directory, then writes
// dossier.json with the vendored makefun-frontend library.
// Node standard library only. Run: node main.ts
// The grader runs this with the repo read-only and no network, so the
// output defaults to /output (its writable directory) and nothing here
// ever deletes or writes inside the repo. Outside the grader,
// MAKEFUN_OUTPUT_DIR overrides the default, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

mkdirSync(outDir, { recursive: true });
cpSync(join(root, "app"), join(outDir, "app"), { recursive: true });
mkdirSync(join(outDir, "screenshots"), { recursive: true });
if (existsSync(join(root, "screenshots"))) {
  cpSync(join(root, "screenshots"), join(outDir, "screenshots"), {
    recursive: true
  });
}

writeFileSync(
  join(outDir, "dossier.json"),
  buildDossier(outDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216
  })
);

console.log("Wrote dossier to " + join(outDir, "dossier.json"));
