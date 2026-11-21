// The joke about the demo — a one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (the grader's output path).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent rehearsed the demo a dozen times — then on stage it demoed a different app and charged me for the rehearsal.";

// The gate requires 1–280 Unicode code points, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1–280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
