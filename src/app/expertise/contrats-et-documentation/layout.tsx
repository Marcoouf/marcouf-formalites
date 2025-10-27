// src/app/expertise/contrats-et-documentation/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contrats & documentation interne | Marcouf Formalités",
  description:
    "Contrats de prestation/partenariat/sous-traitance, CGV/CGU, NDA, chartes et documentation RGPD. Modèles types, relecture administrative et suivi des versions.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/contrats-et-documentation" },
  openGraph: {
    title: "Contrats & documentation interne – modèles clairs et suivis",
    description: "Analyse du besoin, modèles adaptés, échanges et signature.",
    url: "https://www.marcouf-formalites.fr/expertise/contrats-et-documentation",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
