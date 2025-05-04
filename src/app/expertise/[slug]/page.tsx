import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

const validSlugs = [
  'creation-societe',
  'modification-societe',
  'propriete-intellectuelle',
  'formalites',
  'redaction-juridique',
]

export default function ExpertiseSlugPage({ params }: Props) {
  const { slug } = params

  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold capitalize text-accent mb-4">{slug.replace('-', ' ')}</h1>
      <p className="text-gray-700">
        Voici la page dédiée au service <strong>{slug.replace('-', ' ')}</strong>. Vous trouverez ici une
        description détaillée de l’accompagnement proposé pour ce domaine d’expertise.
      </p>
    </div>
  )
}
