import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export type ArticleMeta = {
  slug: string
  title: string
  description?: string
  category?: string
  tags?: string[]
  publishedAt?: string // ISO
  updatedAt?: string   // ISO
}

export const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export async function getAllArticlesMeta(): Promise<ArticleMeta[]> {
  const files = await fs.readdir(ARTICLES_DIR)
  const mdxFiles = files.filter(f => f.endsWith('.mdx'))
  const metas: ArticleMeta[] = []
  for (const file of mdxFiles) {
    const raw = await fs.readFile(path.join(ARTICLES_DIR, file), 'utf8')
    const { data } = matter(raw)
    const slug = file.replace(/\.mdx$/, '')
    metas.push({
      slug,
      title: data.title ?? slug,
      description: data.description,
      category: data.category,
      tags: data.tags ?? [],
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt ?? data.publishedAt,
    })
  }
  // tri par date décroissante
  return metas.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(raw)
  const meta: ArticleMeta = {
    slug,
    title: data.title ?? slug,
    description: data.description,
    category: data.category,
    tags: data.tags ?? [],
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt ?? data.publishedAt,
  }
  return { meta, content }
}

export async function getAllSlugs() {
  const files = await fs.readdir(ARTICLES_DIR)
  return files.filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''))
}
export type ArticleCard = {
  slug: string
  title: string
  description?: string
  publishedAt?: string
}

export async function getAllArticlesMetaSorted(): Promise<ArticleCard[]> {
  const slugs = await getAllSlugs()
  const items = await Promise.all(
    slugs.map(async (s) => {
      const got = await getArticleBySlug(s).catch(() => null)
      if (!got) return null
      const { meta } = got
      return {
        slug: meta.slug ?? s,
        title: meta.title ?? s,
        description: meta.description,
        publishedAt: meta.publishedAt ?? null,
      } as ArticleCard
    })
  )

  return items
    .filter((x): x is ArticleCard => Boolean(x))
    .sort((a, b) => {
      const da = new Date(a.publishedAt ?? 0).getTime()
      const db = new Date(b.publishedAt ?? 0).getTime()
      return db - da // plus récents d'abord
    })
}

export async function getLatestArticles(limit = 3): Promise<ArticleCard[]> {
  const all = await getAllArticlesMetaSorted()
  return all.slice(0, limit)
}

