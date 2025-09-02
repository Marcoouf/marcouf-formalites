import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Modification de société | Marcouf Formalités",
  description:
    "Changement de dirigeant, siège, objet, dénomination, capital. Actes, annonce légale, dépôt au greffe, Kbis en 48 h. À partir de 180 € HT.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/modification" },
  openGraph: {
    title: "Modification de société – actes, formalités, Kbis",
    description: "Diagnostic, actes & statuts, formalités, Kbis. Devis en 24 h.",
    url: "https://www.marcouf-formalites.fr/expertise/modification",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
