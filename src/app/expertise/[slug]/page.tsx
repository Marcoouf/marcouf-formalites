import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

// Pour le SEO dynamique
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Expertise – ${params.slug}`,
    description: `Découvrez l'accompagnement juridique personnalisé dans le domaine : ${params.slug}`,
  }
}

export default function ExpertisePage({ params }: PageProps) {
  const { slug } = params

  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent capitalize">
        {slug.replace('-', ' ')}
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Cette page présentera bientôt en détail mes services dans le domaine <strong>{slug}</strong>. Vous y découvrirez les étapes d’accompagnement, mes conseils, et les informations pratiques.
      </p>
    </section>
  )
}
