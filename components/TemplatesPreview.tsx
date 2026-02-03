'use client'

import { motion } from 'framer-motion'
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
    name: 'Abandoned Cart Recovery',
    slug: 'abandoned-cart-recovery',
    category: 'E-commerce',
    description: 'Recuperez 15-25% des paniers abandonnes avec 3 emails automatiques. Un client a genere 847EUR en 7 jours.',
    price: '€49',
    roi: '600%',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    slug: 'abandoned-cart-recovery',
    popular: true,
  },
  {
    id: '002',
    name: 'SMS Appointment Reminder',
    slug: 'sms-appointment-reminder',
    category: 'Services',
    description: 'Reduisez les no-shows de 40%. Rappels 24h avant rendez-vous via SMS. Economisez 1,200EUR/mois.',
    price: '€39',
    roi: '300%',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    slug: 'sms-appointment-reminder',
  },
  {
    id: '003',
    name: 'Lead Capture → CRM → Nurture',
    slug: 'lead-capture-crm-nurture',
    category: 'B2B',
    description: 'Convertissez 30% de leads (vs 12% sans nurture). Sequence 7 jours automatique. Typeform + HubSpot.',
    price: '€59',
    roi: '451%',
    time: '25 min',
    platforms: ['n8n', 'Make.com'],
    slug: 'lead-capture-nurture',
  },
  {
    id: '004',
    name: 'Google Reviews Request',
    slug: 'google-reviews-request',
    category: 'Local Business',
    description: 'Augmentez vos avis de 400%. Demande automatique 3 jours apres achat. Ameliorez SEO local.',
    price: '€39',
    roi: '250%',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '005',
    name: 'Invoice Payment Reminder',
    slug: 'invoice-payment-reminder',
    category: 'B2B',
    description: 'Reduisez les retards de paiement de 30%. Relances automatiques 3, 7, 14 jours. Stripe + QuickBooks.',
    price: '€49',
    roi: '30% DSO reduction',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '006',
    name: 'Order Confirmation + Shipping',
    slug: 'order-confirmation-shipping',
    category: 'E-commerce',
    description: 'Emails de confirmation + tracking automatiques. Reduisez tickets support de 60%. Shopify compatible.',
    price: '€39',
    roi: 'Essential',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '007',
    name: 'Contact Form Notification',
    slug: 'contact-form-notification',
    category: 'Universal',
    description: 'Notifications instantanees via Email/Slack/SMS. Repondez en 5 min au lieu de 4h. 25% plus de conversions.',
    price: '€29',
    roi: '80% faster',
    time: '10 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '008',
    name: 'Appointment Booking Sync',
    slug: 'appointment-booking-sync',
    category: 'Services',
    description: 'Calendly → Google Calendar automatique. Confirmation emails. Zero double-bookings. 30 min/jour economisees.',
    price: '€39',
    roi: 'Time-saver',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '009',
    name: 'Customer Feedback Loop',
    slug: 'customer-feedback-loop',
    category: 'Retention',
    description: 'Enquetes NPS automatiques 7 jours apres achat. Detectez les clients mecontents avant churn. +10% retention.',
    price: '€49',
    roi: '10% retention',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
  },
  {
    id: '010',
    name: 'Product Review Request',
    slug: 'product-review-request',
    category: 'E-commerce',
    description: 'Collectez 300% plus d\'avis produits. Demande 14 jours apres livraison. 20% augmentation conversions.',
    price: '€39',
    roi: '20% conversion',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
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
    <section id="templates" className="py-24 bg-factory-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Templates Prouves
          </h2>
          <p className="text-xl text-factory-text-secondary max-w-3xl mx-auto">
            10 templates testes 50+ fois en production. Import. Connect. Deploy. Ca marche.
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-factory-border hover:border-factory-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Popular badge */}
              {template.popular && (
                <div className="bg-factory-orange text-white text-sm font-semibold px-4 py-2 text-center">
                  ⭐ Plus Populaire
                </div>
              )}

              {/* Preview Image Area */}
              <div className="aspect-video bg-factory-stone relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-factory-text-muted text-4xl font-mono">
                    {template.id}
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 badge-price">
                  {template.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="tag-chip">
                    {template.category}
                  </div>
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
                      className="tag-chip"
                    >
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

        {/* View all CTA */}
        <div className="text-center">
          <Link
            href="/templates"
            className="inline-flex items-center btn-primary"
          >
            Voir Tous les Templates →
          </Link>
        </div>
        </>
        )}
      </div>
    </section>
  )
}
