'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Launching Soon • Get Early Access
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            Production-Ready<br />
            <span className="text-gradient">Automation Templates</span><br />
            That Actually Work
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop debugging free templates. Get tested, documented workflows for n8n & Make.com.{' '}
            <span className="font-semibold text-gray-900">100% success rate guaranteed.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10-15h</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">€29-59</div>
              <div className="text-sm text-gray-600">Per Template</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#email-signup"
              className="px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get Early Access
            </a>
            <a
              href="#templates"
              className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
            >
              Browse Templates
            </a>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-sm text-gray-500">
            ✓ 30-day money-back guarantee • ✓ Lifetime updates included
          </p>
        </motion.div>
      </div>
    </section>
  )
}
