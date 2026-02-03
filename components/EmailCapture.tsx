'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailCapture() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mailto for now (static export compatible)
    window.location.href = `mailto:contact@agenticfactory.com?subject=Early Access Request&body=Email: ${email}`
  }

  return (
    <section id="email-signup" className="py-24 bg-factory-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get First Access to New Templates
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            (Plus a Free Automation Cheat Sheet)
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 text-lg rounded-lg border-2 border-white/20 focus:border-factory-orange focus:outline-none bg-white/10 text-white placeholder:text-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 text-lg font-semibold text-white bg-factory-orange rounded-lg hover:bg-[#E55A2B] transition-colors duration-150 shadow-lg whitespace-nowrap"
              >
                Send Me the Good Stuff
              </button>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Click to send email request (opens your email client)
            </p>
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Early access pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/50">
            Launch: February 17-24, 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
