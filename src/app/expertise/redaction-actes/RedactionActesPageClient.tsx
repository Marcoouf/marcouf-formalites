'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { StepsRail } from '../../../components/StepsRail'

const stepsActes = [
  { title: 'Cadrage & checklist', desc: 'Besoins, pièces, calendrier. Liste des actes et formalités.' },
  { title: 'Rédaction des actes', desc: 'PV AGO/AGE, décisions, délégations, mises à jour statutaires.' },
  { title: 'Signature & registres', desc: 'Process de signature, inscription dans les registres obligatoires.' },
  { title: 'Formalités & archivage', desc: 'Dépôts nécessaires, attestations, conservation sécurisée.' },
]

export default function RedactionActesPageClient() {
  const pathname = usePathname()
  const router = useRouter()
  const handleSmartScroll = (id: string) => {
    if (pathname === '/') document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    else router.push(`/#${id}`)
  }

  return (
    <main className="relative z-10 min-h-screen mx-auto max-w-6xl px-6 sm:px-16 py-16 space-y-16 text-gray-800 overflow-hidden bg-white bg-noise-paper bg-repeat">
      {/* HERO */}
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
          Secrétariat juridique & actes de société
        </h1>
        <p className="text-lg text-gray-600">
          Approbation des comptes, procès‑verbaux (AGO/AGE), délégations de pouvoirs, statuts à jour et registres légaux. Rédaction, relecture et tenue conformes, formalités si besoin.
        </p>
      </motion.header>

      {/* Badges */}
      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📅 Secrétariat annuel</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">📘 Statuts à jour</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">🗂️ Registres & PV</span>
      </section>

      {/* Étapes (rail) */}
      <StepsRail
        title="Un accompagnement en 4 étapes"
        subtitle="Cadrage & checklist, actes, signature & registres, formalités & archivage."
        steps={stepsActes}
      />

      {/* Pourquoi + Garanties */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire appel à un juriste ?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-medium">Sécurité juridique :</span> éviter les zones grises et les clauses inopérantes.</li>
            <li><span className="font-medium">Lisibilité opérationnelle :</span> des actes clairs et actionnables par les équipes.</li>
            <li><span className="font-medium">Gain de temps :</span> structure, annexes et signatures cadrées.</li>
          </ul>
          <p className="italic text-gray-600">Un acte précis réduit les litiges et protège vos intérêts.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mes garanties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Réactivité', 'Retour sous 24 h'],
              ['Transparence', 'Devis détaillé et étapes claires'],
              ['Conformité', 'Actes à jour + pièces vérifiées'],
              ['Confidentialité', 'Secret professionnel'],
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
            <p className="text-gray-700 mt-1">Selon l’acte (PV, statuts, délégations, registres…) et la complexité.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">Sur devis</div>
            <div className="text-gray-600">Planning adapté à vos échéances</div>
            <div className="mt-3">
              <button onClick={() => handleSmartScroll('contact')} className="btn-devis">Demander un devis</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            ['Gérez-vous l’approbation des comptes ?', 'Oui : convocation, procès‑verbal, dépôt si requis et tenue des registres.'],
            ['Pouvez-vous remettre à jour des statuts obsolètes ?', 'Oui : refonte conforme et mise à jour des clauses impactées.'],
            ['Tenez-vous les registres obligatoires ?', 'Oui : registres des décisions/assemblées et des pouvoirs, avec conservation.'],
            ['Quels sont les délais ?', 'Selon l’urgence : première version en 24–72 h en général.'],
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

      {/* CTA */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700">Un secrétariat juridique clair et à jour ?</h2>
        <p className="text-lg text-gray-700">Expliquez-moi votre besoin ; je prépare la bonne structure et les clauses clés.</p>
        <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>Obtenir un devis</button>
      </motion.section>
    </main>
  )
}
