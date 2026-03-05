import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Client-side SEO helper
 * NOTE:
 * - Primary SEO for bots is handled in server.js
 * - This component is for SPA navigation, browser title, and UX
 */
export default function SEO({ title, description, image, url }) {
  // Site origin (works for localhost + production)
  const siteUrl = window.location.origin;

  // Defaults MUST match index.html + server.js
  const defaultTitle = "SustainAura - Eco-Friendly Shower Liners";
  const defaultDescription =
    "Sustainability Starts At Home. Shop eco-friendly shower liners.";
  const defaultImage = "/SustainAura.png";

  // Final title (keep branding consistent)
  const finalTitle = title ? `${title} | SustainAura` : defaultTitle;
  const finalDescription = description || defaultDescription;

  // Page URL (server.js already handles bots)
  const currentUrl = url || window.location.href;

  // Resolve image URL safely
  let imageUrl = `${siteUrl}${defaultImage}`;

  if (image) {
    if (image.startsWith("http")) {
      imageUrl = image;
    } else {
      const cleanPath = image.startsWith("/") ? image.slice(1) : image;
      const encodedPath = cleanPath
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/");
      imageUrl = `${siteUrl}/${encodedPath}`;
    }
  }

  return (
    <Helmet>
      {/* ===== Standard Metadata ===== */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={currentUrl} />

      {/* ===== Open Graph (Client-side only) ===== */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="SustainAura" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ===== Twitter ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
