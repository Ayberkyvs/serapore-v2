import HighlightedProducts from "@/components/sections/HighlightedProducts";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import CTA from "@/components/sections/CallToAction";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.products" });
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
          <div className="w-full grid items-center xs:items-start grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
            <ProductCard className="max-w-none xs:max-w-[250px] sm:max-w-[300px] w-full" />
          </div>
        </div>
        <CTA />
      </div>
    </>
  );
};

export default Page;
