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

function stripJsonLd(md: string) {
  if (!md) return md
  // Supprime les balises JSON‑LD collées dans le MDX pour éviter l’affichage en clair et les erreurs de build.
  return md
    // <script type="application/ld+json"> ... </script>
    .replace(/<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '')
    // Variante générique si l’attribut type a été omis
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, (m) => (m.includes('ld+json') ? '' : m))
    // Blocs Markdown de type ```json-ld ... ```
    .replace(/```(?:json(?:-ld)?|ld\+json)[\s\S]*?```/gi, '')
}

function injectCtaBeforeSources(md: string): { source: string; inserted: boolean } {
  const re = /\n##\s+Sources\s*\n/
  if (!re.test(md)) return { source: md, inserted: false }
  return {
    source: md.replace(re, '\n<PreSourcesCta />\n\n## Sources\n'),
    inserted: true,
  }
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

/** Slugify aligné sur rehype-slug (conserve les accents) + dédoublonnage */
const _slugCounts: Record<string, number> = {}
function slugify(input: string) {
  const base = input
    .toLowerCase()
    .trim()
    // retire la ponctuation mais conserve lettres/chiffres Unicode et espaces/tirets
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  const count = _slugCounts[base] ?? 0
  _slugCounts[base] = count + 1
  return count === 0 ? base : `${base}-${count}`
}

/** Construit un sommaire à partir des H2 du MDX nettoyé (après retrait du H1) */
function buildToc(md: string): { id: string; text: string }[] {
  // reset counts for this article
  for (const k in _slugCounts) delete _slugCounts[k]
  const lines = md.split('\n')
  const toc: { id: string; text: string }[] = []
  for (const line of lines) {
    const m2 = line.match(/^\s*##\s+(.+?)\s*$/)
    if (m2) {
      const text = m2[1].trim()
      toc.push({ id: slugify(text), text })
    }
  }
  return toc
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

  // Nettoie le contenu pour retirer d’éventuels scripts JSON‑LD collés dans le MDX
  const cleaned = stripJsonLd(content)

  // Extrait la FAQ à partir du contenu nettoyé
  const faqPairs = extractFaqPairs(cleaned)

  // Supprime le H1 en doublon sur la version nettoyée
  const sourceForMDX = stripLeadingH1(cleaned, meta.title)
  const { source: sourceWithInlineCta, inserted: hasInlineCta } = injectCtaBeforeSources(sourceForMDX)

  const toc = buildToc(sourceWithInlineCta)

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
    { href: '/expertise/creation', title: "Création d’entreprise", desc: 'Choix du statut, modèles de statuts, formalités jusqu’au Kbis.' },
    { href: '/expertise/contrats-et-documentation', title: 'Contrats & documentation', desc: 'Modèles commerciaux, conditions générales, clauses clés.' },
    { href: '/expertise/redaction-actes', title: 'Secrétariat de formalités', desc: 'Statuts consolidés, procès-verbaux, délégations, registres.' },
    { href: '/expertise/propriete-intellectuelle', title: 'Propriété intellectuelle', desc: 'Marques, dépôts, cession/licence.' },
    { href: '/expertise/modification', title: 'Modification des sociétés', desc: 'Dirigeant, siège, objet, capital…' },
  ] as const

  const { content: MDXContent } = await compileMDX({
    source: sourceWithInlineCta,
    components: {
      PreSourcesCta: () => (
        <section className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Pour aller plus loin</h2>
          <p className="text-gray-700 mb-5">Profitez d’un service de formalités pour sécuriser votre projet et gagner du temps.</p>
          <Link href="/#contact" className="btn-devis inline-block" aria-label="Aller au formulaire de contact">
            Contacter Marcouf Formalités
          </Link>
        </section>
      ),
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
      },
    },
  })

  return (
    <main className={`mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 ${meta.cover ? 'pt-0 pb-16' : 'py-16'} space-y-12 scroll-smooth`}>
      {meta.cover && (
        <figure className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-[42px] sm:-mt-[54px]">
          <div className="relative h-[45vh] md:h-[60vh] lg:h-[66vh]">
            <Image
              src={meta.cover}
              alt={meta.coverAlt ?? meta.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
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

      {toc.length >= 2 && (
        <nav
          id="toc"
          aria-label="Sommaire de l’article"
          className="rounded-2xl border border-gray-200 bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur p-5 md:p-6 shadow-sm"
        >
          <div className="mb-3 text-sm font-semibold text-gray-700">Sommaire</div>
          <ol className="list-decimal pl-6 text-[15px] leading-6 space-y-1 columns-1 sm:columns-2 md:columns-2 lg:columns-2 [column-gap:2rem]">
            {toc.map((item) => (
              <li key={item.id} className="break-inside-avoid">
                <a
                  href={`#${item.id}`}
                  className="block truncate text-gray-800 hover:text-green-700 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <article className="prose prose-neutral md:prose-lg max-w-none prose-a:text-green-700 hover:prose-a:underline prose-headings:scroll-mt-24 prose-h2:mt-10 prose-img:rounded-xl prose-hr:my-10 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 md:p-10 lg:p-12 text-left md:text-justify overflow-x-hidden">
        {MDXContent}
      </article>

      {!hasInlineCta && (
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Pour aller plus loin</h2>
          <p className="text-gray-700 mb-5">Profitez d’un service de formalités pour sécuriser votre projet et gagner du temps.</p>
          <Link href="/#contact" className="btn-devis inline-block" aria-label="Aller au formulaire de contact">
            Contacter Marcouf Formalités
          </Link>
        </section>
      )}

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
      {/* Bouton flottant “Sommaire” */}
      <Link
        href="#toc"
        aria-label="Revenir au sommaire"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-black bg-white/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur transition hover:bg-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
      >
        <span aria-hidden>↑</span>
        <span>Sommaire</span>
      </Link>
    </main>
  )
}
