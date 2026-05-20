/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // No basePath: site is served from the root of the custom domain
  // (familyresortstories.de). If you ever go back to GH Pages without a
  // custom domain, set basePath: "/FamilyResortStories" again.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
