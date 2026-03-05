"use client";
import React, { useState, useEffect } from "react";
import '../styles/Home1.css';
import { useRouter } from "next/navigation";

function FourGButton({ handleFourGClick }) {
  // Array of image sources (3 images)
  const images = [
    "/4G-Frosty.jpg",

    "/8G-Clear.jpg",
    "/6G-Solid-White.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <button
      className="sa-product-card1"
      onClick={handleFourGClick}
      aria-label="Explore our 4G product"
      type="button"
    >
      <img
        src={images[currentIndex]}
        alt="4G Clear Lightweight PEVA Liner"
        className="sa-product-card-img"
      />
      <div className="sa-product-card-info1">
        <p className="sa-product-card-tag">Click to view details</p>
      </div>
    </button>
  );
}

function Home1() {
  const router = useRouter();

  const handleAmazonClick = () => {
    window.open("https://a.co/d/1gs8ryW", "_blank");
  };

  const handleFourGClick = () => {
    router.push("/shop"); // same window, client-side route change
  };

  const backgroundImage = 'url("/finalhero.png")';

  return (
    <div className="hero-wrapper">
      <div
        className="hero-image"
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-bottom-row">
          <div className="hero-bottom-left">
            <h1 className="hero-stitle">
              <span>Sustainability</span>
              <span>Starts</span>
              <span>at</span>
              <span>Home</span>
            </h1>

            <p className="hero-supporting">
              Recycled PEVA shower curtain liners that resist stains and soap scum
            </p>

            <div className="cta-row">
              <button
                className="amazon-link"
                onClick={handleAmazonClick}
                aria-label="Shop Eco-Friendly Liners on Amazon"
              >
                Shop Eco‑friendly Shower curtain liners
              </button>
            </div>
          </div>

          <FourGButton handleFourGClick={handleFourGClick} />
        </div>
      </div>
    </div>
  );
}

export default Home1;
