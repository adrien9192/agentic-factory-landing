import type { Metadata } from 'next'
import { Space_Grotesk, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '700']
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '600']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['500']
})

export const metadata: Metadata = {
  title: 'Agentic Factory | Arrêtez de Perdre 20h par Semaine sur des Tâches qu\'un Robot Devrait Faire',
  description: 'Templates d\'automatisation clé-en-main qui se rentabilisent en 48h — sans coder, sans agence, sans bullshit.',
  keywords: ['n8n', 'make.com', 'automation', 'automatisation', 'templates', 'workflows', 'no-code', 'ia'],
  authors: [{ name: 'Agentic Factory' }],
  openGraph: {
    title: 'Agentic Factory | Templates d\'Automatisation qui Marchent Vraiment',
    description: 'Récupérez des ventes perdues, éliminez les absences, transformez des prospects en clients — automatiquement.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Factory',
    description: 'Templates d\'automatisation clé-en-main pour n8n & Make.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-factory-surface text-factory-text-primary antialiased">{children}</body>
    </html>
  )
}
