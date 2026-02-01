import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AreenaMahek",
  assetPrefix: "/AreenaMahek/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
