import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    // Next 16/Turbopack expects serializable loader options.
    remarkPlugins: ['remark-gfm'],
  },
})

const nextConfig: NextConfig = {
  // Autoriser les fichiers .mdx en plus de .ts/.tsx
  pageExtensions: ['ts', 'tsx', 'mdx'],

  async redirects() {
    return [
      // Anciennes URLs HTML -> nouvelles URLs
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/marque.html', destination: '/expertise/propriete-intellectuelle', permanent: true },
      { source: '/documents.html', destination: '/mentions-legales', permanent: true },
      { source: '/modification.html', destination: '/expertise/modification-societe', permanent: true },
      { source: '/creation.html', destination: '/expertise/creation-entreprise', permanent: true },

      // Nettoyage des anciennes rubriques/chemins
      { source: '/expertise/contrats-commerciaux', destination: '/expertise/contrats-et-documentation', permanent: true },
      { source: '/expertise/formalites', destination: '/expertise/formalites-juridiques', permanent: true },

      // Variantes anciennes vers les pages finales
      { source: '/confidentialite', destination: '/politique-confidentialite', permanent: true },
      { source: '/mentions', destination: '/mentions-legales', permanent: true },
      { source: '/a_propos', destination: '/a-propos', permanent: true },
    ]
  },
}

export default withMDX(nextConfig)
