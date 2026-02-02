'use client'

import { motion } from 'framer-motion'

const templates = [
  {
    id: '001',
    name: 'Abandoned Cart Recovery',
    category: 'E-commerce',
    description: 'Shopify + SendGrid. Recover lost sales with 3-email sequence. Proven 600% ROI.',
    price: '€49',
    roi: '600% ROI',
    time: '30min setup',
    platforms: ['n8n', 'Make.com'],
    popular: true,
  },
  {
    id: '002',
    name: 'SMS Appointment Reminders',
    category: 'Services',
    description: 'Google Calendar + Twilio. Reduce no-shows by 60%. Save €1,200/month.',
    price: '€39',
    roi: '300% ROI',
    time: '20min setup',
    platforms: ['n8n', 'Make.com'],
    popular: true,
  },
  {
    id: '003',
    name: 'Lead Capture → CRM → Nurture',
    category: 'B2B',
    description: 'Typeform + HubSpot + SendGrid. 5-email sequence. 2.5x conversion rate.',
    price: '€59',
    roi: '451% ROI',
    time: '30min setup',
    platforms: ['n8n', 'Make.com'],
    popular: true,
  },
]

export default function TemplatesPreview() {
  return (
    <section id="templates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Top Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-ready workflows tested with real integrations. 10 templates at launch.
          </p>
        </div>

        {/* Templates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Badge */}
              {template.popular && (
                <div className="bg-gradient-to-r from-primary-600 to-orange-500 text-white text-sm font-semibold px-4 py-2 text-center">
                  ⭐ Most Popular
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">
                      {template.category}
                    </div>
                    <h3 className="text-xl font-bold">{template.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">{template.price}</div>
                </div>

                <p className="text-gray-600 mb-4">{template.description}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-green-600">{template.roi}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">⏱️</span>
                    <span className="text-gray-600">{template.time}</span>
                  </div>
                </div>

                {/* Platforms */}
                <div className="flex gap-2 mb-4">
                  {template.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  disabled
                  className="w-full py-3 text-center font-semibold text-white bg-gray-400 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            + 7 more templates at launch (Contact Forms, Reviews, Invoices, Social Media, and more)
          </p>
          <a
            href="#email-signup"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Notified at Launch →
          </a>
        </div>
      </div>
    </section>
  )
}
