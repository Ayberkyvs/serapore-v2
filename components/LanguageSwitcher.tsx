"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const locales = ["en", "tr"];

const FlagIcon = ({ lang }: { lang: string }) => {
  const flagSrc =
    lang === "en" ? "/media/flags/en-US.svg" : "/media/flags/tr-TR.svg";
  return (
    <img
      src={flagSrc}
      alt={`${lang} flag`}
      className="size-4 rounded-full object-cover object-left"
    />
  );
};

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const localeFromPath = locales.find((locale) =>
      pathname?.startsWith(`/${locale}`),
    );
    if (localeFromPath) {
      setCurrentLocale(localeFromPath);
    }
  }, [pathname]);

  const handleChange = (lang: string) => {
    if (!pathname) return;

    // Remove existing locale from path
    const newPath = pathname.replace(/^\/(en|tr)/, "");
    router.push(`/${lang}${newPath === "" ? "/" : newPath}`);
  };

  return (
    <div className="h-full">
      <Select value={currentLocale} onValueChange={handleChange}>
        <SelectTrigger className="w-fit border-0 !bg-transparent">
          <SelectValue>
            <FlagIcon lang={currentLocale} />
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="h-fit z-[99]">
          {locales.map((locale, index: number) => (
            <SelectItem
              key={index}
              value={locale}
              className="flex items-center"
            >
              <FlagIcon lang={locale} />
              <span className="uppercase small">{locale}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
