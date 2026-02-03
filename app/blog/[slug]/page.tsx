import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-posts'
import { getTemplateBySlug } from '@/lib/templates'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Article Non Trouvé',
    }
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      images: [post.featuredImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  }
}

// Markdown to HTML converter (simple version)
function markdownToHtml(markdown: string): string {
  let html = markdown

  // Headers with IDs
  html = html.replace(/^### (.*?)\s*\{#(.*?)\}/gm, '<h3 id="$2">$1</h3>')
  html = html.replace(/^## (.*?)\s*\{#(.*?)\}/gm, '<h2 id="$2">$1</h2>')
  html = html.replace(/^# (.*?)\s*\{#(.*?)\}/gm, '<h1 id="$2">$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

  // Code blocks (more permissive regex)
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```.*?\n/g, '').replace(/```$/g, '')
    return `<pre><code>${code}</code></pre>`
  })

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

  // Bullet lists
  const listItems: string[] = []
  html = html.replace(/^- (.*?)$/gm, (match, item) => {
    listItems.push(`<li>${item}</li>`)
    return '___LIST_ITEM___'
  })

  // Group consecutive list items
  html = html.replace(/___LIST_ITEM___(\n___LIST_ITEM___)*/g, () => {
    const items = listItems.splice(0, listItems.length).join('')
    return `<ul>${items}</ul>`
  })

  // Tables (simplified)
  const tableRows: string[] = []
  html.split('\n').forEach(line => {
    if (line.includes('|') && line.trim().startsWith('|')) {
      const cells = line.split('|').filter(Boolean)
      const row = '<tr>' + cells.map(cell => `<td>${cell.trim()}</td>`).join('') + '</tr>'
      tableRows.push(row)
    }
  })

  if (tableRows.length > 0) {
    // Replace table rows in HTML
    let tableIndex = 0
    html = html.replace(/\|.+\|/g, () => {
      if (tableIndex < tableRows.length) {
        return tableRows[tableIndex++]
      }
      return ''
    })
    // Wrap in table tags
    html = html.replace(/(<tr>.*?<\/tr>[\s\n]*)+/g, '<table>$&</table>')
  }

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>')

  // Paragraphs
  html = html.split('\n\n').map(para => {
    if (!para.match(/^<(h[1-6]|ul|ol|pre|table|blockquote)/)) {
      return `<p>${para}</p>`
    }
    return para
  }).join('\n')

  return html
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)
  const htmlContent = markdownToHtml(post.content)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agentic Factory',
      logo: {
        '@type': 'ImageObject',
        url: 'https://agentic-factory.vercel.app/logo.png',
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://agentic-factory.vercel.app/blog/${post.slug}`,
    },
  }

  const shareUrl = `https://agentic-factory.vercel.app/blog/${post.slug}`
  const shareTitle = encodeURIComponent(post.title)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-factory-dark">
        {/* Hero */}
        <section className="bg-gradient-to-br from-factory-dark via-factory-surface-dark to-factory-dark py-12 border-b border-factory-border">
          <div className="max-w-4xl mx-auto px-6">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-factory-orange text-white">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} min de lecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar - Table of Contents (Desktop) */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-lg font-bold font-heading text-white mb-4">Table des Matières</h2>
                  <nav className="space-y-2" aria-label="Table des matières">
                    {post.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm text-gray-400 hover:text-factory-orange transition-colors ${
                          item.level === 3 ? 'pl-4' : ''
                        }`}
                        style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>

                  {/* Share Buttons */}
                  <div className="mt-8 pt-8 border-t border-factory-border">
                    <h3 className="text-sm font-semibold text-white mb-3">Partager</h3>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3">
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-heading prose-headings:text-white
                    prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-factory-orange prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:text-gray-300 prose-ul:space-y-2
                    prose-ol:text-gray-300 prose-ol:space-y-2
                    prose-li:marker:text-factory-orange
                    prose-code:text-factory-orange prose-code:bg-factory-surface prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-factory-surface-dark prose-pre:border prose-pre:border-factory-border prose-pre:rounded-lg prose-pre:p-4
                    prose-blockquote:border-l-4 prose-blockquote:border-factory-orange prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
                    prose-table:border prose-table:border-factory-border
                    prose-th:bg-factory-surface prose-th:text-white prose-th:font-semibold prose-th:p-3
                    prose-td:border prose-td:border-factory-border prose-td:p-3 prose-td:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {/* Mobile TOC (Collapsible) */}
                <details className="lg:hidden mt-8 bg-factory-surface-dark border border-factory-border rounded-lg p-4">
                  <summary className="font-bold font-heading text-white cursor-pointer">
                    Table des Matières
                  </summary>
                  <nav className="mt-4 space-y-2" aria-label="Table des matières">
                    {post.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm text-gray-400 hover:text-factory-orange transition-colors ${
                          item.level === 3 ? 'pl-4' : ''
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </details>

                {/* Related Templates */}
                {post.relatedTemplates.length > 0 && (
                  <section className="mt-16 pt-16 border-t border-factory-border">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6">
                      Templates Associés
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {post.relatedTemplates.slice(0, 3).map((templateId) => {
                        // Find template by matching ID from template slug
                        const template = getTemplateBySlug(templateId.toLowerCase().replace('tpl-', ''))
                        if (!template) return null

                        return (
                          <Link
                            key={template.id}
                            href={`/templates/${template.slug}`}
                            className="group bg-factory-surface-dark border border-factory-border rounded-lg p-6 hover:border-factory-orange transition-all duration-200"
                          >
                            <div className="text-sm text-factory-orange font-semibold mb-2">
                              {template.category}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-factory-orange transition-colors">
                              {template.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">
                              {template.description.slice(0, 100)}...
                            </p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-factory-orange font-bold">{template.price}</span>
                              <span className="text-gray-400">{template.roi} ROI</span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </section>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <section className="mt-16 pt-16 border-t border-factory-border">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6">
                      Articles Connexes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {relatedPosts.slice(0, 2).map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="group bg-factory-surface-dark border border-factory-border rounded-lg p-6 hover:border-factory-orange transition-all duration-200"
                        >
                          <div className="text-sm text-factory-orange font-semibold mb-2">
                            {relatedPost.category}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-factory-orange transition-colors">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{relatedPost.readTime} min</span>
                            <span>•</span>
                            <time dateTime={relatedPost.publishedDate}>
                              {new Date(relatedPost.publishedDate).toLocaleDateString('fr-FR')}
                            </time>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Mobile Share Buttons */}
                <div className="lg:hidden mt-12 pt-12 border-t border-factory-border">
                  <h3 className="text-lg font-bold text-white mb-4">Partager cet Article</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-factory-surface-dark text-gray-300 hover:text-factory-orange hover:bg-factory-surface transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-factory-surface-dark border-t border-factory-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">
              Prêt à Implémenter ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Téléchargez nos templates n8n testés et commencez à automatiser en 15 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/templates"
                className="px-8 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-all duration-200"
              >
                Voir Tous les Templates
              </Link>
              <Link
                href="/blog"
                className="px-8 py-3 bg-factory-surface text-white font-semibold rounded-lg border border-factory-border hover:border-factory-orange transition-all duration-200"
              >
                Retour au Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
