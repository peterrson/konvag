/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'konvag.com',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'tawk.to',
      },
      {
        protocol: 'https',
        hostname: 'embed.tawk.to',
      },
    ],
    // ✅ Add these two lines to optimize image caching
    minimumCacheTTL: 0,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig