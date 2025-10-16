import ContratsPageClient from './ContratsPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Contrats et documentation interne Marcouf Formalités',
  description:
    'Rédaction, adaptation et négociation de contrats commerciaux, CGV/CGU, NDA et documentation interne avec suivi juridique.',
  url: 'https://www.marcouf-formalites.fr/expertise/contrats-et-documentation',
  serviceType: 'Rédaction et négociation de contrats',
  provider: {
    '@type': 'Organization',
    name: 'Marcouf Formalités',
    url: 'https://www.marcouf-formalites.fr',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'France',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    description: 'Tarif sur devis selon le livrable',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accompagnement contractuel',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Analyse du besoin et des risques' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Rédaction ou adaptation du contrat' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Allers-retours et négociation' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Remise des modèles et suivi' },
      },
    ],
  },
} as const

export default function ContratsServicePage() {
  const jsonLd = JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003C')

  return (
    <>
      <script
        id="jsonld-legalservice-contrats"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ContratsPageClient />
    </>
  )
}
