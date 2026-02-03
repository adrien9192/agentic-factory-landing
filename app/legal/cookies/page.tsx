import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique des Cookies | Agentic Factory',
  description: 'Politique de gestion des cookies et traceurs - Conforme CNIL et ePrivacy',
}

export default async function CookiesPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-cookies.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Politique des Cookies" />
}
