import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Logo = ({ className }: { className: string }) => {
	const t = useTranslations("Header");
	return (
		<>
			<div className={cn("relative", className)}>
				<Image
					src={"/media" + t("logoSrc")}
					alt="Serapore Logo"
					fill
					className="object-fit"
				/>
			</div>
		</>
	);
};

export default Logo;
