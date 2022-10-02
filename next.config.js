/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['media.graphassets.com'],
    // formats: ['image/avif', 'image/webp', 'image/png'],
  },
};

module.exports = nextConfig;
