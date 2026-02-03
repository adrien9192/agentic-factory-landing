import { CaseStudy } from '@/lib/case-studies'

interface ResultsTimelineProps {
  results: CaseStudy['results']
  timeline: string
}

export default function ResultsTimeline({ results, timeline }: ResultsTimelineProps) {
  return (
    <div className="bg-factory-surface border border-factory-border rounded-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-factory-charcoal mb-6 font-heading">
        Résultats ({timeline})
      </h3>

      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < results.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-factory-border" aria-hidden="true"></div>
            )}

            {/* Result Item */}
            <div className="flex gap-4">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-factory-orange flex items-center justify-center text-white font-bold font-heading">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h4 className="font-semibold text-factory-charcoal mb-2">
                  {result.metric}
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white border border-factory-border rounded-lg p-4">
                  {/* Before */}
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Avant
                    </div>
                    <div className="text-2xl font-bold text-gray-600 font-heading">
                      {result.before}
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Après
                    </div>
                    <div className="text-2xl font-bold text-factory-orange font-heading">
                      {result.after}
                    </div>
                  </div>

                  {/* Improvement */}
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Amélioration
                    </div>
                    <div className="text-2xl font-bold text-green-600 font-heading flex items-center gap-1">
                      <span aria-hidden="true">↗</span>
                      {result.improvement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Summary */}
      <div className="mt-8 pt-6 border-t border-factory-border">
        <div className="bg-gradient-to-r from-factory-orange/10 to-factory-orange/5 border border-factory-orange/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-factory-orange animate-pulse"></div>
            <div className="font-semibold text-factory-charcoal">
              Impact Global
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Transformation mesurable en {timeline} avec des résultats prouvés à chaque étape.
          </p>
        </div>
      </div>
    </div>
  )
}
