// One Line, One Laugh — make.fun entry.
// Builds one funny one-liner (max 200 characters, single line) and writes it
// to /output/entry.txt, after checking it against the competition gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, kept as its three beats so each sentence can be checked on its own.
const beats: string[] = [
  "The self-checkout called for assistance.",
  "I was the assistance.",
  "I work here now.",
];

const line: string = beats.join(" ");

// Gate from the competition rules: 1-200 characters, one line, not blank,
// and no invisible control characters sneaking into the text.
const MAX_CHARS = 200;
function checkGate(text: string, expectedWords: number): { chars: number; words: number } {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate: line is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: line must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("gate: line must not contain control characters");
  }
  const words = text.trim().split(/\s+/).length;
  if (words !== expectedWords) {
    throw new Error(`gate: expected ${expectedWords} words, got ${words}`);
  }
  return { chars, words };
}

const { chars, words } = checkGate(line, 13);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
// Read back what was written and confirm it is exactly the validated line.
if (readFileSync(outPath, "utf8") !== line) {
  throw new Error("write check: /output/entry.txt does not match the validated line");
}
console.log(`wrote ${outPath} (${chars} chars, ${words} words)`);
