import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "MYQORZO (Aficamten) — Precision Cardiac Therapy for oHCM",
  description:
    "Explore the science behind MYQORZO (aficamten), a next-generation cardiac myosin inhibitor for obstructive hypertrophic cardiomyopathy. Clinical data, mechanism of action, and market outlook.",
  keywords: [
    "MYQORZO",
    "aficamten",
    "oHCM",
    "hypertrophic cardiomyopathy",
    "cardiac myosin inhibitor",
    "Bristol-Myers Squibb",
  ],
  openGraph: {
    title: "MYQORZO (Aficamten) — Precision Cardiac Therapy",
    description:
      "A narrative exploration of MYQORZO for obstructive hypertrophic cardiomyopathy: from disease burden to commercial outlook.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalWebPage",
                  name: "MYQORZO (Aficamten) — Precision Cardiac Therapy for oHCM",
                  description:
                    "A scientific editorial exploring MYQORZO (aficamten), a cardiac myosin inhibitor for obstructive hypertrophic cardiomyopathy.",
                  url: "https://myqorzo.com",
                  inLanguage: "en",
                  medicalAudience: {
                    "@type": "MedicalAudience",
                    audienceType: "Clinician",
                  },
                },
                {
                  "@type": "Drug",
                  name: "MYQORZO",
                  alternateName: "aficamten",
                  activeIngredient: "aficamten",
                  drugClass: "Cardiac Myosin Inhibitor",
                  manufacturer: {
                    "@type": "Organization",
                    name: "Bristol-Myers Squibb",
                  },
                },
                {
                  "@type": "Organization",
                  name: "Bristol-Myers Squibb",
                  url: "https://www.bms.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
