"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const InfiniteCarousel = ({ children }: { children: React.ReactNode }) => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
		},
		[AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 2 })]
	);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container gap-12">
				{children}
				{children}
			</div>
		</div>
	);
};

export default InfiniteCarousel;
