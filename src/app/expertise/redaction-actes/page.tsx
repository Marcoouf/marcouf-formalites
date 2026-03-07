import RedactionActesPageClient from './RedactionActesPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Procès-verbaux d’assemblée Marcouf Formalités',
  description:
    'Préparation de PV AGO/AGE, décisions associées et formalisation documentaire.',
  url: 'https://www.marcouf-formalites.fr/expertise/redaction-actes',
  serviceType: 'Support à la rédaction de PV d’assemblée',
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
    description: 'Tarif sur devis selon le volume d’actes',
  },
} as const

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Traitez-vous AGO et AGE ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, la rédaction couvre les deux types d’assemblée avec leurs particularités.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pouvez-vous relire un PV déjà rédigé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, un document existant peut être repris pour fiabiliser sa forme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les PV peuvent-ils servir aux formalités ensuite ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, ils sont structurés pour être exploitables dans les démarches administratives liées.',
      },
    },
  ],
} as const

export default function RedactionActesServicePage() {
  const jsonLdService = JSON.stringify(legalServiceJsonLd).replace(/</g, '\\u003C')
  const jsonLdFaq = JSON.stringify(faqJsonLd).replace(/</g, '\\u003C')

  return (
    <>
      <script
        id="jsonld-legalservice-redaction-actes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdService }}
      />
      <script
        id="jsonld-faq-redaction-actes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />
      <RedactionActesPageClient />
    </>
  )
}
