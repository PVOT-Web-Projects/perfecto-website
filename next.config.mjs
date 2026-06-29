/** @type {import('next').NextConfig} */

// On GitHub Pages project sites the app is served from a sub-path
// (e.g. /perfecto-website). Set NEXT_PUBLIC_BASE_PATH to that sub-path in CI.
// For a custom domain served at the root, leave it empty ('').
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static HTML export -> ./out (for GitHub Pages)
  images: { unoptimized: true }, // required for static export
  basePath,
  trailingSlash: true,
};

export default nextConfig;
