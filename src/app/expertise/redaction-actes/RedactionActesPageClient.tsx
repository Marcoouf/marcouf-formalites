'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail } from '../../../components/StepsRail'
import { scrollSectionToCenter } from '@/lib/scrollSectionToCenter'

const stepsPv = [
  { title: 'Collecte des décisions', desc: 'Vous listez les résolutions à acter et le contexte de l’assemblée.' },
  { title: 'Rédaction du PV', desc: 'Je prépare une trame claire AGO/AGE adaptée à votre besoin.' },
  { title: 'Vérification formelle', desc: 'Contrôle des mentions essentielles, signatures et annexes.' },
  { title: 'Archivage & suivi', desc: 'Version finale prête à classer et à utiliser pour les démarches suivantes.' },
]

export default function RedactionActesPageClient() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSmartScroll = (id: string) => {
    if (pathname === '/') scrollSectionToCenter(id)
    else router.push(`/#${id}`)
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
          Procès-verbaux d’assemblée
        </h1>
        <p className="text-lg text-gray-600">
          Préparation des PV AGO/AGE, décisions associées et formalisation documentaire pour garder un historique propre de la vie sociale.
        </p>
      </motion.header>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🧾 PV AGO / AGE</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">✅ Mentions essentielles contrôlées</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🗂️ Dossier archivable</span>
      </section>

      <StepsRail
        title="Rédaction de PV en 4 étapes"
        subtitle="Décisions, trame, vérification formelle et remise finale."
        steps={stepsPv}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi formaliser correctement les PV ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Sécurité documentaire :</span> décisions traçables et exploitables en cas de contrôle.</li>
            <li><span className="font-medium">Cohérence :</span> alignement entre PV, statuts et démarches administratives.</li>
            <li><span className="font-medium">Gain de temps :</span> modèles prêts à signer et à classer.</li>
          </ul>
          <p className="italic text-gray-600">Pour des questions de stratégie juridique de fond, un avis d’avocat peut être utile en complément.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24 h'],
              ['Clarté', 'Documents structurés et lisibles'],
              ['Rigueur', 'Vérification des mentions clés'],
              ['Confidentialité', 'Traitement sécurisé des informations'],
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
            <p className="text-gray-700 mt-1">Sur devis selon le type d’assemblée et le volume d’actes à produire.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Délai adapté à vos échéances</div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">Demander un devis</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['Traitez-vous AGO et AGE ?', 'Oui, la rédaction couvre les deux types d’assemblée avec leurs particularités.'],
            ['Pouvez-vous relire un PV déjà rédigé ?', 'Oui, je peux reprendre un document existant pour le fiabiliser formellement.'],
            ['Les PV peuvent-ils servir aux formalités ensuite ?', 'Oui, ils sont préparés pour être exploitables dans les étapes administratives liées.'],
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
        <h2 className="text-2xl font-semibold text-[var(--accent)]">Besoin d’un PV d’assemblée clair ?</h2>
        <p className="text-lg text-gray-700">Je vous aide à formaliser les décisions avec une trame propre et exploitable.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>Obtenir un devis</button>
      </motion.section>
    </main>
  )
}
