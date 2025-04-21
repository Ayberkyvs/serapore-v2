import React from "react";
import Logo from "@/components/ui/logo";
import Navbar from "@/components/menu/Navbar";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="flex justify-between items-center inner-header h-full">
					<Logo className="w-[140px] h-[39px] xs:w-[177px] xs:h-[50px]" />
					<Navbar />
				</div>
			</header>
		</>
	);
};

export default Header;
