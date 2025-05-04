import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Modification de société – Marcouf Formalités',
  description: "Gestion des modifications statutaires ou administratives de votre entreprise.",
}

export default function Modification() {
  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent">Modification de société</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Je rédige et dépose vos modifications statutaires (siège social, dénomination, objet, gérance, etc.) et gère toutes les formalités associées.
      </p>
    </section>
  )
}