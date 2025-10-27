import ModificationPageClient from './ModificationPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Modification de société Marcouf Formalités',
  description:
    'Support aux formalités de modification : modèles d’actes, annonce légale préparée, dépôt accompagné et suivi du Kbis.',
  url: 'https://www.marcouf-formalites.fr/expertise/modification',
  serviceType: 'Support aux formalités de modification de société',
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
    name: 'Parcours formalités modification',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Cadrage des impacts administratifs' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Modèles d’actes et statuts mis à jour' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Annonce légale préparée et consignes de publication' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Transmission du dossier et suivi du Kbis' },
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
