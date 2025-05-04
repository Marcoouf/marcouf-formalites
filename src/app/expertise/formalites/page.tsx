import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Formalités juridiques – Marcouf Formalités',
  description: "Accompagnement sur toutes les formalités juridiques de la vie de l'entreprise.",
}

export default function Formalites() {
  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent">Formalités juridiques</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Un suivi complet des formalités : immatriculation, radiation, transformation, déclaration de bénéficiaires effectifs, etc.
      </p>
    </section>
  )
}