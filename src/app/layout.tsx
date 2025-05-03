// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Header peut rester client
import Hero from "@/components/Hero";
import APropos from "../components/APropos";

// Génération de la variable CSS :
//            ↓           ↓  
const geistSans = Geist({  variable: "--font-geist-sans",  subsets: ["latin"] });
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcouf Formalités",
  description: "Votre juriste indépendant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // On applique LES DEUX variables sur <html> (strictement SSR)
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-black">
        <Header />
              <Hero />
        <APropos />
      


        <main className="pt-[80px] min-h-screen bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
