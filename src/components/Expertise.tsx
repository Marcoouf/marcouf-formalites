'use client'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

const domaines = [
  {
    titre: 'Création d’entreprise',
    description:
      'Choisissez la structure la plus adaptée et démarrez sur des bases solides, avec un accompagnement complet.',
    href: '/expertise/creation',
  },
  {
    titre: 'Propriété intellectuelle',
    description:
      'Protégez vos créations, marques et idées. Dépôts, recherches d’antériorité, stratégie de protection.',
    href: '/expertise/propriete-intellectuelle',
  },
  {
    titre: 'Modification de société',
    description:
      'Adaptez votre structure à l’évolution de votre activité : transfert, changement de dirigeant, augmentation de capital…',
    href: '/expertise/modification-societe',
  },
  {
    titre: 'Formalités juridiques',
    description:
      'Clôture, radiation, dissolution ou publication d’annonce légale : je m’occupe de toutes les démarches.',
    href: '/expertise/formalites-juridiques',
  },
  {
    titre: 'Contrats commerciaux',
    description:
      'Mettez en place des contrats solides et adaptés à votre activité : CGV, partenariats, prestations de service…',
    href: '/expertise/contrats-commerciaux',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Mes domaines d’expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            J’interviens sur l’ensemble des sujets juridiques liés à la structuration, l’évolution et la protection de votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {domaines.map((domaine, index) => {
            const isMiddle = index === 2

            return (
              <motion.div
                key={domaine.titre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl border border-black/10 shadow-md p-6 flex flex-col justify-between transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl ${
                  isMiddle
                    ? 'lg:col-span-2 text-center bg-gradient-to-br from-green-100 via-white to-green-50'
                    : 'bg-white text-left'
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{domaine.titre}</h3>
                  <p className="text-gray-600 text-sm">{domaine.description}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    href={domaine.href}
                    className="text-sm px-3 py-1 border border-black rounded-full hover:bg-black hover:text-white transition"
                  >
                    En savoir plus
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
