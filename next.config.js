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
  // ✅ ADD THIS LINE BELOW:
    minimumCacheTTL: 0, 
  },
};

module.exports = nextConfig;