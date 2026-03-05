import React from "react";
import ProductTemplate from '../../components/common/ProductTemplate';

function FourG() {
  const products = [
    {
      id: 1,
      name: "Essential Frosty",
      image: "4G-Frosty.jpg",
      description:
        "Frosty finish provides light-filtering effect while maintaining privacy.",
      link: "https://www.amazon.com/SUSTAINAURA-Essential-Waterproof-Quick-Dry-Rustproof/dp/B0FCCQYJH1?ref_=ast_sto_dp&th=1",
      color: "Frosty",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
    {
      id: 2,
      name: "Essential Solid White",
      image: "4G-Solid-White.jpg",
      description:
        "Solid white finish offers complete privacy – cannot see anything through.",
      link: "https://a.co/d/1gs8ryW",
      color: "Pure Solid White",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
    {
      id: 3,
      name: "Essential Clear",
      image: "4G-White.jpg",
      description:
        "Clear finish is transparent, allowing maximum visibility and brightness.",
      link: "https://a.co/d/1gs8ryW",
      color: "Crystal Clear",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
  ];

  return (
    <ProductTemplate
      thickness="4G"
      type="Lightweight"
      heroTitle="Explore Our 4G Eco-Finishes"
      products={products}
      amazonLink="https://a.co/d/1gs8ryW"
      seo={{
        // ❗ NO brand name here — SEO.jsx adds it
        title: "4G Lightweight PEVA Shower Liner",
        description:
          "Shop 4G lightweight PEVA shower liners made with 30% recycled materials. Waterproof, eco-friendly, and ideal for everyday home use.",
        image: "4G-Frosty.jpg", // relative path (correct)
      }}
    />
  );
}

export default FourG;
