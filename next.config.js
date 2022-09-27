/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
};

module.exports = nextConfig;
