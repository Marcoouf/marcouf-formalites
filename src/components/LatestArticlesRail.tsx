import Link from 'next/link'
import Image from 'next/image'
import { getLatestArticles, type ArticleCard } from '@/lib/articles'

// Formatage de date FR sécurisé (évite les erreurs d’hydratation)
function formatFR(dateISO?: string | null) {
  if (!dateISO) return null
  try {
    const iso = dateISO.length === 10 ? `${dateISO}T00:00:00Z` : dateISO
    const d = new Date(iso)
    return new Intl.DateTimeFormat('fr-FR', { timeZone: 'UTC' }).format(d)
  } catch {
    return dateISO
  }
}

// UI (Server Component)
export default async function LatestArticlesRail({ limit = 3 }: { limit?: number }) {
  const items: ArticleCard[] = await getLatestArticles(limit)
  if (!items.length) return null

  return (
    <section id="latest-articles" aria-labelledby="latest-articles-title" className="mx-auto max-w-6xl px-6 sm:px-16 py-12">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 id="latest-articles-title" className="text-xl md:text-2xl font-semibold scroll-mt-28">
          Derniers articles
        </h2>
        <Link
          href="/articles"
          prefetch={false}
          className="group inline-flex items-center gap-2 text-sm px-3 py-1 border border-black rounded-full hover:bg-black hover:text-white transition"
          aria-label="Voir tous les articles"
        >
          Tous les articles
          <span aria-hidden className="text-[var(--accent)] transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-md transition"
          >
            {a.cover && (
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={a.cover}
                  alt={a.coverAlt ?? a.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/0" aria-hidden />
              </div>
            )}

            <div className="p-5">
              <h3 className="font-semibold text-lg leading-snug group-hover:underline">
                {a.title}
              </h3>
              {a.description && (
                <p className="mt-1 text-gray-700 text-sm line-clamp-2">{a.description}</p>
              )}
              {a.publishedAt && (
                <p className="mt-3 text-xs text-gray-500">{formatFR(a.publishedAt)}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
