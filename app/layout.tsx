import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pademangantimur.my.id/"),
  title: {
    template: "%s | Kelurahan Pademangan Timur",
    default: "Kelurahan Pademangan Timur - Aplikasi ASN",
  },
  description: "Aplikasi ASN Pademangan Timur - Kelurahan Pademangan Timur untuk mempermudah akses informasi dan layanan masyarakat.",
  keywords: ["Kelurahan Pademangan Timur", "Aplikasi ASN", "Layanan Masyarakat", "Informasi Kelurahan", "Pademangan Timur"],
  authors: [{ name: "Kelurahan Pademangan Timur" }],
  openGraph: {
    type: "website",
    url: "https://pademangantimur.my.id/",
    title: "Kelurahan Pademangan Timur - Aplikasi ASN",
    description: "Aplikasi ASIN Pademangan Timur untuk mempermudah akses informasi dan layanan masyarakat.",
    images: [
      {
        url: "/img/pademangan.png",
        width: 1200,
        height: 630,
        alt: "Aplikasi ASN Pademangan Timur",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redhat.className}>{children}</body>
    </html>
  );
}
