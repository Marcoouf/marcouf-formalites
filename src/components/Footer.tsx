'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Colonne marque + description + micro-CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Marcouf Formalités</h3>
          <p className="text-sm text-gray-400">
            Service de formalités administratives, guides pratiques et modèles types pour structurer votre activité sereinement.
          </p>
          <div className="mt-4">
            <Link
              href="/#contact"
              className="inline-block text-sm px-3 py-1 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Navigation principale — dans l'ordre de la page, du haut vers le bas */}
        <nav aria-label="Navigation principale">
          <h4 className="text-sm font-semibold mb-4 uppercase text-gray-400">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline underline-offset-4">Accueil</Link></li>
            <li><Link href="/#apropos" className="hover:underline underline-offset-4">À propos</Link></li>
            <li><Link href="/#expertise" className="hover:underline underline-offset-4">Services</Link></li>
            <li><Link href="/#contact" className="hover:underline underline-offset-4">Contact</Link></li>
            <li><Link href="/#latest-articles" className="hover:underline underline-offset-4">Derniers articles</Link></li>
          </ul>
        </nav>

        {/* Coordonnées + Informations légales */}
        <nav aria-label="Coordonnées et informations">
          <h4 className="text-sm font-semibold mb-4 uppercase text-gray-400">Coordonnées</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5 text-gray-400" />
              <a className="hover:underline" href="mailto:contact@marcouf-formalites.fr">contact@marcouf-formalites.fr</a>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5 text-gray-400" />
              <a className="hover:underline" href="tel:+33631581617">06 31 58 16 17</a>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 text-gray-400" />
              <span>Paris, France</span>
            </li>
          </ul>

          <h4 className="text-sm font-semibold mt-6 mb-4 uppercase text-gray-400">Informations</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/marcouf-lebar-25b86a1a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Profil LinkedIn de Marcouf Lebar (nouvelle fenêtre)"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-green-700/30 pt-6">
        <p>&copy; {new Date().getFullYear()} Marcouf Formalités. Tous droits réservés.</p>
        <p className="mt-2 text-gray-500">SIREN 912 345 678 · Paris & à distance · Réponse sous 24 h</p>
      </div>
    </footer>
  )
}
