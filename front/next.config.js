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
};

module.exports = nextConfig;
