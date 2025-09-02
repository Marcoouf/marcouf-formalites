// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcouf-formalites.fr'),
  title: {
    template: '%s | Marcouf Formalités',
    default: 'Marcouf Formalités',
  },
  description:
    'Votre juriste indépendant — création, modification, contrats & documentation, secrétariat juridique, propriété intellectuelle.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marcouf Formalités',
    description:
      'Juriste indépendant : création, modification, contrats & documentation, secrétariat juridique, propriété intellectuelle.',
    url: 'https://www.marcouf-formalites.fr',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
<body className="antialiased bg-transparent text-black" suppressHydrationWarning={true}>
        <Header />
      <main className="pt-[80px] min-h-screen bg-transparent text-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
