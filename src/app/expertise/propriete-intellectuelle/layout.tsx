import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propriété intellectuelle | Marcouf Formalités",
  description:
    "Recherche d’antériorités, dépôt INPI/EUIPO, enveloppe Soleau, contrats de cession/licence. Plan de protection documentaire et suivi administratif jusqu’à l’enregistrement.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle" },
  openGraph: {
    title: "Propriété intellectuelle – marque et actifs immatériels",
    description: "Analyse documentaire, plan de dépôt, formalités et modèles d’exploitation.",
    url: "https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
