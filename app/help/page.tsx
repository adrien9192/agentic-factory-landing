'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, X, Mail } from 'lucide-react'
import Footer from '@/components/Footer'
import { faqs, faqCategories, searchFAQs, type FAQ } from '@/lib/faqs'

/**
 * Help Center Page
 *
 * Features:
 * - Category tabs with counts
 * - Real-time search with keyword matching
 * - FAQ accordion (single item open)
 * - Markdown rendering in answers
 * - Sticky category tabs on desktop
 * - Full keyboard navigation
 * - WCAG compliant (ARIA labels, focus states)
 *
 * @accessibility
 * - aria-expanded for accordion state
 * - aria-live for search results
 * - Keyboard: Tab navigation, Enter/Space to toggle
 * - Focus visible states with orange ring
 *
 * @performance
 * - Memoized search results
 * - CSS transitions (no JS reflows)
 */
export default function HelpCenterPage() {
  const [activeCategory, setActiveCategory] = useState<FAQ['category']>('Pre-Purchase')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFAQId, setOpenFAQId] = useState<string | null>(null)

  // Memoized filtered FAQs
  const displayedFAQs = useMemo(() => {
    if (searchQuery.trim()) {
      return searchFAQs(searchQuery)
    }
    return faqs.filter(faq => faq.category === activeCategory).sort((a, b) => a.order - b.order)
  }, [activeCategory, searchQuery])

  // Toggle FAQ accordion
  const toggleFAQ = (faqId: string) => {
    setOpenFAQId(openFAQId === faqId ? null : faqId)
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
    setOpenFAQId(null)
  }

  // Handle category change
  const handleCategoryChange = (category: FAQ['category']) => {
    setActiveCategory(category)
    setSearchQuery('')
    setOpenFAQId(null)
  }

  return (
    <>
      <main className="min-h-screen bg-factory-surface">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-grid-pattern">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-block mb-6 text-factory-text-muted hover:text-factory-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-factory-orange focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                ← Retour accueil
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                Centre <span className="text-factory-orange">d&apos;Aide</span>
              </h1>
              <p className="text-lg md:text-xl text-factory-text-secondary">
                Trouvez rapidement les reponses a vos questions
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-factory-text-muted">
                <Search size={24} />
              </div>
              <input
                type="text"
                placeholder="Chercher: remboursement, installation, prix..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-12 text-lg rounded-lg border-2 border-factory-border focus:border-factory-orange focus:outline-none focus:ring-2 focus:ring-factory-orange focus:ring-offset-2 bg-white transition-all"
                aria-label="Rechercher dans la FAQ"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-factory-text-muted hover:text-factory-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-factory-orange rounded p-1"
                  aria-label="Effacer la recherche"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-0 z-10 bg-factory-surface border-b border-factory-border shadow-sm">
          <div className="max-w-4xl mx-auto px-6">
            {/* Desktop Tabs */}
            <div className="hidden md:flex gap-2 py-4 overflow-x-auto">
              {faqCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  disabled={!!searchQuery}
                  className={`
                    px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-factory-orange focus-visible:ring-offset-2
                    ${searchQuery ? 'opacity-50 cursor-not-allowed' : ''}
                    ${activeCategory === cat.id && !searchQuery
                      ? 'bg-factory-orange text-white shadow-md'
                      : 'bg-white text-factory-dark border border-factory-border hover:border-factory-orange'
                    }
                  `}
                  aria-current={activeCategory === cat.id ? 'page' : undefined}
                  title={cat.description}
                >
                  {cat.label}
                  <span className={`
                    text-xs font-mono px-2 py-0.5 rounded-full
                    ${activeCategory === cat.id && !searchQuery
                      ? 'bg-white/20 text-white'
                      : 'bg-factory-stone text-factory-text-muted'
                    }
                  `}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Select */}
            <div className="md:hidden py-4">
              <select
                value={activeCategory}
                onChange={(e) => handleCategoryChange(e.target.value as FAQ['category'])}
                disabled={!!searchQuery}
                className="w-full px-4 py-3 rounded-lg border-2 border-factory-border focus:border-factory-orange focus:outline-none focus:ring-2 focus:ring-factory-orange bg-white text-factory-dark font-semibold"
                aria-label="Selectionner une categorie"
              >
                {faqCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label} ({cat.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="py-6 bg-factory-surface">
          <div className="max-w-4xl mx-auto px-6">
            <p
              className="text-center text-factory-text-muted"
              aria-live="polite"
              aria-atomic="true"
            >
              {searchQuery ? (
                <>
                  <span className="font-semibold text-factory-dark">{displayedFAQs.length}</span> resultat{displayedFAQs.length > 1 ? 's' : ''} trouve{displayedFAQs.length > 1 ? 's' : ''} pour &quot;{searchQuery}&quot;
                </>
              ) : (
                <>
                  <span className="font-semibold text-factory-dark">{displayedFAQs.length}</span> question{displayedFAQs.length > 1 ? 's' : ''} dans {faqCategories.find(c => c.id === activeCategory)?.label}
                </>
              )}
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-8 pb-24">
          <div className="max-w-4xl mx-auto px-6">
            {displayedFAQs.length > 0 ? (
              <div className="space-y-4">
                {displayedFAQs.map((faq, index) => (
                  <motion.article
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`
                      bg-white rounded-xl border-2 transition-all duration-200
                      ${openFAQId === faq.id
                        ? 'border-factory-orange shadow-lg'
                        : 'border-factory-border hover:border-factory-orange/50'
                      }
                    `}
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-factory-orange focus-visible:ring-offset-2 rounded-xl"
                      aria-expanded={openFAQId === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <h3 className="flex-1 text-lg md:text-xl font-heading font-semibold text-factory-dark group-hover:text-factory-orange transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 text-factory-orange mt-1"
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {openFAQId === faq.id && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="prose prose-lg max-w-none">
                              <MarkdownContent content={faq.answer} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-heading font-bold text-factory-dark mb-3">
                  Aucun resultat trouve
                </h3>
                <p className="text-lg text-factory-text-secondary mb-6">
                  Essayez un autre terme de recherche ou parcourez les categories
                </p>
                <button
                  onClick={clearSearch}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Reinitialiser la recherche
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-factory-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Vous n&apos;avez pas trouve votre reponse ?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Contactez notre support - Reponse garantie sous 24h
            </p>
            <a
              href="mailto:digitalaine@gmail.com?subject=Question%20-%20Help%20Center"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              <Mail size={20} />
              digitalaine@gmail.com
            </a>
            <p className="text-sm text-white/60 mt-4">
              Disponible Lun-Ven 9h-18h (Paris) • Reponse sous 24h ouvrees
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/**
 * Simple Markdown Renderer Component
 * Handles common markdown patterns in FAQ answers
 */
function MarkdownContent({ content }: { content: string }) {
  // Split by paragraphs
  const blocks = content.split(/\n\n+/)

  return (
    <div className="space-y-4 text-factory-text-secondary leading-relaxed">
      {blocks.map((block, idx) => {
        // Code block
        if (block.startsWith('```')) {
          const code = block.replace(/```.*\n/, '').replace(/```$/, '')
          return (
            <pre key={idx} className="bg-factory-dark text-white p-4 rounded-lg overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          )
        }

        // Table (simple detection)
        if (block.includes('|')) {
          const rows = block.split('\n').filter(row => row.trim())
          return (
            <div key={idx} className="overflow-x-auto">
              <table className="min-w-full border border-factory-border rounded-lg overflow-hidden text-sm">
                <tbody>
                  {rows.map((row, rIdx) => {
                    // Skip separator row
                    if (row.includes('---')) return null
                    const cells = row.split('|').filter(c => c.trim())
                    const isHeader = rIdx === 0
                    return (
                      <tr key={rIdx} className={isHeader ? 'bg-factory-stone font-semibold' : 'bg-white even:bg-factory-surface'}>
                        {cells.map((cell, cIdx) => {
                          const Tag = isHeader ? 'th' : 'td'
                          return (
                            <Tag key={cIdx} className="px-4 py-2 border-b border-factory-border text-left">
                              {parseInlineMarkdown(cell.trim())}
                            </Tag>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        }

        // Bullet list
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.startsWith('- '))
          return (
            <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
              {items.map((item, iIdx) => (
                <li key={iIdx}>{parseInlineMarkdown(item.replace(/^- /, ''))}</li>
              ))}
            </ul>
          )
        }

        // Heading
        if (block.startsWith('##')) {
          const level = block.match(/^#+/)?.[0].length || 2
          const text = block.replace(/^#+\s*/, '')
          const Tag = `h${Math.min(level, 6)}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          return (
            <Tag key={idx} className="font-heading font-bold text-factory-dark mt-6 mb-3">
              {parseInlineMarkdown(text)}
            </Tag>
          )
        }

        // Regular paragraph
        return (
          <p key={idx} className="leading-relaxed">
            {parseInlineMarkdown(block)}
          </p>
        )
      })}
    </div>
  )
}

/**
 * Parse inline markdown (bold, italic, code, links)
 */
function parseInlineMarkdown(text: string) {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining) {
    // Bold **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    if (boldMatch) {
      const before = remaining.slice(0, boldMatch.index)
      if (before) parts.push(<span key={key++}>{before}</span>)
      parts.push(<strong key={key++} className="font-semibold text-factory-dark">{boldMatch[1]}</strong>)
      remaining = remaining.slice((boldMatch.index || 0) + boldMatch[0].length)
      continue
    }

    // Inline code `code`
    const codeMatch = remaining.match(/`(.+?)`/)
    if (codeMatch) {
      const before = remaining.slice(0, codeMatch.index)
      if (before) parts.push(<span key={key++}>{before}</span>)
      parts.push(
        <code key={key++} className="bg-factory-stone text-factory-dark px-2 py-0.5 rounded text-sm font-mono">
          {codeMatch[1]}
        </code>
      )
      remaining = remaining.slice((codeMatch.index || 0) + codeMatch[0].length)
      continue
    }

    // Link [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/)
    if (linkMatch) {
      const before = remaining.slice(0, linkMatch.index)
      if (before) parts.push(<span key={key++}>{before}</span>)
      parts.push(
        <a
          key={key++}
          href={linkMatch[2]}
          className="text-factory-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-factory-orange rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      )
      remaining = remaining.slice((linkMatch.index || 0) + linkMatch[0].length)
      continue
    }

    // No more matches
    parts.push(<span key={key++}>{remaining}</span>)
    break
  }

  return <>{parts}</>
}
