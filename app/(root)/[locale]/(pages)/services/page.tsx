import CTA from "@/components/sections/CallToAction";
import OurServices from "@/components/sections/OurServices";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.services" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
  };
}

const Page = () => {
  const t = useTranslations("Services");
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>
        <OurServices />
      </BackgroundImageWrapper>
      <CTA />
    </>
  );
};

export default Page;
