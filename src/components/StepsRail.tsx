'use client'

import React from 'react'
import { motion } from 'framer-motion'

/**
 * StepsRail – section "étapes" façon infogreffe (rail + pastilles numérotées + cartes)
 * ✓ Tailwind + Framer Motion
 * ✓ DA blanc / vert / noir
 * ✓ Icône optionnelle (emoji ou JSX)
 */

export type StepItem = {
  title: string
  desc: string
  icon?: React.ReactNode
}

export function StepsRail({
  title,
  subtitle,
  steps,
  className = '',
}: {
  title: string
  subtitle?: string
  steps: StepItem[]
  className?: string
}) {
  const cols = steps.length
  const gridCols =
    cols === 3 ? 'md:grid-cols-3' : cols === 5 ? 'md:grid-cols-5' : 'md:grid-cols-4'

  return (
    <section
      className={`relative rounded-2xl border border-gray-200 bg-green-50/40 p-6 md:p-10 ${className}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-700 max-w-3xl mx-auto mt-2">{subtitle}</p>}
      </div>

      {/* Rail */}
      <div
        className={`relative grid grid-cols-1 ${gridCols} gap-6 md:gap-8 before:content-[''] before:absolute before:top-6 md:before:top-7 before:left-6 before:right-6 before:h-[2px] before:bg-green-200`}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6 pt-10"
          >
            {/* pastille numérotée */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-green-600 flex items-center justify-center font-semibold text-green-700">
              {i + 1}
            </div>

            {/* icône optionnelle */}
            {s.icon && <div className="mb-2 text-2xl flex items-center justify-center">{s.icon}</div>}

            <h3 className="font-semibold text-lg text-center md:text-left">{s.title}</h3>
            <p className="text-gray-700 mt-1 text-center md:text-left">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* Jeux d'étapes prêts à l'emploi */

export const stepsCreation: StepItem[] = [
  { title: 'Diagnostic', desc: 'Analyse de votre activité, objectifs et modèle économique.' },
  { title: 'Choix de la structure', desc: 'Comparatif EURL, SASU, SARL, SAS…' },
  { title: 'Statuts sur mesure', desc: 'Rédaction claire, adaptée à votre projet et conforme au droit.' },
  { title: 'Formalités & Kbis', desc: 'Annonce légale, dépôt au greffe, suivi jusqu’au Kbis.' },
]

export const stepsModification: StepItem[] = [
  { title: 'Diagnostic', desc: 'Vérification des statuts, impacts juridiques et pièces nécessaires.' },
  { title: 'Actes & Statuts', desc: 'PV (AGO/AGE), statuts mis à jour, rapports si besoin.' },
  { title: 'Formalités', desc: 'Annonce légale, formulaires M2/M3/DBE, dépôt et suivi greffe.'},
  { title: 'Kbis & Suivi', desc: 'Réception du Kbis modifié et recommandations post-modification.' },
]

export const stepsPI: StepItem[] = [
  { title: 'Audit & analyse', desc: 'Recensement des actifs et évaluation des risques.' },
  { title: 'Stratégie de protection', desc: 'Classes, territoires, procédures (INPI, Soleau), calendrier.' },
  { title: 'Dépôt & suivi', desc: 'Dépôt INPI, échanges, renouvellements et surveillances.' },
  { title: 'Contrats & exploitation', desc: 'Cession, licence, confidentialité et redevances.' },
]

export const stepsFormalites: StepItem[] = [
  { title: 'Recueil & vérification', desc: 'Check des pièces et planning personnalisé.' },
  { title: 'Préparation du dossier', desc: 'Formulaires, justificatifs, rédaction conforme des actes.' },
  { title: 'Dépôt & échanges', desc: 'Transmission dématérialisée, relances et réponses au greffe.' },
  { title: 'Obtention & archivage', desc: 'K-bis, attestations et dossiers certifiés.'},
]

export const stepsContrats: StepItem[] = [
  { title: 'Analyse du besoin', desc: 'Modèle économique, parties, risques clés.' },
  { title: 'Rédaction', desc: 'Clauses claires et opérationnelles, adaptées à votre activité.' },
  { title: 'Validation & négociation', desc: 'Allers-retours, conformité et arbitrages.' },
  { title: 'Signature & suivi', desc: 'Version finale, annexes, process de signature, mises à jour.' },
]
