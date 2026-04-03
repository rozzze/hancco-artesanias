import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // TRUCO: Permite cargar imágenes de CUALQUIER sitio web
      },
    ],
  },
};

export default nextConfig;