import Link from 'next/link'
import { CaseStudy } from '@/lib/case-studies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const industryColors: Record<CaseStudy['industry'], string> = {
    'E-commerce': 'bg-blue-100 text-blue-800',
    'Services': 'bg-green-100 text-green-800',
    'B2B': 'bg-purple-100 text-purple-800',
    'Local Business': 'bg-amber-100 text-amber-800'
  }

  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <article className="group bg-factory-surface border border-factory-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-factory-orange hover:shadow-lg h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-factory-charcoal via-factory-surface-dark to-factory-charcoal flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(238,108,77,0.1)_10px,rgba(238,108,77,0.1)_20px)]"></div>
          <div className="text-4xl font-bold text-factory-orange/20 font-heading">
            {caseStudy.business_name.substring(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Badges */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${industryColors[caseStudy.industry]}`}>
              {caseStudy.industry}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-factory-orange text-white">
              {caseStudy.roi} ROI
            </span>
          </div>

          {/* Business Name */}
          <div className="text-sm text-factory-orange font-medium mb-1">
            {caseStudy.business_name}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-factory-charcoal group-hover:text-factory-orange transition-colors mb-2 font-heading line-clamp-2">
            {caseStudy.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
            {caseStudy.subtitle}
          </p>

          {/* Key Metric */}
          <div className="border-t border-factory-border pt-4 mt-auto">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-factory-orange font-heading">
                {caseStudy.results[0].improvement}
              </span>
              <span className="text-sm text-gray-600">
                {caseStudy.results[0].metric}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 text-factory-orange font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Lire l'étude
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
