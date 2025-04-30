import { PaintRoller } from "lucide-react";
import { defineType, defineField } from "sanity";

export const color = defineType({
  name: "colorPalette",
  title: "Color Palette",
  type: "document",
  icon: PaintRoller,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      placeholder: "Explain the media",
      validation: (Rule) => Rule.required().min(10).max(50),
    }),
    defineField({
      name: "hex",
      title: "Hex Color",
      type: "string",
      placeholder: "Color Hex Code",
      validation: (Rule) =>
        Rule.custom((val) => {
          return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(val || "")
            ? true
            : "Must be a valid HEX code";
        }).required(),
    }),
  ],
});
