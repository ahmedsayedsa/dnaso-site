import { defineConfig } from 'astro/config';

// Canonical domain — DNS will be pointed here later; currently deployed on vercel.app
export default defineConfig({
  site: 'https://www.dnaso.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
