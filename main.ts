// Two Days of Quiet Dread — make.fun entry.
// Writes one code review comment (at most 140 characters) to
// /output/entry.txt: it approves a pull request while carrying
// quiet existential dread. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "LGTM. The logic is sound, the tests pass, and the merge button is right there waiting, the same way every door is waiting, eventually.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 140 characters.
  if (LINE.trim().length === 0 || [...LINE].length > 140) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
