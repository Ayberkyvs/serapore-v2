import React from "react";
import SectionHeading from "../SectionHeading";
import { useTranslations } from "next-intl";
import { partnerLogosForGrid } from "@/lib/data";
import Image from "next/image";

const OurPartners = () => {
	const t = useTranslations("OurPartners");
	return (
		<>
			<div className="our-partners">
				<div className="inner-our-partners items-center py-25 flex flex-col-reverse lg:flex-row gap-12">
					<div className="flex flex-col gap-5 w-full h-fit">
						<SectionHeading
							title={t("sectionHeading.title")}
							subtitle={t("sectionHeading.subtitle")}
						/>
						<p>{t("description")}</p>
						<p className="small">{t("partnersText")}</p>
					</div>
					<div className="flex justify-center lg:justify-end w-full h-fit">
						<div className="grid grid-cols-4 gap-2 xs:gap-5 items-center">
							{partnerLogosForGrid.map((group, groupIdx) => (
								<div className="our-partners__item" key={groupIdx}>
									{group.map((logo, logoIdx) => (
										<Image
											key={logoIdx}
											src={"/media/partners/" + logo + ".webp"}
											alt={`${logo} logo black`}
											className="our-partners__item__image"
											width={120}
											height={120}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurPartners;
