import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTemplateBySlug, templates } from '@/lib/templates'
import ReviewsSection from '@/components/ReviewsSection'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }))
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const template = getTemplateBySlug(params.slug)

  if (!template) {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen bg-factory-surface">
        {/* Hero */}
        <section className="py-24 bg-grid-pattern">
          <div className="max-w-5xl mx-auto px-6">
            <Link href="/templates" className="inline-block mb-8 text-factory-text-muted hover:text-factory-orange transition-colors">
              ← Retour aux templates
            </Link>

            <div className="flex items-start justify-between gap-8 mb-8">
              <div className="flex-1">
                <div className="tag-chip mb-4 inline-block">
                  {template.category}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
                  {template.name}
                </h1>
                <p className="text-xl text-factory-text-secondary mb-6">
                  {template.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <div className="text-sm text-factory-text-muted mb-1">ROI</div>
                    <div className="text-2xl font-mono font-bold text-factory-green">{template.roi}</div>
                  </div>
                  <div>
                    <div className="text-sm text-factory-text-muted mb-1">Setup</div>
                    <div className="text-2xl font-mono font-bold text-factory-dark">{template.time}</div>
                  </div>
                  <div>
                    <div className="text-sm text-factory-text-muted mb-1">Prix</div>
                    <div className="text-2xl font-mono font-bold text-factory-orange">{template.price}</div>
                  </div>
                </div>

                {/* Platforms */}
                <div className="flex gap-3">
                  {template.platforms.map((platform) => (
                    <span key={platform} className="badge-price">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price card */}
              <div className="bg-white rounded-xl border-2 border-factory-border p-6 w-80">
                <div className="text-4xl font-mono font-bold text-factory-orange mb-4">
                  {template.price}
                </div>
                <a
                  href="#buy"
                  className="block w-full btn-primary text-center mb-4"
                >
                  Acheter sur Gumroad
                </a>
                <p className="text-sm text-factory-text-muted text-center">
                  Garantie 30 jours. Setup en {template.time}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold font-heading mb-6">Description Complete</h2>
            <p className="text-lg text-factory-text-secondary leading-relaxed mb-8">
              {template.fullDescription}
            </p>

            {/* ROI Breakdown */}
            <div className="bg-factory-stone rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold font-heading mb-6">Breakdown ROI</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {template.roiBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-factory-border">
                    <span className="text-factory-text-secondary font-medium">{item.metric}</span>
                    <span className="font-mono font-bold text-factory-dark">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <h3 className="text-2xl font-bold font-heading mb-6">Fonctionnalites Incluses</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-factory-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-factory-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            {/* Integrations */}
            <h3 className="text-2xl font-bold font-heading mb-6">Integrations Supportees</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {template.integrations.map((integration, index) => (
                <span key={index} className="tag-chip text-base">
                  {integration}
                </span>
              ))}
            </div>

            {/* Setup Guide Preview */}
            <div className="bg-factory-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">Guide Setup Inclus</h3>
              <p className="text-white/80 mb-6">
                Documentation complete avec:
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Guide video FR (etape par etape)</li>
                <li>• Screenshots chaque configuration</li>
                <li>• Liste complete API keys necessaires</li>
                <li>• FAQ troubleshooting (top 5 issues)</li>
                <li>• Support email 48h max</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection templateId={template.id} templateName={template.name} />

        {/* CTA */}
        <section className="py-24 bg-factory-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Pret a Deployer en {template.time}?
            </h2>
            <p className="text-xl text-factory-text-secondary mb-8">
              Achat unique. Setup rapide. ROI mesurable en 7 jours. Garantie 30 jours ou rembourse.
            </p>
            <a
              href="#buy"
              className="btn-primary inline-block"
            >
              Acheter {template.price} →
            </a>
            <p className="mt-6 text-sm text-factory-text-muted">
              ✓ 30-day money-back guarantee • ✓ Lifetime updates included • ✓ Support 48h max
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
