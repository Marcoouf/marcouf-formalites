import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recherche d’antériorité | Marcouf Formalités',
  description:
    'Recherche d’antériorité de marque avant dépôt: screening des antériorités, analyse des risques et restitution exploitable.',
  alternates: { canonical: 'https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle' },
  openGraph: {
    title: 'Recherche d’antériorité – diagnostic avant dépôt',
    description: 'Définition du signe, recherche, analyse des risques et restitution claire.',
    url: 'https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
