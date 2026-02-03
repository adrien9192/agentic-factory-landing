import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | Agentic Factory',
  description: 'Conditions générales de vente de DigitalAine SAS - Templates et workflows n8n',
}

export default async function CGVPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-cgv.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Conditions Générales de Vente" />
}
