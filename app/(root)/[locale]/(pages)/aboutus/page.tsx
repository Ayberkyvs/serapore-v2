import AboutUsSection from "@/components/sections/AboutUs"
import OurServices from "@/components/sections/OurServices"
import CTA from '@/components/sections/CallToAction';
import SectionHero from '@/components/sections/SectionHero';
import { useTranslations } from "next-intl";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";

const AboutUs = () => {
  const t = useTranslations("AboutUs")
  return (
    <>
        <SectionHero title={t("hero.title")} description={t("hero.description")}/>
        <BackgroundImageWrapper>
          <AboutUsSection extended />
        </BackgroundImageWrapper>
        <OurServices />
        <CTA />
    </>
  )
}

export default AboutUs