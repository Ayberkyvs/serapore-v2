import ProductCard from "../ProductCard";
import SectionHeading from "../SectionHeading";
import HorizontalScroller from "../HorizontalScroller";
import MotionOverlayHint from "../MotionOverlayHint";
import { client } from "@/sanity/lib/client";
import { HIGHLIGHTED_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { getTranslations } from "next-intl/server";
import { Products } from "@/sanity/types";
import ProductNotFoundAlert from "../ProductNotFoundAlert";

const HighlightedProducts = async () => {
  const t = await getTranslations("HighlightedProducts");
  const products: Products[] = await client.fetch(HIGHLIGHTED_PRODUCTS_QUERY);
  return (
    <>
      <div className="highlighted-products">
        <div className="inner-highlighted-products py-25 flex flex-col gap-10">
          <SectionHeading
            title={t("sectionHeading.title")}
            subtitle={t("sectionHeading.subtitle")}
          />
          {products && products.length > 0 ? (
            <HorizontalScroller>
              <MotionOverlayHint
                description={t("hint.description")}
                neverShowText={t("hint.neverShowText")}
              />
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  className="min-w-[300px] w-[300px]"
                  data={product}
                />
              ))}
            </HorizontalScroller>
          ) : (
            <ProductNotFoundAlert />
          )}
        </div>
      </div>
    </>
  );
};

export default HighlightedProducts;
