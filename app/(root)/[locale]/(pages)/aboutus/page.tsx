import AboutUsSection from "@/components/sections/AboutUs";
import OurServices from "@/components/sections/OurServices";
import CTA from "@/components/sections/CallToAction";
import SectionHero from "@/components/sections/SectionHero";
import { useTranslations } from "next-intl";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.aboutus" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
  };
}

const AboutUs = () => {
  const t = useTranslations("AboutUs");
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>
        <AboutUsSection extended />
      </BackgroundImageWrapper>
      <OurServices />
      <CTA />
    </>
  );
};

export default AboutUs;
