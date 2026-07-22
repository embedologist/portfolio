/** @type {import('next').NextConfig} */

// This automatically detects if you are running locally or building for GitHub
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply the /portfolio path when deploying to GitHub Pages
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio' : '',
};

module.exports = nextConfig;