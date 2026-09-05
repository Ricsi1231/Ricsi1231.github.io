// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricsi1231.github.io',
  // A `<user>.github.io` repo is served from the root, so no `base` is needed.
  output: 'static',
  // English is served from the root (`/`), Hungarian from `/hu/`. The pages
  // themselves are generated from `src/pages/[...lang]/` so the two languages
  // share one template and cannot drift apart.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
