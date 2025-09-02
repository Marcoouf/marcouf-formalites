'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsFormalites } from '../../../components/StepsRail'

export default function FormalitesPage() {
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
      {/* HERO – même présentation que Création/Modification/PI */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Formalités juridiques</h1>
        <p className="text-lg text-gray-600">
          Anticipez et facilitez vos démarches administratives avec un accompagnement complet : constitution du dossier,
          annonces légales, dépôt au greffe et suivi jusqu’au K‑bis.
        </p>
      </motion.header>

      {/* Badges confiance */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📂 Dossier complet</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📰 Annonce légale</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🏛️ Dépôt & suivi greffe</span>
      </section>

      {/* Étapes – rail façon Infogreffe */}
      <StepsRail
        title="Un accompagnement en 4 étapes"
        subtitle="Recueil des pièces, préparation, dépôt/échanges, obtention & archivage."
        steps={stepsFormalites}
      />

      {/* Pourquoi + Garanties – 2 colonnes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire appel à un juriste ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Gagner du temps :</span> dossiers complets et conformes dès la première soumission.</li>
            <li><span className="font-medium">Éviter les erreurs :</span> pièces, formulaires et délais maîtrisés.</li>
            <li><span className="font-medium">Limiter les risques :</span> pénalités, oppositions et rejets de dossiers.</li>
          </ul>
          <p className="italic text-gray-600">Un suivi rigoureux évite des retards et des coûts supplémentaires.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24 h'],
              ['Transparence', 'Devis clair et étapes expliquées'],
              ['Conformité', 'Documents à jour et pièces vérifiées'],
              ['Sécurité', 'Confidentialité et archivage sécurisé'],
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
            <p className="text-gray-700 mt-1">Selon la formalité (création, modification, radiation, annonce légale, dépôts fiscaux) et l’urgence.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Planning adapté à vos échéances</div>
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
            ['Quelles pièces dois‑je fournir ?', 'Je vous transmets une checklist personnalisée selon la formalité (statuts, justificatifs, attestations, etc.).'],
            ['Faut‑il publier une annonce légale ?', 'Oui pour la plupart des créations et modifications statutaires ; je rédige et publie pour vous.'],
            ['Quels sont les délais au greffe ?', 'Variable selon les juridictions ; je gère les relances et vous informe des étapes.'],
            ['Qui signe les documents ?', 'Selon le cas : gérant/président, associé(s) ou mandataire. Je précise les signataires et pièces.'],
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

      {/* CTA Final */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700">Prêt à lancer vos formalités ?</h2>
        <p className="text-lg text-gray-700">Expliquez‑moi votre situation et vos délais ; je sécurise la procédure et les pièces.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Obtenir un devis
        </button>
      </motion.section>
    </main>
  )
}