import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});
const title = "Ahmad Kurniawan | Full-Stack Developer";
const description =
  "Full-Stack Developer in Lampung, Indonesia. Web, mobile, and desktop software, including Sinar Mulyo, Hikalist, Caloris, and TaskFlow.";
export const metadata: Metadata = {
  title,
  description,
  applicationName: "Ahmad Kurniawan Portfolio",
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: siteUrl } }
    : {}),
  authors: [{ name: profile.name, url: profile.githubUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    homeLocation: { "@type": "Place", name: profile.location },
    sameAs: [profile.githubUrl, profile.linkedin, profile.instagramUrl],
    ...(siteUrl ? { url: siteUrl } : {}),
  };
  return (
    <html
      lang="en"
      data-motion="full"
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
