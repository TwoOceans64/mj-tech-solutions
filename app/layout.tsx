import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⭐ FULL SEO METADATA ⭐
export const metadata: Metadata = {
  title: "MJ Tech Solutions | Tech Repairs & Business Services South Africa",
  description:
    "MJ Tech Solutions offers cellphone repairs, laptop repairs, CCTV setup, business registrations, logo design, and more across South Africa.",
  keywords: [
    "MJ Tech Solutions",
    "cellphone repairs South Africa",
    "laptop repairs",
    "CCTV installation",
    "business registration services",
    "logo design",
    "tech support",
    "computer repairs",
    "graphic design",
    "MJ Tech Warrenton",
  ],
  openGraph: {
    title: "MJ Tech Solutions",
    description:
      "Reliable tech repairs, business services, and design solutions across South Africa.",
    url: "https://mj-tech-solutions.vercel.app",
    siteName: "MJ Tech Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Tech Solutions",
    description:
      "Fast and reliable tech services for South Africa — repairs, registrations, and design.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ⭐ Google Search Console Verification ⭐ */}
        <meta name="google-site-verification" content="DGTFiCskv3M5hAC" />
      </head>

      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/27647604062"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40 hover:bg-emerald-600 transition"
          target="_blank"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
        </a>
      </body>
    </html>
  );
}