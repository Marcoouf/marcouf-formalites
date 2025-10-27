import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secrétariat de formalités & actes de société | Marcouf Formalités",
  description:
    "Approbation des comptes, PV AGO/AGE, délégations de pouvoirs, statuts à jour, registres légaux. Modèles types, tenue documentaire et formalités accompagnées.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/redaction-actes" },
  openGraph: {
    title: "Secrétariat de formalités & actes de société – clair et documenté",
    description: "Cadrage & checklist, documents types, signature & registres, formalités & archivage.",
    url: "https://www.marcouf-formalites.fr/expertise/redaction-actes",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
