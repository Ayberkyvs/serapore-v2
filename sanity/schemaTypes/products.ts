import { Barcode } from "lucide-react";
import { defineField, defineType } from "sanity";

export const products = defineType({
  name: "products",
  title: "Products",
  type: "document",
  icon: Barcode,
  fields: [
    defineField({
      name: "name_tr",
      title: "Name (TR)",
      placeholder: "Enter product name (TR)",
      type: "string",
      validation: (Rule) => Rule.required().max(50).min(5),
    }),
    defineField({
      name: "name",
      title: "Name (EN)",
      placeholder: "Enter product name (EN)",
      type: "string",
      validation: (Rule) => Rule.required().max(50).min(5),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      placeholder: "Enter product description",
      type: "text",
      validation: (Rule) => Rule.required().max(250).min(30),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isHighlighted",
      title: "is Highlighted",
      type: "boolean",
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (!value) return true;

          const docId = context?.document?._id;

          if (!docId) return "Belge kaydedilmeden önce öne çıkarılamaz.";

          const client = context.getClient({ apiVersion: "2023-01-01" });

          const count = await client.fetch<number>(
            `count(*[_type == "products" && isHighlighted == true && _id != $id])`,
            { id: docId }
          );

          return count < 6 ? true : "En fazla 6 ürün öne çıkarılabilir.";
        }),
    }),
  ],
});
