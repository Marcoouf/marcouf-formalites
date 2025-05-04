import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contrats commerciaux – Marcouf Formalités',
  description: "Rédaction et sécurisation de vos contrats commerciaux : CGV, conventions de prestation, partenariats, etc.",
};

export default function ContratsCommerciaux() {
  return (
    <section className="min-h-screen px-6 py-16 sm:py-24 text-center">
      <h1 className="text-4xl font-bold text-accent">Contrats commerciaux</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Une expertise dédiée à la rédaction de contrats solides : CGV, conventions de prestation, partenariats, accords de confidentialité, etc.
      </p>
    </section>
  );
}
