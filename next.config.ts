import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/expertise/contrats-commerciaux', destination: '/expertise/contrats-et-documentation', permanent: true },
      { source: '/expertise/formalites', destination: '/expertise/modification', permanent: false },
    ]
  },
}

export default nextConfig