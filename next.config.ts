import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/doorsteps-demo",
  assetPrefix: "/doorsteps-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
