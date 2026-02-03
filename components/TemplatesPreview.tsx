'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Category-based image mapping (Unsplash)
const categoryImages: Record<string, string> = {
  'AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=338&fit=crop&q=80',
  'Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=338&fit=crop&q=80',
  'Productivity': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=338&fit=crop&q=80',
  'CRM': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=338&fit=crop&q=80',
  'E-commerce': 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=338&fit=crop&q=80',
  'Unknown': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=338&fit=crop&q=80',
}

// Category icons
const categoryIcons: Record<string, JSX.Element> = {
  'AI': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  'Marketing': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  'Productivity': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'CRM': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'E-commerce': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'Unknown': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

interface WorkflowMetadata {
  id: string
  slug: string
  title_fr: string
  description_short_fr: string
  category: string
  complexity: string
}

interface WorkflowsIndex {
  total: number
  workflows: WorkflowMetadata[]
}

// Legacy templates (keeping for fallback)
const legacyTemplates = [
  {
    id: '001',
    title: 'Récupération Panier Abandonné',
    description: 'Chaque panier abandonné reçoit une séquence d\'emails parfaitement minutée qui ramène les acheteurs — automatiquement.',
    price: '€49',
    platforms: ['n8n', 'Make.com'],
    slug: 'abandoned-cart-recovery',
    popular: true,
  },
  {
    id: '002',
    title: 'Rappel RDV par SMS',
    description: 'Un rendez-vous manqué coûte €50+. Ce template envoie des rappels qui réduisent les absences de 80%.',
    price: '€39',
    platforms: ['n8n', 'Make.com'],
    slug: 'sms-appointment-reminder',
  },
  {
    id: '003',
    title: 'Capture Leads → Nurture Email',
    description: 'Nouveau lead arrive, séquence d\'emails personnalisée part — pendant que vous dormez.',
    price: '€59',
    platforms: ['n8n', 'Make.com'],
    slug: 'lead-capture-nurture',
  },
]

export default function TemplatesPreview() {
  const [workflows, setWorkflows] = useState<WorkflowMetadata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch workflows from JSON
    fetch('/templates/index.json')
      .then((res) => res.json())
      .then((data: WorkflowsIndex) => {
        setWorkflows(data.workflows)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load workflows:', error)
        setLoading(false)
      })
  }, [])

  // Transform workflows to template format
  const allTemplates = [
    ...legacyTemplates.map(t => ({ ...t, category: undefined as string | undefined })),
    ...workflows.map((w, idx) => ({
      id: w.id,
      title: w.title_fr,
      description: w.description_short_fr,
      price: w.complexity === 'Advanced' ? '€50' : '€30',
      platforms: ['n8n'],
      slug: w.slug,
      category: w.category as string | undefined,
      popular: idx === 0, // Mark first workflow as popular
    })),
  ]

  return (
    <section id="templates" className="py-24 bg-factory-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choisissez Votre Template
          </h2>
          <p className="text-lg text-factory-text-secondary max-w-3xl mx-auto">
            {allTemplates.length} workflows éprouvés qui se rentabilisent en quelques jours.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-3 text-factory-text-secondary">
              <svg className="animate-spin h-6 w-6 text-factory-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Chargement des templates...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Templates grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {allTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card-lift bg-white rounded-xl border border-factory-border overflow-hidden relative"
            >
              {/* Popular badge */}
              {template.popular && (
                <div className="badge-popular">
                  Populaire
                </div>
              )}

              {/* Preview Image Area */}
              <div className="aspect-video bg-factory-stone relative overflow-hidden group">
                {/* Real image or gradient fallback */}
                {template.category && categoryImages[template.category] ? (
                  <Image
                    src={categoryImages[template.category]}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-factory-dark/10 to-factory-orange/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 transition-transform duration-300 group-hover:scale-110">⚙️</div>
                    </div>
                  </>
                )}

                {/* Category icon overlay */}
                {template.category && categoryIcons[template.category] && (
                  <div className="absolute top-3 left-3 bg-factory-dark/80 backdrop-blur-sm text-white p-2 rounded-md">
                    {categoryIcons[template.category]}
                  </div>
                )}

                {/* Price Badge (top-right) */}
                <div className="price-badge absolute top-3 right-3">
                  {template.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-factory-dark mb-1">
                  {template.title}
                </h3>
                <p className="text-sm text-factory-text-secondary mb-4 leading-relaxed">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {template.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="text-xs font-mono bg-factory-stone text-factory-dark px-2 py-1 rounded"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {template.slug && workflows.find(w => w.slug === template.slug) ? (
                  <Link
                    href={`/templates/${template.slug}`}
                    className="group flex items-center justify-center gap-2 w-full py-3 text-center font-semibold text-white bg-factory-orange rounded-lg hover:bg-[#E55A2B] transition-all"
                  >
                    Voir le Workflow
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 text-center font-semibold text-white bg-gray-400 rounded-lg cursor-not-allowed"
                  >
                    Bientôt disponible
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-8">
          <a
            href="#email-signup"
            className="btn-secondary group"
          >
            Accès anticipé
            <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        </>
        )}
      </div>
    </section>
  )
}
