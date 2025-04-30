import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";
import { useTranslations } from "next-intl";

const ProductNotFoundAlert = () => {
  const t = useTranslations("NotFound.ProductNotFoundAlert");
  return (
    <>
      <Alert className="max-w-xs">
        <MessageCircleWarning className="size-4 text-red-800" />
        <AlertTitle className="text-red-800">{t("title")}</AlertTitle>
        <AlertDescription>{t("description")}</AlertDescription>
      </Alert>
    </>
  );
};

export default ProductNotFoundAlert;
