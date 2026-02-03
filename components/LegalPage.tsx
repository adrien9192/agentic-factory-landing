'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

interface LegalPageProps {
  content: string
  title: string
}

export default function LegalPage({ content, title }: LegalPageProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Extract headings from markdown content
    const extractedHeadings: { id: string; text: string; level: number }[] = []
    const lines = content.split('\n')

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)/)
      if (match) {
        const level = match[1].length
        const text = match[2].replace(/\*\*/g, '').trim()
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
        extractedHeadings.push({ id, text, level })
      }
    })

    setHeadings(extractedHeadings)
  }, [content])

  return (
    <div className="min-h-screen bg-factory-bg text-factory-text">
      {/* Header */}
      <header className="bg-factory-surface-dark border-b border-factory-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold font-heading text-white hover:text-factory-orange transition-colors">
            Agentic Factory
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold text-factory-orange uppercase tracking-wide mb-4">
                Table des Matières
              </h2>
              <nav className="space-y-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm hover:text-factory-orange transition-colors ${
                      heading.level === 3 ? 'pl-4 text-gray-400' : 'text-gray-300'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile TOC Dropdown */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-factory-surface-dark border border-factory-border rounded-lg px-4 py-3 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-factory-orange">Table des Matières</span>
              <svg
                className={`w-5 h-5 text-factory-orange transition-transform ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="mt-2 bg-factory-surface-dark border border-factory-border rounded-lg p-4 space-y-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm hover:text-factory-orange transition-colors ${
                      heading.level === 3 ? 'pl-4 text-gray-400' : 'text-gray-300'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <article className="prose prose-invert prose-factory max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold font-heading text-white mb-6 mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => {
                    const text = String(children)
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9\s-]/g, '')
                      .replace(/\s+/g, '-')
                    return (
                      <h2 id={id} className="text-2xl font-bold font-heading text-white mt-8 mb-4 scroll-mt-24">
                        {children}
                      </h2>
                    )
                  },
                  h3: ({ children }) => {
                    const text = String(children)
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9\s-]/g, '')
                      .replace(/\s+/g, '-')
                    return (
                      <h3 id={id} className="text-xl font-semibold text-white mt-6 mb-3 scroll-mt-24">
                        {children}
                      </h3>
                    )
                  },
                  p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-factory-orange hover:underline"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-factory-border">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-factory-surface-dark">{children}</thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-y divide-factory-border">{children}</tbody>
                  ),
                  tr: ({ children }) => (
                    <tr>{children}</tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-3 text-left text-sm font-semibold text-factory-orange">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {children}
                    </td>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-factory-orange bg-factory-surface-dark px-4 py-3 my-4 italic text-gray-400">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className
                    return isInline ? (
                      <code className="bg-factory-surface-dark px-1.5 py-0.5 rounded text-factory-orange text-sm font-mono">
                        {children}
                      </code>
                    ) : (
                      <code className={className}>
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-factory-surface-dark border border-factory-border rounded-lg p-4 overflow-x-auto mb-6">
                      {children}
                    </pre>
                  ),
                  hr: () => (
                    <hr className="border-factory-border my-8" />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-factory-border">
              <div className="bg-factory-surface-dark rounded-lg p-6 space-y-4">
                <p className="text-sm text-gray-400">
                  Dernière mise à jour: 3 février 2026
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:digitalaine@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Nous Contacter
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-factory-border text-gray-300 font-semibold rounded-lg hover:bg-factory-surface-dark transition-colors"
                  >
                    Retour à l&apos;Accueil
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          header,
          aside,
          .lg\\:hidden,
          footer,
          .border-t.border-factory-border > div {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          article * {
            color: black !important;
          }
          a {
            text-decoration: underline !important;
          }
        }
      `}</style>
    </div>
  )
}
