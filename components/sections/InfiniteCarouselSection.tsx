import { cn } from "@/lib/utils";
import InfiniteCarousel from "../InfiniteCarousel";
import { partnerLogos } from "@/lib/data";

const InfiniteCarouselSection = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"inner-hero__carousel overflow-hidden layout-padding",
				className
			)}
		>
			<InfiniteCarousel>
				{partnerLogos.map((name, index: number) => (
					<img
						key={index}
						src={`/media/partners/${name}.webp`}
						alt={`${name} Logo`}
						className="embla__slide"
					/>
				))}
			</InfiniteCarousel>
		</div>
	);
};

export default InfiniteCarouselSection;
