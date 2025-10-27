import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Création d’entreprise | Marcouf Formalités",
  description: "Modèles de statuts, annonces légales préparées, dépôt de dossier accompagné, Kbis suivi en 48 h. À partir de 180 € HT.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/creation" },
  openGraph: {
    title: "Création d’entreprise – Formalités documentées",
    description: "Cadrage, modèles personnalisables, formalités accompagnées, suivi du Kbis. Devis en 24 h.",
    url: "https://www.marcouf-formalites.fr/expertise/creation",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
