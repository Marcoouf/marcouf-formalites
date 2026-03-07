'use client'

import Image from 'next/image'

const photoMarcouf = '/photomarcouf.webp?v=20260307-2'

const points = [
  {
    title: 'Expertise opérationnelle',
    detail: 'Formalités auprès des greffes et de l’INPI, avec des livrables directement exploitables.',
  },
  {
    title: 'Pédagogie',
    detail: 'Chaque étape est expliquée en langage clair, pour que vous gardiez la maîtrise du dossier.',
  },
  {
    title: 'Réactivité',
    detail: 'Retours rapides et suivi régulier jusqu’à la finalisation de la démarche.',
  },
]

export default function APropos() {
  return (
    <section id="apropos" className="section-shell scroll-mt-10 py-16 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <div className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border-[3px] border-[var(--accent)] shadow-sm">
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <Image
                src={photoMarcouf}
                alt="Marcouf Lebar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                fetchPriority="high"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">À propos</p>
          <h2 className="section-title">Un accompagnement fiable pour les dirigeants de TPE et PME</h2>

          <p className="section-lead max-w-3xl">
            Je vous accompagne dans la préparation de vos formalités d’entreprise avec une méthode simple: cadrer, produire les bons documents, puis sécuriser le dépôt.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {points.map((point) => (
              <article key={point.title} className="surface-card h-full p-4">
                <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
