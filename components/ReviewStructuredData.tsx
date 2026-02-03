import { Review } from '@/lib/reviews'

interface ReviewStructuredDataProps {
  reviews: Review[]
  templateId?: string
  templateName?: string
}

/**
 * ReviewStructuredData Component
 * Generates JSON-LD structured data for Google rich snippets
 * Improves SEO with AggregateRating and Review schemas
 */
export default function ReviewStructuredData({
  reviews,
  templateId,
  templateName
}: ReviewStructuredDataProps) {
  if (reviews.length === 0) return null

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1)

  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    'itemReviewed': {
      '@type': 'Product',
      'name': templateName || 'Agentic Factory Automation Templates',
      'brand': {
        '@type': 'Brand',
        'name': 'Agentic Factory'
      }
    },
    'ratingValue': averageRating,
    'bestRating': '5',
    'worstRating': '1',
    'ratingCount': reviews.length,
    'reviewCount': reviews.length
  }

  const reviewSchemas = reviews.slice(0, 10).map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Product',
      'name': templateName || 'Agentic Factory Automation Templates'
    },
    'author': {
      '@type': 'Person',
      'name': review.author
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating,
      'bestRating': '5',
      'worstRating': '1'
    },
    'reviewBody': review.content,
    'datePublished': review.date,
    'publisher': {
      '@type': 'Organization',
      'name': 'Agentic Factory'
    }
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRating)
        }}
      />
      {reviewSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}
