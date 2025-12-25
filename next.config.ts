import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Portfolio"; // MUST match GitHub repo name exactly

const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
