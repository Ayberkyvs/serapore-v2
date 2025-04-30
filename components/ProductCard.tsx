import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "../lib/utils";
import { Products } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "./ui/badge";

const ProductCard = ({
  className,
  data,
}: {
  className?: string;
  data: Products;
}) => {
  const { name, image, description, isHighlighted } = data;
  return (
    <>
      <Card className={cn("w-[300px] h-fit select-none", className)}>
        <CardHeader className="relative">
          <img
            src={urlFor(image).url()}
            alt="Product Image"
            className="aspect-video w-full h-auto object-cover"
          />
          {isHighlighted && (
            <Badge className="absolute top-2 left-8 !glass-effect !bg-yellow-500/50">
              Highlighted Product
            </Badge>
          )}
          <CardTitle className="mt-2 text-primary-700 break-all">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="break-all">{description}</CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
