import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

const nextConfig: NextConfig = {
  // Autoriser les fichiers .mdx en plus de .ts/.tsx
  pageExtensions: ['ts', 'tsx', 'mdx'],

  async redirects() {
    return [
      { source: '/expertise/contrats-commerciaux', destination: '/expertise/contrats-et-documentation', permanent: true },
      { source: '/expertise/formalites', destination: '/expertise/modification', permanent: false },
    ]
  },
}

export default withMDX(nextConfig)