import SectionHero from '@/components/sections/SectionHero';
import { useTranslations } from 'next-intl';
import ContactUsSection from '@/components/sections/ContactUsSection';
import BackgroundImageWrapper from '@/components/ui/background-image-wrapper';
import CTA from '@/components/sections/CallToAction';
import OurPartners from '@/components/sections/OurPartners';
const Page = () => {
    const t = useTranslations("ContactUs");
  return <>
    <SectionHero title={t("hero.title")} description={t("hero.description")} />
    <BackgroundImageWrapper>
        <OurPartners />
    </BackgroundImageWrapper>
    <ContactUsSection />
    <CTA />
  </>;
};

export default Page;
