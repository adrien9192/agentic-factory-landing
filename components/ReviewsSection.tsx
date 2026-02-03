'use client'

import { useState } from 'react'
import { reviews, reviewStats, getReviewsByTemplate } from '@/lib/reviews'
import ReviewCard from './ReviewCard'
import ReviewStructuredData from './ReviewStructuredData'

interface ReviewsSectionProps {
  templateId?: string
  templateName?: string
}

export default function ReviewsSection({ templateId, templateName }: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false)

  // Filter reviews by templateId if provided
  const filteredReviews = templateId
    ? getReviewsByTemplate(templateId)
    : reviews

  // Sort: verified first, then by date descending
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    // Verified first
    if (a.verified && !b.verified) return -1
    if (!a.verified && b.verified) return 1

    // Then by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Show 6 initially, all when expanded
  const displayedReviews = showAll ? sortedReviews : sortedReviews.slice(0, 6)
  const hasMore = sortedReviews.length > 6

  // If filtering by template and no reviews found
  if (templateId && filteredReviews.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-12">
            <p className="text-lg text-factory-text-muted">
              Aucun avis pour ce template. Soyez le premier à laisser votre avis!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-factory-dark mb-4">
            Ce Que Disent Nos Clients
          </h2>

          {/* Stats subheading */}
          <div className="flex items-center justify-center gap-4 text-factory-text-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-factory-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-factory-dark">
                {templateId
                  ? `${(filteredReviews.reduce((sum, r) => sum + r.rating, 0) / filteredReviews.length).toFixed(1)}/5`
                  : `${reviewStats.averageRating}/5`
                }
              </span>
            </div>
            <span>•</span>
            <span>
              {templateId
                ? `${filteredReviews.length} avis`
                : `${reviewStats.totalReviews} avis clients`
              }
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-factory-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {templateId
                ? `${filteredReviews.filter(r => r.verified).length} vérifiés`
                : `${reviewStats.verifiedCount} achats vérifiés`
              }
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          style={{
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          {displayedReviews.map((review, index) => (
            <div
              key={review.id}
              style={{
                animation: `fadeInStagger 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Show more button */}
        {hasMore && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary px-8 py-3 font-semibold text-lg
                       border-2 border-factory-dark text-factory-dark
                       hover:bg-factory-dark hover:text-white
                       rounded-lg transition-all duration-200"
            >
              Voir plus d'avis ({sortedReviews.length - 6} restants)
            </button>
          </div>
        )}

        {/* JSON-LD Structured Data for SEO */}
        <ReviewStructuredData
          reviews={sortedReviews}
          templateId={templateId}
          templateName={templateName}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
