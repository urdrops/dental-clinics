import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://restom-dental-clinic.uz"),
  title: "Restom Dental Clinic | Современная стоматология в Ташкенте",
  description:
    "Премиальная стоматология в Ташкенте. Имплантация, виниры, отбеливание, лечение кариеса, ортодонтия, детская стоматология — без боли и страха. Запишитесь онлайн.",
  keywords: [
    "стоматология Ташкент", "стоматология", "имплантация зубов Ташкент", "виниры Ташкент",
    "отбеливание зубов", "брекеты Ташкент", "ортодонт Ташкент", "детская стоматология Ташкент",
    "лечение кариеса", "коронки", "Restom Dental", "Restom Dental Clinic",
    "tish davolash Toshkent", "stomatologiya Toshkent", "implantatsiya", "vinirlar",
    "bolalar stomatologiyasi", "ortodontiya Toshkent",
  ],
  alternates: {
    languages: {
      "ru": "https://restom-dental-clinic.uz",
      "uz": "https://restom-dental-clinic.uz",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: "uz_UZ",
    siteName: "Restom Dental Clinic",
    title: "Restom Dental Clinic | Современная стоматология в Ташкенте",
    description:
      "Премиальная стоматология в Ташкенте. Имплантация, виниры, отбеливание, брекеты, детская стоматология — без боли и страха.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Restom Dental Clinic — Стоматология в Ташкенте",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restom Dental Clinic | Стоматология в Ташкенте",
    description:
      "Имплантация, виниры, брекеты, детская стоматология в Ташкенте. Запишитесь онлайн.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B192C" />
        <link rel="alternate" hrefLang="ru" href="https://restom-dental-clinic.uz" />
        <link rel="alternate" hrefLang="uz" href="https://restom-dental-clinic.uz" />
        <link rel="alternate" hrefLang="x-default" href="https://restom-dental-clinic.uz" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Restom Dental Clinic",
              "url": "https://restom-dental-clinic.uz",
              "logo": "https://restom-dental-clinic.uz/logo.svg",
              "image": "https://restom-dental-clinic.uz/og-image.png",
              "telephone": "+998555199119",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bobura ko'chasi, 61",
                "addressLocality": "Toshkent",
                "addressCountry": "UZ",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.311081,
                "longitude": 69.240562,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "18:00",
                },
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "20",
                "bestRating": "5",
              },
              "medicalSpecialty": [
                "Dentistry",
                "Orthodontics",
                "Prosthodontics",
                "Pediatric Dentistry",
                "Oral Surgery",
              ],
              "availableService": [
                { "@type": "MedicalProcedure", "name": "Dental Implants" },
                { "@type": "MedicalProcedure", "name": "Dental Veneers" },
                { "@type": "MedicalProcedure", "name": "Teeth Whitening" },
                { "@type": "MedicalProcedure", "name": "Orthodontics" },
                { "@type": "MedicalProcedure", "name": "Dental Crowns" },
                { "@type": "MedicalProcedure", "name": "Pediatric Dentistry" },
              ],
              "sameAs": [
                "https://www.instagram.com/restom.dental.clinic",
                "https://www.youtube.com/@dr.farkhod_usmanov",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-brand-900 text-white font-sans selection:bg-brand-accent selection:text-brand-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
