import { getAllSlugs, getArticleBySlug } from '@/lib/articles'
import ArticlesSearch, { type ArticleSearchItem } from '@/components/ArticlesSearch'

export default async function ArticlesIndexPage() {
  const slugs = await getAllSlugs()
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = await getArticleBySlug(slug)
      return meta as ArticleSearchItem
    })
  )

  items.sort((a, b) => {
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return (
    <main className="mx-auto max-w-6xl bg-[var(--background)] px-6 py-12 space-y-8 sm:px-16">
      <header className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold">Articles</h1>
        <p className="text-gray-600">Guides pratiques et analyses pour vos formalités et documents juridiques.</p>
      </header>

      <ArticlesSearch items={items} />
    </main>
  )
}
