import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Modification de société | Marcouf Formalités",
  description:
    "Changement de dirigeant, siège, objet, dénomination, capital. Modèles d’actes, annonce légale préparée, dépôt accompagné, Kbis suivi en 48 h. À partir de 180 € HT.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/modification" },
  openGraph: {
    title: "Modification de société – formalités documentées",
    description: "Cadrage, documents types, formalités accompagnées, suivi du Kbis. Devis en 24 h.",
    url: "https://www.marcouf-formalites.fr/expertise/modification",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
