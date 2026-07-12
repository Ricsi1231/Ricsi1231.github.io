// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricsi1231.github.io',
  // A `<user>.github.io` repo is served from the root, so no `base` is needed.
  output: 'static',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
