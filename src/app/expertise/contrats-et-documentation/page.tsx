import ContratsPageClient from './ContratsPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Contrats et documentation interne Marcouf Formalités',
  description:
    'Modèles contractuels, CGV/CGU, NDA et documentation interne : préparation de trames, relecture administrative et suivi des versions.',
  url: 'https://www.marcouf-formalites.fr/expertise/contrats-et-documentation',
  serviceType: 'Support documentaire contractuel',
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
    name: 'Parcours documentation contractuelle',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Analyse du besoin et cartographie des risques documentaires' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Modèles de contrats et CGV/CGU adaptés' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Allers-retours documentaires et préparation aux échanges' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Remise des modèles et suivi des mises à jour' },
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
