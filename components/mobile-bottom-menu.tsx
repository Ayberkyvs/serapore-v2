"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/lib/types";
import { useSlugPath } from "@/lib/hooks/useSlugPath";

const MobileBottomMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const pathname = useSlugPath();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
      <div className="flex h-16 items-center justify-around glass-effect shadow-lg rounded-t-lg border-t">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full rounded-xs",
              {
                "bg-primary-50": pathname === item.path.toLowerCase(),
              }
            )}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full">
              {item.icon}
            </div>
            <span className="sr-only">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomMenu;
