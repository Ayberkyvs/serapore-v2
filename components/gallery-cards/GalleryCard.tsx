import Image from "next/image";
import Link from "next/link";

const GalleryCard = ({
  imageSrc,
  imageAlt,
  url,
}: {
  imageSrc: string;
  imageAlt: string;
  url?: string;
}) => {
  return (
    <>
      <Link href={url ?? ""} scroll={false}>
        <div className="group relative w-full max-w-[400px] aspect-video">
          <Image
            src={imageSrc ? imageSrc : "https://placehold.co/300x168"}
            fill
            alt={imageAlt ? imageAlt : "Gallery Card"}
            className="bg-white object-contain"
          />
          <div className="hidden group-hover:block absolute bottom-0 w-full h-fit small glass-effect bg-black/20 text-white p-2">
            {imageAlt}
          </div>
        </div>
      </Link>
    </>
  );
};

export default GalleryCard;
