'use client'


import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? scrollTop / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Scroll‑spy des sections de la home pour l'état actif du menu
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const ids = ['apropos', 'expertise', 'latest-articles', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible && (visible.target as HTMLElement).id) {
          setActiveSection((visible.target as HTMLElement).id)
        }
      },
      {
        root: null,
        // Décale le point d'activation pour éviter que le header masque le haut
        rootMargin: '0px 0px -60% 0px',
        threshold: [0.25, 0.5, 0.75],
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
    setMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const currentPath = pathname ?? '/'
  const isActive = (p: string) => currentPath === p || currentPath.startsWith(p + '/')

  const NavItem = ({
    children,
    onClick,
    href,
    active,
  }: {
    children: React.ReactNode
    onClick?: () => void
    href?: string
    active?: boolean
  }) => {
    const base =
      'relative inline-flex items-center px-2 py-1 font-medium text-gray-700 transition ' +
      'hover:text-[var(--accent)] ' +
      'after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 ' +
      'after:bg-[var(--accent)] after:origin-left after:transition-transform after:duration-300 ' +
      'hover:after:scale-x-100'
    const cls = active ? base + ' text-[var(--accent)] after:scale-x-100' : base
    if (href) {
      return (
        <Link href={href} aria-current={active ? 'page' : undefined} className={cls}>
          {children}
        </Link>
      )
    }
    return (
      <button onClick={onClick} className={cls}>
        {children}
      </button>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div onClick={handleLogoClick} className="flex items-center text-black cursor-pointer">
          <Image
            src="/logo.webp"
            alt="Marcouf Formalités"
            width={40}
            height={40}
            className="drop-shadow-sm w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="flex-1 text-center sm:inline sm:flex-none ml-2 text-lg font-semibold tracking-tight text-black">
            Marcouf|<span className="text-[var(--accent)] font-light">Formalités</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <NavItem onClick={() => handleSmartScroll('apropos')} active={currentPath === '/' && activeSection === 'apropos'}>
            À propos
          </NavItem>
          <NavItem onClick={() => handleSmartScroll('expertise')} active={currentPath === '/' && activeSection === 'expertise'}>
            Services
          </NavItem>
          <NavItem onClick={() => handleSmartScroll('contact')} active={currentPath === '/' && activeSection === 'contact'}>
            Contact
          </NavItem>
            <NavItem
            onClick={() => handleSmartScroll('latest-articles')}
            active={(currentPath === '/' && activeSection === 'latest-articles') || isActive('/articles')}
          >
            Articles
          </NavItem>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button onClick={() => handleSmartScroll('contact')} className="btn-devis rounded-full">
            Demander un devis
          </button>
        </div>

        {/* Mobile menu toggle + quick CTA */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white/80 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {/* Icone burger / croix */}
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full border-t border-gray-200 bg-white/95 backdrop-blur shadow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid gap-2">
            <button onClick={() => handleSmartScroll('apropos')} className={`text-left px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-[var(--accent)] ${currentPath === '/' && activeSection === 'apropos' ? 'text-[var(--accent)]' : ''}`}>À propos</button>
            <button onClick={() => handleSmartScroll('expertise')} className={`text-left px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-[var(--accent)] ${currentPath === '/' && activeSection === 'expertise' ? 'text-[var(--accent)]' : ''}`}>Services</button>
            <button
              onClick={() => handleSmartScroll('latest-articles')}
              className={`text-left px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-[var(--accent)] ${
                (currentPath === '/' && activeSection === 'latest-articles') || isActive('/articles') ? 'text-[var(--accent)]' : ''
              }`}
            >
              Articles
            </button>
            <button onClick={() => handleSmartScroll('contact')} className="mt-2 btn-devis rounded-full">Demander un devis</button>
          </div>
        </div>
      )}

      {/* Progress bar de lecture */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]">
        <div
          className="h-full bg-[var(--accent)] transition-[transform] duration-75"
          style={{ transform: `scaleX(${progress})`, transformOrigin: 'left' }}
        />
      </div>
    </header>
  )
}
