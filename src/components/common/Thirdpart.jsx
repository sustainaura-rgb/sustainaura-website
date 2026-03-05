import React, { useState, useEffect, useRef } from "react";

import '../../styles/Third.css';
import {
  FaLeaf,
  FaWater,
  FaLock,
  FaBalanceScale,
  FaBath,
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const FEATURES = [
  {
    id: 0,
    icon: <FaLeaf className="tp-feature-icon" aria-hidden="true" />,
    title: "Eco-Conscious Choice",
    description: "Thoughtfully crafted with 30% recycled PEVA, providing a sustainable, PVC-free alternative that is gentle on your home and the environment.",
    image: "/image1.jpg",
  },
  {
    id: 1,
    icon: <FaWater className="tp-feature-icon" aria-hidden="true" />,
    title: "Advanced Moisture Control",
    description: "Engineered to repel water and dry rapidly, this surface prevents moisture buildup, ensuring your bathroom remains fresh with minimal effort.",
    image: "/image5.jpg",
  },
  {
    id: 2,
    icon: <FaLock className="tp-feature-icon" aria-hidden="true" />,
    title: "Enduring Durability",
    description: "Featuring a reinforced header and twelve rust-resistant grommets, our liners are built to withstand daily use without fraying or tearing.",
    image: "/image3.jpg",
  },
  {
    id: 3,
    icon: <FaBalanceScale className="tp-feature-icon" aria-hidden="true" />,
    title: "Steadfast Stability",
    description: "A triple-magnet weighted hem ensures the liner stays perfectly in place, effectively eliminating billowing and unwanted clinging during your shower.",
    image: "/image4.jpg",
  },
  {
    id: 4,
    icon: <FaBath className="tp-feature-icon" aria-hidden="true" />,
    title: "Versatile Universal Fit",
    description: "Sized at a standard 72” × 72”, our liners offer a clean, minimalist look that complements traditional homes, modern rentals, and RV interiors alike.",
    image: "/image2.jpg",
  },
  {
    id: 5,
    icon: <FaHome className="tp-home-icon" aria-hidden="true" />,
    title: "Safe for the Whole Family",
    description: "OEKO-TEX certified to be free from harmful substances, our odor-neutral liners provide a safe and healthy environment for children and pets.",
    image: "/image9.png",
  },
];
function Third() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % FEATURES.length);
        setProgress(0);
      }, 5000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 100 / 100;
        });
      }, 50);

      return () => {
        clearInterval(intervalRef.current);
        clearInterval(progressInterval);
      };
    }
  }, [isPlaying]);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setProgress(0);
    }
  };

  const activeFeature = FEATURES[activeIndex];

  return (
    <section className="section-shell" id="why-sustainaura">
      <div className="section-inner-card">
        <section className="tp-about-features">
          <div className="features-header">
            <div className="header-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>

            <h2 className="section-title">
              Why Choose <span className="title-gradient">Sustain Aura</span>?
            </h2>
            <p className="section-subtitle">
              Discover the thoughtful details that make our eco-friendly liners a staple for the modern home.
            </p>
          </div>

          <div className="tp-why-layout">
            <div className="tp-why-image-wrap">
              <div className="tp-image-container">
                <div className="tp-image-backdrop"></div>
                <div className="tp-image-frame">
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    className={`tp-why-main-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="tp-image-overlay"></div>
                  {/* <div className="tp-image-badge">
                    <div className="tp-badge-icon">
                      {activeFeature.icon}
                    </div>
                    {/* <span className="tp-badge-text">Featured</span> */}
                  {/* </div> */}
                </div>
              </div>

              <div className="tp-image-navigation">
                <button
                  className="tp-nav-button tp-prev-button"
                  onClick={handlePrev}
                  aria-label="Previous feature"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="tp-nav-button tp-play-button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button
                  className="tp-nav-button tp-next-button"
                  onClick={handleNext}
                  aria-label="Next feature"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="tp-progress-container">
                <div
                  className="tp-progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="tp-why-content">
              <div className="content-header">
                <h3 className="tp-why-subtitle">
                  <span className="title-underline">Key Features</span>
                </h3>
                <div className="feature-counter">
                  <span className="current-number">0{activeIndex + 1}</span>
                  <span className="total-number">/0{FEATURES.length}</span>
                </div>
              </div>

              <ul className="tp-why-feature-list">
                {FEATURES.map((f, index) => (
                  <li
                    key={f.id}
                    className={`tp-why-feature-item ${index === activeIndex ? "active" : ""}`}
                    onClick={() => {
                      setActiveIndex(index);
                      setProgress(0);
                    }}
                  >
                    <div className="item-indicator">
                      <div className="indicator-dot"></div>
                    </div>

                    <div className="tp-why-feature-icon-wrap">
                      {f.icon}
                    </div>

                    <div className="feature-text">
                      <span className="tp-why-feature-title">{f.title}</span>
                      {/* <span className="feature-hint">Click to explore</span> */}
                    </div>

                    {index === activeIndex && (
                      <div className="active-indicator">
                        <div className="active-pulse"></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="tp-why-feature-detail">
                <div className="detail-header">
                  <h4 className="tp-why-feature-detail-title">
                    {activeFeature.title}
                  </h4>
                  <div className="detail-ornament">
                    <div className="ornament-line"></div>
                    <div className="ornament-circle"></div>
                  </div>
                </div>
                <p className="tp-why-feature-detail-text">
                  {activeFeature.description}
                </p>
                {/* <div className="detail-footer">
                  {/* <div className="feature-tags">
                    <span className="feature-tag">Premium</span>
                    <span className="feature-tag">Eco-Friendly</span>
                    <span className="feature-tag">Durable</span>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Third;