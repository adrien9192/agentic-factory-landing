'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { templates } from '@/lib/templates'
import Footer from '@/components/Footer'

export default function TemplatesPage() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const categories = ['all', 'E-commerce', 'Services', 'B2B', 'Local Business', 'Universal', 'Retention']

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = category === 'all' || template.category === category
    const matchesSearch = template.name.toLowerCase().includes(search.toLowerCase()) ||
                          template.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <main className="min-h-screen bg-factory-surface">
        {/* Hero */}
        <section className="py-24 bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <Link href="/" className="inline-block mb-8 text-factory-text-muted hover:text-factory-orange transition-colors">
                ← Retour accueil
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
                Catalogue <span className="text-factory-orange">Templates</span>
              </h1>
              <p className="text-xl text-factory-text-secondary max-w-3xl mx-auto">
                10 templates n8n testes 50+ fois. Import. Connect. Deploy. Ca marche.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Chercher: panier abandonne, lead gen, SEO..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-lg border-2 border-factory-border focus:border-factory-orange focus:outline-none bg-white"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    category === cat
                      ? 'bg-factory-orange text-white'
                      : 'bg-white text-factory-dark border border-factory-border hover:border-factory-orange'
                  }`}
                >
                  {cat === 'all' ? 'Tous' : cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-center text-factory-text-muted mb-8">
              {filteredTemplates.length} template{filteredTemplates.length > 1 ? 's' : ''} trouve{filteredTemplates.length > 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Templates grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-factory-border hover:border-factory-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Badge */}
                  {template.popular && (
                    <div className="bg-factory-orange text-white text-sm font-semibold px-4 py-2 text-center">
                      ⭐ Plus Populaire
                    </div>
                  )}

                  {/* Preview */}
                  <div className="aspect-video bg-factory-stone relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-factory-text-muted text-4xl font-mono">
                        {template.id}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 badge-price">
                      {template.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="tag-chip mb-2 inline-block">
                      {template.category}
                    </div>

                    <h3 className="text-lg font-heading font-medium text-factory-dark mb-2">
                      {template.name}
                    </h3>

                    <p className="text-sm text-factory-text-secondary mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-mono font-semibold text-factory-green">{template.roi} ROI</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-factory-text-muted">⏱️</span>
                        <span className="text-factory-text-secondary">{template.time}</span>
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className="flex gap-2 mb-4">
                      {template.platforms.map((platform) => (
                        <span key={platform} className="tag-chip">
                          {platform}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/templates/${template.slug}`}
                      className="block w-full py-3 text-center font-semibold text-factory-orange border-2 border-factory-orange rounded-lg hover:bg-factory-orange hover:text-white transition-colors"
                    >
                      Voir Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-factory-text-muted mb-4">
                  Aucun template trouve pour ces criteres.
                </p>
                <button
                  onClick={() => {
                    setCategory('all')
                    setSearch('')
                  }}
                  className="btn-primary"
                >
                  Reinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-factory-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-white mb-6">
              Pret a Automatiser?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Chaque template deploye en 15 min. Premier ROI mesure en 7 jours. Garanti ou rembourse.
            </p>
            <Link
              href="/pricing"
              className="btn-primary inline-block"
            >
              Voir les Prix
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
