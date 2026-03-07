import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Procès-verbaux d’assemblée | Marcouf Formalités',
  description:
    'Préparation de PV AGO/AGE, décisions associées et formalisation documentaire pour un historique social propre et exploitable.',
  alternates: { canonical: 'https://www.marcouf-formalites.fr/expertise/redaction-actes' },
  openGraph: {
    title: 'Procès-verbaux d’assemblée – rédaction claire et structurée',
    description: 'Collecte des décisions, rédaction, vérification formelle et archivage.',
    url: 'https://www.marcouf-formalites.fr/expertise/redaction-actes',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
