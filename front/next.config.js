/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resizer.glanacion.com',
      },
    ],
  },
  experimental: {
    scrollRestoration: true
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
