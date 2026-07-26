import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keerthika | Senior Brand & Graphic Designer | Kozhikode, Kerala",
  description: "Official portfolio of Keerthika, Senior Brand & Graphic Designer based in Kozhikode, Kerala. Specializing in Brand Identity, Social Media Creatives, Packaging, Print Design, and Illustration.",
  keywords: [
    "Keerthika Graphic Designer",
    "Brand Identity Designer Kozhikode",
    "Graphic Designer Kerala",
    "Packaging Design Kozhikode",
    "Logo Designer Kerala",
    "Social Media Creatives",
    "Print Designer Kozhikode",
  ],
  authors: [{ name: "Keerthika" }],
  openGraph: {
    title: "Keerthika — Senior Brand & Graphic Designer",
    description: "Crafting iconic visual identities, packaging, and high-impact design experiences for ambitious brands.",
    url: "https://keerthika.design",
    siteName: "Keerthika Portfolio",
    images: [
      {
        url: "/project-branding.png",
        width: 1200,
        height: 630,
        alt: "Keerthika Brand & Graphic Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerthika — Senior Brand & Graphic Designer",
    description: "Bespoke brand identities, luxury packaging, print design, and visual storytelling.",
    images: ["/project-branding.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Keerthika",
    jobTitle: "Senior Brand & Graphic Designer",
    email: "keerthika2306@gmail.com",
    telephone: "+91 82810 82489",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    knowsAbout: [
      "Brand Identity",
      "Logo Design",
      "Social Media Design",
      "Packaging Design",
      "Print Design",
      "Illustration",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground bg-[#090A0F] text-[#F3F4F6] selection:bg-gold-500/30 selection:text-gold-300`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
