import CTA from "@/components/sections/CallToAction";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import GalleryCard from "@/components/gallery-cards/GalleryCard";
import GallerySection from "@/components/sections/GallerySection";
import { client } from "@/sanity/lib/client";
import {
  COLOR_PALETTE_QUERY,
  COMPANY_ASSETS_QUERY,
  PHOTOS_QUERY,
} from "@/sanity/lib/queries";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { urlFor } from "@/sanity/lib/image";
import { ColorPalette, CompanyAssets, Photos } from "@/sanity/types";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.gallery" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
    alternates: {
      canonical: "/gallery",
      languages: {
        en: "/en/gallery",
        tr: "/tr/gallery",
      },
    },
  };
}

const Page = async () => {
  const t = await getTranslations("Gallery");
  const [photos, company, color]: [Photos[], CompanyAssets[], ColorPalette[]] =
    await Promise.all([
      client.fetch(PHOTOS_QUERY),
      client.fetch(COMPANY_ASSETS_QUERY),
      client.fetch(COLOR_PALETTE_QUERY),
    ]);
  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper className="min-h-0">
        <GallerySection
          title={t("photos.sectionHeading.title")}
          subtitle={t("photos.sectionHeading.subtitle")}
        >
          {photos.map((photos) => (
            <GalleryCard
              key={photos._id}
              url={photos.href || ""}
              imageSrc={urlFor(photos.image).url()}
              imageAlt={photos.name}
            />
          ))}
        </GallerySection>
      </BackgroundImageWrapper>
      <GallerySection
        title={t("company.sectionHeading.title")}
        subtitle={t("company.sectionHeading.subtitle")}
      >
        {company.map((company) => (
          <GalleryCard
            key={company._id}
            imageSrc={urlFor(company.image).url()}
            imageAlt={company.name}
          />
        ))}
      </GallerySection>
      <GallerySection
        title={t("color.sectionHeading.title")}
        subtitle={t("color.sectionHeading.subtitle")}
      >
        {color.map((color) => (
          <div
            className="group relative w-full max-w-[400px] aspect-video"
            key={color._id}
            style={{ backgroundColor: color.hex }}
          >
            <div className="hidden group-hover:block absolute bottom-0 w-full h-fit small glass-effect bg-black/20 text-white p-2">
              {color.name} {color.hex}
            </div>
          </div>
        ))}
      </GallerySection>
      <CTA />
    </>
  );
};

export default Page;
