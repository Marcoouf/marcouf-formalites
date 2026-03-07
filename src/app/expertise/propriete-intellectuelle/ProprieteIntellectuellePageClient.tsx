'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsPI } from '../../../components/StepsRail'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function ProprieteIntellectuellePageClient() {
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
          Recherche d’antériorité de marque
        </h1>
        <p className="text-lg text-gray-600">
          J’analyse les antériorités disponibles avant dépôt pour vous aider à évaluer le niveau de risque et décider avec plus de visibilité.
        </p>
      </motion.header>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🔎 Screening antériorités</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📚 Sources INPI / EUIPO / web</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📄 Restitution claire</span>
      </section>

      <StepsRail
        title="Recherche d’antériorité en 4 étapes"
        subtitle="Définition du signe, recherche, analyse des risques et restitution exploitable."
        steps={stepsPI}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire une recherche avant dépôt ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Limiter les conflits :</span> repérer les signes proches en amont.</li>
            <li><span className="font-medium">Mieux décider :</span> déposer, ajuster le nom ou changer de stratégie.</li>
            <li><span className="font-medium">Gagner du temps :</span> éviter une démarche coûteuse sur un signe fragile.</li>
          </ul>
          <p className="italic text-gray-600">L’analyse d’antériorité est un appui décisionnel: pour une validation juridique approfondie, un conseil spécialisé peut compléter.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24 h'],
              ['Clarté', 'Synthèse lisible et structurée'],
              ['Méthode', 'Recherche cadrée selon votre activité'],
              ['Confidentialité', 'Traitement discret de votre projet'],
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
            <p className="text-gray-700 mt-1">Sur devis selon le nombre de classes et le périmètre de recherche souhaité.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Restitution rapide</div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Lancer une recherche
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['La recherche garantit-elle l’enregistrement ?', 'Non. Elle permet surtout d’identifier des risques avant de déposer.'],
            ['Sur quelles bases faites-vous la recherche ?', 'INPI, EUIPO et sources publiques utiles selon le périmètre retenu.'],
            ['Peut-on faire uniquement une recherche sans dépôt ?', 'Oui, l’accompagnement peut se limiter à cette étape de diagnostic.'],
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
        <h2 className="text-2xl font-semibold text-[var(--accent)]">Besoin d’une recherche d’antériorité ?</h2>
        <p className="text-lg text-gray-700">Partagez votre nom de marque et votre activité, je vous guide sur le niveau de risque.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Demander une analyse
        </button>
      </motion.section>
    </main>
  )
}
