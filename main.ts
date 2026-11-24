// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes a single sentence pitching a ridiculous invention that fixes
// a tiny everyday annoyance to /output/entry.txt.
// Node 22 stdlib only, deterministic, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A pillow that files a noise complaint against your own snoring, " +
  "then rolls you onto your side and fines you one dream.";

// Write the sentence exactly, with no trailing newline: the gate counts
// every character (1-220), and a tie on win rate goes to the smaller text.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
