import ProprieteIntellectuellePageClient from './ProprieteIntellectuellePageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Propriété intellectuelle Marcouf Formalités',
  description:
    'Dépôt de marques, contrats de cession ou de licence et protection des créations (droit d’auteur, dessins et modèles).',
  url: 'https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle',
  serviceType: 'Protection et valorisation de la propriété intellectuelle',
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
    name: 'Accompagnement propriété intellectuelle',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Recherche et stratégie de dépôt' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Gestion des formalités INPI/EUIPO' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Contrats de cession ou de licence' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Protection des œuvres et preuves' },
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
