import SectionHero from "@/components/sections/SectionHero";
import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import CTA from "@/components/sections/CallToAction";
import OurPartners from "@/components/sections/OurPartners";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.contactus" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
    alternates: {
      canonical: "/contactus",
      languages: {
        en: "/en/contactus",
        tr: "/tr/contactus",
      },
    },
  };
}

const Page = () => {
  const t = useTranslations("ContactUs");
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>
        <OurPartners />
      </BackgroundImageWrapper>
      <ContactUsSection />
      <CTA />
    </>
  );
};

export default Page;
