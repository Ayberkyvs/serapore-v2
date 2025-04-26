import Header from "@/components/layout/Header";
import { NextIntlClientProvider, hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/app/i18n/routing";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import MobileBottomMenu from "@/components/mobile-bottom-menu";
import { useMenuItems } from "@/lib/hooks/useMenuItems";
import { getTranslations } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.root" });
  return {
    title: {
      template: t("title.template"),
      default: t("title.default"),
    },
    description: t("description"),
    applicationName: "Serapore",
    referrer: "origin-when-cross-origin",
    keywords: [
      t("keywords.1"),
      t("keywords.2"),
      t("keywords.3"),
      t("keywords.4"),
      t("keywords.5"),
      t("keywords.6"),
      t("keywords.7"),
      t("keywords.8"),
      t("keywords.9"),
      t("keywords.10"),
      t("keywords.11"),
      t("keywords.12"),
      t("keywords.13"),
      t("keywords.14"),
      t("keywords.15"),
      t("keywords.16"),
    ],
    authors: { name: t("authors.name"), url: t("authors.url") },
    creator: t("creator"),
    publisher: t("publisher"),
    robots: "index, follow",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: "https://serapore.com",
      siteName: t("openGraph.siteName"),
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
  };
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <html lang={locale}>
        <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
          <Header />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <MobileBottomMenu />
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
