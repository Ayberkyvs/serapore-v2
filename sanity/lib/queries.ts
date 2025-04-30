import { defineQuery } from "next-sanity";

export const PHOTOS_QUERY = defineQuery(`
    *[_type == "photos"]{
      _id,
      name,
      image,
      href,
    }
`);

export const COMPANY_ASSETS_QUERY = defineQuery(`
    *[_type == "companyAssets"]{
      _id,
      name,
      image
    }
`);
export const COLOR_PALETTE_QUERY = defineQuery(`
  *[_type == "colorPalette"]{
    _id,
    name,
    hex,
  }
`);

export const HIGHLIGHTED_PRODUCTS_QUERY = defineQuery(`
*[_type == "products" && isHighlighted]{
    _id,
    name,
    description,
    image,
    isHighlighted
  }
`);
export const ALL_PRODUCTS_QUERY = defineQuery(`
*[_type == "products"]{
    _id,
    name,
    description,
    image,
    isHighlighted
  }
`);
