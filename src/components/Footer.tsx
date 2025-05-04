'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Marcouf Formalités</h3>
          <p className="text-sm text-gray-400">
            Accompagnement juridique sur mesure pour structurer votre activité avec sécurité.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase text-gray-400">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/#services" className="hover:underline">Services</Link></li>
            <li><Link href="/a-propos" className="hover:underline">À propos</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase text-gray-400">Informations</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/marcouf-lebar-25b86a1a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Marcouf Formalités. Tous droits réservés.
      </div>
    </footer>
  );
}
