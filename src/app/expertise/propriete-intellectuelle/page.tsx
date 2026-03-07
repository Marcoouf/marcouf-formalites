import ProprieteIntellectuellePageClient from './ProprieteIntellectuellePageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Recherche d’antériorité Marcouf Formalités',
  description:
    'Recherche d’antériorité de marque avant dépôt: screening, analyse des risques et restitution claire.',
  url: 'https://www.marcouf-formalites.fr/expertise/propriete-intellectuelle',
  serviceType: 'Support à la recherche d’antériorité',
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
    description: 'Tarif sur devis selon le périmètre de recherche',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Parcours recherche d’antériorité',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Définition du signe et du périmètre' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Recherche sur bases pertinentes' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Analyse des risques identifiés' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Restitution décisionnelle' },
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
