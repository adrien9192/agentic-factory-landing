'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-24 md:py-32 overflow-hidden bg-grid-pattern">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left column - 60% */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-factory-dark bg-factory-stone rounded-md border border-factory-border">
              Les templates gratuits echouent 70% du temps
            </div>

            {/* Main heading - Left aligned */}
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight text-left">
              Arretez de Debugger.<br />
              <span className="text-factory-orange">Commencez a Automatiser.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-factory-text-secondary mb-8 leading-relaxed text-left max-w-2xl">
              Templates n8n testes en production qui fonctionnent du premier coup. Economisez <span className="font-semibold text-factory-dark">6-8h de debugging</span> et <span className="font-semibold text-factory-dark">300-400EUR de temps perdu</span> par workflow. ROI prouve de 300-600% sur chaque automatisation deployee.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold font-mono text-factory-orange">6-8h</div>
                <div className="text-sm text-factory-text-muted">Economisees par workflow</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-mono text-factory-orange">70%</div>
                <div className="text-sm text-factory-text-muted">Taux d'echec evite</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-mono text-factory-orange">300-600%</div>
                <div className="text-sm text-factory-text-muted">ROI moyen</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#email-signup"
                className="btn-primary inline-block"
              >
                Economiser 300EUR des Aujourd'hui
              </a>
              <a
                href="#templates"
                className="btn-secondary inline-block"
              >
                Voir les Templates Prouves
              </a>
            </div>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-factory-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-factory-green">✓</span>
                <span>Teste 50+ fois avant publication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-factory-green">✓</span>
                <span>ROI calcule par template</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-factory-green">✓</span>
                <span>Guide video FR inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-factory-green">✓</span>
                <span>Support 48h max</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - 40% */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl border-2 border-factory-border p-8 shadow-lg">
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-factory-orange text-white text-xs font-mono rounded-md mb-4">
                  PENDANT QUE VOUS LISEZ CECI
                </div>
                <h3 className="text-xl font-heading font-bold text-factory-dark mb-2">
                  Un template gratuit fait planter le workflow de quelqu'un
                </h3>
                <p className="text-factory-text-secondary mb-6">
                  Nos templates sont testes 50+ fois. <span className="font-semibold text-factory-dark">Import. Connect. Deploy.</span> Ca marche.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-factory-border">
                  <span className="text-factory-text-secondary">Temps gagne:</span>
                  <span className="font-mono font-semibold text-factory-dark">6-8h par template</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-factory-border">
                  <span className="text-factory-text-secondary">Deploiement:</span>
                  <span className="font-mono font-semibold text-factory-dark">15 min</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-factory-text-secondary">Templates gratuits:</span>
                  <span className="font-mono font-semibold text-red-600">6h de debugging</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
