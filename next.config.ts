import type { NextConfig } from "next";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "kordon";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
