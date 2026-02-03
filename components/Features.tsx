'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Installation en 15 Minutes',
    description: "Importez, connectez vos comptes, terminé. Vos automatisations tourneront avant que votre café ne refroidisse.",
    stat: '15 min',
    statLabel: 'setup moyen'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'ROI Prouvé',
    description: "Pas de théorie — chaque template vient d'entreprises réelles avec des retours de 400-15,000%.",
    stat: '400%+',
    statLabel: 'ROI typique'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Un Prix, À Vous Pour Toujours',
    description: "Pas d'abonnement. Pas de frais par automation. Payez une fois, automatisez à vie.",
    stat: '1x',
    statLabel: 'paiement unique'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi Choisir Agentic Factory ?
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="feature-card group"
            >
              {/* Icon */}
              <div className="icon-box text-white mb-4">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-factory-text-secondary leading-relaxed mb-4">{feature.description}</p>

              {/* Stat highlight */}
              <div className="flex items-baseline gap-2 mt-4 pt-4 border-t border-factory-border">
                <span className="text-2xl font-bold text-factory-orange">{feature.stat}</span>
                <span className="text-sm text-factory-text-muted">{feature.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">La Vraie Comparaison des Coûts</h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-lg overflow-hidden border border-factory-border" aria-label="Comparaison des coûts entre nos templates, DIY n8n et agences">
              <caption className="sr-only">Tableau comparatif des coûts et délais entre nos templates, le DIY avec n8n, et les agences</caption>
              <thead>
                <tr className="bg-factory-stone">
                  <th scope="col" className="px-6 py-4 text-left font-semibold text-factory-dark"></th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold text-factory-dark">Nos Templates</th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold text-factory-dark">DIY n8n</th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold text-factory-dark">Agence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-factory-border hover:bg-factory-orange/5 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-left">Coût</th>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium text-factory-orange">€30-50</span>
                    <div className="text-sm text-factory-text-muted">paiement unique</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">"Gratuit"</span>
                    <div className="text-sm text-factory-text-muted">mais 100+ heures</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">€5k+</span>
                    <div className="text-sm text-factory-text-muted">et 4-6 semaines</div>
                  </td>
                </tr>
                <tr className="border-t border-factory-border hover:bg-factory-orange/5 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-left">Temps de Setup</th>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium text-factory-orange">15 min</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">100+ heures</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">4-6 semaines</span>
                  </td>
                </tr>
                <tr className="border-t border-factory-border hover:bg-factory-orange/5 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-left">Support</th>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium text-factory-orange">✓ Documentation</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">Forums</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-medium">€€€ / heure</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-factory-surface pointer-events-none"></div>
    </section>
  )
}
