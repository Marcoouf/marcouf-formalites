// app/sitemap.ts
import type { MetadataRoute } from 'next'

const base = 'https://www.marcouf-formalites.fr'

// ➜ Liste uniquement les URL FINALES (pas d’anciennes .html, pas d’URL qui redirigent)
const routes: string[] = [
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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}