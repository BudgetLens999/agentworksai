import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
});

const SITE_URL = "https://agentworksai.com"; // update once the real domain is live

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AgentWorksAI — Custom AI agents for small businesses, billed monthly",
  description:
    "AgentWorksAI builds a custom AI agent for your business — one that answers your inbox, follows up on leads, or chases invoices — and bills it like software, not a project.",
  openGraph: {
    title: "AgentWorksAI — Custom AI agents for small businesses",
    description:
      "Custom AI agents for small businesses, built once and billed monthly like software.",
    url: SITE_URL,
    siteName: "AgentWorksAI",
    type: "website",
  },
};

// Structured data so AI answer engines (and Google) can parse who this is,
// what it does, and how to contact it — the same pattern used on
// progymmaintenance.com.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AgentWorksAI",
  description:
    "Custom AI agent development for small businesses, delivered and billed on a monthly SaaS subscription.",
  url: SITE_URL,
  areaServed: "Worldwide",
  serviceType: [
    "AI agent development",
    "Business process automation",
    "Custom software for small business",
  ],
  makesOffer: [
    { "@type": "Offer", name: "Marketing & content automation agent" },
    { "@type": "Offer", name: "Customer service & communications agent" },
    { "@type": "Offer", name: "Sales support & lead generation agent" },
    { "@type": "Offer", name: "Administrative automation agent" },
    { "@type": "Offer", name: "Financial management agent" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
