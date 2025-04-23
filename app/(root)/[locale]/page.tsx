import Hero from "@/components/sections/Hero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import AboutUs from "@/components/sections/AboutUs";
import OurPartners from "@/components/sections/OurPartners";
import OurServices from "@/components/sections/OurServices";
import HighlightedProducts from "@/components/sections/HighlightedProducts";

export default function Home() {
	return (
		<>
			<Hero />
			<BackgroundImageWrapper>
				<AboutUs />
			</BackgroundImageWrapper>
			<OurPartners />
			<OurServices />
			<HighlightedProducts />
		</>
	);
}
