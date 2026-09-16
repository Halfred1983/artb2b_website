import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/terms-and-conditions#privacy",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/terms-and-conditions#privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
