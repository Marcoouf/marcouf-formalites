import { Metadata } from 'next'

type Params = {
  params: {
    slug: string
  }
}

// Metadata pour SEO dynamique
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `Expertise – ${params.slug}`,
    description: `Découvrez l'expertise de Marcouf Formalités en matière de ${params.slug}`,
  }
}

// Page principale
export default function ExpertisePage({ params }: Params) {
  const { slug } = params

  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent capitalize">
        {slug.replace('-', ' ')}
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Cette page présente mon accompagnement juridique spécifique en matière de <strong>{slug}</strong>.
      </p>
    </section>
  )
}
