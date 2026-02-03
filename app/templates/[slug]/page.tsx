import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

// Category-based image mapping (Unsplash)
const categoryImages: Record<string, string> = {
  'AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80',
  'Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80',
  'Productivity': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=675&fit=crop&q=80',
  'CRM': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=675&fit=crop&q=80',
  'E-commerce': 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=675&fit=crop&q=80',
  'Unknown': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop&q=80',
}

interface WorkflowData {
  metadata: {
    id: string
    slug: string
    title_fr: string
    description_short_fr: string
    description_full_fr: string
    category: string
    complexity: string
    nodes_count: number
    tags_fr: string[]
  }
  workflow_json: any
}

async function getWorkflow(slug: string): Promise<WorkflowData | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'templates', `${slug}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'templates', 'index.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data.workflows.map((w: any) => ({ slug: w.slug }))
  } catch {
    return []
  }
}

export default async function WorkflowPage({ params }: { params: { slug: string } }) {
  const workflow = await getWorkflow(params.slug)

  if (!workflow) {
    notFound()
  }

  const { metadata } = workflow
  const imageUrl = categoryImages[metadata.category] || categoryImages['Unknown']

  return (
    <main className="min-h-screen bg-factory-surface">
      {/* Hero Section */}
      <section className="py-12 bg-white border-b border-factory-border">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/#templates"
            className="inline-flex items-center text-factory-text-secondary hover:text-factory-orange mb-6 transition-colors"
          >
            ← Retour aux templates
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-factory-border">
              <Image
                src={imageUrl}
                alt={metadata.title_fr}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-factory-dark text-white px-3 py-1.5 rounded-md font-mono text-sm">
                {metadata.complexity === 'Advanced' ? '€50' : '€30'}
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-mono bg-factory-stone text-factory-dark px-2 py-1 rounded">
                  {metadata.category}
                </span>
                <span className="text-xs font-mono bg-factory-stone text-factory-dark px-2 py-1 rounded">
                  {metadata.complexity}
                </span>
                <span className="text-xs font-mono bg-factory-stone text-factory-dark px-2 py-1 rounded">
                  {metadata.nodes_count} nœuds
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {metadata.title_fr}
              </h1>

              <p className="text-lg text-factory-text-secondary mb-6 leading-relaxed">
                {metadata.description_short_fr}
              </p>

              {metadata.tags_fr && metadata.tags_fr.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {metadata.tags_fr.slice(0, 5).map((tag, i) => (
                    <span key={i} className="text-sm bg-factory-orange/10 text-factory-orange px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={`/templates/${metadata.slug}.json`}
                download
                className="inline-block bg-factory-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#E55A2B] transition-colors shadow-sm hover:shadow-md"
              >
                Télécharger le Workflow (JSON)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-lg border border-factory-border p-8">
            <h2 className="text-2xl font-bold mb-6">Description Complète</h2>
            <div className="prose max-w-none text-factory-text-secondary whitespace-pre-wrap leading-relaxed">
              {metadata.description_full_fr || metadata.description_short_fr}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Installation</h2>
          <div className="bg-factory-surface rounded-lg border border-factory-border p-8">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-factory-orange text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Télécharger le fichier JSON</h3>
                  <p className="text-factory-text-secondary">Cliquez sur le bouton de téléchargement ci-dessus.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-factory-orange text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Importer dans n8n</h3>
                  <p className="text-factory-text-secondary">Ouvrez n8n → Workflows → Import from File → Sélectionnez le JSON.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-factory-orange text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Configurer les credentials</h3>
                  <p className="text-factory-text-secondary">Connectez vos comptes (Gmail, Google Sheets, APIs, etc.) dans chaque nœud.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-factory-orange text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Tester & Activer</h3>
                  <p className="text-factory-text-secondary">Exécutez un test avec "Execute Workflow", puis activez le workflow.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-factory-dark text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Automatiser ?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Téléchargez ce workflow maintenant et gagnez du temps dès aujourd'hui.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={`/templates/${metadata.slug}.json`}
              download
              className="bg-factory-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#E55A2B] transition-colors"
            >
              Télécharger le Workflow
            </a>
            <Link
              href="/#templates"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-factory-dark transition-all"
            >
              Voir Tous les Templates
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
