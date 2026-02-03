/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'export' to enable dynamic routes
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
