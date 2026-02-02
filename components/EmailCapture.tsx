'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('✓ You\'re on the list! Check your email for confirmation.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="email-signup" className="py-24 bg-gradient-to-br from-primary-600 to-orange-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Launch Week Special
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get early access and 20% off all templates. Join 500+ automation enthusiasts waiting for launch.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 text-lg rounded-lg border-2 border-white/20 focus:border-white focus:outline-none"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
              </button>
            </div>

            {/* Status message */}
            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${
                  status === 'success' ? 'text-green-100' : 'text-red-100'
                }`}
              >
                {message}
              </motion.p>
            )}
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>20% launch discount</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>First access to templates</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Weekly automation tips</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/70">
            No spam. Unsubscribe anytime. Launch: Feb 17-24, 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
