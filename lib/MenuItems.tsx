import type { MenuItem } from "@/lib/types";
import { useTranslations } from "next-intl";

export const getMenuItems = () => {
	const t = useTranslations("Header");
	const MenuItems: MenuItem[] = [
		{
			path: "/aboutus",
			name: t("menu.about"),
			type: "link",
			icon: null,
		},
		{
			path: "/services",
			name: t("menu.services"),
			type: "link",
			icon: null,
		},
		{
			path: "/products",
			name: t("menu.products"),
			type: "link",
			icon: null,
		},
		{
			path: "/gallery",
			name: t("menu.gallery"),
			type: "link",
			icon: null,
		},
		{
			path: "/contactus",
			name: t("menu.contact"),
			type: "button",
			icon: null,
		},
	];
	return MenuItems;
};
