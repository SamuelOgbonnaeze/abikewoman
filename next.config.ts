/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1dapjksca996u.cloudfront.net",
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
