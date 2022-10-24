/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'docs',
  images: { unoptimized: true },
};

module.exports = nextConfig;
