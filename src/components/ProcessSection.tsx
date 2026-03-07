'use client'

import { usePathname, useRouter } from 'next/navigation'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

const steps = [
  {
    title: 'Qualification de la formalité',
    description: 'On identifie précisément l’opération: formalité, statuts, PV ou recherche d’antériorité.',
  },
  {
    title: 'Préparation des actes',
    description: 'Je prépare les trames utiles et la liste des pièces pour éviter les oublis.',
  },
  {
    title: 'Validation documentaire',
    description: 'Vous validez les versions finales avec un fil conducteur clair.',
  },
  {
    title: 'Suivi de finalisation',
    description: 'Je vous accompagne jusqu’à l’achèvement de la démarche administrative.',
  },
]

export default function ProcessSection() {
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
    <section id="process" className="section-shell py-16 sm:py-20 scroll-mt-10">
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Méthode</p>
          <h2 className="section-title mt-2">Un parcours orienté formalités</h2>
          <p className="section-lead mt-3">
            Vous savez à chaque étape ce qui est attendu, quels documents produire et comment finaliser proprement le dossier.
          </p>
        </div>

        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#053725]">Étape {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-700">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
            Démarrer mon dossier
          </button>
          <span className="chip">Réponse sous 24h</span>
          <span className="chip">Documents lisibles</span>
        </div>
      </div>
    </section>
  )
}
