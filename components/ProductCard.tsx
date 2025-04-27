import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import Link from "next/link";
const ProductCard = ({ className }: { className?: string }) => {
  //? get product data via props
  return (
    <>
      <Card className={cn("w-[300px] h-fit select-none", className)}>
        <CardHeader>
          <img
            src="https://placehold.co/252x141"
            alt="Product Image"
            className="aspect-video w-full h-fit object-cover"
          />
          <CardTitle className="mt-2 text-primary-700">Product Name</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur. Lobortis metus nisl maecenas
            non eu ac aliquam id porta. A nunc nunc sit at lectus ut elementum
            est. Facilisis id neque tortor a.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="#">
            <Button className="place-self-end hover:cursor-pointer">
              Learn More
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
