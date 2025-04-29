"use client";
import { useEffect, useState } from "react";
import CTA from "@/components/sections/CallToAction";
import SectionHero from "@/components/sections/SectionHero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import { useTranslations } from "next-intl";
import GalleryCard from "@/components/gallery-cards/GalleryCard";
import { YoutubeVideo } from "@/lib/types";
import GallerySection from "@/components/sections/GallerySection";

const Page = () => {
  const t = useTranslations("Gallery");
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [videosLoading, setVideosLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data.videos || []);
        setVideosLoading(false);
      } catch (error) {
        console.error("API'den veri alınamadı:", error);
      }
    };

    // fetchVideos();
  }, []);

  return (
    <>
      <SectionHero
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <BackgroundImageWrapper>
        <GallerySection
          title={t("videos.sectionHeading.title")}
          subtitle={t("videos.sectionHeading.subtitle")}
          isLoading={videosLoading}
        >
          {videos.map((video) => (
            <GalleryCard
              key={video.url}
              url={video.url}
              imageSrc={video.thumbnails[3].url}
              imageAlt={video.title}
            />
          ))}
        </GallerySection>
      </BackgroundImageWrapper>
      <CTA />
    </>
  );
};

export default Page;

// {
//   videos.map((video, index) => (
//     <GalleryCard
//       key={index}
//       url={video.url}
//       imageSrc={video.thumbnails[3].url}
//       imageAlt={video.title}
//     />
//   ));
// }
