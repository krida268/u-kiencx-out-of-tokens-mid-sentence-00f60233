import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The error message an AI agent shows when it runs out of tokens
// mid-sentence: flat error tone, then the message itself gets cut off
// mid-thought — the apology never arrives because the tokens ran out.
const entry =
  "Error: out of tokens. I was about to explain what went wrong, but\u2014";

// The gate counts the characters of /output/entry.txt: 1-140, UTF-8,
// not only whitespace. No trailing newline, so the count stays exact.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
