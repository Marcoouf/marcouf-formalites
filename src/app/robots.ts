// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.marcouf-formalites.fr'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // on évite d’indexer les assets techniques et les API
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}