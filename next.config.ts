import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // static HTML export for GitHub Pages
  trailingSlash: true,
  basePath: "/FamilyResortStories",
  images: {
    unoptimized: true,       // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
