'use client'

import Image from 'next/image'
const photoMarcouf = '/photomarcouf.webp'

export default function APropos() {
  return (
    <section
      id="apropos"
      className="relative isolate scroll-mt-28 px-6 py-24 sm:py-32 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo avec style original */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-3xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition duration-700">
        <Image
  src={photoMarcouf}
  alt="Marcouf Lebar"
  className="object-cover w-full h-auto"
  width={500}
  height={600}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  fetchPriority="high"
/>          </div>
        </div>

        {/* Texte + valeurs */}
        <div className="space-y-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            À propos
          </h2>

          <p className="text-lg text-gray-600">
            Spécialiste des formalités d&apos;entreprise, je conçois des guides, modèles et checklists pour aider les dirigeants et dirigeantes à structurer leurs démarches administratives en toute autonomie.
            Fort d&apos;une expérience auprès des entrepreneurs et des PME, je propose un support personnalisé, accessible et documenté.
          </p>

          <p className="text-lg text-gray-600">
            Mon activité couvre la préparation des dossiers de création de sociétés, les modifications statutaires, la clôture d&apos;activité, ainsi que la mise à disposition d&apos;outils pour protéger vos signes distinctifs.
            J&apos;accorde une attention particulière à la pédagogie, à la réactivité et à la fiabilité des informations partagées.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 pt-4">
            <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
            Expertise
            </h3>              <p className="text-sm text-gray-600">
                Maîtrise complète des procédures auprès des greffes et de l&apos;INPI.
              </p>
            </div>
            <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
            Clarté
            </h3>
            <p className="text-sm text-gray-600">
                Des explications concrètes et compréhensibles.
              </p>
            </div>
            <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
            Réactivité
            </h3>              <p className="text-sm text-gray-600">
                Un suivi rigoureux et des réponses rapides.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
