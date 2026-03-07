'use client'

import { usePathname, useRouter } from 'next/navigation'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

const offers = [
  {
    title: 'Formalités d’entreprise',
    price: 'Dès 160 € HT',
    details: 'Constitution du dossier, checklist et accompagnement des étapes administratives.',
  },
  {
    title: 'Mise à jour statuts / PV',
    price: 'Sur devis',
    details: 'Selon le nombre d’actes, la complexité de l’opération et les délais.',
  },
  {
    title: 'Recherche d’antériorité',
    price: 'Sur devis',
    details: 'Analyse ciblée avant dépôt de marque, avec synthèse des risques identifiés.',
  },
]

export default function PricingSection() {
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
    <section id="tarifs" className="section-shell py-16 sm:py-20 scroll-mt-10">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Tarifs indicatifs</p>
        <h2 className="section-title mt-2">Une tarification alignée sur vos formalités</h2>
        <p className="section-lead mt-3">Le devis précise toujours le périmètre, les livrables et les étapes incluses.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {offers.map((offer) => (
          <article
            key={offer.title}
            className="surface-card p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">{offer.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-[#053725]">{offer.price}</p>
            <p className="mt-2 text-slate-700">{offer.details}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
          Recevoir un devis précis
        </button>
      </div>
    </section>
  )
}
