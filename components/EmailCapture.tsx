'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // TODO: Replace with actual API endpoint (Zapier/Google Sheets webhook)
    // For now, mailto fallback
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Fallback to mailto
      window.location.href = `mailto:digitalaine@gmail.com?subject=Early Access Request&body=Email: ${email}`

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError('Oups, quelque chose a plante. (Pas comme nos templates.)')
    } finally {
      setLoading(false)
    }
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Le Template qui a Genere 847EUR en 7 Jours
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Recevez notre meilleur template (Panier Abandonne) + -10% sur l'acces complet. <span className="font-semibold text-white">2 847 entrepreneurs</span> l'utilisent deja.
          </p>

          {/* Email form */}
          {!success ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email (on deteste le spam autant que vous)"
                  required
                  className="flex-1 px-6 py-4 text-lg rounded-lg bg-factory-surface text-factory-dark border-2 border-factory-border focus:border-factory-orange focus:outline-none"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 text-lg font-semibold text-factory-dark bg-factory-orange rounded-lg hover:bg-[#E55A2B] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Envoi...' : 'Recevoir le Template Gratuit'}
                </button>
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-400">
                  {error}
                </p>
              )}

              <p className="mt-4 text-sm text-white/60">
                Cliquez pour envoyer la demande (ouvre votre client email)
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-8 p-6 bg-factory-green/20 border-2 border-factory-green rounded-lg">
              <p className="text-white font-semibold">
                Boom! Template envoye. Verifiez votre inbox (et les spams, on sait jamais).
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="text-factory-orange">✓</span>
              <span>Template Panier Abandonne gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-factory-orange">✓</span>
              <span>Guide "5 Automatisations a 1 000EUR/mois"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-factory-orange">✓</span>
              <span>-10% sur acces complet</span>
            </div>
          </div>

          <p className="text-sm text-white/50">
            1 email par semaine max. Desabonnement en 1 clic.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
