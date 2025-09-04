import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getAllSlugs, getArticleBySlug } from '../../../lib/articles'
import Link from 'next/link'
import Image from 'next/image'

// Local type for related articles
type LoadedArticle = {
  meta: {
    slug?: string
    title?: string
    description?: string
    publishedAt?: string
    updatedAt?: string
    cover?: string
    coverAlt?: string
  }
  content: string
}

function formatFR(dateISO?: string) {
  if (!dateISO) return null
  try {
    const iso = dateISO.length === 10 ? `${dateISO}T00:00:00Z` : dateISO
    const d = new Date(iso)
    return new Intl.DateTimeFormat('fr-FR', { timeZone: 'UTC' }).format(d)
  } catch {
    return dateISO
  }
}

function stripMarkdown(s: string) {
  return s
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    // images / maths (défensif)
    .replace(/!\[[^\]]*\]\([^\)]+\)/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$]*\$/g, '')
    // listes / emphases
    .replace(/^[>\s]*[-*+]\s+/gm, '')
    .replace(/^[>\s]*\d+\.\s+/gm, '')
    .replace(/[*_#>~`]/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim()
}

// Supprime le H1 si identique au meta.title
function stripLeadingH1(md: string, metaTitle?: string) {
  const m = md.match(/^\s*#\s+([^\n]+)\s*\n/)
  if (!m) return md
  const first = m[1].trim()
  const norm = (s: string) => s.toLowerCase().replace(/[\s'’"()?:!.,;-]+/g, '')
  if (!metaTitle || norm(first) === norm(metaTitle)) {
    return md.replace(/^\s*#\s+[^\n]+\s*\n/, '')
  }
  return md
}

function extractFaqPairs(md: string): { q: string; a: string }[] {
  const start = md.search(/^##\s+FAQ\b.*$/m)
  if (start === -1) return []
  const after = md.slice(start)
  const idxAfterEol = after.indexOf('\n')
  const body = idxAfterEol === -1 ? '' : after.slice(idxAfterEol + 1)
  const nextH2 = body.search(/\n##\s+/)
  const section = nextH2 === -1 ? body : body.slice(0, nextH2)

  const pairs: { q: string; a: string }[] = []

  // ### Question
  const reH3 = /(^|\n)###\s+(.+?)\s*\n([\s\S]*?)(?=\n###\s+|\n##\s+|$)/g
  let m: RegExpExecArray | null
  while ((m = reH3.exec(section)) !== null) {
    const q = m[2].trim()
    const a = stripMarkdown(m[3])
    if (q && a) pairs.push({ q, a })
  }

  // **Question**
  const reBold = /(^|\n)\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=\n\*\*|\n###\s+|\n##\s+|$)/g
  while ((m = reBold.exec(section)) !== null) {
    const q = m[2].trim()
    const a = stripMarkdown(m[3])
    if (q && a) pairs.push({ q, a })
  }

  const seen = new Set<string>()
  return pairs.filter((p) => (!seen.has(p.q) && seen.add(p.q)))
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

// ✅ No PageProps import, and params is a plain object
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const got = await getArticleBySlug(slug).catch(() => null)
  if (!got) return {}
  const { meta } = got
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/articles/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.marcouf-formalites.fr/articles/${meta.slug}`,
      type: 'article',
      images: meta.cover ? [{ url: meta.cover }] : undefined,
    },
    twitter: {
      card: meta.cover ? 'summary_large_image' : 'summary',
      images: meta.cover ? [meta.cover] : undefined,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const got = await getArticleBySlug(slug).catch(() => null)
  if (!got) return notFound()
  const { meta, content } = got

  const stats = readingTime(content)
  const readText = stats.text.replace('min read', 'min de lecture').replace('read', 'de lecture')
  const faqPairs = extractFaqPairs(content)

  const sourceForMDX = stripLeadingH1(content, meta.title)

  // Related articles
  const allSlugs = await getAllSlugs()
  const relatedRaw = (await Promise.all(
    allSlugs
      .filter((s) => s !== (meta.slug ?? slug))
      .slice(0, 10)
      .map(async (s) => await getArticleBySlug(s).catch(() => null))
  )) as (LoadedArticle | null)[]

  const related = relatedRaw
    .filter((a): a is LoadedArticle => Boolean(a))
    .sort((a, b) => {
      const da = new Date(a.meta?.publishedAt ?? 0).getTime()
      const db = new Date(b.meta?.publishedAt ?? 0).getTime()
      return db - da
    })
    .slice(0, 3)

  const expertise = [
    { href: '/expertise/creation', title: "Création d’entreprise", desc: 'Choix du statut, statuts sur mesure, formalités jusqu’au Kbis.' },
    { href: '/expertise/contrats-et-documentation', title: 'Contrats & documentation', desc: 'Contrats commerciaux, conditions générales, clauses clés.' },
    { href: '/expertise/redaction-actes', title: 'Rédaction d’actes juridiques', desc: 'Statuts, procès-verbaux, délégations, pactes.' },
    { href: '/expertise/propriete-intellectuelle', title: 'Propriété intellectuelle', desc: 'Marques, dépôts, cession/licence.' },
    { href: '/expertise/modification', title: 'Modification des sociétés', desc: 'Dirigeant, siège, objet, capital…' },
  ] as const

  const { content: MDXContent } = await compileMDX({
    source: sourceForMDX,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
      },
    },
  })

  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-16 py-16 space-y-12">
      {meta.cover && (
        <figure className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-[80px] sm:-mt-[96px]">
          <div className="relative h-[45vh] md:h-[60vh] lg:h-[66vh]">
            <Image
              src={meta.cover}
              alt={meta.coverAlt ?? meta.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </figure>
      )}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold">{meta.title}</h1>
        {meta.description && <p className="text-gray-600">{meta.description}</p>}
        <div className="text-sm text-gray-500" suppressHydrationWarning>
          {meta.publishedAt && <time dateTime={meta.publishedAt}>Publié le {formatFR(meta.publishedAt)}</time>}
          {meta.updatedAt && meta.updatedAt !== meta.publishedAt && <span> — Mis à jour le {formatFR(meta.updatedAt)}</span>}
          <span> • </span>
          <span>{readText}</span>
        </div>
      </header>

      <article className="prose prose-neutral md:prose-lg max-w-none prose-a:text-green-700 hover:prose-a:underline prose-headings:scroll-mt-24 prose-h2:mt-10 prose-img:rounded-xl prose-hr:my-10 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        {MDXContent}
      </article>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Pour aller plus loin</h2>
        <p className="text-gray-700 mb-5">Faites appel à un juriste pour sécuriser votre projet et gagner du temps.</p>
        <Link href="/#contact" className="btn-devis inline-block" aria-label="Aller au formulaire de contact">
          Contacter un juriste
        </Link>
      </section>

      {related.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">À lire ensuite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(({ meta }) => (
              <Link
                key={meta.slug}
                href={`/articles/${meta.slug}`}
                className="group block overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition"
                aria-label={meta.title}
              >
                <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-gray-100 to-gray-200">
                  {meta.cover ? (
                    <Image
                      src={meta.cover}
                      alt={meta.coverAlt ?? meta.title ?? ''}
                      fill
                      sizes="(min-width:1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-gray-400 text-sm">
                      Article
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-500" suppressHydrationWarning>
                    {meta.publishedAt &&
                      new Intl.DateTimeFormat('fr-FR', { timeZone: 'UTC' }).format(new Date(meta.publishedAt))}
                  </div>
                  <h3 className="mt-1 font-semibold group-hover:underline">{meta.title}</h3>
                  {meta.description && (
                    <p className="mt-1 text-gray-700 text-sm">{meta.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">À lire ensuite</h2>
          <p className="text-gray-700">Les autres articles arrivent bientôt. En attendant, explorez mes domaines d’expertise ci-dessous.</p>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Mes domaines d’expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((it, i) => (
            <Link
              key={it.href}
              href={it.href}
              className={`group block rounded-xl border bg-white p-5 hover:shadow-md transition min-h-[140px] ${
                i === 0 ? 'lg:col-span-2 border-green-200 ring-1 ring-green-100' : 'border-gray-200'
              }`}
            >
              <h3 className="font-semibold group-hover:text-green-700 group-hover:underline">{it.title}</h3>
              <p className="text-gray-700 text-sm mt-1">{it.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: meta.title,
            description: meta.description,
            datePublished: meta.publishedAt,
            dateModified: meta.updatedAt || meta.publishedAt,
            author: { '@type': 'Organization', name: 'Marcouf Formalités' },
            publisher: { '@type': 'Organization', name: 'Marcouf Formalités' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.marcouf-formalites.fr/articles/${meta.slug ?? slug}`,
            },
          }),
        }}
      />
      {/* JSON-LD FAQ */}
      {faqPairs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqPairs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            }),
          }}
        />
      )}
    </main>
  )
}