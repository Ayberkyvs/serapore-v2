import { Building2 } from "lucide-react";
import { defineType, defineField } from "sanity";

export const company = defineType({
  name: "companyAssets",
  title: "Company",
  type: "document",
  icon: Building2,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      placeholder: "Explain the media",
      validation: (Rule) => Rule.required().min(10).max(50),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
