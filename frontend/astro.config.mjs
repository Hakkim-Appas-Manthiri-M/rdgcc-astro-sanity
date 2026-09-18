import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rdgcc-astro-sanity.sanity.studio',

  integrations: [
    react(),
    sitemap(),
  ],
});