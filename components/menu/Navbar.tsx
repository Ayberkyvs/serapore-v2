"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { MenuItem } from "@/lib/types";
import { useSlugPath } from "@/lib/hooks/useSlugPath";

const Navbar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const pathname = useSlugPath();
  return (
    <>
      <nav className="navbar">
        <ul className="hidden md:flex flex-center gap-5 font-inter font-medium">
          {menuItems.map((item, index: number) => (
            <li key={index}>
              <Link
                href={item.path.toLowerCase() ?? "#"}
                className={cn("navbar__item", {
                  navbar__item__button: item.type === "button",
                  "navbar__item__button--active":
                    item.path.toLowerCase() === pathname.toLowerCase(),
                })}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>
    </>
  );
};

export default Navbar;
