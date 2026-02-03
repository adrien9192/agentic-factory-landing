'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-consent')
    if (!cookieChoice) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
    // Initialize analytics or other tracking here if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
    // Ensure analytics are disabled
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-factory-surface-dark border border-factory-border rounded-lg shadow-2xl">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                🍪 Cookies et Confidentialité
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques
                (Google Analytics) pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies
                analytiques.
              </p>
              <Link
                href="/legal/cookies"
                className="text-sm text-factory-orange hover:underline inline-flex items-center gap-1"
              >
                En savoir plus sur notre politique des cookies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-3 border border-factory-border text-gray-300 font-semibold rounded-lg hover:bg-factory-bg transition-colors whitespace-nowrap"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
