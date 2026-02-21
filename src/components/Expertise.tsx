'use client'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

const domaines = [
  {
    titre: 'Modification de société',
    description:
      'Changement de dirigeant/siège/objet/dénomination, capital, transformation, dossiers greffe.',
    href: '/expertise/modification',
  },
  {
    titre: 'Contrats & documentation interne',
    description:
      'Contrats (prestation, distribution…), CGV/CGU, NDA, pacte d’associés, baux commerciaux, chartes et documentation RGPD adaptés à votre activité.',
    href: '/expertise/contrats-et-documentation',
  },
  {
    titre: 'Création d’entreprise',
    description:
      'Conseil sur la forme (SAS, SARL, EURL…), statuts, dossier greffe, guichet unique (INPI) et publication.',
    href: '/expertise/creation',
  },
  {
    titre: 'Secrétariat juridique & actes de société',
    description:
      'Approbation des comptes, PV AGO/AGE, délégations de pouvoirs, statuts à jour, registres légaux.',
    href: '/expertise/redaction-actes',
  },
  {
    titre: 'Propriété intellectuelle',
    description:
      'Marques et actifs immatériels : recherches d’antériorité, dépôt (INPI/EUIPO) et suivi jusqu’à l’enregistrement.',
    href: '/expertise/propriete-intellectuelle',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="scroll-mt-32 py-24 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="expertise-title" className="text-4xl font-extrabold text-gray-900 mb-4">Mes domaines d’expertise</h2>
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
                    aria-label={`En savoir plus sur ${domaine.titre}`}
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
