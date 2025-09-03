// components/Commitments.tsx
export default function Commitments() {
  const items = [
    { t: "Réactivité", d: "Retour sous 24 h et jalons clairs." },
    { t: "Confidentialité", d: "Secret pro et sécurité des données." },
    { t: "Pédagogie", d: "Explications claires, décisions éclairées." },
    { t: "Pragmatisme", d: "Actes opérationnels, sans jargon." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-16 py-14">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Mes engagements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm">
            <div className="font-semibold">{it.t}</div>
            <p className="text-gray-700 text-sm mt-1">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}