# Dr. Tammy Young — website

The website for Dr. Tammy Young and One Heart One Hope Coaching, built with [Astro](https://astro.build) and hosted on Vercel. Every push to `main` goes live.

## Working on the site

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

- Pages live in `src/pages/` (one file per page).
- Shared pieces (menu, footer, FAQ list, etc.) live in `src/components/` and `src/layouts/`.
- FAQ answers are in `src/data/faqs.ts`; recommended resources are in `src/data/resources.ts`.
- All styles are in `src/styles/global.css`.
- Photos and icons are in `public/images/`.

## Branches

| Branch | Purpose |
|---|---|
| `main` | The live site. |
| `site-rebuild` | Finished content, ready for review and merge into `main`. |
| `site-rebuild-in-progress` | Unfinished pages (Relationship Coaching, Foster and Adoptive Families, Speaking) and placeholder notes for content still needed. |

`src/data/site.ts` has one switch, `SHOW_DRAFTS`. On the live branch it's `false`, which hides every gold "Content needed" box and links unfinished services to the contact form. On the in-progress branch it's `true`.

When a page is ready: finish its content on `site-rebuild-in-progress`, then bring that page file to the live branch and mark it ready in `src/data/site.ts`.

## Contact form

The form posts to [Formspree](https://formspree.io). The form ID goes in `src/pages/contact.astro` (`FORMSPREE_ACTION`). Until it's set, the form tells visitors it isn't connected yet instead of pretending to send.

## Line breaks

`src/integrations/typography.mjs` runs after every build and keeps short words ("a", "the") and very short sentences from breaking awkwardly across lines.
