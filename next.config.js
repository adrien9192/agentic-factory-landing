/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/agentic-factory-landing',
  assetPrefix: '/agentic-factory-landing',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
