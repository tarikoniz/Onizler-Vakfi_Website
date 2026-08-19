import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Manrope, Playfair_Display, Roboto_Slab, Montserrat } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const SITE_URL = "https://onizler-vakfi-website.vercel.app";

const META = {
  tr: {
    title: "Önizler Vakfı — Topluma Öncü, Geleceğe İz",
    description:
      "Toplumsal kalkınmanın dinamiklerini bilgi, inovasyon ve sürdürülebilirlik ekseninde yeniden üreten; geleceğe nitelikli değerler aktarmayı amaçlayan öncü bir sivil toplum kuruluşu.",
    locale: "tr_TR",
  },
  en: {
    title: "Önizler Foundation — Pioneer for Society, Legacy for the Future",
    description:
      "A pioneering civil society organization advancing social development through knowledge, innovation and sustainability — transferring qualified values to future generations.",
    locale: "en_US",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : "tr") as "tr" | "en";
  const m = META[l];
  const url = `${SITE_URL}/${l}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      siteName: "Önizler Vakfı",
      locale: m.locale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Önizler Vakfı",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE_URL}/tr`,
        en: `${SITE_URL}/en`,
      },
    },
  };
}

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${manrope.variable} ${playfair.variable} ${robotoSlab.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
