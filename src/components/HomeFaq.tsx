const faqs = [
  {
    question: 'Combien de temps faut-il pour démarrer ?',
    answer:
      'Après un premier échange, vous recevez un plan d’action et la liste des pièces sous 24 heures ouvrées.',
  },
  {
    question: 'Intervenez-vous partout en France ?',
    answer:
      'Oui. Les formalités sont traitées à distance, avec un suivi clair des étapes jusqu’à finalisation.',
  },
  {
    question: 'Puis-je vous confier seulement une partie du dossier ?',
    answer:
      'Oui. Vous pouvez choisir un accompagnement complet ou un appui sur un point précis.',
  },
]

export default function HomeFaq() {
  return (
    <section id="faq" className="section-shell py-16 sm:py-20 scroll-mt-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">FAQ</p>
        <h2 className="section-title mt-2">Questions fréquentes avant de nous contacter</h2>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="surface-card group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900">
              <span>{item.question}</span>
              <span className="text-[#053725] transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
