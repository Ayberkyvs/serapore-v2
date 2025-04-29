import { Skeleton } from "../ui/skeleton";

const GalleryCardSkeleton = () => {
  return (
    <>
      <div className="relative w-full max-w-[400px] aspect-video bg-neutral-300 rounded-md">
        <Skeleton className="w-full h-full" />
      </div>
    </>
  );
};

export default GalleryCardSkeleton;
