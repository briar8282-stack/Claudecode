/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath for GitHub Pages, not for Vercel
  basePath: process.env.VERCEL ? '' : '/Claudecode',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
