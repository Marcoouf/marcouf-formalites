import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secrétariat juridique & actes de société | Marcouf Formalités",
  description:
    "Approbation des comptes, PV AGO/AGE, délégations de pouvoirs, statuts à jour, registres légaux. Rédaction, tenue et formalités associées.",
  alternates: { canonical: "https://www.marcouf-formalites.fr/expertise/redaction-actes" },
  openGraph: {
    title: "Secrétariat juridique & actes de société – clair et conforme",
    description: "Cadrage & checklist, actes, signature & registres, formalités & archivage.",
    url: "https://www.marcouf-formalites.fr/expertise/redaction-actes",
    siteName: "Marcouf Formalités",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}