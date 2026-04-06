/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local /public images (default) plus any external domains you may add later
    remotePatterns: [],
    // Treat missing local images gracefully via onError in the component
    unoptimized: false,
  },
};

export default nextConfig;
