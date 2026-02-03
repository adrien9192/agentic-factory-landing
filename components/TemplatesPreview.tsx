'use client'

import { motion } from 'framer-motion'

const templates = [
  {
    id: '001',
    name: 'Abandoned Cart Recovery',
    title: 'Recover 12% of Lost Sales',
    description: 'Every abandoned cart gets a perfectly-timed email sequence that brings buyers back — automatically.',
    price: '€49',
    platforms: ['n8n', 'Make.com'],
  },
  {
    id: '002',
    name: 'SMS Appointment Reminder',
    title: 'Kill No-Shows Forever',
    description: 'One missed appointment costs you €50+. This template sends reminders that cut no-shows by 80%.',
    price: '€39',
    platforms: ['n8n', 'Make.com'],
  },
  {
    id: '003',
    name: 'Lead Capture → Email Nurture',
    title: 'Turn Cold Leads Into Customers',
    description: 'New lead comes in, personalized email sequence goes out — while you sleep.',
    price: '€59',
    platforms: ['n8n', 'Make.com'],
  },
]

export default function TemplatesPreview() {
  return (
    <section id="templates" className="py-24 bg-factory-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Template
          </h2>
          <p className="text-lg text-factory-text-secondary max-w-3xl mx-auto">
            Proven workflows that pay for themselves in days, not months.
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
              className="bg-white rounded-xl border border-factory-border overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview Image Area */}
              <div className="aspect-video bg-factory-stone relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-factory-dark/10 to-factory-orange/20"></div>

                {/* Price Badge (top-right) */}
                <div className="absolute top-3 right-3 bg-factory-dark text-white px-3 py-1.5 rounded-md font-mono text-sm font-medium">
                  {template.price}
                </div>

                {/* Template icon/visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">⚙️</div>
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
          <a
            href="#email-signup"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold border-2 border-factory-dark text-factory-dark rounded-lg hover:bg-factory-dark hover:text-white transition-all duration-150"
          >
            Get Early Access →
          </a>
        </div>
      </div>
    </section>
  )
}
