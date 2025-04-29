import SectionHeading from "@/components/SectionHeading";
import { ReactNode } from "react";
import GalleryCardSkeleton from "../gallery-cards/GalleryCardSkeleton";
import { v4 as uuidv4 } from "uuid";

type GallerySectionProps = {
  title: string;
  subtitle: string;
  isLoading: boolean;
  children?: ReactNode;
};

const GallerySection = ({
  title,
  subtitle,
  isLoading,
  children,
}: GallerySectionProps) => {
  const isEmpty =
    !children ||
    (Array.isArray(children) && children.length === 0 && !isLoading);

  if (isEmpty) return null;

  return (
    <div className="gallery-section py-25">
      <div className="inner-gallery-section w-full flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading
            ? [...Array(8)].map(() => (
                <GalleryCardSkeleton key={uuidv4()} />
              ))
            : children}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
