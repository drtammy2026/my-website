// Build-time typography polish for every generated page.
//
// 1. Glues short words ("a", "the", "to", "I"...) to the word after them with a
//    non-breaking space, so a line never ends on "a" or "the".
// 2. Keeps very short sentences ("No pressure.") together on one line.
//
// Only visible text is touched: tags, attributes, <script>, <style>, <title> and
// <textarea> content are left exactly as they are.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NBSP = ' ';
const SHORT_WORDS = ['a', 'an', 'the', 'i', 'to', 'of', 'in', 'on', 'at', 'by', 'or', 'is', 'be', 'we', 'my', 'no', 'so', 'as', 'if', 'it', 'do', 'us', '&amp;'];
const shortWordGap = new RegExp(`(?<=(?:^|[\\s${NBSP}("“'])(?:${SHORT_WORDS.join('|')}))[ ]+(?=[^\\s<])`, 'gi');
// A sentence of at most 4 words / 28 characters, at the start of the text or after another sentence.
const shortSentence = /(^|[.!?…]\s+)([^\s.!?][^.!?]{0,26}?[.!?])(?=\s|$)/g;
// The last word of a sentence (e.g. "out.") is kept with the word before it, so a
// new line never starts with the tail end of the previous sentence.
// Only short tails (≤6 letters), and only when the word before isn't already glued
// to something, so we never build long unbreakable chains like "the·right·words."
const sentenceTail = new RegExp(`(?<=(?:^|[ ])[^\\s${NBSP}<]+) (?=[^\\s${NBSP}<]{1,6}[.!?…]["”’']?(?:\\s|$))`, 'g');
const SKIP_TAGS = new Set(['script', 'style', 'title', 'textarea', 'pre', 'code']);

const SHORT = new Set(SHORT_WORDS);
const TAIL = /^[^\s<]{1,6}[.!?…]["”’']?$/;

export function polishText(text) {
  // 1. Very short sentences stay on one line.
  const out = text.replace(shortSentence, (m, lead, sentence) =>
    sentence.trim().split(/\s+/).length <= 4 ? lead + sentence.replace(/ /g, NBSP) : m,
  );
  // 2. Walk word by word. Glue a gap when the word before it is a short word, or when the
  //    word after it is a short sentence ending ("out."). Never glue two gaps in a row,
  //    so no unbreakable chain is ever longer than two words.
  //    Walk right to left so "at the experiences" becomes "at the·experiences":
  //    the word nearest the content wins, and lines never end on "the" or "a".
  const tokens = out.split(/( +)/); // words at even indexes, spaces at odd
  let lastGlued = false;
  const lastGap = tokens.length % 2 === 0 ? tokens.length - 1 : tokens.length - 2;
  for (let j = lastGap; j >= 1; j -= 2) {
    const left = tokens[j - 1], right = tokens[j + 1] ?? '';
    if (!left || !right || right.startsWith('<') || lastGlued) { lastGlued = false; continue; }
    const bare = (w) => (w ?? '').split(NBSP).pop().replace(/^[("“']+/, '').toLowerCase();
    // A sentence ending only claims its word if no short word ("the") needs that word more.
    const tail = TAIL.test(right) && !(j >= 3 && SHORT.has(bare(tokens[j - 3])));
    const glue = SHORT.has(bare(left)) || tail;
    if (glue) tokens[j] = NBSP;
    lastGlued = glue;
  }
  return tokens.join('');
}

export function polishHtml(html) {
  const parts = html.split(/(<[^>]+>)/);
  let skipping = null;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith('<')) {
      const open = /^<([a-z0-9]+)/i.exec(part);
      const close = /^<\/([a-z0-9]+)/i.exec(part);
      if (!skipping && open && SKIP_TAGS.has(open[1].toLowerCase()) && !part.endsWith('/>')) skipping = open[1].toLowerCase();
      else if (skipping && close && close[1].toLowerCase() === skipping) skipping = null;
      continue;
    }
    if (!skipping && part.trim()) parts[i] = polishText(part);
  }
  return parts.join('');
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

export default function typography() {
  return {
    name: 'typography',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let count = 0;
        for await (const file of htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          await writeFile(file, polishHtml(html));
          count++;
        }
        logger.info(`Polished line breaks on ${count} pages`);
      },
    },
  };
}
