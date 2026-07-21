import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

const title = "Starixis Limited — Connected Retail Technology";
const description = "Starixis develops connected retail technology designed to bring systems, operations, information, and customer experiences together.";

export const metadata: Metadata = {
  metadataBase: new URL("https://starixis.com"),
  title,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/starixis-icon.svg", type: "image/svg+xml" },
      { url: "/starixis-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/starixis-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/starixis-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/starixis-icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/starixis-icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/starixis-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/starixis-icon-32.png",
    apple: [{ url: "/starixis-app-icon-1024.png", sizes: "1024x1024", type: "image/png" }],
  },
  openGraph: { title, description, url: "https://starixis.com", siteName: "Starixis", images: ["/og-image.svg"], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Starixis Limited", url: "https://starixis.com", logo: "https://starixis.com/starixis-icon-512.png" };
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
