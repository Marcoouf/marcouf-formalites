// src/components/LatestArticlesRail.tsx
import Link from 'next/link'
import { getLatestArticles } from '@/lib/articles' // ajuste l'alias si besoin

export default async function LatestArticlesRail({ limit = 3 }: { limit?: number }) {
  const items = await getLatestArticles(limit)
  if (!items?.length) return null

  return (
    <section aria-labelledby="latest-articles" className="mx-auto max-w-6xl px-6 sm:px-16 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 id="latest-articles" className="text-2xl md:text-3xl font-bold">Derniers articles</h2>
        <Link href="/articles" className="text-green-700 hover:underline">Tous les articles</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm text-gray-500 mb-1" suppressHydrationWarning>
              {a.publishedAt &&
                new Intl.DateTimeFormat('fr-FR', { timeZone: 'UTC' }).format(new Date(a.publishedAt))}
            </div>
            <h3 className="font-semibold text-lg leading-snug">{a.title}</h3>
            {a.description && <p className="text-gray-700 mt-2 text-sm">{a.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  )
}