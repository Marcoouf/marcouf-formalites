'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsModification } from '../../../components/StepsRail'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function ModificationPageClient() {
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
          Mise à jour des statuts
        </h1>
        <p className="text-lg text-gray-600">
          J’actualise vos statuts après changement de siège, objet, capital, dirigeant ou dénomination, avec un dossier documentaire cohérent.
        </p>
      </motion.header>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📘 Version consolidée claire</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🧾 Pièces associées prêtes</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">⚡ Retour rapide</span>
      </section>

      <StepsRail
        title="Mise à jour statutaire en 4 étapes"
        subtitle="Audit des clauses, rédaction consolidée, pièces annexes et validation finale."
        steps={stepsModification}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi soigner la mise à jour des statuts ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Cohérence juridique :</span> éviter des clauses contradictoires entre anciennes et nouvelles versions.</li>
            <li><span className="font-medium">Gain de temps :</span> un document consolidé facilite les échanges et formalités futures.</li>
            <li><span className="font-medium">Traçabilité :</span> vous conservez un historique propre des évolutions décidées.</li>
          </ul>
          <p className="italic text-gray-600">Pour une validation juridique de fond sur des clauses complexes, un avis d’avocat reste complémentaire.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Réponse sous 24 h'],
              ['Transparence', 'Périmètre et livrables clairs'],
              ['Rigueur documentaire', 'Contrôle des informations clés'],
              ['Suivi', 'Aide à la finalisation administrative'],
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
            <p className="text-gray-700 mt-1">Le prix dépend du nombre de clauses à modifier et des actes associés.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Première version sous 24 à 72 h</div>
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
            ['Faut-il refaire tous les statuts ?', 'Pas forcément. On met à jour uniquement les clauses impactées puis on consolide une version propre.'],
            ['Peut-on faire en même temps les PV associés ?', 'Oui, la mise à jour des statuts peut être traitée avec les PV correspondants.'],
            ['Quels changements sont les plus fréquents ?', 'Siège, objet social, capital, dirigeant, dénomination et règles de gouvernance.'],
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
        <h2 className="text-2xl font-semibold text-[var(--accent)]">Besoin de statuts à jour et exploitables ?</h2>
        <p className="text-lg text-gray-700">
          Donnez-moi votre changement à traiter et je vous propose une trame statutaire claire.
        </p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Discuter de mon besoin
        </button>
      </motion.section>
    </main>
  )
}
