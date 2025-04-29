import Hero from "@/components/sections/Hero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import OurPartners from "@/components/sections/OurPartners";
import OurServices from "@/components/sections/OurServices";
import HighlightedProducts from "@/components/sections/HighlightedProducts";
import ContactUsSection from "../../../components/sections/ContactUsSection";
import CTA from "@/components/sections/CallToAction";
import AboutUsSection from "@/components/sections/AboutUs";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.home" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <BackgroundImageWrapper>
        <AboutUsSection />
      </BackgroundImageWrapper>
      <OurPartners />
      <OurServices />
      <HighlightedProducts />
      <ContactUsSection />
      <CTA />
    </>
  );
}
