import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.delmartour.cz',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/zajezdy/spanelsko/katalansko': '/spanelsko/katalansko/',
    '/zajezdy/spanelsko/valencie': '/spanelsko/valencie/',
    '/zajezdy/spanelsko/andalusie': '/spanelsko/andalusie/',
    '/zajezdy/spanelsko/madrid': '/spanelsko/madrid/',
    '/zajezdy/spanelsko/dalsi-oblasti': '/spanelsko/dalsi-oblasti/',
    '/zajezdy/karibik': '/karibik/',
    '/zajezdy/prakticke-informace': '/prakticke-informace/',
  },
});
