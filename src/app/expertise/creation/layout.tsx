import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Création d’entreprise | Marcouf Formalités",
  description: "Statuts sur mesure, annonces légales, dépôt au greffe, Kbis en 48 h. À partir de 180 € HT.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/creation" },
  openGraph: {
    title: "Création d’entreprise – Accompagnement complet",
    description: "Diagnostic, statuts, formalités, Kbis. Devis en 24 h.",
    url: "https://www.marcouf-formalites.fr/expertise/creation",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
