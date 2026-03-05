"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../../styles/thickness.css';
import { FaCheck, FaArrowRight, FaLeaf, FaPlus, FaMinus, FaStar, FaImage } from "react-icons/fa";
import Link from "next/link";

const thicknessData = {
  "essential": {
    id: "essential",
    title: "Essential Shower Curtain liner",
    tagline: "An airy, eco-conscious design that prioritizes rapid drying and effortless movement for your daily routine.",
    // microCopy: "Daily Reliability",
    href: "/4G",
    cta: "Explore Our Collection",
    variants: [
      { label: "Clear", image: "/4G-White.jpg" },
      { label: "Frosty", image: "/4G-Frosty.jpg" },
      { label: "Solid White", image: "/4G-Solid-White.jpg" }
    ],
    features: [
      "Sustainable PEVA with recycled content",
      "Quick-dry surface to minimize moisture",
      "OEKO-TEX certified for family safety",
      "Reinforced, rust-resistant metal eyelets"
    ]
  },
  "premium": {
    id: "premium",
    title: "Premium Shower Curtain liner",
    tagline: "The perfect mid-weight balance of durability and drape, crafted to stay fresh in any modern home.",
    // microCopy: "Most Popular Choice",
    href: "/6G",
    cta: "Explore Our Collection",
    variants: [
      { label: "Clear", image: "/6G-Clear.jpg" },
      { label: "Frosty", image: "/6G-Frosty.jpg" },
      { label: "Solid White", image: "/6G-Solid-White.jpg" }
    ],
    features: [
      "Optimized weight for a graceful hang",
      "PVC-free and odor-neutral material",
      "Triple-magnet hem to prevent clinging",
      "Tear-resistant header for longevity"
    ]
  },
  "heavyDuty": {
    id: "heavyDuty",
    title: "Heavy Duty Shower Curtain liner",
    tagline: "Our most substantial material, offering a luxurious weighted feel that remains perfectly still.",
    // microCopy: "Hotel Quality",
    href: "/8G",
    cta: "Explore Our Collection",
    variants: [
      { label: "Clear", image: "/8G-Clear.jpg" },
      { label: "Frosty", image: "/8G-Frosty.jpg" }
    ],
    features: [
      "Maximum thickness for lasting durability",
      "Powerful magnetic base for zero billowing",
      "Soft-touch, commercial-grade texture",
      "Superior splash and sound insulation"
    ]
  }
};

const ThicknessProducts = () => {
  const [activeThickness, setActiveThickness] = useState("essential");
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const current = thicknessData[activeThickness];
  const activeVariant = current.variants[activeVariantIndex];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset features to expanded when thickness changes
  useEffect(() => {
    setExpandedFeatures(true);
    setImageLoaded(false);
    setImageError(false);
  }, [activeThickness, activeVariantIndex]);

  // Toggle features visibility
  const toggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  // Format image path - remove spaces
  const getImagePath = (path) => {
    return path.replace(/\s+/g, '-');
  };

  return (
    <section className="thickness-section" id="thickness">
      <div className="section-container">
        {/* Header Section */}
        <div className="thickness-header">
          <motion.div 
            className="header-decoration"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </motion.div>

          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-title">
              <span className="title-gradient">Find Your Perfect Drape</span>
            </h2>
            <p className="section-subtitle">Three signature weights for your perfect shower.</p>
          </motion.div>
        </div>

        {/* Mobile Header Tabs - Only shown on mobile/tablet */}
        {isMobile && (
          <motion.div 
            className="mobile-thickness-header-tabs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="mobile-tabs-wrapper">
              {Object.values(thicknessData).map((item) => (
                <button
                  key={item.id}
                  className={`mobile-tab-btn ${item.id === activeThickness ? "active" : ""}`}
                  onClick={() => {
                    setActiveThickness(item.id);
                    setActiveVariantIndex(0);
                  }}
                  aria-label={`Select ${item.id} thickness: ${item.title}`}
                >
                  <span className="mobile-tab-label">
                    {item.title}
                  </span>
                  {item.id === activeThickness && (
                    <motion.div
                      layoutId="mobileTabIndicator"
                      className="mobile-tab-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="thickness-content">
          {/* Left Tabs Panel - Only on desktop */}
          {!isMobile && (
            <motion.div 
              className="thickness-tabs-panel"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="tabs-header">
                <h3 className="tabs-title">Thickness Options</h3>
                <div className="eco-indicator">
                  <FaLeaf className="eco-icon" />
                  <span>All Eco-Friendly</span>
                </div>
              </div>

              <div className="thickness-tabs">
                {Object.values(thicknessData).map((item) => (
                  <motion.button
                    key={item.id}
                    className={`tab-btn ${item.id === activeThickness ? "active" : ""}`}
                    onClick={() => {
                      setActiveThickness(item.id);
                      setActiveVariantIndex(0);
                    }}
                    aria-label={`Select ${item.id} thickness: ${item.title}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="tab-content">
                      <div className="tab-header">
                        <span className="tab-label">
                          {item.id === "essential" ? "Essential" : 
                           item.id === "premium" ? "Premium" : "Heavy Duty"}
                        </span>
                        {item.id === activeThickness && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="active-indicator-motion"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                      <span className="tab-title">{item.title}</span>
                      <span className="tab-sub">{item.microCopy}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Product Card */}
          <div className="thickness-product-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeThickness}
                className="thickness-product-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Product Image */}
                <div className="product-image-container">
                  <motion.div
                    key={activeVariant.image}
                    className="image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="image-loader"
                      animate={{ opacity: (imageLoaded || imageError) ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="loader-spinner"></div>
                    </motion.div>
                    
                    {imageError ? (
                      <div className="image-fallback">
                        <FaImage className="fallback-icon" />
                        <span className="fallback-text">Image Loading</span>
                        <span className="fallback-desc">{activeVariant.label} - {current.title}</span>
                      </div>
                    ) : (
                      <img
                        src={getImagePath(activeVariant.image)}
                        alt={`${current.title} - ${activeVariant.label}`}
                        className="product-image"
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                      />
                    )}
                    
                    <motion.div 
                      className="image-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    
                    <motion.div 
                      className="image-micro-copy"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {current.tagline}
                    </motion.div>
                  </motion.div>

                  {/* Variant Selector */}
                  <motion.div 
                    className="variant-selector"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="variant-label">Color Options:</span>
                    <div className="variant-buttons">
                      {current.variants.map((variant, index) => (
                        <motion.button
                          key={variant.label}
                          className={`variant-btn ${index === activeVariantIndex ? "active" : ""}`}
                          onClick={() => setActiveVariantIndex(index)}
                          aria-label={`Select ${variant.label} color`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {variant.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                  <motion.div 
                    className="product-header"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div>
                      {isMobile && (
                        <div className="mobile-thickness-indicator">
                          <span className="thickness-badge">
                            {current.title}
                          </span>
                          <span className="mobile-micro-copy">{current.microCopy}</span>
                        </div>
                      )}
                      <h3 className="product-title">{current.title}</h3>
                      <div className="stock-indicator">
                        {current.price && <span className="price-tag">{current.price}</span>}
                        {current.stock && <span className="stock-status">{current.stock}</span>}
                      </div>
                    </div>
                    {!isMobile && (
                      <div className="product-badge">
                        <span className="badge-text">
                          {current.microCopy}
                        </span>
                      </div>
                    )}
                  </motion.div>

                  <motion.p 
                    className="product-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {current.tagline}
                  </motion.p>

                  {/* Features Section with Toggle */}
                  <motion.div 
                    className="product-features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button 
                      className="features-toggle-header" 
                      onClick={toggleFeatures}
                      aria-expanded={expandedFeatures}
                      aria-controls="features-content"
                    >
                      <h4 className="features-title">
                        <FaStar className="features-title-icon" />
                        Key Features
                      </h4>
                      <motion.div
                        animate={{ rotate: expandedFeatures ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="toggle-icon"
                      >
                        {expandedFeatures ? <FaMinus /> : <FaPlus />}
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFeatures && (
                        <motion.div
                          id="features-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="features-content-wrapper"
                        >
                          <ul className="thk-features-list">
                            {current.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="thk-feature-item"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <motion.div 
                                  className={`thk-feature-icon ${index % 2 === 0 ? 'icon-green' : 'icon-blue'}`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  <FaCheck />
                                </motion.div>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* CTA */}
                  <motion.div 
                    className="product-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      href={current.href} 
                      className="cta-button-link"
                      style={{ textDecoration: 'none' }}
                    >
                      <motion.button
                        className="cta-button"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 12px 30px rgba(92, 191, 74, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>
                          {isMobile ? "Customize" : current.cta}
                        </span>
                        <motion.div
                          className="cta-icon-wrapper"
                          animate={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <FaArrowRight className="cta-icon" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThicknessProducts;