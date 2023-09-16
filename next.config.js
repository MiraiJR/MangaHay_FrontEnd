const {
  NextResponse
} = require('next/server');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [{
      source: '/robots.txt',
      destination: '/api/robots'
    }];
  }
};

module.exports = nextConfig;
