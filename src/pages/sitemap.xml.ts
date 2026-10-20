import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// Dynamic sitemap — generated at build time from the content collections.
// Every new article (EN or ES) is included automatically on the next build/deploy.
const SITE = 'https://www.dnaso.com';

const STATIC_PAGES = [
  '/',
  '/es/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/disclaimer/',
  '/es/about/',
  '/es/contact/',
  '/es/privacy/',
  '/es/disclaimer/',
];

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export const GET: APIRoute = async () => {
  const en = await getCollection('articles');
  const es = await getCollection('articles-es');

  const urls: { loc: string; lastmod?: string }[] = STATIC_PAGES.map((p) => ({
    loc: SITE + p,
  }));

  for (const a of en) {
    urls.push({
      loc: `${SITE}/articles/${a.slug}/`,
      lastmod: fmtDate(a.data.updatedDate ?? a.data.pubDate),
    });
  }
  for (const a of es) {
    urls.push({
      loc: `${SITE}/es/articles/${a.slug}/`,
      lastmod: fmtDate(a.data.updatedDate ?? a.data.pubDate),
    });
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u.loc}</loc>` +
          (u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : '') +
          `\n  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
