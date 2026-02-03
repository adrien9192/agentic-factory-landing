import { CaseStudy } from '@/lib/case-studies'

interface CaseStudyHeroProps {
  caseStudy: CaseStudy
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const industryColors: Record<CaseStudy['industry'], string> = {
    'E-commerce': 'bg-blue-100 text-blue-800',
    'Services': 'bg-green-100 text-green-800',
    'B2B': 'bg-purple-100 text-purple-800',
    'Local Business': 'bg-amber-100 text-amber-800'
  }

  return (
    <div className="bg-gradient-to-br from-factory-surface via-factory-stone to-factory-surface border-b border-factory-border">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Business Name & Type */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-factory-charcoal font-heading mb-2">
            {caseStudy.business_name}
          </h1>
          <p className="text-gray-600">{caseStudy.business_type}</p>
        </div>

        {/* Badges */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${industryColors[caseStudy.industry]}`}>
            {caseStudy.industry}
          </span>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-factory-surface-dark text-gray-700 border border-factory-border">
            Template #{caseStudy.template_id.split('-')[1]}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-factory-charcoal mb-4 font-heading leading-tight">
          {caseStudy.title}
        </h2>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-factory-orange font-heading mb-1">
              {caseStudy.roi}
            </div>
            <div className="text-sm text-gray-600">ROI</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-factory-orange font-heading mb-1">
              {caseStudy.setup_time}
            </div>
            <div className="text-sm text-gray-600">Setup</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-factory-orange font-heading mb-1">
              {caseStudy.timeline}
            </div>
            <div className="text-sm text-gray-600">Période</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-factory-border rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-factory-orange font-heading mb-1">
              {caseStudy.results[0].improvement}
            </div>
            <div className="text-sm text-gray-600 line-clamp-2">{caseStudy.results[0].metric}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
