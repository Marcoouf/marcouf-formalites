import RedactionActesPageClient from './RedactionActesPageClient'

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Secrétariat de formalités et modèles d’actes Marcouf Formalités',
  description:
    'Préparation des procès-verbaux, délégations de pouvoirs, registres et mises à jour statutaires avec assistance au dépôt si nécessaire.',
  url: 'https://www.marcouf-formalites.fr/expertise/redaction-actes',
  serviceType: 'Support aux formalités et modèles d’actes',
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
    description: 'Tarif sur devis selon le dossier de formalités',
  },
} as const

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gérez-vous l’approbation des comptes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui : convocation, procès-verbal, assistance au dépôt si requis et tenue des registres.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pouvez-vous remettre à jour des statuts obsolètes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui : version consolidée commentée et adaptée aux évolutions décidées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tenez-vous les registres obligatoires ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui : registres des décisions/assemblées et des pouvoirs, avec conservation sécurisée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les délais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon l’urgence : première version en 24–72 h en général.',
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
