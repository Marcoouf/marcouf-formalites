'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsPI } from '../../../components/StepsRail'

export default function ProprieteIntellectuellePage() {
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
      {/* HERO – même présentation que Création/Modification */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Propriété intellectuelle</h1>
        <p className="text-lg text-gray-600">
          Protégez vos marques, logos, créations et contrats de cession ou de licence. J’accompagne vos démarches de l’audit au dépôt, puis à l’exploitation de vos droits.
        </p>
      </motion.header>

      {/* Badges confiance (ligne de puces) */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🔎 Recherche d’antériorités</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🏛️ Dépôt INPI complet</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📜 Cession & licence</span>
      </section>

      {/* Étapes – rail façon Infogreffe */}
      <StepsRail
        title="Un accompagnement en 4 étapes"
        subtitle="Audit, stratégie de protection, dépôt & suivi, contrats & exploitation."
        steps={stepsPI}
      />

      {/* Pourquoi + Garanties – 2 colonnes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire appel à un juriste ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Sécurisation de vos droits :</span> identifier et protéger vos marques et œuvres pour prévenir la contrefaçon.</li>
            <li><span className="font-medium">Valorisation de l’innovation :</span> structurer la cession ou la licence pour monétiser durablement vos créations.</li>
            <li><span className="font-medium">Prévention des litiges :</span> anticiper les conflits et prévoir des mécanismes de résolution adaptés.</li>
          </ul>
          <p className="italic text-gray-600">Une stratégie de PI cohérente protège et valorise vos actifs immatériels.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24\u00A0h'],
              ['Transparence', 'Process clair et étapes expliquées'],
              ['Conformité', 'Dossiers complets et délais respectés'],
              ['Confidentialité', 'Protection stricte de vos données'],
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
            <p className="text-gray-700 mt-1">Selon le périmètre (recherche d’antériorités, classes INPI, territoires) et les contrats associés.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Planning adapté à votre calendrier</div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">
                Discuter de mon projet
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
            ['Dois‑je déposer une marque ?', 'Utile dès que vous exploitez un nom/logo. Le choix des classes dépend de vos produits/services actuels et à venir.'],
            ['Combien de classes INPI choisir ?', 'On cible l’essentiel selon votre marché. Trop de classes peuvent coûter cher sans utilité.'],
            ['Cession ou licence : quelle différence ?', 'La cession transfère le droit, la licence l’autorise contre contrepartie (redevances).'],
            ['Comment prouver mes droits d’auteur ?', 'Enveloppe Soleau, dépôts de preuves, traçabilité des versions et contrats encadrant les contributions.'],
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
        <h2 className="text-2xl font-semibold text-green-700">Prêt à sécuriser vos créations ?</h2>
        <p className="text-lg text-gray-700">Expliquez‑moi vos besoins (marque, licence, cession, droits d’auteur) et je vous propose la meilleure stratégie.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Obtenir un devis
        </button>
      </motion.section>
    </main>
  )
}
