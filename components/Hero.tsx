'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-pattern py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white border border-factory-border rounded-full px-4 py-2 mb-6 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-factory-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-factory-orange"></span>
              </span>
              <span className="text-sm font-medium text-factory-dark">Lancement 17-24 Février 2026</span>
            </motion.div>

            {/* Main heading with SVG underline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Arrêtez de Perdre 20h par Semaine sur des Tâches{' '}
              <span className="relative inline-block">
                <span className="text-factory-orange">qu'un Robot Devrait Faire</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-factory-text-secondary leading-relaxed mb-8 max-w-2xl">
              Templates d'automatisation clé-en-main qui se rentabilisent en 48h — sans coder, sans agence, sans bullshit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#templates"
                className="btn-primary group"
                aria-label="Voir tous les templates d'automatisation disponibles"
              >
                Voir les Templates
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#video"
                className="btn-secondary group"
                aria-label="Regarder la vidéo explicative de 2 minutes"
              >
                Comment ça Marche (2 min)
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <p className="text-sm text-factory-text-muted">
              Pas d'abonnement • Paiement unique • À vous pour toujours
            </p>
          </motion.div>

          {/* Visual with animated gears and floating stats */}
          <motion.div
            className="md:col-span-2 hidden md:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-square rounded-xl bg-factory-stone border border-factory-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-factory-dark/5 to-factory-orange/10"></div>

              {/* Animated gears */}
              <div className="relative text-center p-8">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  ⚙️
                </motion.div>
                <p className="text-factory-text-secondary font-medium">Templates d'Automatisation</p>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-factory-border"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-2xl font-bold text-factory-orange">20h</div>
                <div className="text-xs text-factory-text-muted">économisées/sem</div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-factory-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-2xl font-bold text-factory-orange">48h</div>
                <div className="text-xs text-factory-text-muted">ROI rapide</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  )
}
