'use client'

import React from 'react'

export default function CreationPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-accent text-center">Contrats commerciaux sur mesure</h1>
      <p className="mt-4 text-center text-lg text-gray-600">
        Sécurisez vos relations d’affaires grâce à des contrats parfaitement adaptés à vos enjeux et à votre secteur.
      </p>

      <div className="mt-12 space-y-12 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold">Pourquoi faire appel à un juriste&nbsp;?</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Sécurité juridique :</strong> des clauses adaptées à vos activités et à vos risques.</li>
            <li><strong>Prévention des litiges :</strong> anticiper les litiges avec des mécanismes clairs (médiation, pénalités, résiliation).</li>
            <li><strong>Protection de vos intérêts :</strong> éviter les impayés, garantir les délais et protéger vos créations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Une méthode claire et efficace</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Analyse de vos besoins :</strong> modèle économique, parties concernées, risques spécifiques.</li>
            <li><strong>Rédaction sur mesure :</strong> clauses précises, lisibles, opérationnelles.</li>
            <li><strong>Validation juridique :</strong> relecture complète, vérification des obligations légales et annexes.</li>
            <li><strong>Suivi dans le temps :</strong> mises à jour contractuelles, conformité RGPD, avenants.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Exemples de contrats pris en charge</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Finalité</th>
                  <th className="border px-4 py-2 text-left">Points sensibles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Vente</td>
                  <td className="border px-4 py-2">Cession de biens ou marchandises</td>
                  <td className="border px-4 py-2">Transfert de propriété, garanties</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Prestation de service</td>
                  <td className="border px-4 py-2">Mission intellectuelle ou technique</td>
                  <td className="border px-4 py-2">Délais, livrables, propriété des résultats</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Distribution</td>
                  <td className="border px-4 py-2">Structuration d’un réseau</td>
                  <td className="border px-4 py-2">Exclusivité, territoire, performance</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Sous-traitance</td>
                  <td className="border px-4 py-2">Externalisation d’activité</td>
                  <td className="border px-4 py-2">Confidentialité, responsabilité</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Licence</td>
                  <td className="border px-4 py-2">Exploitation d’un droit immatériel</td>
                  <td className="border px-4 py-2">Étendue, durée, exclusivité</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Conseils pour un contrat solide</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Privilégiez la clarté et la simplicité pour chaque clause.</li>
            <li>Ajoutez une clause de médiation obligatoire avant tout contentieux.</li>
            <li>Formalisez les annexes : planning, devis, cahier des charges.</li>
            <li>Faites relire et mettre à jour vos contrats tous les 12 à 24 mois.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Mes engagements</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Réactivité :</strong> retour sous 24 h.</li>
            <li><strong>Transparence :</strong> devis détaillé avant toute intervention.</li>
            <li><strong>Expérience :</strong> PME, professions libérales, artisans, start-ups.</li>
            <li><strong>Discrétion :</strong> secret professionnel rigoureux.</li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-medium mb-6">Besoin d’un contrat clair, adapté et sécurisé&nbsp;?</p>
          <button
            className="btn-devis"
            onClick={scrollToContact}
            aria-label="Obtenir un devis"
          >
            Obtenir un devis
          </button>
        </div>
      </div>
    </section>
  );
}
