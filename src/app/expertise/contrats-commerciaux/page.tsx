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
      <h1 className="text-4xl font-bold text-accent text-center">Création de contrats commerciaux</h1>
      <p className="mt-4 text-center text-lg text-gray-600">
        Sécurisez vos échanges et développez votre activité en toute confiance grâce à un accompagnement juridique complet.
      </p>

      <div className="mt-10 space-y-10 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold">1. Pourquoi faire appel à un juriste pour vos contrats commerciaux ?</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Sécurité juridique :</strong> chaque clause doit être adaptée à votre secteur et à vos risques spécifiques.</li>
            <li><strong>Prévention des litiges :</strong> anticipation des scénarios de rupture, pénalités, médiation, arbitrage.</li>
            <li><strong>Protection de vos intérêts :</strong> obligations claires, propriété intellectuelle, garanties, impayés.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">2. Notre approche : une méthodologie éprouvée</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Audit de vos besoins</strong> : modèle commercial, dépendance, transfert de risque.</li>
            <li><strong>Rédaction personnalisée</strong> : clauses sur mesure, lisibilité, efficacité.</li>
            <li><strong>Validation contractuelle</strong> : relecture, garanties, annexes.</li>
            <li><strong>Suivi et mise à jour</strong> : adaptation RGPD, évolutions juridiques, avenants.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">3. Les principaux types de contrats pris en charge</h2>
          <table className="w-full mt-4 border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Type de contrat</th>
                <th className="border px-4 py-2 text-left">Objectif</th>
                <th className="border px-4 py-2 text-left">Points clés à sécuriser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Contrat de vente</td>
                <td className="border px-4 py-2">Vente de biens ou marchandises</td>
                <td className="border px-4 py-2">Transfert de propriété, garanties légales</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Contrat de prestation de services</td>
                <td className="border px-4 py-2">Prestation intellectuelle ou technique</td>
                <td className="border px-4 py-2">Description, délais, livraison</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Contrat de distribution</td>
                <td className="border px-4 py-2">Réseau commercial</td>
                <td className="border px-4 py-2">Exclusivité, zone, objectifs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Contrat de sous‑traitance</td>
                <td className="border px-4 py-2">Externalisation</td>
                <td className="border px-4 py-2">Confidentialité, responsabilité</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Contrat de licence</td>
                <td className="border px-4 py-2">Propriété intellectuelle</td>
                <td className="border px-4 py-2">Étendue des droits, durée, territoire</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">4. Nos conseils d’expert</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Privilégiez la clarté pour limiter les contestations.</li>
            <li>Ajoutez une clause de médiation pour résoudre les litiges sans procédure.</li>
            <li>Planifiez des révisions contractuelles périodiques.</li>
            <li>Annexes formalisées obligatoires : planning, tarifs, cahiers des charges.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">5. Nos garanties de qualité</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Réactivité :</strong> réponse sous 24 h.</li>
            <li><strong>Transparence :</strong> devis clair et ajusté.</li>
            <li><strong>Expérience :</strong> PME et grands groupes dans tous secteurs.</li>
            <li><strong>Confidentialité :</strong> secret professionnel garanti.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium mb-4">Prêt à sécuriser vos relations commerciales ?</p>
          <div className="flex justify-center mt-12">
          <button
            className="btn-devis"
            onClick={scrollToContact}
          >
            Obtenir un devis
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
