"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsCreation } from '../../../components/StepsRail'

export default function CreationPageClient() {
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
      {/* HERO – on garde ton héro existant */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
          Création d’entreprise
        </h1>
        <p className="text-lg text-gray-600">
          Choisissez la structure la plus adaptée et démarrez sur des bases solides grâce à un support administratif et documentaire de bout en bout.
        </p>
      </motion.header>

      {/* Badges confiance (style Mukio) */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          ⏱ Délai moyen <span className="whitespace-nowrap">48 h</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          💶 À partir de <span className="whitespace-nowrap">180 € HT</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
          🏢 +150 créations accompagnées
        </span>
      </section>

      {/* Étapes – rail façon Infogreffe */}
      <StepsRail
        title="Votre parcours formalités en 4 étapes"
        subtitle="Cadrage, modèles personnalisables, formalités et suivi."
        steps={stepsCreation}
      />

      {/* Pourquoi + Garanties – 2 colonnes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi s’appuyer sur un service de formalités ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li>
              <span className="font-medium">Dossier maîtrisé :</span> éviter les oublis dans les statuts type et les formulaires.
            </li>
            <li>
              <span className="font-medium">Lecture rapide :</span> recevoir des documents clairs, commentés et facilement adaptables.
            </li>
            <li>
              <span className="font-medium">Gain de temps :</span> disposer d’un plan d’action et d’un suivi jusqu’au retour du greffe.
            </li>
          </ul>
          <p className="italic text-gray-600">
            En sécurisant la partie administrative, vous vous concentrez sur le lancement de votre activité. Pour un avis juridique personnalisé, rapprochez-vous d’un avocat.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Réponse sous 24 h'],
              ['Transparence', 'Devis détaillé et étapes expliquées'],
              ['Expérience', '+150 dossiers de formalités traités'],
              ['Confidentialité', 'Traitement sécurisé de vos pièces'],
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
            <p className="text-gray-700 mt-1">
              Forfait de base incluant : dossier documentaire complet (statuts types commentés, formulaires, annonce légale préparée) et assistance au dépôt.
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">
              <span className="whitespace-nowrap">180 € HT</span>
            </div>
            <div className="text-gray-600">
              Délai moyen : <span className="whitespace-nowrap">48 h</span>
            </div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Démarrer ma création
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
            [
              'Quel statut choisir pour un indépendant ?',
              'Je fournis un comparatif indicatif (EURL, SASU, SARL, SAS) basé sur votre situation-type et vous recommande de faire valider le choix final par un avocat ou un expert-comptable.',
            ],
            [
              'Quel est le coût d’une annonce légale ?',
              'Variable selon le département et la longueur du texte : en pratique autour de 150–200 €. Je prépare le texte et vous accompagne pour la publication.',
            ],
            ['Quel délai pour obtenir un Kbis ?', 'Après dépôt complet, en général 24 à 48 h selon le greffe.'],
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

      {/* CTA Final – conserve ton style de bouton */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700">Prêt à démarrer ?</h2>
        <p className="text-lg text-gray-700">
          Contactez-nous pour un échange découverte de 30 minutes consacré à votre projet et aux démarches à prévoir.
        </p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Discuter de mon besoin
        </button>
      </motion.section>

    </main>
  )
}
