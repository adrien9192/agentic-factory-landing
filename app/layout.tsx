import type { Metadata } from 'next'
import { Source_Sans_3, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '600']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '700']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['500']
})

export const metadata: Metadata = {
  title: 'Agentic Factory | Templates n8n Qui Marchent du Premier Coup',
  description: 'Arretez de debugger. Templates n8n testes 50+ fois. 15 min deploiement vs 6-8h debugging. ROI 300-600% prouve. Garantie 30 jours.',
  keywords: ['n8n', 'make.com', 'automation', 'templates', 'workflows', 'no-code', 'panier abandonne', 'lead gen', 'e-commerce'],
  authors: [{ name: 'Agentic Factory' }],
  openGraph: {
    title: 'Agentic Factory | Templates n8n Qui Marchent du Premier Coup',
    description: 'Templates testes 50+ fois. 15 min deploiement. ROI 300-600% prouve.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Factory',
    description: 'Templates n8n testes 50+ fois. 15 min deploiement.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
