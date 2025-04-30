import { getTranslations } from "next-intl/server";
import { ImageIcon, Info, Mail, Settings, ShoppingBag } from "lucide-react";
import { MenuItem } from "@/lib/types";

export async function getMenuItems(): Promise<MenuItem[]> {
  const t = await getTranslations("Header");

  return [
    {
      path: "/aboutus",
      name: t("menu.about"),
      type: "link",
      icon: <Info className="h-5 w-5" />,
    },
    {
      path: "/services",
      name: t("menu.services"),
      type: "link",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      path: "/products",
      name: t("menu.products"),
      type: "link",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      path: "/gallery",
      name: t("menu.gallery"),
      type: "link",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      path: "/contactus",
      name: t("menu.contact"),
      type: "button",
      icon: <Mail className="h-5 w-5" />,
    },
  ];
}
