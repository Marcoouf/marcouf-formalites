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
    <section className="min-h-screen px-6 py-16 sm:py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-accent text-center mb-10">Modifications de société</h1>
      
      <p className="text-lg mb-8 text-center">
        Adaptez et faites évoluer votre entreprise en toute sécurité avec un accompagnement juridique complet.
      </p>

      <div className="space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-accent">1. Pourquoi faire appel à un juriste pour vos modifications de société ?</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Respecter les règles légales et administratives</li>
            <li>Limiter les risques de nullité</li>
            <li>Optimiser la gouvernance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-accent">2. Notre approche : un accompagnement étape par étape</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Diagnostic initial :</strong> analyse des impacts, conformité des statuts</li>
            <li><strong>Préparation des actes :</strong> rédaction des PV, statuts, résolutions</li>
            <li><strong>Constitution du dossier :</strong> formulaires M2/M3, annonce légale</li>
            <li><strong>Suivi et obtention des documents :</strong> dépôt, relances, Kbis</li>
            <li><strong>Conseil post-modification :</strong> registres légaux, gouvernance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-accent">3. Les principaux types de modifications prises en charge</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Changement de siège social</li>
            <li>Modification d’objet social</li>
            <li>Augmentation ou réduction de capital</li>
            <li>Nomination ou révocation de dirigeants</li>
            <li>Transformation de la forme sociale</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-accent">4. Nos conseils d’expert</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Anticipez les besoins</li>
            <li>Vérifiez les clauses existantes</li>
            <li>Maîtrisez le calendrier</li>
            <li>Soyez précis dans la rédaction</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-accent">5. Nos garanties de qualité</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Réactivité : traitement sous 24 h</li>
            <li>Transparence tarifaire</li>
            <li>Expertise sectorielle</li>
            <li>Confidentialité absolue</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            <strong>Prêt à faire évoluer votre société ?</strong><br />
            Demandez dès maintenant votre étude de faisabilité gratuite et sécurisez vos prochaines étapes en toute tranquillité.
          </p>
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
  )
}
