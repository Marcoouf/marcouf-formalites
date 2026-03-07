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

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Anciennes URLs HTML -> nouvelles URLs
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/marque.html', destination: '/expertise/propriete-intellectuelle', permanent: true },
      { source: '/documents.html', destination: '/mentions-legales', permanent: true },
      { source: '/modification.html', destination: '/expertise/modification', permanent: true },
      { source: '/creation.html', destination: '/expertise/creation', permanent: true },

      // Nettoyage des anciennes rubriques/chemins
      { source: '/expertise/contrats-commerciaux', destination: '/expertise/contrats-et-documentation', permanent: true },
      { source: '/expertise/formalites', destination: '/expertise/creation', permanent: true },
      { source: '/expertise/modification-societe', destination: '/expertise/modification', permanent: true },
      { source: '/expertise/creation-entreprise', destination: '/expertise/creation', permanent: true },
      { source: '/expertise/formalites-juridiques', destination: '/expertise/creation', permanent: true },

      // Variantes anciennes vers les pages finales
      { source: '/confidentialite', destination: '/politique-de-confidentialite', permanent: true },
      { source: '/politique-confidentialite', destination: '/politique-de-confidentialite', permanent: true },
      { source: '/mentions', destination: '/mentions-legales', permanent: true },
      { source: '/a_propos', destination: '/', permanent: true },
      { source: '/a-propos', destination: '/', permanent: true },
    ]
  },
}

export default withMDX(nextConfig)
