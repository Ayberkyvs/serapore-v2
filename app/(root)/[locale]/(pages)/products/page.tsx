import HighlightedProducts from "@/components/sections/HighlightedProducts";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import CTA from "@/components/sections/CallToAction";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ALL_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { Products } from "@/sanity/types";
import ProductNotFoundAlert from "@/components/ProductNotFoundAlert";

export const revalidate = 60;

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

const Page = async () => {
  const t = await getTranslations("Products");
  const products: Products[] = await client.fetch(ALL_PRODUCTS_QUERY);
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper className="min-h-0">
        <HighlightedProducts />
      </BackgroundImageWrapper>
      <div className="all-products">
        <div className="flex flex-col inner-all-products py-25 gap-5">
          <SectionHeading
            title={t("sectionHeading.title")}
            subtitle={t("sectionHeading.subtitle")}
          />
          <div className="w-full grid items-center xs:items-start grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} data={product} />
              ))
            ) : (
              <ProductNotFoundAlert />
            )}
          </div>
        </div>
        <CTA />
      </div>
    </>
  );
};

export default Page;
