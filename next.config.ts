import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
};

export default nextConfig;
