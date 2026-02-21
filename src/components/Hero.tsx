'use client'

import { Briefcase } from 'lucide-react'
import Button from '@/components/Button'
import { usePathname, useRouter } from 'next/navigation'

export default function Hero() {
  const pathname = usePathname()
  const router = useRouter()

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

  return (
    <section className="mt-2 sm:mt-3 relative isolate overflow-hidden rounded-xl shadow-md px-6 py-24 sm:py-32 lg:px-16 text-center bg-white">
      {/* Fond décoratif vert accentué animé */}
      <div className="absolute inset-0 -z-10 animate-gradient-bg bg-gradient-to-br from-green-200 via-white to-green-100 opacity-100 blur-md" />

      {/* Contenu centré */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Structurons votre activité <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            avec la sécurité du droit
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Je vous accompagne dans toutes les étapes juridiques de la vie de votre entreprise : création, modification,
          formalités, propriété intellectuelle, et bien plus.
        </p>

        <div className="pt-4">
          <Button icon={Briefcase} className="btn-devis" onClick={() => handleSmartScroll('contact')}>
            Discuter de mon besoin
          </Button>
        </div>
      </div>

      {/* SVG décoratif bas */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1024 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="url(#greenGradient)" d="M0 0h1024v128H0z" />
        <defs>
          <linearGradient id="greenGradient" x1="0" y1="0" x2="1024" y2="128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bbf7d0" />
            <stop offset="1" stopColor="#86efac" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
