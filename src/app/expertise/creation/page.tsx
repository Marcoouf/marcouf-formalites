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
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto space-y-8 text-gray-800">
      <h1 className="text-4xl font-bold text-black text-center">Création d’entreprise</h1>
      <p className="text-center text-lg text-gray-700">
        Choisissez la structure la plus adaptée et démarrez sur des bases solides, avec un accompagnement complet.
      </p>

      <section>
        <h2 className="text-2xl text-accent font-semibold mb-2">
          1. Pourquoi faire appel à un juriste pour votre création d’entreprise ?
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Sécurité juridique :</strong> éviter les clauses abusives dans les statuts et sécuriser vos relations contractuelles.</li>
          <li><strong>Optimisation fiscale et sociale :</strong> choisir le régime le plus avantageux pour limiter les charges et l’impôt.</li>
          <li><strong>Prévention des litiges :</strong> anticiper les risques pour protéger votre patrimoine et votre activité.</li>
        </ul>
        <p className="mt-2">
          En confiant votre projet à un juriste, vous gagnez en sérénité et réduisez les coûts cachés d’une erreur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-accent font-semibold mb-2">
          2. Notre approche : un accompagnement sur‑mesure
        </h2>
        <ul className="space-y-2">
          <li><strong>Diagnostic personnalisé :</strong> analyse de votre activité, objectifs et modèle économique.</li>
          <li><strong>Choix de la structure juridique :</strong> comparatif EURL, SASU, SARL, SAS… et simulations fiscales.</li>
          <li><strong>Rédaction et dépôt des statuts :</strong> statuts clairs, dépôt complet du dossier, suivi de l’immatriculation.</li>
          <li><strong>Mise en place des outils de gouvernance :</strong> pactes, règlements, registres, ouverture de comptes pro.</li>
          <li><strong>Suivi post‑création :</strong> conseils, évolutions statutaires, prévention des litiges, veille juridique.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl text-accent font-semibold mb-2">
          3. Choisir la bonne structure : nos conseils experts
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Structure</th>
                <th className="border px-4 py-2">Points forts</th>
                <th className="border px-4 py-2">À prévoir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">EURL / SASU</td>
                <td className="border px-4 py-2">Simplicité de gestion, responsabilité limitée</td>
                <td className="border px-4 py-2">Imposition IR ou IS selon option</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">SARL / SAS</td>
                <td className="border px-4 py-2">Adapté pour plusieurs associés, flexibilité</td>
                <td className="border px-4 py-2">Statuts soignés, pacte conseillé</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">SA</td>
                <td className="border px-4 py-2">Crédibilité renforcée, levée de fonds facilitée</td>
                <td className="border px-4 py-2">Capital élevé, lourdeur administrative</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>Astuce :</strong> La SAS offre souvent la plus grande liberté contractuelle, tandis que la SARL convient bien aux projets familiaux.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-accent font-semibold mb-2">4. Nos garanties de qualité</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Réactivité :</strong> réponse sous 24 h.</li>
          <li><strong>Transparence tarifaire :</strong> devis clair et adapté.</li>
          <li><strong>Expérience confirmée :</strong> +150 entreprises accompagnées.</li>
          <li><strong>Confidentialité :</strong> secret professionnel et données protégées.</li>
        </ul>
      </section>

      <section className="text-accent mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">5. Prêt à démarrer ?</h2>
        <p className="text-center text-lg text-gray-700">
          Contactez-nous pour une première consultation offerte de 30 minutes.
          Ensemble, définissons la structure la plus adaptée à vos ambitions.
        </p>
        <div className="flex justify-center mt-12">
          <button
            className="btn-devis"
            onClick={scrollToContact}
          >
            Obtenir un devis
          </button>
        </div>
      </section>
    </main>
  )
}
