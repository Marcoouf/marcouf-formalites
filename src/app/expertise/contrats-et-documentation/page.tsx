import ContratsPageClient from './ContratsPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Formalités exceptionnelles Marcouf Formalités',
  description:
    'Support documentaire pour dissolution, liquidation, cessation et radiation.',
  url: 'https://www.marcouf-formalites.fr/expertise/contrats-et-documentation',
  serviceType: 'Support aux formalités exceptionnelles',
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
    description: 'Tarif sur devis selon la formalité à traiter',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Parcours formalités exceptionnelles',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Qualification de la formalité' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Préparation des actes' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Dépôt et publicité légale' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Clôture documentaire du dossier' },
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
