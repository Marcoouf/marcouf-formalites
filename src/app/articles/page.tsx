import Link from 'next/link'
import { getAllArticlesMeta } from '@/lib/articles'

export const metadata = {
  title: 'Articles',
  description: 'Guides pratiques, checklists et décryptages juridiques par Marcouf Formalités.',
}

export default async function ArticlesIndex() {
  const posts = await getAllArticlesMeta()
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-10 py-12 space-y-10">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Articles</h1>
        <p className="text-gray-600">Guides pratiques, checklists et décryptages pour entrepreneurs.</p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(p => (
          <li key={p.slug} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <Link href={`/articles/${p.slug}`} className="block">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              {p.description && <p className="text-gray-700 mt-1">{p.description}</p>}
              <div className="text-sm text-gray-500 mt-3">
                {p.category && <span className="mr-3">{p.category}</span>}
                {p.publishedAt && <time dateTime={p.publishedAt}>{new Date(p.publishedAt).toLocaleDateString('fr-FR')}</time>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}