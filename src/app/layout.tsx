import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // <--- 1. IMPORTAR AQUÍ
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // <--- 1. IMPORTAR
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hancco Artesanías | Arequipa",
  applicationName: "Hancco Artesanías",
  description: "Descubre prendas de alpaca, ponchos, chullos y lo mejor de la artesanía arequipeña hecha a mano. Diseños únicos y exclusivos en Hancco Artesanías.",
  keywords: ["Hancco Artesanias", "Artesanía Arequipa", "Prendas de alpaca", "Chompas andinas", "Ponchos con capucha", "Chullos peruanos", "Artesanía peruana"],
  openGraph: {
    title: "Hancco Artesanías | Arequipa",
    description: "Lo mejor en prendas de alpaca y artesanía arequipeña hecha a mano.",
    type: "website",
    locale: "es_PE",
    url: "https://hancco-artesanias.vercel.app/",
    siteName: "Hancco Artesanías",
  },
  verification: {
    google: "67dok2IJNwwn0U1DnPhKMGSu0ETGwZbQN84sey3mKzk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hancco Artesanías",
    "url": "https://hancco-artesanias.vercel.app/"
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navbar />
        
        <main className="min-h-screen pt-16">
          {children}
        </main>

        <FloatingWhatsApp /> {/* <--- 2. PONERLO AQUÍ AL FINAL */}
        
      </body>
    </html>
  );
}
