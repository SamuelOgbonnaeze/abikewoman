// Product images and videos are served from this CDN.
const CDN_HOST = "d1dapjksca996u.cloudfront.net";

// Next.js needs inline scripts and styles to hydrate. Development also needs
// eval for fast refresh, and Vercel Analytics loads its debug script from
// va.vercel-scripts.com (in production it's served from /_vercel/insights).
const isDev = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://${CDN_HOST}`,
  `media-src 'self' https://${CDN_HOST}`,
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework in an X-Powered-By header.
  poweredByHeader: false,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: CDN_HOST,
      },
    ],
  },

  async redirects() {
    return [
      // Short link for flyers / QR codes at the fair
      { source: "/fair", destination: "/naija-made-market", permanent: false },
    ];
  },

  async headers() {
    return [
      // ── Security ─────────────────────────────────────────────────────────
      {
        source: "/:path*",
        headers: securityHeaders,
      },

      // ── Videos ──────────────────────────────────────────────────────────
      // 1 year, immutable — rename the file to bust the cache when updated
      {
        source: "/:path*.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          // Vercel Edge Network cache (independent of browser cache)
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ── Images ───────────────────────────────────────────────────────────
      // 1 day in browser, served stale from CDN for up to 7 days while
      // Vercel revalidates in the background
      {
        source: "/:path*.(png|jpg|jpeg|webp|svg|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
