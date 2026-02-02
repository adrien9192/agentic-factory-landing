'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '✓',
    title: 'Zero-Error Guarantee',
    description: '100% success rate. Free templates fail 70% of the time. Ours work every single time.',
    stat: '100% vs 30%'
  },
  {
    icon: '📚',
    title: 'Enterprise Documentation',
    description: '1,500-2,000 words per template. Step-by-step guides with screenshots, not "figure it out".',
    stat: '2,000 words'
  },
  {
    icon: '⚡',
    title: 'Dual-Platform Coverage',
    description: 'Every template for BOTH n8n AND Make.com. No vendor lock-in. Switch platforms anytime.',
    stat: '2 platforms'
  },
  {
    icon: '💰',
    title: 'ROI-Validated Results',
    description: 'Proven ROI metrics: 300-600%. Not theory—real business results from paying customers.',
    stat: '450% avg ROI'
  },
  {
    icon: '🤝',
    title: 'Included Support',
    description: 'Email support with <24h response. Real humans, not forums. We help you succeed.',
    stat: '<4h response'
  },
  {
    icon: '⏱️',
    title: 'Time-Saving Value',
    description: 'Free templates take 6-8h to debug. Ours work in 30 minutes. Save €200-400 in time.',
    stat: '30min setup'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Why Pay for Templates?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free templates cost €200-400 in wasted time. Premium quality pays for itself 5-10x.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-semibold text-primary-600">{feature.stat}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison callout */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl border-2 border-primary-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">The Real Cost Comparison</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-lg font-semibold mb-2">Free Template</div>
                <div className="text-3xl font-bold text-gray-400 mb-2">€0</div>
                <div className="text-sm text-gray-600">+ 6-8h debugging</div>
                <div className="text-xl font-bold text-gray-600 mt-2">= €300-400</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Hire Developer</div>
                <div className="text-3xl font-bold text-gray-400 mb-2">€500+</div>
                <div className="text-sm text-gray-600">+ 1-2 weeks wait</div>
                <div className="text-xl font-bold text-gray-600 mt-2">= €500-1,500</div>
              </div>
              <div className="border-4 border-primary-500 rounded-lg p-4 -m-2">
                <div className="text-lg font-semibold mb-2 text-primary-700">Agentic Factory</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">€49</div>
                <div className="text-sm text-gray-600">+ 30min setup</div>
                <div className="text-xl font-bold text-primary-600 mt-2">= €74 total</div>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-gray-600">
              Save €226-€1,426 (75-95% cost reduction)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
