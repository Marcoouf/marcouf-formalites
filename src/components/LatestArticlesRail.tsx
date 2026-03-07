import Link from 'next/link'
import Image from 'next/image'
import { getLatestArticles, type ArticleCard } from '@/lib/articles'

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

export default async function LatestArticlesRail({ limit = 3 }: { limit?: number }) {
  const items: ArticleCard[] = await getLatestArticles(limit)
  if (!items.length) return null

  return (
    <section id="latest-articles" aria-labelledby="latest-articles-title" className="section-shell scroll-mt-10 py-16 sm:py-20">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Ressources</p>
          <h2 id="latest-articles-title" className="section-title mt-1">Derniers articles pratiques</h2>
        </div>

        <Link
          href="/articles"
          prefetch={false}
          className="btn-devis"
          aria-label="Voir tous les articles"
        >
          Tous les articles
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="card-clickable group overflow-hidden rounded-2xl border-[3px] border-[var(--accent)] bg-[var(--background)]"
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
              </div>
            )}

            <div className="p-5">
              <h3 className="text-lg font-semibold leading-snug text-slate-900 group-hover:underline">{a.title}</h3>
              {a.description && <p className="mt-2 text-slate-700 line-clamp-3">{a.description}</p>}
              {a.publishedAt && <p className="mt-3 text-sm text-slate-500">{formatFR(a.publishedAt)}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
