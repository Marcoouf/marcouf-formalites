import ProprieteIntellectuellePageClient from './ProprieteIntellectuellePageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Propriété intellectuelle Marcouf Formalités',
  description:
    'Support aux dépôts de marques, contrats de cession ou de licence et protection documentaire des créations (droit d’auteur, dessins et modèles).',
  url: 'https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle',
  serviceType: 'Support aux formalités de propriété intellectuelle',
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
    description: 'Tarif sur devis selon le périmètre (marques, licences, droits d’auteur)',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Parcours formalités PI',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Recherche documentaire et plan de dépôt' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Préparation des formalités INPI/EUIPO' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Modèles de cession ou de licence' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Protection des œuvres et traçabilité des preuves' },
      },
    ],
  },
} as const

export default function ProprieteIntellectuelleServicePage() {
  const jsonLd = JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003C')

  return (
    <>
      <script
        id="jsonld-legalservice-propriete-intellectuelle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ProprieteIntellectuellePageClient />
    </>
  )
}
