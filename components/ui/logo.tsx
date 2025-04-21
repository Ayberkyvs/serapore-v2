import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className: string }) => {
	return (
		<>
			<div className={cn("relative", className)}>
				<Image
					src="/media/logo_main.webp"
					alt="Serapore Logo"
					fill
					className="object-fit"
				/>
			</div>
		</>
	);
};

export default Logo;
