import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AreenaMahek",
  assetPrefix: "/AreenaMahek/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
