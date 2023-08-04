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
      'raw.githubusercontent.com',
      'cdn.haco.tw',
      'cdn.discordapp.com',
    ],
  },
};

module.exports = nextConfig;
