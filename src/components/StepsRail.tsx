'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
      className={`relative rounded-2xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-6 md:p-10 ${className}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-700 max-w-3xl mx-auto mt-2">{subtitle}</p>}
      </div>

      <div
        className={`relative grid grid-cols-1 ${gridCols} gap-6 md:gap-8 before:content-[''] before:absolute before:top-6 md:before:top-7 before:left-6 before:right-6 before:h-[2px] before:bg-[var(--border)]`}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative rounded-xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-5 pt-10 shadow-sm md:p-6"
          >
            <div className="absolute -top-4 left-1/2 h-9 w-9 -translate-x-1/2 rounded-full border-[3px] border-[var(--accent)] bg-[var(--background)] text-[var(--accent)] flex items-center justify-center font-semibold md:h-10 md:w-10">
              {i + 1}
            </div>

            {s.icon && <div className="mb-2 text-2xl flex items-center justify-center">{s.icon}</div>}

            <h3 className="font-semibold text-lg text-center md:text-left">{s.title}</h3>
            <p className="text-gray-700 mt-1 text-center md:text-left">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const stepsCreation: StepItem[] = [
  { title: 'Cadrage de la formalité', desc: 'Analyse de l’opération et des obligations administratives à couvrir.' },
  { title: 'Checklist des pièces', desc: 'Liste précise des justificatifs, formulaires et informations à réunir.' },
  { title: 'Préparation documentaire', desc: 'Trames de documents et consignes de signature prêtes à l’usage.' },
  { title: 'Finalisation et suivi', desc: 'Dossier consolidé et accompagnement jusqu’à la clôture de la démarche.' },
]

export const stepsModification: StepItem[] = [
  { title: 'Audit des statuts actuels', desc: 'Repérage des clauses à mettre à jour selon votre décision.' },
  { title: 'Rédaction consolidée', desc: 'Version statutaire révisée avec cohérence globale du document.' },
  { title: 'Actes et pièces annexes', desc: 'PV associé, formulaires et éléments nécessaires à la formalité.' },
  { title: 'Validation finale', desc: 'Contrôle documentaire avant dépôt et archivage des versions.' },
]

export const stepsPI: StepItem[] = [
  { title: 'Définition du signe', desc: 'Nom, logo et classes visées à analyser selon votre activité.' },
  { title: 'Recherche d’antériorité', desc: 'Screening des résultats disponibles (INPI, EUIPO, web) et signaux de conflit.' },
  { title: 'Analyse des risques', desc: 'Lecture synthétique des antériorités proches et niveau d’exposition.' },
  { title: 'Restitution claire', desc: 'Compte rendu exploitable pour décider de déposer, ajuster ou renoncer.' },
]

export const stepsFormalites: StepItem[] = [
  { title: 'Recueil & vérification', desc: 'Check des pièces et planning personnalisé.' },
  { title: 'Préparation du dossier', desc: 'Formulaires complétés, justificatifs et modèles d’actes.' },
  { title: 'Dépôt & échanges', desc: 'Transmission dématérialisée, relances et réponses au greffe.' },
  { title: 'Obtention & archivage', desc: 'K-bis, attestations et dossiers classés.' },
]

export const stepsContrats: StepItem[] = [
  { title: 'Qualification du besoin', desc: 'Nature de la formalité exceptionnelle et impacts juridiques.' },
  { title: 'Préparation des actes', desc: 'PV, statuts, formulaires et pièces annexes à fournir.' },
  { title: 'Dépôt / publicité', desc: 'Publication légale et transmission du dossier selon le cas.' },
  { title: 'Clôture du dossier', desc: 'Vérification des retours et remise d’un dossier final complet.' },
]
