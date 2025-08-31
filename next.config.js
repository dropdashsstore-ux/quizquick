/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // if you're using the App Router
  },
  env: {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  },
  images: {
    domains: [], // add any image domains you plan to load
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // keeps API routing simple
      },
    ];
  },
};

module.exports = nextConfig;
