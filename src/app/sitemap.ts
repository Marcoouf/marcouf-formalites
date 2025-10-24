// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getAllArticlesMeta } from '@/lib/articles'

const base = 'https://www.marcouf-formalites.fr'

// ➜ Liste uniquement les URL FINALES (pas d’anciennes .html, pas d’URL qui redirigent)
const staticRoutes: string[] = [
  '/',                                  // Accueil
  '/services/creation-entreprise',
  '/services/modification-societe',
  '/services/propriete-intellectuelle',
  '/services/formalites-juridiques',
  '/services/contrats-commerciaux',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
  '/articles',
]

function parseDate(input?: string) {
  if (!input) return undefined
  const iso = input.length === 10 ? `${input}T00:00:00Z` : input
  const parsed = new Date(iso)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const articles = await getAllArticlesMeta().catch(() => [])

  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))

  const articleEntries = articles.map((article) => {
    const lastModified = parseDate(article.updatedAt) ?? parseDate(article.publishedAt) ?? now
    return {
      url: `${base}/articles/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    } satisfies MetadataRoute.Sitemap[number]
  })

  return [...staticEntries, ...articleEntries]
}
