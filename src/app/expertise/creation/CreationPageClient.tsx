'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsCreation } from '../../../components/StepsRail'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

export default function CreationPageClient() {
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
          Formalités d’entreprise
        </h1>
        <p className="text-lg text-gray-600">
          Création, modification, dissolution, liquidation ou radiation: je vous aide à structurer les démarches pour avancer avec un dossier clair.
        </p>
      </motion.header>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          ⏱ Délai moyen <span className="whitespace-nowrap">48 h</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          💶 À partir de <span className="whitespace-nowrap">160 € HT</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          📑 Checklists prêtes à l’emploi
        </span>
      </section>

      <StepsRail
        title="Votre parcours formalités en 4 étapes"
        subtitle="Qualification, pièces, préparation des actes et suivi de finalisation."
        steps={stepsCreation}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi recentrer sur les formalités ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li>
              <span className="font-medium">Dossier complet :</span> moins de retours et moins de pertes de temps.
            </li>
            <li>
              <span className="font-medium">Feuille de route claire :</span> vous savez quoi produire et quand.
            </li>
            <li>
              <span className="font-medium">Suivi opérationnel :</span> de la préparation à la finalisation administrative.
            </li>
          </ul>
          <p className="italic text-gray-600">
            Pour une analyse juridique personnalisée d’un montage complexe, vous pouvez compléter avec l’avis d’un avocat.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Réponse sous 24 h'],
              ['Transparence', 'Étapes et livrables annoncés'],
              ['Rigueur', 'Documents contrôlés avant transmission'],
              ['Confidentialité', 'Traitement sécurisé des pièces'],
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
            <p className="text-gray-700 mt-1">
              Forfait de base incluant la qualification du besoin, la checklist des pièces et les trames documentaires.
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">
              <span className="whitespace-nowrap">160 € HT</span>
            </div>
            <div className="text-gray-600">Délai moyen : <span className="whitespace-nowrap">48 h</span></div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Démarrer mes formalités
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['Quelles formalités prenez-vous en charge ?', 'Création, modifications, dissolution, liquidation et radiation selon votre situation.'],
            ['Dois-je préparer tous les documents seul ?', 'Non, je vous fournis une checklist et des trames adaptées au dossier.'],
            ['Combien de temps faut-il pour démarrer ?', 'En général, la première version de travail est disponible sous 24 à 48 h.'],
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
        <h2 className="text-2xl font-semibold text-[var(--accent)]">Besoin d’un appui sur vos formalités ?</h2>
        <p className="text-lg text-gray-700">
          Décrivez votre opération et je vous envoie une méthode claire pour la traiter étape par étape.
        </p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Discuter de mon besoin
        </button>
      </motion.section>
    </main>
  )
}
