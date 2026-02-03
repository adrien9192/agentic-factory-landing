import { blogPosts } from '@/lib/blog-posts'

export async function GET() {
  const baseUrl = 'https://agentic-factory.vercel.app'

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Agentic Factory</title>
    <link>${baseUrl}/blog</link>
    <description>Guides n8n, études de cas avec ROI prouvé, et best practices automation. Templates testés 50+ fois pour automatiser votre business.</description>
    <language>fr-FR</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.metaDescription}]]></description>
      <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <category>${post.category}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
