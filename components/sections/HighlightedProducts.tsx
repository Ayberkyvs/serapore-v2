import { useTranslations } from "next-intl";
import ProductCard from "../ProductCard";
import SectionHeading from "../SectionHeading";
import HorizontalScroller from "../HorizontalScroller";
import MotionOverlayHint from "../MotionOverlayHint";
import { Wrench } from "lucide-react";
import { Badge } from "../ui/badge";
const HighlightedProducts = () => {
  const t = useTranslations("HighlightedProducts");
  //? get highlighted products from API
  return (
    <>
      <div className="highlighted-products">
        <div className="inner-highlighted-products py-25 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end gap-2">
            <SectionHeading
              title={t("sectionHeading.title")}
              subtitle={t("sectionHeading.subtitle")}
            />
            <Badge className="mb-2 bg-blue-500">
              <Wrench /> Under Development
            </Badge>
          </div>
          <HorizontalScroller>
            <MotionOverlayHint description={t("hintDescription")} />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
            <ProductCard className="min-w-[300px] w-[300px]" />
          </HorizontalScroller>
        </div>
      </div>
    </>
  );
};

export default HighlightedProducts;
