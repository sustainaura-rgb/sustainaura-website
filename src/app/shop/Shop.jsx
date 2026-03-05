"use client";

import React, { useState, useEffect, useRef } from "react";
import '../../styles/shop.css';

const products = [
  {
    id: 1,
    name: "Essential Frosty",
    image: "/4G-Frosty.jpg",
    link: "https://www.amazon.com/dp/B0FCCRLLXH",
    thickness: "Essential",
    color: "Frosty",
  },
  {
    id: 2,
    name: "Essential Solid White",
    image: "/4G-Solid-White.jpg",
    link: "https://www.amazon.com/dp/B0FCCQYJH1",
    thickness: "Essential",
    color: "Solid White",
  },
  {
    id: 3,
    name: "Essential White",
    image: "/4G-White.jpg",
    link: "https://www.amazon.com/dp/B0FCCQYJH1",
    thickness: "Essential",
    color: "Clear",
  },
  {
    id: 4,
    name: "Premium Clear",
    image: "/6G-Clear.jpg",
    link: "https://www.amazon.com/dp/B0FCCQ29VY",
    thickness: "Premium",
    color: "Clear",
  },{
    id: 5,
    name: "Premium Frosty",
    image: "/6G-Frosty.jpg",
    link: "https://www.amazon.com/dp/B0FCCPLD98",
    thickness: "Premium",
    color: "Frosty",
  },{
    id: 6,
    name: "Premium Solid White",
    image: "/6G-Solid-White.jpg",   
    link: "https://www.amazon.com/dp/B0FCCRV77T",
    thickness: "Premium",
    color: "Solid White",
  },{
    id: 7,
    name: "HeavyDuty Clear",
    image: "/8G-Clear.jpg",
    link: "https://www.amazon.com/dp/B0FCCTJ9HZ",
    thickness: "HeavyDuty",
    color: "Clear",
  },{
    id: 8,
    name: "HeavyDuty Frosty",
    image: "/8G-Frosty.jpg",
    link: "https://www.amazon.com/dp/B0FCCR62R1",
    thickness: "HeavyDuty",
    color: "Frosty",
  }
];

const Shop = () => {
  const [selectedThicknesses, setSelectedThicknesses] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showThicknessMenu, setShowThicknessMenu] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);

  const thicknessRef = useRef(null);
  const colorRef = useRef(null);

  const allThicknesses = [...new Set(products.map((p) => p.thickness))].sort();
  const allColors = [...new Set(products.map((p) => p.color))].sort();

  const toggleFilter = (value, currentList, setList) => {
    if (currentList.includes(value)) {
      setList(currentList.filter((item) => item !== value));
    } else {
      setList([...currentList, value]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const thicknessMatch =
      selectedThicknesses.length === 0 ||
      selectedThicknesses.includes(product.thickness);

    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.includes(product.color);

    return thicknessMatch && colorMatch;
  });

  const resetFilters = () => {
    setSelectedThicknesses([]);
    setSelectedColors([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (thicknessRef.current && !thicknessRef.current.contains(event.target)) {
        setShowThicknessMenu(false);
      }
      if (colorRef.current && !colorRef.current.contains(event.target)) {
        setShowColorMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sustain-shop-container">
      <header className="sustain-shop-header">
        <h1 className="sustain-shop-title">Premium Collection</h1>
        <p className="sustain-shop-subtitle">
          Discover our eco-friendly, high-performance protective solutions
        </p>

        <div className="sustain-filter-row">
          <div className="sustain-dropdown-wrapper" ref={thicknessRef}>
            <button
              type="button"
              className={`sustain-dropdown-btn ${showThicknessMenu ? "sustain-active" : ""}`}
              onClick={() => {
                setShowThicknessMenu(!showThicknessMenu);
                setShowColorMenu(false);
              }}
            >
              Sort by Thickness
              <span className="sustain-arrow">▼</span>
            </button>
            {showThicknessMenu && (
              <div className="sustain-dropdown-menu">
                {allThicknesses.map((t) => (
                  <label key={t} className="sustain-dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedThicknesses.includes(t)}
                      onChange={() => toggleFilter(t, selectedThicknesses, setSelectedThicknesses)}
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="sustain-dropdown-wrapper" ref={colorRef}>
            <button
              type="button"
              className={`sustain-dropdown-btn ${showColorMenu ? "sustain-active" : ""}`}
              onClick={() => {
                setShowColorMenu(!showColorMenu);
                setShowThicknessMenu(false);
              }}
            >
              Sort by Color
              <span className="sustain-arrow">▼</span>
            </button>
            {showColorMenu && (
              <div className="sustain-dropdown-menu">
                {allColors.map((c) => (
                  <label key={c} className="sustain-dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(c)}
                      onChange={() => toggleFilter(c, selectedColors, setSelectedColors)}
                    />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {(selectedThicknesses.length > 0 || selectedColors.length > 0) && (
            <button className="sustain-reset-btn" onClick={resetFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </header>

      <main className="sustain-products-main">
        <div className="sustain-product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="sustain-product-card">
                <div className="sustain-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="sustain-product-image"
                  />
                </div>
                <div className="sustain-card-content">
                  <h3 className="sustain-product-name">{product.name}</h3>
                  <a
                    href={product.link}
                    className="sustain-amazon-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="amazon-btn-text">Buy on Amazon</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="sustain-no-results">
              <h3>No products match your selection.</h3>
              <button onClick={resetFilters} className="sustain-clear-btn">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Shop;