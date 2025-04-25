import CTA from "@/components/sections/CallToAction"
import OurServices from "@/components/sections/OurServices"
import SectionHero from '@/components/sections/SectionHero';
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Services");
  return (
    <>
        <SectionHero title={t("hero.title")} description={t("hero.description")}/>
        <BackgroundImageWrapper>
          <OurServices />
        </BackgroundImageWrapper>
        <CTA />
    </>
  )
}

export default Page