import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.gallery" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
    },
  };
}
