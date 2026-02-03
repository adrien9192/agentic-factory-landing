import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Remboursement | Agentic Factory',
  description: 'Garantie satisfait ou remboursé 30 jours - Politique de remboursement complète',
}

export default async function RefundPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-refund.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Politique de Remboursement" />
}
