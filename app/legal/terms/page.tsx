import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | Agentic Factory",
  description: "Conditions d'utilisation des templates et workflows n8n - Licence d'utilisation",
}

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-terms.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Conditions d'Utilisation" />
}
