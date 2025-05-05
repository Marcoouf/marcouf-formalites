'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center text-black">
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
        </Link>

        <nav className="hidden lg:flex items-center gap-4">
          <Button onClick={() => scrollToSection('expertise')}>Services</Button>
          <Button onClick={() => scrollToSection('apropos')}>À propos</Button>
          <Button onClick={() => scrollToSection('contact')}>Contact</Button>
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-accent to-black text-white">
            Demander un devis
          </Button>
        </div>
      </div>
    </header>
  )
}
