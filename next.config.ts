import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'andresgoris.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
