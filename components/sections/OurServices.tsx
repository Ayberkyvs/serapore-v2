import SectionHeading from "../SectionHeading";
import { useTranslations } from "next-intl";
import VerticalGalleryCard from "../VerticalGalleryCard";
import HorizontalScroller from "../HorizontalScroller";
import MotionOverlayHint from "../MotionOverlayHint";

const OurServices = () => {
  const t = useTranslations("OurServices");
  const imagePath = "/media/gallery/";
  const cards = [
    {
      title: t("cards.1.title"),
      description: t("cards.1.description"),
      imageSrc: imagePath + "IMG_7601.webp",
    },
    {
      title: t("cards.2.title"),
      description: t("cards.2.description"),
      imageSrc: imagePath + "IMG_7600.webp",
    },
    {
      title: t("cards.3.title"),
      description: t("cards.3.description"),
      imageSrc: imagePath + "IMG_7596.webp",
    },
    {
      title: t("cards.4.title"),
      description: t("cards.4.description"),
      imageSrc: imagePath + "IMG_1222.webp",
    },
    {
      title: t("cards.5.title"),
      description: t("cards.5.description"),
      imageSrc: imagePath + "IMG_0976.webp",
    },
  ];
  return (
    <>
      <div className="our-services">
        <div className="flex flex-col gap-10 w-full inner-our-services py-25">
          <SectionHeading
            title={t("sectionHeading.title")}
            subtitle={t("sectionHeading.subtitle")}
          />
          <HorizontalScroller>
            <MotionOverlayHint description={t("hintDescription")} />
            {cards.map((card, index) => (
              <VerticalGalleryCard
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
              />
            ))}
          </HorizontalScroller>
        </div>
      </div>
    </>
  );
};

export default OurServices;
