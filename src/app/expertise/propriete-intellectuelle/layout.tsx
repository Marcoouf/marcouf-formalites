import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propriété intellectuelle | Marcouf Formalités",
  description:
    "Recherche d’antériorités, dépôt INPI/EUIPO, enveloppe Soleau, contrats de cession/licence. Stratégie de protection et accompagnement jusqu’à l’enregistrement.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle" },
  openGraph: {
    title: "Propriété intellectuelle – marque et actifs immatériels",
    description: "Audit, stratégie de protection, dépôt & suivi, contrats & exploitation.",
    url: "https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
