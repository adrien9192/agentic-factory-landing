import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Agentic Factory | Production-Ready Automation Templates',
  description: 'Production-ready automation templates for n8n & Make.com. 100% success rate guaranteed. Save 10-15 hours per template.',
  keywords: ['n8n', 'make.com', 'automation', 'templates', 'workflows', 'no-code'],
  authors: [{ name: 'Agentic Factory' }],
  openGraph: {
    title: 'Agentic Factory | Production-Ready Automation Templates',
    description: 'Templates that actually work. 100% success rate guaranteed.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Factory',
    description: 'Production-ready automation templates for n8n & Make.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
