import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudyBySlug, getRelatedCaseStudies, caseStudies } from '@/lib/case-studies'
import CaseStudyHero from '@/components/CaseStudyHero'
import ResultsTimeline from '@/components/ResultsTimeline'
import CaseStudyCard from '@/components/CaseStudyCard'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {
      title: 'Étude de Cas Non Trouvée',
    }
  }

  return {
    title: `${caseStudy.title} | Agentic Factory`,
    description: caseStudy.subtitle,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.subtitle,
      type: 'article',
      publishedTime: caseStudy.published_date,
      tags: [caseStudy.industry, 'automation', 'n8n', 'ROI'],
    },
  }
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const relatedCaseStudies = getRelatedCaseStudies(params.slug, 2)

  return (
    <div className="min-h-screen bg-factory-surface">
      {/* Header */}
      <header className="bg-white border-b border-factory-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Navigation principale">
          <Link href="/" className="text-2xl font-bold font-heading text-factory-charcoal hover:text-factory-orange transition-colors">
            Agentic Factory
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/case-studies" className="text-gray-700 hover:text-factory-orange transition-colors">
              ← Études de Cas
            </Link>
            <Link href="/templates" className="text-gray-700 hover:text-factory-orange transition-colors">
              Templates
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <CaseStudyHero caseStudy={caseStudy} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="space-y-12">
            {/* Problem Section */}
            <section>
              <h2 className="text-3xl font-bold text-factory-charcoal mb-4 font-heading flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xl">
                  ⚠️
                </span>
                Le Problème
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="text-3xl font-bold text-factory-charcoal mb-4 font-heading flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                  💡
                </span>
                La Solution
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {caseStudy.solution}
                </p>

                {/* Tech Stack */}
                <div className="border-t border-blue-200 pt-4">
                  <h3 className="font-semibold text-factory-charcoal mb-3">Stack Technique</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tech_stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-blue-200 rounded-full text-sm font-mono text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Results Timeline */}
            <section>
              <ResultsTimeline results={caseStudy.results} timeline={caseStudy.timeline} />
            </section>

            {/* Full Content */}
            <section>
              <div className="prose prose-lg max-w-none">
                <MarkdownRenderer content={caseStudy.content} />
              </div>
            </section>

            {/* Testimonial Quote */}
            <section className="bg-gradient-to-br from-factory-charcoal to-factory-surface-dark rounded-2xl p-8 md:p-12">
              <div className="text-6xl text-factory-orange mb-4" aria-hidden="true">"</div>
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium">
                {caseStudy.quote.text}
              </blockquote>
              <cite className="not-italic">
                <div className="text-factory-orange font-semibold text-lg">
                  {caseStudy.quote.author}
                </div>
                <div className="text-gray-400">
                  {caseStudy.quote.role}
                </div>
              </cite>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Template CTA Box */}
            <div className="bg-gradient-to-br from-factory-orange to-factory-orange-dark text-white rounded-xl p-6 sticky top-24">
              <h3 className="font-bold text-xl mb-3 font-heading">
                Essayer ce Template
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Même résultat, setup en {caseStudy.setup_time}. ROI {caseStudy.roi} prouvé.
              </p>
              <Link
                href="/templates"
                className="block w-full bg-white text-factory-orange text-center px-6 py-3 rounded-lg font-semibold hover:bg-factory-stone transition-all hover:scale-105"
              >
                Voir le Template →
              </Link>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/80">
                ✓ Setup guide en français
                <br />
                ✓ Garantie 30 jours
                <br />
                ✓ Support illimité
              </div>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-factory-border rounded-lg p-6">
              <h3 className="font-semibold text-factory-charcoal mb-3">
                Partager
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://agenticfactory.com/case-studies/${caseStudy.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#0077B5] text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(caseStudy.title)}&url=${encodeURIComponent(`https://agenticfactory.com/case-studies/${caseStudy.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  X (Twitter)
                </a>
              </div>
            </div>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <div className="bg-white border border-factory-border rounded-lg p-6">
                <h3 className="font-semibold text-factory-charcoal mb-4">
                  Études Similaires
                </h3>
                <div className="space-y-4">
                  {relatedCaseStudies.map((relatedCS) => (
                    <Link
                      key={relatedCS.id}
                      href={`/case-studies/${relatedCS.slug}`}
                      className="block group"
                    >
                      <div className="text-sm font-medium text-factory-orange mb-1">
                        {relatedCS.business_name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-factory-orange transition-colors line-clamp-2">
                        {relatedCS.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        ROI {relatedCS.roi} • {relatedCS.setup_time}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Summary */}
            <div className="bg-factory-surface border border-factory-border rounded-lg p-6">
              <h3 className="font-semibold text-factory-charcoal mb-4">
                En Bref
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Industrie:</dt>
                  <dd className="font-medium text-factory-charcoal">{caseStudy.industry}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">ROI:</dt>
                  <dd className="font-bold text-factory-orange">{caseStudy.roi}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Setup:</dt>
                  <dd className="font-medium text-factory-charcoal">{caseStudy.setup_time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Période:</dt>
                  <dd className="font-medium text-factory-charcoal">{caseStudy.timeline}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Publié:</dt>
                  <dd className="font-medium text-gray-600">
                    {new Date(caseStudy.published_date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Related Case Studies (Mobile) */}
        {relatedCaseStudies.length > 0 && (
          <section className="mt-16 lg:hidden">
            <h2 className="text-2xl font-bold text-factory-charcoal mb-6 font-heading">
              Études Similaires
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedCaseStudies.map((relatedCS) => (
                <CaseStudyCard key={relatedCS.id} caseStudy={relatedCS} />
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-factory-surface via-factory-stone to-factory-surface border border-factory-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-factory-charcoal mb-4 font-heading">
            Obtenir le Même Résultat
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Template testé 50+ fois. Setup en {caseStudy.setup_time}. Garantie 30 jours satisfait ou remboursé.
          </p>
          <Link
            href="/templates"
            className="inline-block bg-factory-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-factory-orange-dark transition-all hover:scale-105 shadow-lg"
          >
            Voir Tous les Templates →
          </Link>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CaseStudy',
            headline: caseStudy.title,
            description: caseStudy.subtitle,
            datePublished: caseStudy.published_date,
            author: {
              '@type': 'Organization',
              name: 'Agentic Factory',
            },
            about: {
              '@type': 'Thing',
              name: caseStudy.business_type,
            },
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: 5,
                bestRating: 5,
              },
              author: {
                '@type': 'Person',
                name: caseStudy.quote.author,
              },
              reviewBody: caseStudy.quote.text,
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}
