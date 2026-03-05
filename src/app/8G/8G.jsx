import React from "react";
import ProductTemplate from '../../components/common/ProductTemplate';

function EightG() {
  const products = [
    {
      id: 1,
      name: "HeavyDuty Frosty",
      image: "8G-Frosty.jpg",
      description:
        "Premium frosty finish with extra thickness for maximum durability while maintaining privacy.",
      link: "https://www.amazon.com/SUSTAINAURA-Essential-Waterproof-Quick-Dry-Rustproof/dp/B0FCCR62R1?ref_=ast_sto_dp&th=1",
      color: "Frosty",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
    {
      id: 2,
      name: "HeavyDuty Clear",
      image: "8G-Clear.jpg",
      description:
        "Crystal-clear 8G curtain offering maximum light with heavy-duty strength.",
      link: "https://www.amazon.com/SUSTAINAURA-Essential-Waterproof-Quick-Dry-Rustproof/dp/B0FCCTJ9HZ?ref_=ast_sto_dp&th=1",
      color: "Crystal Clear",
      dimensions: "72 L × 72 W",
      material: "Ethylene Vinyl Acetate",
    },
  ];

  return (
    <ProductTemplate
      thickness="8G"
      type="Heavy Duty"
      heroTitle="Explore Our 8G Eco-Finishes"
      products={products}
      amazonLink="https://a.co/d/1gs8ryW"
      seo={{
        // ❗ No "| SustainAura" here — handled centrally in SEO.jsx
        title: "8G Heavy Duty PEVA Shower Liner",
        description:
          "Shop 8G heavy-duty PEVA shower liners built for maximum durability. Eco-friendly, waterproof, and ideal for high-traffic bathrooms.",
        image: "8G-Frosty.jpg",
      }}
    />
  );
}

export default EightG;
