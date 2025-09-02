// src/app/expertise/contrats-et-documentation/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contrats & documentation interne | Marcouf Formalités",
  description:
    "Contrats de prestation/partenariat/sous-traitance, CGV/CGU, NDA, chartes et documentation RGPD. Rédaction, validation, négociation et suivi.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/contrats-et-documentation" },
  openGraph: {
    title: "Contrats & documentation interne – clairs, adaptés, sécurisés",
    description: "Analyse, rédaction, validation & négociation, signature & suivi.",
    url: "https://www.marcouf-formalites.fr/expertise/contrats-et-documentation",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}