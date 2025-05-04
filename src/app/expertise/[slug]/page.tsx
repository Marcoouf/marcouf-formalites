import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  creation: "Création d’entreprise",
  modification: "Modification de société",
  liquidation: "Clôture / Liquidation",
  marque: "Propriété intellectuelle",
  cession: "Cession de parts",
}

export async function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titles[params.slug] ?? 'Expertise'
  return {
    title: `${title} | Marcouf Formalités`,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = titles[params.slug]

  if (!title) {
    notFound()
  }

  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 text-lg">
        Cette page présentera bientôt mon accompagnement sur <strong>{title}</strong>.
      </p>
    </main>
  )
}
