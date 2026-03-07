'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, X } from 'lucide-react'

export type ArticleSearchItem = {
  slug: string
  title: string
  description?: string
  publishedAt?: string | null
  cover?: string | null
  coverAlt?: string | null
}

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

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export default function ArticlesSearch({ items }: { items: ArticleSearchItem[] }) {
  const [query, setQuery] = useState('')

  const indexedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        searchable: normalize(`${item.title} ${item.description ?? ''} ${item.publishedAt ?? ''}`),
      })),
    [items]
  )

  const normalizedQuery = normalize(query)

  const filtered = useMemo(() => {
    if (!normalizedQuery) return indexedItems
    return indexedItems.filter((item) => item.searchable.includes(normalizedQuery))
  }, [indexedItems, normalizedQuery])

  return (
    <section className="space-y-6">
      <div className="surface-card p-4 sm:p-5">
        <label htmlFor="articles-search" className="text-sm font-semibold text-slate-800">
          Rechercher un article
        </label>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
            <input
              id="articles-search"
              type="text"
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: changement de siège, approbation des comptes..."
              className="form-field !pl-12"
            />
          </div>

          {query && (
            <button type="button" onClick={() => setQuery('')} className="btn-outline inline-flex items-center gap-1">
              <X className="h-4 w-4" aria-hidden />
              Effacer
            </button>
          )}
        </div>

        {normalizedQuery && (
          <p className="mt-2 text-sm text-slate-600">
            {filtered.length} article{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="card-with-button rounded-2xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-8 text-center">
          <p className="text-slate-700">Aucun article ne correspond à cette recherche.</p>
          <button type="button" onClick={() => setQuery('')} className="btn-outline mt-4">
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <li key={a.slug} className="card-clickable group overflow-hidden rounded-2xl border-[3px] border-[var(--accent)] bg-[var(--background)]">
              <Link href={`/articles/${a.slug}`} className="block">
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

                <div className="p-5">
                  <div className="text-sm text-gray-500">{a.publishedAt && formatFR(a.publishedAt)}</div>
                  <h3 className="mt-1 font-semibold text-lg leading-snug group-hover:underline">{a.title}</h3>
                  {a.description && <p className="mt-2 text-gray-700 text-sm line-clamp-3">{a.description}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
