import React from "react";
import SectionHeading from "../SectionHeading";
import { useTranslations } from "next-intl";
import { BriefcaseBusiness, Eye, Handshake, Users, Wrench } from "lucide-react";
import InfiniteCarouselSection from "./InfiniteCarouselSection";
import Link from "next/link";
import { Button } from "../ui/button";
import OverlappingCards from "../animations/overlapping-cards";
import FadeIn from "../animations/fade-in";

const AboutUs = ({ extended }: { extended?: boolean }) => {
	const t = useTranslations("AboutUs");
	const experiences = [
		{
			title: t("experiences.1.title"),
			subtitle: t("experiences.1.subtitle"),
			description: t("experiences.1.description"),
			icon: <BriefcaseBusiness className="w-auto h-full text-accent-500" />,
		},
		{
			title: t("experiences.2.title"),
			subtitle: t("experiences.2.subtitle"),
			description: t("experiences.2.description"),
			icon: <Users className="w-auto h-full text-accent-500" />,
		},
		{
			title: t("experiences.3.title"),
			subtitle: t("experiences.3.subtitle"),
			description: t("experiences.3.description"),
			icon: <Handshake className="w-auto h-full text-accent-500" />,
		},
		{
			title: t("experiences.4.title"),
			subtitle: t("experiences.4.subtitle"),
			description: t("experiences.4.description"),
			icon: <Wrench className="w-auto h-full text-accent-500" />,
		},
	];
	return (
		<>
			<div className="aboutus">
				<div className="inner-aboutus flex flex-col justify-between h-fit py-25 gap-12">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
						<div className="col-span-full lg:col-span-5 overflow-hidden">
							<OverlappingCards />
						</div>
						<div className="col-start-1 lg:col-start-7 col-span-full flex flex-col gap-5 w-full h-fit">
							<SectionHeading
								title={t("sectionHeading.title")}
								subtitle={t("sectionHeading.subtitle")}
							/>
							<FadeIn direction="down" delay={0.2}>
								<p className="mb-8">{t("description")}</p>
							</FadeIn>
							<div className="flex flex-col gap-8 w-full h-fit">
								{experiences?.map((experience, index: number) => (
									<FadeIn
										direction="down"
										delay={0.2 + index * 0.1}
										key={index}
									>
										<div className="flex flex-col gap-5 size-fit">
											<div className="flex flex-center gap-2 w-fit h-[50px]">
												{experience.icon}
												<div className="flex flex-col h-full">
													<h6 className="h6">{experience.title}</h6>
													<span>{experience.subtitle}</span>
												</div>
											</div>
											<p>{experience.description}</p>
										</div>
									</FadeIn>
								))}
							</div>
						</div>
					</div>
					{extended && (
						<div className="flex flex-col gap-12 w-full h-fit">
							<div className="flex flex-col sm:flex-row w-full h-fit gap-5">
								<div className="flex flex-col gap-5 w-full h-fit">
									<SectionHeading title={t("extended.mission.title")} />
									<FadeIn direction="down" delay={0.2}>
										<p>{t("extended.mission.description")}</p>
									</FadeIn>
								</div>
								<div className="flex flex-col gap-5 w-full h-fit">
									<SectionHeading title={t("extended.vision.title")} />
									<FadeIn direction="down" delay={0.2}>
										<p>{t("extended.mission.description")}</p>
									</FadeIn>
								</div>
							</div>
							<div className="flex flex-col gap-5 w-full h-fit">
								<SectionHeading title={t("extended.partners")} />
								<InfiniteCarouselSection className="px-0" />
							</div>
							<div className="flex flex-col gap-5 w-full h-fit">
								<SectionHeading title={t("extended.more.title")} />
								<FadeIn direction="down" delay={0.2}>
									<Link
										href="/serapore.pdf"
										target="_blank"
										className="size-fit"
									>
										<Button variant="link">
											<Eye />
											{t("extended.more.buttonText")}
										</Button>
									</Link>
								</FadeIn>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default AboutUs;
