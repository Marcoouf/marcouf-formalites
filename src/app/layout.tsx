import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTopOnRouteChange from '../components/ScrollToTopOnRouteChange'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const headingFont = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

const bodyFont = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcouf-formalites.fr'),
  title: {
    template: '%s | Marcouf Formalités',
    default: 'Marcouf Formalités',
  },
  description:
    'Service centré sur les formalités d’entreprise, la mise à jour des statuts, les procès-verbaux d’assemblée et la recherche d’antériorité.',
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
      'Service centré sur les formalités d’entreprise, la mise à jour des statuts, les procès-verbaux d’assemblée et la recherche d’antériorité.',
    url: 'https://www.marcouf-formalites.fr',
    siteName: 'Marcouf Formalités',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ScrollToTopOnRouteChange />
        <Header />
        <main className="pt-[82px] sm:pt-[92px] min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
