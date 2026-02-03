import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Agentic Factory',
  description: 'Politique de confidentialité et protection des données personnelles - Conforme RGPD',
}

export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-privacy.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Politique de Confidentialité" />
}
