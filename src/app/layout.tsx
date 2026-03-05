import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://restom-dental-clinic.uz"),
  title: "Restom Dental Clinic | Современная стоматология в Ташкенте",
  description:
    "Премиальная стоматология в Ташкенте. Имплантация, виниры, отбеливание, лечение кариеса — без боли и страха. Запишитесь онлайн.",
  keywords: ["стоматология", "Ташкент", "имплантация", "виниры", "отбеливание", "Restom Dental"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Restom Dental Clinic",
    title: "Restom Dental Clinic | Современная стоматология в Ташкенте",
    description:
      "Премиальная стоматология в Ташкенте. Имплантация, виниры, отбеливание, лечение кариеса — без боли и страха.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Restom Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restom Dental Clinic | Современная стоматология в Ташкенте",
    description:
      "Премиальная стоматология в Ташкенте. Имплантация, виниры, отбеливание, лечение кариеса.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      </head>
      <body className={`${inter.variable} antialiased bg-brand-900 text-white font-sans selection:bg-brand-accent selection:text-brand-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
