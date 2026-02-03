import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog Agentic Factory | Automatisation n8n & ROI Prouvé',
  description: 'Guides n8n, études de cas avec ROI prouvé, comparatifs outils automation. Apprenez à automatiser votre business avec des templates testés.',
  openGraph: {
    title: 'Blog Agentic Factory | Automatisation n8n & ROI Prouvé',
    description: 'Guides n8n, études de cas avec ROI prouvé, comparatifs outils automation.',
    type: 'website',
  },
}

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  return (
    <main className="min-h-screen bg-factory-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-factory-dark via-factory-surface-dark to-factory-dark py-20 border-b border-factory-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Blog Agentic Factory
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guides pratiques, études de cas avec ROI prouvé, et best practices automation n8n.
              Tout ce dont vous avez besoin pour automatiser votre business et gagner du temps.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-factory-orange/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-factory-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{blogPosts.length} Articles</div>
                <div className="text-sm text-gray-400">Guides & Études de Cas</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-factory-orange/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-factory-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ROI Prouvé</div>
                <div className="text-sm text-gray-400">300-600% en Moyenne</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-factory-orange/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-factory-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Setup Rapide</div>
                <div className="text-sm text-gray-400">15-45 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => {
              // Extract first 150 chars from content for excerpt
              const excerpt = post.content
                .replace(/#{1,6}\s/g, '') // Remove markdown headers
                .replace(/\*\*/g, '') // Remove bold
                .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
                .replace(/`{1,3}[^`]*`{1,3}/g, '') // Remove code blocks
                .trim()
                .slice(0, 150) + '...'

              return (
                <article
                  key={post.slug}
                  className="group bg-factory-surface-dark border border-factory-border rounded-xl overflow-hidden hover:border-factory-orange/50 transition-all duration-200"
                >
                  {/* Featured Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-factory-orange/20 via-factory-surface to-factory-dark overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-factory-orange/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-factory-orange text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <time dateTime={post.publishedDate}>
                        {new Date(post.publishedDate).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime} min de lecture</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-factory-orange transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {excerpt}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-factory-orange font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Lire l'article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-factory-orange/10 to-factory-surface border border-factory-orange/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold font-heading text-white mb-4">
              Prêt à Automatiser Votre Business ?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Découvrez nos templates n8n testés 50+ fois avec ROI prouvé de 300-600%.
              Déploiement en 15 minutes au lieu de 6-8h de debugging.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/templates"
                className="px-8 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-all duration-200"
              >
                Voir les Templates
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 bg-factory-surface-dark text-white font-semibold rounded-lg border border-factory-border hover:border-factory-orange transition-all duration-200"
              >
                Voir les Prix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
