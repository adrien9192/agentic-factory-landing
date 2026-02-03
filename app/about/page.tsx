import type { Metadata } from 'next'
import Link from 'next/link'
import { aboutContent, aboutMeta } from '@/lib/about-content'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'

// SEO Metadata
export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
  keywords: aboutMeta.keywords,
}

// Icon SVG components
const iconPaths: Record<string, string> = {
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  trendingUp: 'M23 6l-9.5 9.5-5-5L1 18',
  video: 'M23 7l-7 5 7 5V7z M2 5h14v14H2z',
  refresh: 'M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15',
  message: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  heart: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
  dollar: 'M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'
}

const Icon = ({ name }: { name: string }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[name]} />
  </svg>
)

export default function AboutPage() {
  const trustIconNames = ['shield', 'trendingUp', 'video', 'refresh', 'message']
  const valuesIconNames = ['heart', 'star', 'users', 'dollar']

  return (
    <>
      <main className="min-h-screen bg-factory-surface">
        {/* Hero Section */}
        <section className="relative py-24 bg-factory-surface bg-grid-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-factory-dark/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <Link
              href="/"
              className="inline-block mb-8 text-factory-text-muted hover:text-factory-orange transition-colors"
            >
              ← Retour accueil
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-factory-dark mb-6">
              {aboutContent.hero.headline}
            </h1>
            <p className="text-xl text-factory-text-secondary leading-relaxed mb-6">
              {aboutContent.hero.opening}
            </p>
            <p className="text-2xl font-semibold text-factory-orange leading-relaxed">
              {aboutContent.hero.mission}
            </p>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-factory-dark text-center mb-4">
              {aboutContent.whyTrust.headline}
            </h2>
            <p className="text-center text-factory-text-muted mb-12 text-lg italic">
              {aboutContent.whyTrust.tagline}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {aboutContent.whyTrust.points.map((point, index) => (
                <div
                  key={index}
                  className="bg-factory-surface p-6 rounded-lg border border-factory-border hover:border-factory-orange transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-factory-orange/10 rounded-lg flex items-center justify-center text-factory-orange">
                      <Icon name={trustIconNames[index]} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-heading text-factory-dark mb-2">
                        {point.title}
                      </h3>
                      <p className="text-factory-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <MarkdownRenderer content={aboutContent.story} />
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-factory-stone">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-factory-orange mb-2 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-factory-dark mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-factory-text-muted">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image Placeholder */}
              <div className="aspect-[4/5] bg-factory-stone rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-factory-text-muted">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <div className="text-xl font-semibold">{aboutContent.founder.name}</div>
                    <div className="text-sm mt-2">{aboutContent.founder.role}</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold font-heading text-factory-dark mb-2">
                  {aboutContent.founder.name}
                </h2>
                <p className="text-lg text-factory-text-muted mb-6">
                  {aboutContent.founder.role}
                </p>
                <div className="prose prose-lg max-w-none mb-8">
                  <MarkdownRenderer content={aboutContent.founder.bio} />
                </div>
                <a
                  href={`mailto:${aboutContent.founder.contact}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors w-fit"
                >
                  Contactez-moi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-factory-surface">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-factory-dark text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {aboutContent.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-factory-border hover:border-factory-orange transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-factory-orange/10 rounded-lg flex items-center justify-center text-factory-orange">
                      <Icon name={valuesIconNames[index]} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold font-heading text-factory-dark mb-3">
                        {value.title}
                      </h3>
                      <p className="text-factory-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-factory-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-factory-orange/10 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              {aboutContent.cta.headline}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {aboutContent.cta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={aboutContent.cta.primary.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors text-lg"
              >
                {aboutContent.cta.primary.text}
              </Link>
              <a
                href={aboutContent.cta.secondary.href}
                className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors"
              >
                {aboutContent.cta.secondary.text}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Agentic Factory",
            founder: {
              "@type": "Person",
              name: "Adrien Laine",
              jobTitle: "Fondateur",
              email: "digitalaine@gmail.com"
            },
            description: "Templates d'automatisation n8n pour PME francaises. Workflows testes, ROI verifie, guides en francais.",
            foundingDate: "2025",
            areaServed: "France",
            contactPoint: {
              "@type": "ContactPoint",
              email: "digitalaine@gmail.com",
              contactType: "customer service",
              availableLanguage: "French"
            }
          })
        }}
      />
    </>
  )
}
