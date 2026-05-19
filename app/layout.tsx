import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Resort Stories – Honest Family Resort Reviews",
  description:
    "Curated family resort reviews and travel guides. Real experiences, family-tested, worldwide inspiration. Discover the best family resorts in Greece, Turkey, Egypt and beyond.",
  keywords: [
    "family resort reviews",
    "family travel",
    "baby friendly resorts",
    "kids club resorts",
    "luxury family resorts",
    "Greece family holidays",
    "Turkey family resorts",
    "Egypt family resorts",
  ],
  openGraph: {
    title: "Family Resort Stories",
    description: "Honest family resort reviews for unforgettable holidays.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    languages: {
      "de-DE": "/de",
      "en-GB": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head />
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
