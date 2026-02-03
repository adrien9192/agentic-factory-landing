import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

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
    sections?: {
      why?: string
      description?: string
      installation?: string
      usage?: string
      tips?: string
      learning?: string
    }
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
            className="inline-flex items-center gap-2 text-factory-text-secondary hover:text-factory-orange mb-6 transition-all duration-150 hover:-translate-x-1 font-medium group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux templates
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-factory-border group">
              <Image
                src={imageUrl}
                alt={metadata.title_fr}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-factory-dark text-white px-3 py-1.5 rounded-md font-mono text-sm shadow-lg border border-white/10">
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

              <p className="text-lg text-factory-text-secondary mb-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
                {metadata.description_short_fr}
              </p>

              {metadata.tags_fr && metadata.tags_fr.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {metadata.tags_fr.slice(0, 5).map((tag, i) => (
                    <span key={i} className="text-sm bg-factory-orange/10 text-factory-orange px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={`/templates/${metadata.slug}.json`}
                download
                className="inline-flex items-center gap-2 bg-factory-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#E55A2B] active:bg-[#CC4F26] transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger le Workflow (JSON)
              </a>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-factory-text-secondary">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-factory-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Installation 15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-factory-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Garantie 30 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      {metadata.sections?.why && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-factory-orange/5 to-factory-orange/10 rounded-lg border border-factory-orange/20 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Pourquoi ce workflow va vous sauver la vie
              </h2>
              <MarkdownRenderer content={metadata.sections.why} />
            </div>
          </div>
        </section>
      )}

      {/* Description Section */}
      {metadata.sections?.description && (
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-factory-surface rounded-lg border border-factory-border p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Comment ça marche
              </h2>
              <MarkdownRenderer content={metadata.sections.description} />
            </div>
          </div>
        </section>
      )}

      {/* Usage Section */}
      {metadata.sections?.usage && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-lg border border-factory-border p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Cas d'utilisation concrets
              </h2>
              <MarkdownRenderer content={metadata.sections.usage} />
            </div>
          </div>
        </section>
      )}

      {/* Pro Tips Section */}
      {metadata.sections?.tips && (
        <section className="py-12 bg-factory-dark text-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Conseils de pro
            </h2>
            <div className="tips-section">
              <MarkdownRenderer content={metadata.sections.tips} darkMode={true} />
            </div>
          </div>
        </section>
      )}

      {/* Learning Section */}
      {metadata.sections?.learning && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-factory-orange/5 to-factory-surface rounded-lg border border-factory-border p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Ce que vous allez apprendre
              </h2>
              <MarkdownRenderer content={metadata.sections.learning} />
            </div>
          </div>
        </section>
      )}

      {/* Installation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            Installation
          </h2>
          <div className="bg-factory-surface rounded-lg border border-factory-border p-8">
            {metadata.sections?.installation ? (
              <MarkdownRenderer content={metadata.sections.installation} />
            ) : (
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
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-factory-dark text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Automatiser ?</h2>
          <p className="text-lg text-white/80 mb-2 max-w-2xl mx-auto">
            Téléchargez ce workflow maintenant et gagnez du temps dès aujourd'hui.
          </p>
          <p className="text-sm text-factory-orange font-medium mb-8">
            Installation en 15 minutes • Garantie satisfait ou remboursé 30 jours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`/templates/${metadata.slug}.json`}
              download
              className="inline-flex items-center justify-center gap-2 bg-factory-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#E55A2B] active:bg-[#CC4F26] transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger le Workflow
            </a>
            <Link
              href="/#templates"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-factory-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Voir Tous les Templates
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mises à jour gratuites</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Support réactif</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
