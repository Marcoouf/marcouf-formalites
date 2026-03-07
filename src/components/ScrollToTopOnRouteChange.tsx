'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname()
  const previousRoute = useRef<string | null>(null)

  const centerFromHash = useCallback((behavior: ScrollBehavior) => {
    const rawHash = window.location.hash.replace('#', '')
    const id = decodeURIComponent(rawHash)
    if (!id) return false

    const tryCenter = (attempt: number) => {
      const done = scrollSectionToCenter(id, attempt === 0 ? behavior : 'auto')
      if (!done && attempt < 8) {
        window.setTimeout(() => tryCenter(attempt + 1), 60)
      }
    }

    tryCenter(0)
    return true
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      centerFromHash('smooth')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [centerFromHash])

  useEffect(() => {
    if (previousRoute.current === null) {
      previousRoute.current = pathname
      centerFromHash('auto')
      return
    }

    if (previousRoute.current === pathname) {
      return
    }

    previousRoute.current = pathname

    if (centerFromHash('auto')) {
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, centerFromHash])

  return null
}
