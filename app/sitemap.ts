import { MetadataRoute } from 'next'
import { templates } from '@/lib/templates'
import { caseStudies } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agentic-factory.vercel.app'

  const templateUrls = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const caseStudyUrls = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.published_date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const legalPages = [
    'cgv',
    'privacy',
    'terms',
    'cookies',
    'mentions',
    'refund',
  ].map((page) => ({
    url: `${baseUrl}/legal/${page}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...templateUrls,
    ...caseStudyUrls,
    ...legalPages,
  ]
}
