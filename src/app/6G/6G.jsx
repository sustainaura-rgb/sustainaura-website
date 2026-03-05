import React from "react";
import ProductTemplate from '../../components/common/ProductTemplate';

function SixG() {
  const products = [
    {
      id: 1,
      name: "Premium Frosty",
      image: "6G-Frosty.jpg",
      description:
        "Thicker frosty finish for added durability with soft light-filtering privacy.",
      link: "https://www.amazon.com/SUSTAINAURA-Essential-Waterproof-Quick-Dry-Rustproof/dp/B0FCCPLD98?ref_=ast_sto_dp&th=1",
      color: "Frosty",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
    {
      id: 2,
      name: "Premium Solid White",
      image: "6G-Solid-White.jpg",
      description:
        "Opaque solid white for complete privacy with a sturdier 6G thickness.",
      link: "https://www.amazon.com/SUSTAINAURA-Essential-Waterproof-Quick-Dry-Rustproof/dp/B0FCCRV77T?ref_=ast_sto_dp&th=1",
      color: "Pure Solid White",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
    {
      id: 3,
      name: "Premium Clear",
      image: "6G-Clear.jpg",
      description:
        "Crystal clear, brighter visibility, and extra durability in 6G thickness.",
      link: "https://a.co/d/1gs8ryW",
      color: "Crystal Clear",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
  ];

  return (
    <ProductTemplate
      thickness="6G"
      type="Premium"
      heroTitle="Explore Our 6G Eco-Finishes"
      products={products}
      amazonLink="https://a.co/d/1gs8ryW"
      seo={{
        // ❗ No brand name here — SEO.jsx handles branding
        title: "6G Premium PEVA Shower Liner",
        description:
          "Shop 6G premium PEVA shower liners designed for extra durability. Eco-friendly, waterproof, and ideal for hotels or luxury bathrooms.",
        image: "6G-Frosty.jpg",
      }}
    />
  );
}

export default SixG;
