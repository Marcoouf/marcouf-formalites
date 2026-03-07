import ModificationPageClient from './ModificationPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Mise à jour des statuts Marcouf Formalités',
  description:
    'Mise à jour statutaire après changement de siège, objet, capital, dirigeant ou dénomination.',
  url: 'https://www.marcouf-formalites.fr/expertise/modification',
  serviceType: 'Support à la mise à jour des statuts',
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
    description: 'Tarif sur devis selon le périmètre de mise à jour',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Parcours de mise à jour statutaire',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Audit des statuts actuels' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Rédaction d’une version consolidée' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Préparation des actes et pièces annexes' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Validation documentaire finale' },
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
