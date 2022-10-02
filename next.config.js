/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const bucketUrl = process.env.NEXT_PUBLIC_BUCKET_URL;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', baseUrl.replace('https://', ''), bucketUrl.replace('https://', '')]
  },
  i18n
}

module.exports = nextConfig
