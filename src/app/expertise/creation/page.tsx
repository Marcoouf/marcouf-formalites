'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

export default function CreationPage() {
  const pathname = usePathname()
  const router = useRouter()
  const handleSmartScroll = (id: string) => {
    if (pathname === '/') {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[3000px] z-[-10] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#34d399" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" opacity="0.1" />
        </svg>
      </div>

      <main className="relative z-10 min-h-screen px-6 sm:px-16 py-16 max-w-6xl mx-auto space-y-16 text-gray-800 overflow-hidden bg-transparent">
        <motion.header
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Création d’entreprise</h1>
          <p className="text-lg text-gray-600">
            Choisissez la structure la plus adaptée et démarrez sur des bases solides, avec un accompagnement complet.
          </p>
        </motion.header>

        {[{
          title: 'Pourquoi faire appel à un juriste ?',
          content: (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">Sécurité juridique</h3>
                <p className="w-full md:w-2/3">Éviter les clauses abusives et sécuriser vos relations contractuelles.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">Optimisation fiscale et sociale</h3>
                <p className="w-full md:w-2/3">Choisir le régime le plus avantageux pour limiter les charges.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">Prévention des litiges</h3>
                <p className="w-full md:w-2/3">Anticiper les risques pour protéger votre activité et votre patrimoine.</p>
              </div>
              <p className="italic text-gray-600"> En confiant votre projet à un juriste, vous gagnez en sérénité et réduisez les coûts cachés d’une erreur.</p>
            </div>
          )
        }, {
          title: 'Notre accompagnement',
          content: (
            <div className="space-y-4">
              {[
                ['Diagnostic personnalisé', 'Analyse de votre activité, objectifs et modèle économique.'],
                ['Choix de la structure juridique', 'Comparatif EURL, SASU, SARL, SAS… et simulations fiscales.'],
                ['Rédaction des statuts', 'Clairs, adaptés à vos besoins, déposés avec un dossier complet.'],
                ['Formalités de création', 'Capital, annonces légales, dépôt au greffe, suivi Kbis.'],
                ['Conseils post-création', 'Gouvernance, évolutions statutaires, veille juridique.']
              ].map(([title, text], i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">{title}</h3>
                  <p className="w-full md:w-2/3">{text}</p>
                </div>
              ))}
            </div>
          )
        }, {
          title: 'Quelle structure choisir ?',
          content: (
            <div className="space-y-4">
              {[
                ['EURL / SASU', 'Idéal pour les entrepreneurs seuls, gestion simplifiée, responsabilité limitée.'],
                ['SARL / SAS', 'Adaptées aux associés multiples, souplesse contractuelle et gouvernance ajustable.'],
                ['SA', 'Structure exigeante mais adaptée à des projets avec levée de fonds ou forte crédibilité.']
              ].map(([title, text], i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">{title}</h3>
                  <p className="w-full md:w-2/3">{text}</p>
                </div>
              ))}
              <p className="italic text-gray-600">La SAS offre souvent la liberté contractuelle la plus large, tandis que la SARL convient bien aux projets familiaux.</p>
            </div>
          )
        }, {
          title: 'Nos garanties',
          content: (
            <div className="space-y-4">
              {[
                ['Réactivité', 'Réponse sous 24 h.'],
                ['Transparence', 'Devis clair et adapté à votre projet.'],
                ['Expérience', 'Plus de 150 entreprises accompagnées.'],
                ['Confidentialité', 'Secret professionnel et sécurité de vos données.']
              ].map(([title, text], i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <h3 className="w-full md:w-1/3 font-semibold text-black text-lg">{title}</h3>
                  <p className="w-full md:w-2/3">{text}</p>
                </div>
              ))}
            </div>
          )
        }].map(({ title, content }, i) => (
          <motion.section
            key={i}
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-[280px] bg-white border-2 border-green-700 shadow-xl rounded-xl p-6 flex items-center justify-center h-fit transition-all duration-200">
              <h2 className="text-2xl font-semibold text-black mb-0 text-center">{title}</h2>
            </div>
            <div className="w-full md:w-2/3 bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md rounded-xl p-6 flex flex-col justify-center hover:shadow-lg transition-all duration-200">
              {content}
            </div>
          </motion.section>
        ))}

        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-green-700">Prêt à démarrer ?</h2>
          <p className="text-lg text-gray-700">
            Contactez-nous pour une première consultation offerte de 30 minutes. Ensemble, structurons votre projet sur des bases solides.
          </p>
          <button className="btn-devis" onClick={() => handleSmartScroll('contact')}>
            Discuter de mon besoin
          </button>
        </motion.section>
      </main>
    </>
  )
}
