'use client'


import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div onClick={handleLogoClick} className="flex items-center text-black cursor-pointer">
          <Image
            src="/logo.webp"
            alt="Marcouf Formalités"
            width={40}
            height={40}
            className="drop-shadow-sm"
          />
          <span className="ml-2 text-xl font-semibold tracking-tight text-black">
            Marcouf|<span className="text-[var(--accent)] font-light">Formalités</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-4">
          <Button onClick={() => handleSmartScroll('expertise')}>Services</Button>
          <Button onClick={() => handleSmartScroll('apropos')}>À propos</Button>
          <Button onClick={() => handleSmartScroll('contact')}>Contact</Button>
        </nav>

        <div className="hidden lg:block">
          <button onClick={() => handleSmartScroll('contact')} className="btn-devis rounded-full">
            Demander un devis
          </button>
        </div>
      </div>
    </header>
  )
}
