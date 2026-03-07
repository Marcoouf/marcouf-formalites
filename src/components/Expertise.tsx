'use client'

import Button from '@/components/Button'

const domaines = [
  {
    titre: 'Formalités d’entreprise',
    description:
      'Création, modification, dissolution, liquidation ou radiation: préparation des pièces et parcours administratif complet.',
    cible: 'Pour les dirigeants qui veulent avancer sans blocage administratif',
    prix: 'À partir de 160 € HT',
    href: '/expertise/creation',
  },
  {
    titre: 'Mise à jour des statuts',
    description:
      'Statuts consolidés après changement de siège, objet, capital, dirigeant ou dénomination.',
    cible: 'Pour les sociétés en évolution',
    prix: 'Sur devis',
    href: '/expertise/modification',
  },
  {
    titre: 'Procès-verbaux d’assemblée',
    description:
      'Préparation des PV AGO/AGE, décisions associées et trames de signatures conformes.',
    cible: 'Pour les assemblées annuelles et extraordinaires',
    prix: 'Sur devis',
    href: '/expertise/redaction-actes',
  },
  {
    titre: 'Recherche d’antériorité de marque',
    description:
      'Analyse des antériorités disponibles avant dépôt pour limiter les risques de conflit.',
    cible: 'Pour sécuriser un nom, une marque ou un signe distinctif',
    prix: 'Sur devis',
    href: '/expertise/propriete-intellectuelle',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section-shell scroll-mt-14 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Services</p>
        <h2 id="expertise-title" className="section-title mt-2">Un périmètre clair: formalités, statuts, PV et antériorité</h2>
        <p className="section-lead mt-3">
          L’offre est recentrée sur les actes utiles à la vie de l’entreprise, avec des documents lisibles et exploitables.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {domaines.map((domaine) => (
          <article key={domaine.titre} className="surface-card flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-900">{domaine.titre}</h3>
              <span className="chip whitespace-nowrap">{domaine.prix}</span>
            </div>

            <p className="mt-3 text-slate-700">{domaine.description}</p>
            <p className="mt-2 text-sm text-slate-600">{domaine.cible}</p>

            <div className="mt-5">
              <Button
                href={domaine.href}
                aria-label={`En savoir plus sur ${domaine.titre}`}
                className="btn-outline"
              >
                En savoir plus
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
