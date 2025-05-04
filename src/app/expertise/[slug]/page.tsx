import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  creation: 'Création d’entreprise',
  modification: 'Modification de société',
  liquidation: 'Clôture / Liquidation',
  marque: 'Propriété intellectuelle',
  cession: 'Cession de parts',
}

// Type attendu par Next.js pour la route dynamique
type Props = {
  params: {
    slug: keyof typeof titles
  }
}

// Génère les routes statiques à build-time
export async function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }))
}

// Génère les métadonnées dynamiques pour chaque page
export function generateMetadata({ params }: Props): Metadata {
  const title = titles[params.slug] ?? 'Expertise'
  return {
    title: `${title} | Marcouf Formalités`,
  }
}

// Affichage de la page
export default function ExpertisePage({ params }: Props) {
  const title = titles[params.slug]

  if (!title) {
    notFound()
  }

  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 text-lg">
        Cette page décrira prochainement mon accompagnement pour <strong>{title}</strong>.
      </p>
    </main>
  )
}
