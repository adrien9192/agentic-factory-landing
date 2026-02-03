'use client'

interface MarkdownRendererProps {
  content: string
  darkMode?: boolean
}

export default function MarkdownRenderer({ content, darkMode = false }: MarkdownRendererProps) {
  // Parse markdown into structured elements
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []
    let currentNumberedList: string[] = []
    let currentCodeBlock: string[] = []
    let inCodeBlock = false
    let key = 0

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${key++}`} className="space-y-3 mb-6">
            {currentList.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-factory-orange mt-1 flex-shrink-0">●</span>
                <span className={darkMode ? "text-white/90 leading-relaxed" : "text-factory-text-secondary leading-relaxed"}>{parseInline(item)}</span>
              </li>
            ))}
          </ul>
        )
        currentList = []
      }
    }

    const flushNumberedList = () => {
      if (currentNumberedList.length > 0) {
        elements.push(
          <ol key={`numbered-${key++}`} className="space-y-4 mb-6">
            {currentNumberedList.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-factory-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div className="flex-1 pt-1">
                  <div className={darkMode ? "text-white/90 leading-relaxed" : "text-factory-text-secondary leading-relaxed"}>{parseInline(item)}</div>
                </div>
              </li>
            ))}
          </ol>
        )
        currentNumberedList = []
      }
    }

    const flushCodeBlock = () => {
      if (currentCodeBlock.length > 0) {
        elements.push(
          <pre key={`code-${key++}`} className="bg-factory-dark text-white p-4 rounded-lg mb-6 overflow-x-auto">
            <code className="text-sm font-mono">{currentCodeBlock.join('\n')}</code>
          </pre>
        )
        currentCodeBlock = []
      }
    }

    const parseInline = (text: string) => {
      // Bold **text**
      const boldClass = darkMode ? 'font-semibold text-white' : 'font-semibold text-factory-dark'
      text = text.replace(/\*\*(.+?)\*\*/g, `<strong class="${boldClass}">$1</strong>`)
      // Italic *text*
      text = text.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      // Inline code `text`
      const codeClass = darkMode ? 'bg-white/10 text-factory-orange px-2 py-0.5 rounded text-sm font-mono' : 'bg-factory-stone text-factory-orange px-2 py-0.5 rounded text-sm font-mono'
      text = text.replace(/`(.+?)`/g, `<code class="${codeClass}">$1</code>`)
      // Links [text](url)
      text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-factory-orange hover:underline" target="_blank" rel="noopener">$1</a>')

      return <span dangerouslySetInnerHTML={{ __html: text }} />
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Code block
      if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
        } else {
          flushList()
          flushNumberedList()
          inCodeBlock = true
        }
        continue
      }

      if (inCodeBlock) {
        currentCodeBlock.push(line)
        continue
      }

      // Empty line
      if (!trimmed) {
        flushList()
        flushNumberedList()
        continue
      }

      // H3 heading ###
      if (trimmed.startsWith('###')) {
        flushList()
        flushNumberedList()
        const text = trimmed.replace(/^###\s+/, '')
        elements.push(
          <h3 key={`h3-${key++}`} className={darkMode ? "text-xl font-semibold text-white mb-4 mt-6" : "text-xl font-semibold text-factory-dark mb-4 mt-6"}>
            {parseInline(text)}
          </h3>
        )
        continue
      }

      // H2 heading ##
      if (trimmed.startsWith('##')) {
        flushList()
        flushNumberedList()
        const text = trimmed.replace(/^##\s+/, '')
        elements.push(
          <h2 key={`h2-${key++}`} className={darkMode ? "text-2xl font-bold text-white mb-4 mt-8" : "text-2xl font-bold text-factory-dark mb-4 mt-8"}>
            {parseInline(text)}
          </h2>
        )
        continue
      }

      // Checklist - [ ] or - [x]
      if (trimmed.match(/^-\s+\[[ x]\]/)) {
        flushNumberedList()
        const checked = trimmed.includes('[x]')
        const text = trimmed.replace(/^-\s+\[[ x]\]\s*/, '')
        currentList.push(`${checked ? '✓' : '○'} ${text}`)
        continue
      }

      // Numbered list 1. 2. etc
      if (trimmed.match(/^\d+\.\s+/)) {
        flushList()
        const text = trimmed.replace(/^\d+\.\s+/, '')
        currentNumberedList.push(text)
        continue
      }

      // Bullet list - or *
      if (trimmed.match(/^[-*]\s+/)) {
        flushNumberedList()
        const text = trimmed.replace(/^[-*]\s+/, '')
        currentList.push(text)
        continue
      }

      // Quote >
      if (trimmed.startsWith('>')) {
        flushList()
        flushNumberedList()
        const text = trimmed.replace(/^>\s*/, '')
        elements.push(
          <blockquote key={`quote-${key++}`} className={darkMode ? "border-l-4 border-factory-orange pl-4 py-2 mb-6 italic text-white/80" : "border-l-4 border-factory-orange pl-4 py-2 mb-6 italic text-factory-text-secondary"}>
            {parseInline(text)}
          </blockquote>
        )
        continue
      }

      // Regular paragraph
      flushList()
      flushNumberedList()
      elements.push(
        <p key={`p-${key++}`} className={darkMode ? "text-white/90 leading-relaxed mb-4" : "text-factory-text-secondary leading-relaxed mb-4"}>
          {parseInline(trimmed)}
        </p>
      )
    }

    // Flush remaining
    flushList()
    flushNumberedList()
    flushCodeBlock()

    return elements
  }

  return <div className="markdown-content">{parseMarkdown(content)}</div>
}
