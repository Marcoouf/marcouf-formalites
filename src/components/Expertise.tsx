'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const expertiseList = [
  {
    title: 'Création d’entreprise',
    description: 'Sociétés sur mesure (EURL, SASU, SARL...), statuts, conseils stratégiques.',
    path: '/expertise/creation',
  },
  {
    title: 'Propriété intellectuelle',
    description: 'Marques, droits d’auteur, logiciels, cessions et oppositions INPI.',
    path: '/expertise/propriete-intellectuelle',
  },
  {
    title: 'Modification de société',
    description: 'Transfert de siège, changement de dirigeant, augmentation de capital.',
    path: '/expertise/modification',
  },
  {
    title: 'Formalités juridiques',
    description: 'Dissolution, liquidation, greffe, annonces légales.',
    path: '/expertise/formalites',
  },
  {
    title: 'Contrats commerciaux',
    description: 'CGV, prestations, partenariats, conventions personnalisées.',
    path: '/expertise/contrats-commerciaux',
  },
];

export default function Expertise() {
  const router = useRouter();

  return (
    <section className="px-6 py-20 sm:py-28 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Mes domaines d’expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {expertiseList.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-green-600 transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <button
              onClick={() => router.push(item.path)}
              className="border border-green-600 text-green-600 text-sm rounded-full px-4 py-2 hover:bg-green-50 transition"
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
