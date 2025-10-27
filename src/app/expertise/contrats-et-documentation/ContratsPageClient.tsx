'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail, stepsContrats } from '../../../components/StepsRail'

export default function ContratsPage() {
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
      {/* HERO – même présentation que les autres pages */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Contrats & documentation interne</h1>
        <p className="text-lg text-gray-600">
          Structurez vos relations d’affaires avec des modèles contractuels et une documentation interne adaptés à vos enjeux (CGV/CGU, NDA, chartes, RGPD) : conception de trames, relecture administrative et suivi des versions.
        </p>
      </motion.header>

      {/* Badges confiance */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🖊️ Modèles prêts à adapter</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📄 CGV/CGU & modèles</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🛡️ RGPD & chartes internes</span>
      </section>

      {/* Étapes – rail façon Infogreffe */}
      <StepsRail
        title="Un parcours documentaire en 4 étapes"
        subtitle="Analyse du besoin, modèles adaptés, échanges et signature."
        steps={stepsContrats}
      />

      {/* Pourquoi + Garanties – 2 colonnes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi structurer vos documents avec nous ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Documentation harmonisée :</span> modèles cohérents avec votre offre et vos process.</li>
            <li><span className="font-medium">Lisibilité :</span> clauses clarifiées et commentées pour faciliter l’appropriation.</li>
            <li><span className="font-medium">Suivi maîtrisé :</span> gestion des versions, annexes et rappels des points de vigilance.</li>
          </ul>
          <p className="italic text-gray-600">Un contrat précis réduit le risque de litige et protège votre marge. Pour une validation juridique ou une négociation stratégique, consultez un avocat.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour en temps utile selon vos impératifs'],
              ['Transparence', 'Devis détaillé avant intervention'],
              ['Pertinence documentaire', 'Modèles alignés sur vos process et votre secteur'],
              ['Discrétion', 'Traitement sécurisé des informations sensibles'],
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
            <p className="text-gray-700 mt-1">Selon le livrable (contrat type, CGV/CGU, NDA, charte, modèle) et sa complexité.</p>
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
            ['Quel type de contrats prenez‑vous en charge?', 'Vente, prestation, distribution, sous‑traitance, licence, NDA, CGV/CGU et autres documents associés sous forme de modèles types.'],
            ['Pouvez‑vous adapter un modèle existant?', 'Oui, je le rends clair, cohérent et vous propose des options à faire valider par vos conseils habituels.'],
            ['Qui fournit les informations?', 'Je vous envoie une checklist pour cadrer les parties, prestations, délais, données et annexes.'],
            ['Proposez‑vous des mises à jour?', 'Oui, suivi contractuel et avenants, avec rappels des évolutions réglementaires pertinentes.'],
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
        <h2 className="text-2xl font-semibold text-green-700">Besoin d’un contrat ou d’une documentation interne clairs et sécurisés ?</h2>
        <p className="text-lg text-gray-700">Expliquez‑moi votre besoin ; je prépare une structure contractuelle type, les clauses clés et les modèles internes adaptés.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
          Obtenir un devis
        </button>
      </motion.section>

    </main>
  )
}
