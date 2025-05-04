'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const domaines = [
  {
    title: "Création d’entreprise",
    slug: "creation-entreprise",
    description: "Sociétés sur mesure (EURL, SASU, SARL...), statuts, conseils stratégiques.",
  },
  {
    title: "Propriété intellectuelle",
    slug: "propriete-intellectuelle",
    description: "Marques, droits d’auteur, logiciels, cessions et oppositions INPI.",
  },
  {
    title: "Modification de société",
    slug: "modification-societe",
    description: "Transfert de siège, changement de dirigeant, augmentation de capital.",
  },
  {
    title: "Formalités juridiques",
    slug: "formalites-juridiques",
    description: "Dissolution, liquidation, greffe, annonces légales.",
  },
  {
    title: "Contrats commerciaux",
    slug: "contrats-commerciaux",
    description: "CGV, prestations, partenariats, conventions personnalisées.",
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-black text-center mb-16">
          Mes domaines d’expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => (
            <motion.div
              key={domaine.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {domaine.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {domaine.description}
                </p>
              </div>
              <Link
                href={`/expertise/${domaine.slug}`}
                className="mt-6 inline-block rounded-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition px-5 py-2 text-sm text-center font-medium group-hover:underline"
              >
                En savoir plus
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
