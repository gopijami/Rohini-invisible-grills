/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // static export friendly
  output: 'export',
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
  },
  // Enable lazy loading and code splitting
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Optimize bundle size
  productionBrowserSourceMaps: false,
  // Tree-shaking and unused code elimination
  experimental: {
    isrMemoryCacheSize: 0,
    optimizePackageImports: [
      'components',
      'lib',
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
