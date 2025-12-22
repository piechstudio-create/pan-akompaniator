/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Wymuszenie sprawdzania typów i linta podczas builda dla bezpieczeństwa
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      }
    ],
  },
  // Optymalizacja czcionek jest domyślnie włączona w Next.js 15
};

module.exports = nextConfig;