import CreationPageClient from './CreationPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: "Création d'entreprise Marcouf Formalités",
  description:
    'Support documentaire pour la création de société : cadrage, statuts types commentés, annonce légale préparée et dépôt accompagné.',
  url: 'https://www.marcouf-formalites.fr/expertise/creation',
  serviceType: 'Support aux formalités de création de société',
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
    name: 'Parcours formalités création',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', name: 'Cadrage documentaire du projet' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', name: 'Modèles de statuts prêts à personnaliser' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', name: 'Annonce légale préparée et dossier de formalités' },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', name: 'Transmission du dossier et suivi du Kbis' },
      },
    ],
  },
} as const

export default function CreationServicePage() {
  const jsonLd = JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003C')

  return (
    <>
      <script
        id="jsonld-legalservice-creation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <CreationPageClient />
    </>
  )
}
