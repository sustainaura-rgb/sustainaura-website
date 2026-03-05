import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  devIndicators: false,

  // ✅ Enable static export (creates /out folder)
  output: 'export',

  // ✅ Enable compression
  compress: true,

  // ✅ Required for static hosting
  images: {
    unoptimized: true,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "sustainaura",
    project: "sustainaura-web",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    disableLogger: true,
  }
);
