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
};

module.exports = nextConfig;
