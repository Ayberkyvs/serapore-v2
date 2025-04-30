import React from "react";
import Logo from "@/components/ui/logo";
import Navbar from "@/components/menu/Navbar";
import Link from "next/link";
import { MenuItem } from "@/lib/types";

const Header = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <>
      <header className="header">
        <div className="flex justify-between items-center inner-header h-full">
          <Link href="/">
            <Logo className="w-[140px] h-[39px] xs:w-[170px] xs:h-[48px]" />
          </Link>
          <Navbar menuItems={menuItems} />
        </div>
      </header>
    </>
  );
};

export default Header;
