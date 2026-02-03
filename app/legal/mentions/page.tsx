import { promises as fs } from 'fs'
import path from 'path'
import LegalPage from '@/components/LegalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Agentic Factory',
  description: 'Mentions légales - DigitalAine SAS, informations légales et éditeur du site',
}

export default async function MentionsPage() {
  const filePath = path.join(process.cwd(), 'content/legal/legal-mentions.md')
  const content = await fs.readFile(filePath, 'utf8')

  return <LegalPage content={content} title="Mentions Légales" />
}
