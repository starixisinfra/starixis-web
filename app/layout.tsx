import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

const title = "Starixis Inc. — Intelligence for the Future of Retail";
const description = "Starixis develops connected technologies, intelligent systems, and modern infrastructure for more adaptive retail operations and experiences.";

export const metadata: Metadata = {
  metadataBase: new URL("https://starixis.com"),
  title,
  description,
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, url: "https://starixis.com", siteName: "Starixis", images: ["/og-image.svg"], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Starixis Inc.", url: "https://starixis.com", logo: "https://starixis.com/icon.svg" };
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
