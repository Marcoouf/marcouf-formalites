// src/components/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled ? 'bg-white/90 shadow-md' : 'bg-white/70'}
        backdrop-blur-sm border-b border-black/10
      `}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          <Button href="#services">Services</Button>
          <Button href="#about">À propos</Button>
          <Button href="#contact">Contact</Button>
        </nav>

        {/* Devis bouton */}
        <div className="hidden lg:block">
          <Button className="btn-devis">Devis</Button>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          {/* Place for future hamburger button */}
          <button
            className="text-black focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
