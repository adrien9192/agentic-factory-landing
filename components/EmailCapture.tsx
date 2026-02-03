'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate processing for better UX
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      // Open mailto (static export compatible)
      window.location.href = `mailto:contact@agenticfactory.com?subject=Demande Accès Anticipé&body=Email: ${email}%0D%0A%0D%0AJe souhaite recevoir un accès anticipé aux templates d'automatisation.`

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 500)
  }

  return (
    <section id="email-signup" className="py-24 bg-factory-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section header */}
          <div className="inline-flex items-center gap-2 bg-factory-orange/20 text-factory-orange px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-factory-orange/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Accès Anticipé
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soyez les Premiers Informés du Lancement
          </h2>
          <p className="text-lg text-white/80 mb-2 max-w-2xl mx-auto">
            Recevez un accès prioritaire + une Cheat Sheet Automation gratuite
          </p>
          <p className="text-sm text-factory-orange font-medium mb-8">
            Économisez 20% avec le prix de lancement anticipé
          </p>

          {/* Email form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8" aria-label="Formulaire d'inscription à l'accès anticipé">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  disabled={isSubmitting}
                  aria-label="Votre adresse email"
                  className="flex-1 px-6 py-4 text-base md:text-lg rounded-lg border-2 border-white/20 focus:border-factory-orange focus:outline-none focus:ring-2 focus:ring-factory-orange/50 bg-white/10 text-white placeholder:text-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  style={{ fontSize: '16px' }} // Prevents iOS zoom
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Demander l'accès anticipé"
                  className="relative px-8 py-4 text-base md:text-lg font-semibold text-white bg-factory-orange rounded-lg hover:bg-[#E55A2B] active:bg-[#CC4F26] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-w-[180px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi...
                    </span>
                  ) : (
                    'Je Veux Mon Accès →'
                  )}
                </button>
              </div>

              <p className="mt-4 text-xs text-white/50 leading-relaxed">
                En cliquant, votre client email s'ouvrira avec un message pré-rempli.<br />
                Envoyez-le pour confirmer votre inscription.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto mb-8 bg-factory-green/20 border-2 border-factory-green/50 rounded-lg p-6"
            >
              <div className="flex items-center justify-center gap-3 text-factory-green">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">Merci ! Envoyez l'email pour confirmer.</span>
              </div>
            </motion.div>
          )}

          {/* Benefits with icons */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Zéro spam, jamais</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>-20% prix de lancement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-factory-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Désabonnement 1 clic</span>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <svg className="w-5 h-5 text-factory-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Lancement : 17-24 Février 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
