import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL("https://lilabrooks.github.io");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Lila Brooks | Senior Engineering Leader",
  description:
    "Lila Brooks is a senior engineering leader working across platforms, product engineering, developer experience, reliability, and Applied AI.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Lila Brooks | Senior Engineering Leader",
    description:
      "I build software and platforms that help teams ship with confidence.",
    siteName: "Lila Brooks",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lila Brooks, senior engineering leader in platform, product, and Applied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lila Brooks | Senior Engineering Leader",
    description:
      "I build software and platforms that help teams ship with confidence.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
