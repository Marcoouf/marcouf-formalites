'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsModification } from '../../../components/StepsRail'

export default function ModificationPageClient() {
  const pathname = usePathname()
  const router = useRouter()
  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      const section = document.getElementById(id)
      section?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <main className="relative z-10 min-h-screen mx-auto max-w-6xl px-6 sm:px-16 py-16 space-y-16 text-gray-800 overflow-hidden bg-white bg-noise-paper bg-repeat">
      {/* HERO – même présentation que la page Création */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Modification de société</h1>
        <p className="text-lg text-gray-600">
          Changement de dirigeant, siège social, objet, capital ou dénomination : je prends en charge les actes, l’annonce légale et le dépôt au greffe, jusqu’à la mise à jour de votre Kbis.
        </p>
      </motion.header>

      {/* Badges confiance (style Mukio) */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">⏱ Délai moyen <span className="whitespace-nowrap">48 h</span></span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">💶 À partir de <span className="whitespace-nowrap">180 € HT</span></span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📑 Dossier vérifié Greffe</span>
      </section>

      {/* Étapes – rail façon Infogreffe */}
      <StepsRail
        title="Votre modification en 4 étapes"
        subtitle="Diagnostic, actes & statuts, formalités, Kbis & suivi."
        steps={stepsModification}
      />

      {/* Pourquoi + Garanties – 2 colonnes (identique au layout Création) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire appel à un juriste ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Conformité :</span> sécuriser les actes et éviter les rejets du greffe.</li>
            <li><span className="font-medium">Optimisation :</span> choisir les bonnes options (dates d’effet, fiscal/social, mentions).</li>
            <li><span className="font-medium">Gain de temps :</span> dossier complet et suivi jusqu’au Kbis.</li>
          </ul>
          <p className="italic text-gray-600">Un accompagnement précis évite des retours greffe et des retards coûteux.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Réponse sous 24 h'],
              ['Transparence', 'Devis clair et frais annoncés'],
              ['Conformité', 'Documents à jour et pièces vérifiées'],
              ['Suivi', 'Jusqu’au Kbis mis à jour'],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-4 bg-white">
                <div className="font-medium">{t}</div>
                <div className="text-gray-700 text-sm">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarif */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Tarif indicatif</h2>
            <p className="text-gray-700 mt-1">Forfait incluant : PV, statuts mis à jour, annonce légale et formalités au greffe.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">À partir de <span className="whitespace-nowrap">180 € HT</span></div>
            <div className="text-gray-600">Délai moyen : <span className="whitespace-nowrap">48 heures</span></div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['Dois‑je publier une annonce légale ?', 'Oui pour la plupart des modifications statutaires (siège, dirigeant, objet, dénomination, capital…). Je rédige et publie pour vous.'],
            ['Qui signe les documents ?', 'Selon le cas : gérant/président, associé(s) ou mandataire. Je vous indique précisément les signataires et pièces.'],
            ['Le greffe peut‑il refuser ?', 'Oui si une pièce manque ou est inexacte. Je sécurise le dossier et gère les échanges si besoin.'],
            ['Faut‑il mettre à jour les statuts ?', 'Oui dès qu’une clause statutaire est impactée. Je fournis une version à jour.'],
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

      {/* CTA Final – identique à Création */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700">Besoin d’une modification ?</h2>
        <p className="text-lg text-gray-700">
          Expliquez-moi votre situation et je vous indique la marche à suivre et les pièces nécessaires.
        </p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Discuter de mon besoin
        </button>
      </motion.section>
    </main>
  )
}
