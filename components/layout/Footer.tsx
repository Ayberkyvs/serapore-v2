import Image from "next/image";
import Link from "next/link";
import Logo from "../ui/logo";
import LanguageSwitcher from "../LanguageSwitcher";
import { Mail, Phone, Pin } from "lucide-react";
import { useTranslations } from "next-intl";
import Youtube from "../ui/youtube-icon";
import WhatsApp from "../ui/whatsapp-icon";
import LinkedIn from "../ui/linkedin-icon";

const Footer = () => {
	const t = useTranslations("Footer");
	const footerSocials = [
		{
			title: t("links.socialMedia.title"),
			description: t("links.socialMedia.description"),
			links: [
				{
					title: t("links.socialMedia.youtube"),
					url: "https://www.youtube.com/@ErtugruLAxeL",
					icon: <Youtube className="size-[1.1em]" />,
				},
				{
					title: t("links.socialMedia.whatsapp"),
					url: "https://wa.me/+905324214816",
					icon: <WhatsApp className="size-[1.1em]" />,
				},
				{
					title: t("links.socialMedia.linkedin"),
					url: "https://www.linkedin.com/company/serapore/posts/",
					icon: <LinkedIn className="size-[1.1em]" />,
				},
			],
		},
		{
			title: t("links.numbers.title"),
			description: t("links.numbers.description"),
			links: [
				{
					title: t("links.numbers.1"),
					url: `tel:${t("links.numbers.1")}`,
					icon: <Phone className="size-[1.1em]" />,
				},
				{
					title: t("links.numbers.2"),
					url: `tel:${t("links.numbers.2")}`,
					icon: <Phone className="size-[1.1em]" />,
				},
				{
					title: t("links.numbers.3"),
					url: `tel:${t("links.numbers.3")}`,
					icon: <Phone className="size-[1.1em]" />,
				},
			],
		},
		{
			title: t("links.emails.title"),
			description: t("links.emails.description"),
			links: [
				{
					title: t("links.emails.1"),
					url: `mailto:${t("links.emails.1")}`,
					icon: <Mail className="size-[1.1em]" />,
				},
				{
					title: t("links.emails.2"),
					url: `mailto:${t("links.emails.2")}`,
					icon: <Mail className="size-[1.1em]" />,
				},
			],
		},
		{
			title: t("links.address.title"),
			description: t("links.address.description"),
			links: [
				{
					title: t("links.address.address"),
					url: "https://maps.app.goo.gl/Sj3VGXkyusnDbaor8",
					icon: <Pin className="size-[1.1em]" />,
				},
			],
		},
	];
	return (
		<>
			<footer className="footer">
				<div className="flex flex-col inner-footer py-25 gap-10">
					<div className="w-full grid grid-cols-12 gap-8 items-center">
						<div className="relative flex col-span-12 sm:col-span-5 aspect-[3/2]">
							<Image
								src="/media/factory_vector.png"
								alt="Serapore Factory Vector"
								fill
								draggable={false}
								className="object-contain"
							/>
						</div>
						<div className="col-span-12 sm:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-8">
							{footerSocials?.map((link, index: number) => (
								<div className="size-fit" key={index}>
									<h6 className="font-bold">{link.title}</h6>
									<p>{link.description}</p>
									<ul className="mt-2 flex flex-col gap-2">
										{link.links.map((l) => (
											<Link href={l.url} key={l.title}>
												<li className="small flex items-center gap-2">
													{l.icon}
													{l.title}
												</li>
											</Link>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="flex justify-between w-full border-t py-6 border-neutral-300">
						<Logo className="w-[140px] h-[39px] xs:w-[170px] xs:h-[48px]" />
						<LanguageSwitcher />
					</div>
					<div className="flex justify-between w-full h-fit flex-wrap gap-5 bg-accent-200 p-2 rounded-sm">
						<p className="small">
							©{" "}
							<span className="small underline">
								{new Date().getFullYear()}
							</span>{" "}
							SeraPore Machinery Industry And Trade Ltd, All rights reserved.
						</p>
						<p className="small flex gap-2 items-center">
							powered by{" "}
							<Link href={"https://ayberkyavas.com"} target="_blank">
								<img
									src="https://ayberkyavas.com/logo.svg"
									alt="Ayberk Yavas Logo"
									width={68}
									height={16}
									className="brightness-0"
								/>
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
