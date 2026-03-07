import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formalités d’entreprise | Marcouf Formalités',
  description:
    'Création, modification, dissolution, liquidation et radiation : formalités structurées, checklist des pièces et accompagnement opérationnel.',
  alternates: { canonical: 'https://www.marcouf-formalites.fr/expertise/creation' },
  openGraph: {
    title: 'Formalités d’entreprise – parcours clair et structuré',
    description: 'Qualification, pièces, actes et finalisation administrative.',
    url: 'https://www.marcouf-formalites.fr/expertise/creation',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
