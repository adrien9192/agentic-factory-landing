'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: '15 Minutes au Lieu de 6 Heures',
    description: 'Import JSON. Connect API. Deploy. Pendant que les autres debuggent, vous automatisez.',
  },
  {
    title: 'Documentation Francaise Complete',
    description: 'Guides video, prompts commentes, FAQ. Pas de Google Translate bancal.',
  },
  {
    title: 'Zero Risque Cache',
    description: 'Code transparent. Pas de dependencies obscures. Vous voyez exactement ce qui s\'execute.',
  },
  {
    title: 'ROI Calcule Avant Achat',
    description: 'Chaque template affiche son ROI estime. Panier abandonne = 300-600%. Pas de promesses vagues.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Pourquoi L'usine a Agents IA?
          </h2>
          <p className="text-xl text-factory-text-secondary max-w-3xl mx-auto">
            Les templates gratuits vous coutent 300-400EUR en temps perdu. Les notres paient pour eux-memes 5-10x.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-factory group"
            >
              {/* Left accent stripe */}
              <div className="card-factory-accent"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-md bg-factory-dark flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-factory-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-medium text-factory-dark mb-2">{feature.title}</h3>
              <p className="text-factory-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison callout */}
        <div className="p-8 bg-factory-stone rounded-2xl border-2 border-factory-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">Comparaison des Couts Reels</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg border border-factory-border">
                <div className="text-lg font-semibold mb-2">Templates Gratuits</div>
                <div className="text-3xl font-bold font-mono text-gray-400 mb-2">€0</div>
                <div className="text-sm text-factory-text-muted mb-1">+ 6-8h debugging</div>
                <div className="text-sm text-factory-text-muted mb-2">+ 70% taux d'echec</div>
                <div className="text-xl font-bold font-mono text-gray-600 mt-2">= €300-400</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-factory-border">
                <div className="text-lg font-semibold mb-2">Developer Freelance</div>
                <div className="text-3xl font-bold font-mono text-gray-400 mb-2">€500+</div>
                <div className="text-sm text-factory-text-muted mb-1">+ 1-2 semaines attente</div>
                <div className="text-sm text-factory-text-muted mb-2">+ maintenance</div>
                <div className="text-xl font-bold font-mono text-gray-600 mt-2">= €500-1,500</div>
              </div>
              <div className="bg-factory-orange p-6 rounded-lg border-4 border-factory-dark shadow-lg transform scale-105">
                <div className="text-lg font-semibold mb-2 text-white">Agentic Factory</div>
                <div className="text-3xl font-bold font-mono text-white mb-2">€49</div>
                <div className="text-sm text-white/80 mb-1">+ 15 min setup</div>
                <div className="text-sm text-white/80 mb-2">+ 100% fonctionnel</div>
                <div className="text-xl font-bold font-mono text-white mt-2">= €49 total</div>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-factory-text-muted font-semibold">
              Economisez €251-€1,451 (84-97% reduction de cout)
            </p>
          </div>
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-factory-surface pointer-events-none"></div>
    </section>
  )
}
