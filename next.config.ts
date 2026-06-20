import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  dangerouslyAllowSVG: true,
  remotePatterns: [
    {
      protocol: "https",
      hostname: "github-readme-stats.vercel.app",
    },
    {
      protocol: "https",
      hostname: "github-readme-streak-stats.herokuapp.com",
    },
  ],
}
};

export default nextConfig;