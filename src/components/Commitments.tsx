import { Clock3, FileCheck2, ShieldCheck, Speech } from 'lucide-react'

const items = [
  {
    title: 'Réactivité',
    description: 'Retour sous 24 h avec prochaines actions concrètes.',
    Icon: Clock3,
  },
  {
    title: 'Dossiers structurés',
    description: 'Checklists et documents préparés pour limiter les erreurs.',
    Icon: FileCheck2,
  },
  {
    title: 'Confidentialité',
    description: 'Traitement rigoureux de vos données et pièces sensibles.',
    Icon: ShieldCheck,
  },
  {
    title: 'Communication claire',
    description: 'Explications simples, sans jargon inutile.',
    Icon: Speech,
  },
]

export default function Commitments() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="rounded-2xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Pourquoi choisir Marcouf Formalités</p>
          <h2 className="section-title mt-2">Un cadre de travail fiable pour avancer sans stress</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, Icon }) => (
            <article key={title} className="surface-card p-5">
              <Icon className="h-5 w-5 text-[#053725]" aria-hidden />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
