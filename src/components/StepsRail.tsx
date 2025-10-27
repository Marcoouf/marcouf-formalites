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
  { title: 'Cadrage', desc: 'Analyse de votre activité, objectifs et pièces à réunir.' },
  { title: 'Choix de la structure', desc: 'Comparatif EURL, SASU, SARL, SAS et impacts administratifs.' },
  { title: 'Modèles & guides', desc: 'Statuts types commentés, lettres et formulaires prêts à personnaliser.' },
  { title: 'Formalités & suivi', desc: 'Annonce légale pré-rédigée, dépôt accompagné et suivi du Kbis.' },
]

export const stepsModification: StepItem[] = [
  { title: 'Cadrage', desc: 'Vérification des statuts, impacts administratifs et pièces nécessaires.' },
  { title: 'Documents types', desc: 'PV, statuts mis à jour et notices explicatives à adapter.' },
  { title: 'Formalités', desc: 'Annonce légale préparée, formulaires préremplis et checklist dépôt.'},
  { title: 'Kbis & suivi', desc: 'Transmission du dossier et suivi administratif (sans représentation).' },
]

export const stepsPI: StepItem[] = [
  { title: 'Analyse documentaire', desc: 'Recensement des actifs immatériels et de leur usage.' },
  { title: 'Plan de dépôt', desc: 'Choix des classes, territoires et calendrier de dépôt.' },
  { title: 'Dépôt & suivi', desc: 'Préparation du dossier INPI/EUIPO, transmission et relances.' },
  { title: 'Modèles & exploitation', desc: 'Trames de cession/licence, clauses clés et suivi administratif.' },
]

export const stepsFormalites: StepItem[] = [
  { title: 'Recueil & vérification', desc: 'Check des pièces et planning personnalisé.' },
  { title: 'Préparation du dossier', desc: 'Formulaires complétés, justificatifs et modèles d’actes.' },
  { title: 'Dépôt & échanges', desc: 'Transmission dématérialisée, relances et réponses au greffe.' },
  { title: 'Obtention & archivage', desc: 'K-bis, attestations et dossiers classés.'},
]

export const stepsContrats: StepItem[] = [
  { title: 'Analyse du besoin', desc: 'Modèle économique, parties, risques clés.' },
  { title: 'Modèles', desc: 'Clauses types clarifiées et adaptées à votre activité.' },
  { title: 'Validation & échanges', desc: 'Allers-retours, conformité documentaire et arbitrages.' },
  { title: 'Signature & suivi', desc: 'Version finalisée, annexes, processus de signature et mises à jour.' },
]
