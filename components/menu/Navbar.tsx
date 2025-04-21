import MenuItems from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className="flex gap-5 font-inter font-medium">
					{MenuItems.map((item: MenuItem, index: number) => (
						<li key={index}>
							<Link
								href={item.path ?? "#"}
								className={cn("navbar__item", {
									"navbar__item--button": item.type === "button",
								})}
							>
								{item.name}
							</Link>
						</li>
					))}
					//? Add Language Switcher here
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
