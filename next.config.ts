import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
