import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Propriété intellectuelle – Marcouf Formalités',
  description: "Conseils et formalités en matière de protection des droits de propriété intellectuelle.",
}

export default function ProprieteIntellectuelle() {
  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent">Propriété intellectuelle</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Protégez vos marques, logos, créations, contrats de cession ou de licence. 
        Je vous accompagne dans toutes les démarches.
      </p>
    </section>
  )
}