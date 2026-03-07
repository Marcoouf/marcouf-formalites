'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsContrats } from '../../../components/StepsRail'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function ContratsPage() {
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
    <main className="relative z-10 min-h-screen mx-auto max-w-6xl px-6 sm:px-16 py-16 space-y-16 text-gray-800 overflow-hidden bg-white bg-noise-paper bg-repeat">
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#053725] to-[#04281b]">
          Formalités exceptionnelles
        </h1>
        <p className="text-lg text-gray-600">
          Dissolution, liquidation, cessation et radiation: je vous aide à structurer les actes et le suivi administratif pour finaliser le dossier proprement.
        </p>
      </motion.header>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🏁 Dissolution / liquidation</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🗃️ Dossier structuré</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📣 Publicité légale guidée</span>
      </section>

      <StepsRail
        title="Formalité exceptionnelle en 4 étapes"
        subtitle="Qualification, préparation des actes, dépôt/publicité et clôture du dossier."
        steps={stepsContrats}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi cadrer ces formalités sensibles ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Réduction des erreurs :</span> chaque étape est séquencée et documentée.</li>
            <li><span className="font-medium">Suivi lisible :</span> pièces, actes et échéances sont centralisés.</li>
            <li><span className="font-medium">Finalisation plus fluide :</span> moins d’aller-retours administratifs.</li>
          </ul>
          <p className="italic text-gray-600">Pour des arbitrages juridiques complexes, un conseil d’avocat peut compléter l’accompagnement documentaire.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24 h'],
              ['Méthode', 'Étapes clairement définies'],
              ['Rigueur', 'Contrôle des pièces clés'],
              ['Confidentialité', 'Données traitées avec discrétion'],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-4 bg-white">
                <div className="font-medium">{t}</div>
                <div className="text-gray-700 text-sm">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card-with-button rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tarif indicatif</h2>
            <p className="text-gray-700 mt-1">Sur devis, selon la formalité (dissolution, liquidation, radiation) et le volume d’actes.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Planning adapté à l’urgence</div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['Prenez-vous en charge les dossiers de dissolution ?', 'Oui, avec préparation documentaire et fil conducteur des démarches.'],
            ['Peut-on traiter liquidation puis radiation ?', 'Oui, l’accompagnement suit les étapes successives du dossier.'],
            ['Le service inclut-il la publication légale ?', 'Je vous guide sur la préparation et la publication de l’annonce légale.'],
          ].map(([q, a], i) => (
            <details key={i} className="group rounded-lg border border-gray-200 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium">{q}</span>
                <span className="transition-transform group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-2 text-gray-700">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[var(--accent)]">Besoin d’une formalité exceptionnelle ?</h2>
        <p className="text-lg text-gray-700">Je vous propose un cadrage opérationnel et les documents adaptés à votre situation.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Obtenir un devis
        </button>
      </motion.section>
    </main>
  )
}
