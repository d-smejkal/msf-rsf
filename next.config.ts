import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/msf-rsf",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
