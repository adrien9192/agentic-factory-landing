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
  title: 'Agentic Factory | Stop Losing 20 Hours a Week to Robot Work',
  description: 'Plug-and-play automation templates that pay for themselves in 48 hours. No coding, no agency, no BS.',
  keywords: ['n8n', 'make.com', 'automation', 'templates', 'workflows', 'no-code'],
  authors: [{ name: 'Agentic Factory' }],
  openGraph: {
    title: 'Agentic Factory | Automation Templates That Actually Work',
    description: 'Recover lost sales, kill no-shows, turn leads into customers — automatically.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Factory',
    description: 'Plug-and-play automation templates for n8n & Make.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-factory-surface text-factory-text-primary antialiased">{children}</body>
    </html>
  )
}
