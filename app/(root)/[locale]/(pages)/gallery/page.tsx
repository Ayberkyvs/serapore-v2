import CTA from "@/components/sections/CallToAction";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Gallery");
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>.</BackgroundImageWrapper>
      <CTA />
    </>
  );
};

export default Page;
