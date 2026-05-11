import type { Metadata } from "next";
import { Geist, Geist_Mono, Gaegu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gen Chang - Product Designer",
  description: "Product designer by trade, tinkerer by nature.",
  openGraph: {
    title: "Gen Chang - Product Designer",
    description: "Product designer by trade, tinkerer by nature.",
    url: "/",
    siteName: "Gen Chang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Chang - Product Designer",
    description: "Product designer by trade, tinkerer by nature.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${gaegu.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-[#fafcfd] text-[#32404f]">{children}</body>
    </html>
  );
}
