import HighlightedProducts from "@/components/sections/HighlightedProducts";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import CTA from "@/components/sections/CallToAction";
const Page = () => {
  const t = useTranslations("Products");
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>
        <HighlightedProducts />
      </BackgroundImageWrapper>
      <div className="all-products">
        <div className="flex flex-col inner-all-products py-25 gap-5">
          <SectionHeading
            title={t("sectionHeading.title")}
            subtitle={t("sectionHeading.subtitle")}
          />
          <div className="w-full border-2 grid items-center md:items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
          </div>
        </div>
        <CTA />
      </div>
    </>
  );
};

export default Page;
