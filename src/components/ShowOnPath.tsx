// src/components/ShowOnPath.tsx
'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function ShowOnPath({
  startsWith = ['/'],
  children,
}: {
  startsWith?: string[]
  children: ReactNode
}) {
  const pathname = usePathname() || '/'
  const match = startsWith.some((p) => (p === '/' ? pathname === '/' : pathname.startsWith(p)))
  if (!match) return null
  return <>{children}</>
}