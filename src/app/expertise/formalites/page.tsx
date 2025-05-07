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
    <section className="min-h-screen px-6 py-16 sm:py-24 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-accent text-center">Formalités juridiques</h1>
      <p className="mt-6 text-lg text-center text-gray-600">
        Anticipez et facilitez vos démarches administratives avec un accompagnement complet.
      </p>

      <div className="mt-12 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Pourquoi faire appel à un juriste pour vos formalités ?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Gagner du temps et de l’efficacité : dossiers complets et conformes dès la première soumission.</li>
            <li>Éviter les erreurs coûteuses : omission de pièces, formulaires mal remplis, délais non respectés.</li>
            <li>Limiter les risques de sanctions : pénalités financières, oppositions d’actes, rejet de dossiers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Notre approche : un suivi rigoureux, étape par étape</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Recueil des informations</strong><br/>Vérification de votre situation, liste des pièces, planning personnalisé</li>
            <li><strong>Préparation des dossiers</strong><br/>Formulaires, justificatifs, rédaction conforme</li>
            <li><strong>Dépôt et suivi</strong><br/>Transmission, relances, suivi jusqu’à obtention du K-bis</li>
            <li><strong>Publication et publicité</strong><br/>Annonces légales, attestations de parution</li>
            <li><strong>Archivage et mise à jour</strong><br/>Dossiers certifiés, rappels d’échéance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Les formalités courantes prises en charge</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Type de formalité</th>
                  <th className="p-2 border">Objectif</th>
                  <th className="p-2 border">Détail des prestations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Création d’entreprise</td>
                  <td className="p-2 border">Immatriculation</td>
                  <td className="p-2 border">Formulaire M0, statuts, dépôt de fonds</td>
                </tr>
                <tr>
                  <td className="p-2 border">Modifications statutaires</td>
                  <td className="p-2 border">Mise à jour</td>
                  <td className="p-2 border">Formulaires M2/M3/M4, procès‑verbaux</td>
                </tr>
                <tr>
                  <td className="p-2 border">Cessation d’activité</td>
                  <td className="p-2 border">Radiation</td>
                  <td className="p-2 border">Formulaire P4, bilans, publicité</td>
                </tr>
                <tr>
                  <td className="p-2 border">Cessions de parts</td>
                  <td className="p-2 border">Transmission</td>
                  <td className="p-2 border">Avenants, registre</td>
                </tr>
                <tr>
                  <td className="p-2 border">Annonce légale</td>
                  <td className="p-2 border">Publication</td>
                  <td className="p-2 border">Rédaction et gestion</td>
                </tr>
                <tr>
                  <td className="p-2 border">Dépôts fiscaux</td>
                  <td className="p-2 border">Déclarations</td>
                  <td className="p-2 border">TVA, CVAE, URSSAF, DSN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Nos conseils d’expert</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Anticipez les échéances pour éviter les retards et relances</li>
            <li>Centralisez vos documents pour fluidifier les démarches</li>
            <li>Préparez tous les éléments dès le début du traitement</li>
            <li>Utilisez la dématérialisation pour plus de sécurité</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Nos garanties de qualité</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Réactivité sous 24 h</li>
            <li>Transparence tarifaire</li>
            <li>Expertise éprouvée (200+ dossiers/an)</li>
            <li>Sécurité et confidentialité</li>
          </ul>
        </div>
      </div>

<div className="flex justify-center mt-12">
          <button
            className="btn-devis"
            onClick={scrollToContact}
          >
            Obtenir un devis
          </button>
        </div>

    </section>
  )
}
