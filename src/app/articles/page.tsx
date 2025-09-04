import Link from 'next/link'
import Image from 'next/image'
import { getAllSlugs, getArticleBySlug } from '@/lib/articles'

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

export default async function ArticlesIndexPage() {
  const slugs = await getAllSlugs()
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = await getArticleBySlug(slug)
      return meta as {
        slug: string
        title: string
        description?: string
        publishedAt?: string | null
        cover?: string | null
        coverAlt?: string | null
      }
    })
  )

  // tri par date décroissante si disponible
  items.sort((a, b) => {
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-16 py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold">Articles</h1>
        <p className="text-gray-600">Guides pratiques et analyses pour vos formalités et documents juridiques.</p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a) => (
          <li key={a.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-md transition">
            <Link href={`/articles/${a.slug}`} className="block">
              {/* cover */}
              <div className="relative aspect-[16/9] w-full">
                {a.cover ? (
                  <Image
                    src={a.cover}
                    alt={a.coverAlt ?? a.title}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    priority={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                )}
              </div>

              {/* text */}
              <div className="p-5">
                <div className="text-sm text-gray-500" suppressHydrationWarning>
                  {a.publishedAt && formatFR(a.publishedAt)}
                </div>
                <h3 className="mt-1 font-semibold text-lg leading-snug group-hover:underline">
                  {a.title}
                </h3>
                {a.description && (
                  <p className="mt-2 text-gray-700 text-sm line-clamp-3">{a.description}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}