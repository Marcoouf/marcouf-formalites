'use client'

import dynamic from 'next/dynamic'

const LatestArticlesRail = dynamic(() => import('@/components/LatestArticlesRail'), {
  ssr: false,
})

export default function LatestArticlesClient({ limit = 3 }: { limit?: number }) {
  return <LatestArticlesRail limit={limit} />
}