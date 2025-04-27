import { useTranslations } from "next-intl";
import React from "react";

const CTA = () => {
  const t = useTranslations("CallToAction");
  return (
    <>
      <div className="cta">
        <div className="inner-cta py-25">
          <h2 className="h4 md:h3 max-w-4xl">{t("title")}</h2>
        </div>
      </div>
    </>
  );
};

export default CTA;
