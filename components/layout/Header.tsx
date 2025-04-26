import React from "react";
import Logo from "@/components/ui/logo";
import Navbar from "@/components/menu/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="flex justify-between items-center inner-header h-full">
          <Link href="/">
            <Logo className="w-[140px] h-[39px] xs:w-[170px] xs:h-[48px]" />
          </Link>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
