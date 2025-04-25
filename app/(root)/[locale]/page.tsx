import Hero from "@/components/sections/Hero";
import BackgroundImageWrapper from "@/components/ui/background-image-wrapper";
import OurPartners from "@/components/sections/OurPartners";
import OurServices from "@/components/sections/OurServices";
import HighlightedProducts from "@/components/sections/HighlightedProducts";
import ContactUsSection from "../../../components/sections/ContactUsSection";
import CTA from "@/components/sections/CallToAction";
import AboutUsSection from "@/components/sections/AboutUs";

export default function Home() {
	return (
		<>
			<Hero />
			<BackgroundImageWrapper>
				<AboutUsSection />
			</BackgroundImageWrapper>
			<OurPartners />
			<OurServices />
			<HighlightedProducts />
			<ContactUsSection />
			<CTA />
		</>
	);
}
