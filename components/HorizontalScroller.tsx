// components/HorizontalScroller.tsx
"use client";
import { ReactNode, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  children: ReactNode;
}

export default function HorizontalScroller({ children }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-5">{children}</div>
    </div>
  );
}
