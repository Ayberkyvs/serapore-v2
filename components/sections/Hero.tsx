import { Button } from "@/components/ui/button";
import { Verified } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import InfiniteCarouselSection from "./InfiniteCarouselSection";

const Hero = () => {
	const t = useTranslations("Hero");
	let heroTitle = t("heroTitle").split(" ");
	const heroButtons = [
		{
			name: t("heroButtons.seeProducts"),
			path: "/products",
			variant: "default",
			className:
				"bg-accent-400 text-black hover:bg-accent-500 hover:cursor-pointer",
		},
		{
			name: t("heroButtons.ourServices"),
			path: "/services",
			variant: "secondary",
			className:
				"bg-primary-400 text-white hover:bg-primary-500 hover:cursor-pointer",
		},
		{
			name: t("heroButtons.companyPresentation"),
			path: "/serapore.pdf",
			variant: "outline",
			className: "bg-transparent border-black hover:cursor-pointer",
		},
	];
	return (
		<>
			<section className="hero">
				<div className="flex inner-hero h-fit min-h-[810px] px-0">
					<div className="hero__content">
						<h2 className="hero__content__heading">
							{heroTitle.slice(0, 2).join(" ")}
							<Verified className="inline-block text-primary-400 size-[1em] mx-[0.2em]" />
							{heroTitle.slice(2).join(" ")}
						</h2>
						<p className="hero__content__description">{t("heroDescription")}</p>
						<div className="hero__content__buttons">
							{heroButtons.map((button, index: number) => (
								<Link href={button.path} key={index} className="size-fit">
									<Button
										className={cn(button.className)}
										variant={
											button.variant as "outline" | "default" | "secondary"
										}
										size="lg"
									>
										{button.name}
									</Button>
								</Link>
							))}
						</div>
					</div>
				</div>
				<InfiniteCarouselSection />
			</section>
		</>
	);
};

export default Hero;
