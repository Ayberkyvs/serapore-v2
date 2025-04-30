import { usePathname } from "next/navigation";

export const useSlugPath = () => {
  const pathname = usePathname();
  const slugPath = pathname?.replace(/^\/[a-z]{2}(\/blog)?/, "") || "/";
  return slugPath;
};
