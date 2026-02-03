'use client'

import { useState } from 'react'
import Link from 'next/link'
import { caseStudies, getAllIndustries, getAverageROI, CaseStudy } from '@/lib/case-studies'
import CaseStudyCard from '@/components/CaseStudyCard'
import Footer from '@/components/Footer'

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<CaseStudy['industry'] | 'All'>('All')

  const industries = getAllIndustries()
  const averageROI = getAverageROI()

  const filteredCaseStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === activeFilter)

  const industryCounts: Record<string, number> = {
    'All': caseStudies.length,
    ...industries.reduce((acc, industry) => ({
      ...acc,
      [industry]: caseStudies.filter(cs => cs.industry === industry).length
    }), {} as Record<string, number>)
  }

  const avgSetupTime = Math.round(
    caseStudies.reduce((acc, cs) => acc + parseInt(cs.setup_time.split(' ')[0]), 0) / caseStudies.length
  )

  return (
    <div className="min-h-screen bg-factory-surface">
      {/* Header */}
      <header className="bg-white border-b border-factory-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Navigation principale">
          <Link href="/" className="text-2xl font-bold font-heading text-factory-charcoal hover:text-factory-orange transition-colors">
            Agentic Factory
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/templates" className="text-gray-700 hover:text-factory-orange transition-colors">
              Templates
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-factory-orange transition-colors">
              Pricing
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-factory-surface via-factory-stone to-factory-surface border-b border-factory-border relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(238,108,77,0.1)_10px,rgba(238,108,77,0.1)_20px)]" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-factory-charcoal mb-6 font-heading">
              Études de Cas: ROI Prouvé
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez comment nos clients transforment leur business avec nos templates
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-6">
                <div className="text-4xl font-bold text-factory-orange font-heading mb-1">
                  {averageROI}%
                </div>
                <div className="text-sm text-gray-600">ROI moyen</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-6">
                <div className="text-4xl font-bold text-factory-orange font-heading mb-1">
                  {caseStudies.length}
                </div>
                <div className="text-sm text-gray-600">Success stories</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-6">
                <div className="text-4xl font-bold text-factory-orange font-heading mb-1">
                  {avgSetupTime} min
                </div>
                <div className="text-sm text-gray-600">Setup moyen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Industry Filter Tabs */}
        <div className="mb-12" role="tablist" aria-label="Filtrer par industrie">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 rounded-full font-medium transition-all border-2 ${
                activeFilter === 'All'
                  ? 'bg-factory-orange text-white border-factory-orange'
                  : 'bg-white text-gray-700 border-factory-border hover:border-factory-orange'
              }`}
              role="tab"
              aria-selected={activeFilter === 'All'}
              aria-controls="case-studies-grid"
            >
              All ({industryCounts['All']})
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full font-medium transition-all border-2 ${
                  activeFilter === industry
                    ? 'bg-factory-orange text-white border-factory-orange'
                    : 'bg-white text-gray-700 border-factory-border hover:border-factory-orange'
                }`}
                role="tab"
                aria-selected={activeFilter === industry}
                aria-controls="case-studies-grid"
              >
                {industry} ({industryCounts[industry]})
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div
          id="case-studies-grid"
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          role="tabpanel"
        >
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Aucune étude de cas trouvée pour cette industrie.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-factory-charcoal to-factory-surface-dark rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Prêt à Rejoindre Nos Success Stories?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Chaque template est testé 50+ fois. Setup en 15 minutes. Garantie 30 jours satisfait ou remboursé.
          </p>
          <Link
            href="/templates"
            className="inline-block bg-factory-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-factory-orange-dark transition-all hover:scale-105 shadow-lg"
          >
            Découvrir Nos Templates →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
