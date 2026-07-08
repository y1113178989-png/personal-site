import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://y1113178989-png.github.io',
  base: '/personal-site',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: 'static',
});
