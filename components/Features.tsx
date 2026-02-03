'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Installation en 15 Minutes',
    description: "Importez, connectez vos comptes, terminé. Vos automatisations tourneront avant que votre café ne refroidisse.",
  },
  {
    icon: '💰',
    title: 'ROI Prouvé',
    description: "Pas de théorie — chaque template vient d'entreprises réelles avec des retours de 400-15,000%.",
  },
  {
    icon: '🔒',
    title: 'Un Prix, À Vous Pour Toujours',
    description: "Pas d'abonnement. Pas de frais par automation. Payez une fois, automatisez à vie.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
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
              viewport={{ once: true }}
              className="bg-white border border-factory-border rounded-lg p-6 relative overflow-hidden group hover:border-factory-orange hover:shadow-md transition-all duration-200"
            >
              {/* Orange left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-factory-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-md bg-factory-dark flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-factory-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">La Vraie Comparaison des Coûts</h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-lg overflow-hidden border border-factory-border">
              <thead>
                <tr className="bg-factory-stone">
                  <th className="px-6 py-4 text-left font-semibold text-factory-dark"></th>
                  <th className="px-6 py-4 text-center font-semibold text-factory-dark">Nos Templates</th>
                  <th className="px-6 py-4 text-center font-semibold text-factory-dark">DIY n8n</th>
                  <th className="px-6 py-4 text-center font-semibold text-factory-dark">Agence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-factory-border">
                  <td className="px-6 py-4 font-medium">Coût</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
