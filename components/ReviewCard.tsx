'use client'

import { Review } from '@/lib/reviews'
import { useState } from 'react'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxChars = 400
  const shouldTruncate = review.content.length > maxChars

  const displayContent = shouldTruncate && !isExpanded
    ? review.content.substring(0, maxChars) + '...'
    : review.content

  return (
    <article
      className="bg-white rounded-xl border-2 border-factory-border p-6
                 hover:-translate-y-1 hover:border-factory-orange hover:shadow-lg
                 transition-all duration-200 group"
      aria-label={`Review by ${review.author}`}
    >
      {/* Top: Rating + Verified + Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* 5-star rating */}
          <div className="flex gap-0.5" role="img" aria-label={`Rating: ${review.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${star <= review.rating ? 'text-factory-orange' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Verified badge */}
          {review.verified && (
            <div
              className="flex items-center gap-1 bg-factory-green/10 text-factory-green
                         px-2 py-1 rounded-md text-xs font-medium"
              aria-label="Verified purchase"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Vérifié</span>
            </div>
          )}
        </div>

        {/* Date */}
        <time className="text-sm text-factory-text-muted" dateTime={review.date}>
          {new Date(review.date).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
      </div>

      {/* Author section */}
      <div className="mb-4">
        <h3 className="font-semibold text-factory-dark text-base mb-1">
          {review.author}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-factory-text-muted">
            {review.business_type}
          </p>
          <span className="text-factory-text-muted">•</span>
          <span className="text-xs font-mono bg-factory-stone px-2 py-0.5 rounded">
            Template #{review.template_id}
          </span>
        </div>
      </div>

      {/* Review content */}
      <div className="mb-4">
        <p
          className="text-factory-text-secondary leading-relaxed font-body text-sm"
          style={{ lineHeight: 1.6 }}
        >
          {displayContent}
        </p>

        {/* Expand button */}
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-factory-orange hover:text-factory-dark font-medium text-sm mt-2
                     transition-colors duration-150"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Lire moins' : 'Lire plus'}
          </button>
        )}
      </div>

      {/* Bottom: Helpful */}
      <div className="flex items-center gap-2 pt-4 border-t border-factory-border">
        <span className="text-sm text-factory-text-muted">Utile?</span>
        <button
          className="flex items-center gap-1.5 text-factory-text-muted hover:text-factory-orange
                     transition-colors duration-150 group/btn"
          aria-label="Mark as helpful"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="text-sm font-medium">{review.helpful_count}</span>
        </button>
      </div>
    </article>
  )
}
