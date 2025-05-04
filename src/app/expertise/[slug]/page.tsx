import { notFound } from 'next/navigation'
import { type Metadata } from 'next'

// Slugs valides
const validSlugs = ['creation', 'modification', 'liquidation', 'marque', 'cession']

// Génération des chemins statiques
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

// SEO dynamique
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titles[params.slug] ?? 'Expertise'
  return {
    title: `${title} | Marcouf Formalités`,
  }
}

// Mapping des titres
const titles: Record<string, string> = {
  creation: "Création d’entreprise",
  modification: "Modification de société",
  liquidation: "Clôture / Liquidation",
  marque: "Propriété intellectuelle",
  cession: "Cession de parts",
}

// Composant principal
export default function Page({ params }: { params: { slug: string } }) {
  const title = titles[params.slug]

  if (!title) {
    notFound()
  }

  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">
        Cette page présentera bientôt mon accompagnement sur <strong>{title}</strong>.
      </p>
    </main>
  )
}
