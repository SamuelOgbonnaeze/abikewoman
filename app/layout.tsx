import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abikewoman | Authentic Nigerian Fashion & Accessories",
    template: "%s | Abikewoman",
  },
  description: "Discover the best in authentic Nigerian fashion, accessories, and culture with Abikewoman. Shop our latest collections of Nuach, Igbatuntun, Bridals, and more.",
  keywords: ["Nigerian fashion", "Abikewoman", "Nuach", "Igbatuntun", "African accessories", "Aso oke", "Bridals"],
  authors: [{ name: "Abikewoman" }],
  openGraph: {
    title: "Abikewoman | Authentic Nigerian Fashion",
    description: "Discover the best in authentic Nigerian fashion, accessories, and culture with Abikewoman.",
    url: "https://www.theabikewoman.org",
    siteName: "Abikewoman",
    images: [
      {
        url: "https://www.theabikewoman.org/banner.png",
        width: 1200,
        height: 630,
        alt: "Abikewoman Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abikewoman | Authentic Nigerian Fashion",
    description: "Discover the best in authentic Nigerian fashion, accessories, and culture with Abikewoman.",
    images: ["https://www.theabikewoman.org/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Toaster />
        <Navigation />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "WebSite",
               name: "Abikewoman",
               url: "https://www.theabikewoman.org",
               description: "Authentic Nigerian Fashion and Accessories",
             })
          }}
        />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
