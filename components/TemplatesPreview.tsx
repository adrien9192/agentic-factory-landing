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
    ...legacyTemplates,
    ...workflows.map((w) => ({
      id: w.id,
      title: w.title_fr,
      description: w.description_short_fr,
      price: w.complexity === 'Advanced' ? '€50' : '€30',
      platforms: ['n8n'],
      slug: w.slug,
      category: w.category,
    })),
  ]

  return (
    <section id="templates" className="py-24 bg-factory-surface">
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
          <div className="text-center py-12">
            <div className="text-factory-text-secondary">Chargement des templates...</div>
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-factory-border overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview Image Area */}
              <div className="aspect-video bg-factory-stone relative overflow-hidden">
                {/* Real image or gradient fallback */}
                {template.category && categoryImages[template.category] ? (
                  <Image
                    src={categoryImages[template.category]}
                    alt={template.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-factory-dark/10 to-factory-orange/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">⚙️</div>
                    </div>
                  </>
                )}

                {/* Price Badge (top-right) */}
                <div className="absolute top-3 right-3 bg-factory-dark text-white px-3 py-1.5 rounded-md font-mono text-sm font-medium shadow-lg">
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
                    className="block w-full py-3 text-center font-semibold text-white bg-factory-orange rounded-lg hover:bg-[#E55A2B] transition-colors"
                  >
                    Voir le Workflow →
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
            className="inline-flex items-center px-6 py-3 text-lg font-semibold border-2 border-factory-dark text-factory-dark rounded-lg hover:bg-factory-dark hover:text-white transition-all duration-150"
          >
            Accès anticipé →
          </a>
        </div>
        </>
        )}
      </div>
    </section>
  )
}
