'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const templates = [
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
    popular: true,
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
    popular: true,
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

        {/* Templates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-factory-border hover:border-factory-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
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
                </div>

                {/* Platforms */}
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
      </div>
    </section>
  )
}
