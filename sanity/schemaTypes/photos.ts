import { Images } from "lucide-react";
import { defineType, defineField } from "sanity";

export const photos = defineType({
  name: "photos",
  title: "Photos",
  type: "document",
  icon: Images,
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
    defineField({
      name: "href",
      title: "Link (optional)",
      type: "url",
    }),
  ],
});
