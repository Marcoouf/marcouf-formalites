'use client'

import { usePathname, useRouter } from 'next/navigation'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function Hero() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      scrollSectionToCenter(id)
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-[var(--background)] px-5 sm:px-8 lg:px-14 pt-8 sm:pt-10 pb-24 sm:pb-28 min-h-[calc(100svh-82px)] sm:min-h-[calc(100svh-92px)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_30%,rgba(5,55,37,0.08),transparent_35%),radial-gradient(circle_at_82%_72%,rgba(5,55,37,0.06),transparent_30%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <h1 className="hero-futura text-center text-[clamp(2.4rem,8.8vw,7rem)] leading-[0.9] font-bold text-[var(--accent)]">
          VOS FORMALITÉS
          <br />
          SANS COMPLEXITÉ
        </h1>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <p className="max-w-xl text-[clamp(0.98rem,1.1vw,1.2rem)] leading-relaxed text-[#284036] text-center">
            Nous structurons vos démarches administratives pour vous faire gagner du temps et sécuriser vos décisions.
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 sm:bottom-14 z-20">
        <button
          type="button"
          className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full border border-[#0a4a33] bg-[var(--accent)] px-7 sm:px-9 text-[0.98rem] font-semibold leading-none tracking-[0.01em] text-[var(--background)] shadow-[0_10px_26px_rgba(5,55,37,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#06422d]"
          onClick={() => handleSmartScroll('contact')}
        >
          Discuter de mon besoin
          <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--background)]/35 text-sm leading-none text-[var(--background)]/95">↓</span>
        </button>
      </div>

    </section>
  )
}
