import { cn } from "@/lib/utils";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useMenuItems } from "@/lib/hooks/useMenuItems";

const Navbar = () => {
  const menuItems = useMenuItems();
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
