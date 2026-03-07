'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FaLinkedin } from 'react-icons/fa'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function Footer() {
  const logoSrc = '/logo-footer.webp?v=20260307-1'
  const pathname = usePathname()
  const router = useRouter()

  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      scrollSectionToCenter(id)
    } else {
      router.push(`/#${id}`)
    }
  }

  const handleHome = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <footer className="border-t border-[#04281b] bg-[var(--accent)] px-6 py-12 text-[#f9f7e7]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image src={logoSrc} alt="Marcouf Formalités" width={320} height={96} className="h-auto w-28" unoptimized />
            <h3 className="text-lg font-semibold">Marcouf Formalités</h3>
          </div>
          <p className="text-sm text-[#e7e3cb]">
            Accompagnement en formalités d’entreprise, documents pratiques et suivi administratif clair.
          </p>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => handleSmartScroll('contact')}
              className="inline-flex items-center justify-center rounded-full border border-[#f9f7e7] px-4 py-2 text-sm font-medium hover:bg-[#f9f7e7] hover:text-[var(--accent)]"
            >
              Demander un devis
            </button>
          </div>
        </div>

        <nav aria-label="Navigation principale">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ded9bc]">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button type="button" onClick={handleHome} className="hover:underline underline-offset-4">
                Accueil
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSmartScroll('apropos')} className="hover:underline underline-offset-4">
                À propos
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSmartScroll('expertise')} className="hover:underline underline-offset-4">
                Services
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSmartScroll('contact')} className="hover:underline underline-offset-4">
                Contact
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSmartScroll('latest-articles')} className="hover:underline underline-offset-4">
                Derniers articles
              </button>
            </li>
          </ul>
        </nav>

        <nav aria-label="Coordonnées et informations">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ded9bc]">Coordonnées</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5 text-[#ded9bc]" />
              <a className="hover:underline" href="mailto:contact@marcouf-formalites.fr">
                contact@marcouf-formalites.fr
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5 text-[#ded9bc]" />
              <a className="hover:underline" href="tel:+33631581617">
                06 31 58 16 17
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 text-[#ded9bc]" />
              <span>Paris, France</span>
            </li>
          </ul>

          <h4 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#ded9bc]">Informations</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="text-[#f9f7e7]" />
              <a
                href="https://www.linkedin.com/in/marcouf-lebar-25b86a1a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Profil LinkedIn de Marcouf Lebar (nouvelle fenêtre)"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 border-t border-[#0d4a34] pt-6 text-center text-xs text-[#ded9bc]">
        <p>&copy; {new Date().getFullYear()} Marcouf Formalités. Tous droits réservés.</p>
        <p className="mt-2">SIREN 912 345 678 · Paris & à distance · Réponse sous 24 h</p>
      </div>
    </footer>
  )
}
