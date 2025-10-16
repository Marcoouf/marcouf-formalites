import ModificationPageClient from './ModificationPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Modification de société Marcouf Formalités',
  description:
    'Formalités de modification de société : actes, annonces légales, dépôt au greffe et mise à jour du Kbis.',
  url: 'https://www.marcouf-formalites.fr/expertise/modification',
  serviceType: 'Modification de société',
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
    price: '180.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accompagnement modification',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Audit des impacts juridiques' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Rédaction des actes et statuts' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Publication de l’annonce légale' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Dépôt au greffe et suivi' },
      },
    ],
  },
} as const

export default function ModificationServicePage() {
  const jsonLd = JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003C')

  return (
    <>
      <script
        id="jsonld-legalservice-modification"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ModificationPageClient />
    </>
  )
}
