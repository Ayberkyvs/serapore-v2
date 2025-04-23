import type { SectionHeadingProps } from "@/lib/types";
import FadeIn from "./animations/fade-in";

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
	//? add with animation props and feature
	return (
		<>
			<FadeIn direction="down">
				<div className="size-fit">
					{subtitle && (
						<h3 className="h7 sm:h6 text-primary-700">{subtitle}</h3>
					)}
					<h2 className="h5 sm:h4">{title}</h2>
				</div>
			</FadeIn>
		</>
	);
};

export default SectionHeading;
