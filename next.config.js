/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'yt3.ggpht.com',
      'avatars.githubusercontent.com',
      'banahaker.github.io',
    ],
  },
};

module.exports = nextConfig;
