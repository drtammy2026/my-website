// ---------------------------------------------------------------------------
// What's ready to show.
//
// The live site (`main`, via the `site-rebuild` branch) keeps SHOW_DRAFTS = false:
//   - gold "Content needed" boxes, placeholder FAQ answers, and sections that are
//     still empty are hidden;
//   - services without a finished page link to the contact form instead.
//
// The `site-rebuild-in-progress` branch sets SHOW_DRAFTS = true and also contains
// the unfinished page files, so work can continue there and be merged when ready.
// ---------------------------------------------------------------------------
export const SHOW_DRAFTS = false;

// Service pages that are finished and included on this branch.
// When a page is ready, add its file to the live branch and flip it to true.
export const PAGE_READY = {
  relationship: true,
  family: SHOW_DRAFTS,
  speaking: SHOW_DRAFTS,
};

/** Link for a service: its own page when ready, otherwise the contact form pre-set to it. */
export function serviceHref(key: keyof typeof PAGE_READY, page: string, contactType: string) {
  return PAGE_READY[key] ? page : `/contact?type=${contactType}`;
}
