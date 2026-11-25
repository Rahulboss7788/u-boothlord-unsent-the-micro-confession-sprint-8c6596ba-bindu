import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One micro-confession in exactly two parts: a To: line naming who it was
// meant for, and the unsent message itself, one line written exactly as it
// was typed, with no explanation after it.
const ENTRY =
  "To: Grandma\n" +
  "I sold your piano to pay my rent, and every time you ask me to play it I say my hands are tired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read it back and enforce the gate: 1 to 260 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 260) {
  throw new Error(`entry.txt is ${written.length} characters; gate is 1 to 260`);
}
if (written.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry text exactly");
}
