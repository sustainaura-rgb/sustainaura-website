/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  devIndicators: false,

  // ✅ Enable static export (creates /out folder)
  output: 'export',

  // ✅ Required for static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
