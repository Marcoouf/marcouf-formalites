import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formalités exceptionnelles | Marcouf Formalités',
  description:
    'Dissolution, liquidation, cessation et radiation: préparation des actes, publication légale et suivi administratif des étapes clés.',
  alternates: { canonical: 'https://www.marcouf-formalites.fr/expertise/contrats-et-documentation' },
  openGraph: {
    title: 'Formalités exceptionnelles – dossier clair de A à Z',
    description: 'Qualification, actes, dépôt/publicité et clôture du dossier.',
    url: 'https://www.marcouf-formalites.fr/expertise/contrats-et-documentation',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
