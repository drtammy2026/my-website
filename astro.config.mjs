// @ts-check
import { defineConfig } from 'astro/config';
import typography from './src/integrations/typography.mjs';

export default defineConfig({
  // Update this when Dr. Tammy has her own domain.
  site: 'https://my-website-navy-phi.vercel.app',
  integrations: [typography()],
});
