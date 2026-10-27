/** @type {import('next').NextConfig} */

// Server-side only. Where the Next.js server forwards API calls; the browser never sees it.
const API_INTERNAL_URL = process.env.API_INTERNAL_URL || "http://localhost:8080";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains"
  }
];

const nextConfig = {
  // Cache Components (and partialPrefetching, which requires it) are off on purpose. They
  // prerender a static shell at build time, and that shell carries Next.js' own <script> tags
  // without the per-request CSP nonce set in proxy.js, so the browser blocks every script.
  // Pages are rendered per request instead (see `dynamic` in src/app/layout.js).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Indicator on the bottom left
  devIndicators: false,

  // Same-origin API: the browser calls /api/* on this origin, so the auth cookies are
  // first-party and no CORS is involved. Content-Security-Policy is set per request in proxy.js.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_INTERNAL_URL}/api/:path*`
      }
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;