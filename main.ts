// SPDX-License-Identifier: MIT
// Writes one original one-line joke about working beside an AI coding agent
// to /output/entry.txt. Deterministic: same joke on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my coding agent to rehearse the demo; it crashed three times, fixed itself twice, and filed a bug report against me for 'unclear instructions.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
