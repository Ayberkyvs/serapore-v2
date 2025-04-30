import { type SchemaTypeDefinition } from "sanity";
import { products } from "./products";
import { photos } from "./photos";
import { company } from "./company";
import { color } from "./color";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, photos, company, color],
};
