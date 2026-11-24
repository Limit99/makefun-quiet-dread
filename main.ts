import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Two Days of Quiet Dread: one approving code-review line, at most 140 characters.
const LINE =
  "LGTM. The logic is sound, the tests pass, and the merge button is right there waiting, the same way every door is waiting, eventually.";
const MAX_CHARS = 140;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
