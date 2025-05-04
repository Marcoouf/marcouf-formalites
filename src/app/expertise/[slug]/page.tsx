import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  return {
    title: `Expertise – ${params.slug}`,
    description: `Découvrez mes services dans le domaine : ${params.slug}`,
  }
}

export default function ExpertisePage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent capitalize">
        {slug.replace('-', ' ')}
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Cette page présentera bientôt mon accompagnement juridique spécifique en matière de <strong>{slug}</strong>.
      </p>
    </section>
  )
}
