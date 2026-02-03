'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-pattern py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Stop Losing 20 Hours a Week to Tasks{' '}
              <span className="text-factory-orange">a Robot Should Do</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-factory-text-secondary leading-relaxed mb-8 max-w-2xl">
              Plug-and-play automation templates that pay for themselves in 48 hours — no coding, no agency, no BS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#templates"
                className="bg-factory-orange text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#E55A2B] active:bg-[#CC4F26] transition-colors duration-150 shadow-sm hover:shadow-md text-center"
              >
                Browse Templates
              </a>
              <a
                href="#video"
                className="border-2 border-factory-dark text-factory-dark font-semibold px-8 py-4 rounded-lg text-lg hover:bg-factory-dark hover:text-white transition-all duration-150 text-center"
              >
                See How It Works (2 min)
              </a>
            </div>

            {/* Social proof */}
            <p className="text-sm text-factory-text-muted">
              No subscriptions • One-time payment • Own it forever
            </p>
          </motion.div>

          {/* Visual placeholder - can be illustration/screenshot */}
          <motion.div
            className="md:col-span-2 hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-xl bg-factory-stone border border-factory-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-factory-dark/5 to-factory-orange/10"></div>
              <div className="relative text-center p-8">
                <div className="text-6xl mb-4">⚙️</div>
                <p className="text-factory-text-secondary font-medium">Automation Templates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
