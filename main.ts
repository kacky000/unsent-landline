// Writes the entry: a two-part micro-confession, a To: line and the message typed and never sent.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const to = "To: Grandma's old landline";
const message = "i still know you by heart. i called you last week and a man answered and i asked for her anyway and he said hold on, let me check";
const entry = `${to}\n${message}`;
if ([...message].length > 200) throw new Error('message over 200 characters');
if ([...entry].length > 260) throw new Error('entry over 260 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry);
