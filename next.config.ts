/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1dapjksca996u.cloudfront.net",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
