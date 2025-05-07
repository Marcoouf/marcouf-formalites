

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
    <main className="max-w-4xl mx-auto px-4 py-20 space-y-8">
      <h1 className="text-4xl font-bold text-center text-accent">Propriété intellectuelle</h1>
      <p className="text-lg text-center text-gray-700">Protégez vos marques, logos, créations, contrats de cession ou de licence. Je vous accompagne dans toutes les démarches.</p>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-4">1. Pourquoi faire appel à un juriste en propriété intellectuelle ?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sécurisation de vos droits</strong> : identifier et protéger vos marques et œuvres originales pour éviter toute contrefaçon.</li>
          <li><strong>Valorisation de votre innovation</strong> : structurer vos contrats de cession ou de licence pour maximiser la monétisation de vos créations.</li>
          <li><strong>Prévention des litiges</strong> : anticiper les conflits et prévoir des mécanismes de résolution adaptés.</li>
        </ul>
        <p className="mt-4">Un juriste spécialisé vous garantit une stratégie cohérente et solide, depuis le dépôt jusqu’à l’exploitation de vos droits.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-4">2. Notre approche : un accompagnement complet et personnalisé</h2>
        <h3 className="font-bold mt-2">Audit et analyse</h3>
        <ul className="list-disc pl-6">
          <li>Recensement de vos actifs (marques, droits d’auteur, noms de domaine…)</li>
          <li>Évaluation de l’état de la protection existante et des risques</li>
        </ul>
        <h3 className="font-bold mt-4">Stratégie de protection</h3>
        <ul className="list-disc pl-6">
          <li>Dépôt de marques à l’INPI</li>
          <li>Enregistrement de droits d’auteur (enveloppe Soleau)</li>
          <li>Réservation de noms de domaine</li>
        </ul>
        <h3 className="font-bold mt-4">Rédaction des contrats</h3>
        <ul className="list-disc pl-6">
          <li>Contrats de cession ou de licence</li>
          <li>Clauses de confidentialité, audits, propriété des améliorations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-4">3. Domaines de compétences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Domaine</th>
                <th className="p-2 border">Services clés</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Marques</td>
                <td className="p-2 border">Recherche d’antériorités, dépôt, renouvellement</td>
              </tr>
              <tr>
                <td className="p-2 border">Droits d’auteur</td>
                <td className="p-2 border">Dépôt d’œuvres, preuve de paternité</td>
              </tr>
              <tr>
                <td className="p-2 border">Cession de droits</td>
                <td className="p-2 border">Rédaction d’avenants, garanties</td>
              </tr>
              <tr>
                <td className="p-2 border">Contrats de licence</td>
                <td className="p-2 border">Redevances, territoire, durée</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-4">4. Nos conseils d’expert</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Priorisez le dépôt</strong> : anticiper dès la création pour éviter les conflits.</li>
          <li><strong>Adaptez votre périmètre</strong> : classes et territoires en fonction de votre marché.</li>
          <li><strong>Renouvelez à temps</strong> : évitez la perte de droits.</li>
          <li><strong>Intégrez la PI dans votre stratégie</strong> : valorisez vos actifs immatériels.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-4">5. Nos garanties de qualité</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Réactivité</strong> : retour sous 24 h.</li>
          <li><strong>Transparence tarifaire</strong> : formules claires.</li>
          <li><strong>Confidentialité</strong> : protection totale des données.</li>
        </ul>
      </section>

      <div className="text-center mt-10">
        <p className="text-lg font-medium mb-4">Prêt à sécuriser vos créations ?</p>

        <div className="flex justify-center mt-12">
          <button
            className="btn-devis"
            onClick={scrollToContact}
          >
            Obtenir un devis
          </button>
        </div>
      </div>
    </main>
  )
}
