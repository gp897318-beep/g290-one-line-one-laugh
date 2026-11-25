import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh: the joke is the job title doing the work —
// the machine calls for help, the shopper answers, and by the last
// four words the shopper has been hired. The setup is an everyday
// supermarket moment; the twist reframes who the "assistance" is,
// and the punchline lands on the new employment status.
const line =
  "The self-checkout called for assistance. I was the assistance. I work here now.";

// The gate: UTF-8 text, one line, 1-200 characters. Check the limit
// here so an invalid line can never ship.
const MAX_CHARS = 200;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
  return line;
}

const checked = oneLine(line);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", checked, "utf8");
