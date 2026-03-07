import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mise à jour des statuts | Marcouf Formalités',
  description:
    'Mise à jour statutaire après changement de siège, objet, capital, dirigeant ou dénomination. Version consolidée claire et exploitable.',
  alternates: { canonical: 'https://www.marcouf-formalites.fr/expertise/modification' },
  openGraph: {
    title: 'Mise à jour des statuts – version consolidée',
    description: 'Audit des clauses, rédaction consolidée, pièces annexes et validation finale.',
    url: 'https://www.marcouf-formalites.fr/expertise/modification',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
