"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import '../../styles/products.css';
import { PackageOpen, Award, Leaf, Shield, Recycle, Droplets, ShieldCheck } from 'lucide-react';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

function BenefitsSection() {
  const benefits = [
    {
      id: 'compostable',
      icon: (
        <div className="icon-wrapper">
          <PackageOpen size={48} strokeWidth={1.5} className="primary-icon" />
          <Leaf size={24} strokeWidth={2} className="accent-icon overlay-sprout" />
        </div>
      ),
      title: 'COMPOSTABLE',
      description: 'Our home essentials are certified compostable. They can easily be broken down within 90-180 days'
    },
    {
      id: 'certified',
      icon: <Award size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'CERTIFIED',
      description: "We've made sure to go the extra mile to get all our products certified for sustainability."
    },
    {
      id: 'nontoxic',
      icon: (
        <div className="icon-wrapper">
          <Leaf size={52} strokeWidth={1.5} className="primary-icon" />
        </div>
      ),
      title: 'NON TOXIC',
      description: 'Planet-safe? Yes! But also health-safe! All our products are non-toxic and free from chemicals.'
    },
    {
      id: 'durable',
      icon: <Shield size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'DURABLE',
      description: 'While sustainability is our motto, we make sure not to compromise on quality.'
    },
    {
      id: 'sustainable',
      icon: <Recycle size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'SUSTAINABLE',
      description: 'Responsibly sourced materials and ethical production processes for a greener future.'
    },
    {
      id: 'waterresistant',
      icon: <Droplets size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'WATER RESISTANT',
      description: 'Designed to repel moisture effectively, keeping your bathroom dry and fresh.'
    },
    {
      id: 'rustproof',
      icon: <ShieldCheck size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'RUSTPROOF',
      description: 'Equipped with rustproof metal grommets for long-lasting durability in humid conditions.'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header">
          <h2>Key Benefits</h2>
          <div className="section-subtitle">Why Choose Our Products</div>
        </div>
        
        <div className="benefits-swiper-container">
          {/* Swiper Carousel - No arrows or dots */}
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={'auto'}
            loop={true}
            speed={5000}
            grabCursor={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: false,
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
              momentumVelocityRatio: 0.5,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              }
            }}
            className="benefits-swiper"
          >
            {[...benefits, ...benefits].map((benefit, index) => (
              <SwiperSlide key={`${benefit.id}-${index}`} className="benefit-slide">
                <div className="benefit-item">
                  <div className={`benefit-icon ${benefit.id}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// BestSellersSwiper component (if you need it)
function BestSellersSwiper({ products }) {
  return (
    <section className="best-sellers-section">
      <div className="section-container">
        <div className="best-sellers-header">
          <h2>Best Sellers</h2>
        </div>
        
        <div className="carousel-wrapper">
          {/* Swiper Carousel - No arrows or dots */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            speed={600}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
            }}
            className="best-sellers-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="best-seller-card">
                  <div className="bs-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="best-seller-image"
                    />
                  </div>
                  <button className="view-product-btn">
                    View Product
                    <div className="btn-arrow">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ProductTemplate({
  thickness,
  type,
  products,
  heroTitle,
  productDetails,
  amazonLink,
  contactLink = "/contact",
  seo
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const overviewRef = useRef(null);
  const stylesRef = useRef(null);
  const productCardsSliderRef = useRef(null);

  const activeProduct = products && products.length > 0 ? products[activeProductIndex] : {};

  const resolveImg = (img) => {
    if (!img) return "";
    if (/^https?:\/\//i.test(img)) return img;
    if (img.startsWith("/")) return img;
    return `/${img.replace(/^\.\//, "")}`;
  };

  const scrollToSection = (section) => {
    let ref = null;

    switch (section) {
      case "overview":
        ref = overviewRef;
        break;
      case "styles":
        ref = stylesRef;
        break;
      default:
        ref = overviewRef;
    }

    if (ref && ref.current) {
      const headerOffset = 100;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const sections = [
      { id: "overview", ref: overviewRef },
      { id: "styles", ref: stylesRef }
    ];

    const observers = sections.map(({ id, ref }) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0.1
        }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  const heroContent = {
    "4G": {
      title: "Essential <br /> PEVA Shower Curtain",
      subcopy: "30% Recycled PEVA • Waterproof • Quick‑Dry",
      desc: "A lightweight PEVA liner with rustproof metal grommets and bottom magnets that keep your shower mess‑free and mold‑resistant."
    },
    "6G": {
      title: "Premium <br /> PEVA Shower Curtain",
      subcopy: "30% Recycled PEVA • Durable • Perfect Drape",
      desc: "A premium medium-weight PEVA liner with rustproof metal grommets and bottom magnets, designed for enhanced durability and a better drape."
    },
    "8G": {
      title: "Heavy Duty <br /> PEVA Shower Curtain",
      subcopy: "30% Recycled PEVA • Heavyweight",
      desc: "A heavy-duty PEVA liner with rustproof metal grommets and bottom magnets, offering maximum durability and a luxury hotel-grade feel."
    }
  };

  const currentHero = heroContent[thickness] || heroContent["4G"];

  // Updated Ideal For cards with images
  const idealForCards = [
    {
      id: 1,
      title: "Eco-Conscious Households",
      desc: "Families looking for sustainable home solutions",
      image: "/eco-households.jpg", // Eco-friendly home
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Rental Properties",
      desc: "Durable and easy-to-clean for rental units",
      image: "/rental-properties.jpg", // Modern apartment
      color: "#00BCD4"
    },
    {
      id: 3,
      title: "RV Bathrooms",
      desc: "Perfect fit for mobile living spaces",
      image: "/rv-bathrooms.jpg", // RV interior
      color: "#FF9800"
    },
    {
      id: 4,
      title: "Daily Shower Upgrade",
      desc: "Fresh minimalist look for everyday use",
      image: "/daily-shower.jpg", // Modern bathroom
      color: "#9C27B0"
    }
  ];

  return (
    <div className="product-template">
      <section className="product-hero" ref={overviewRef}>
        <div className="product-hero-inner">
          <div className="product-gallery">
            <div className="product-thumbs-vertical">
              {products.slice(0, 4).map((p, index) => (
                <button
                  key={p.id || index}
                  type="button"
                  className={`product-thumb-vertical ${index === activeProductIndex ? "active" : ""}`}
                  onClick={() => setActiveProductIndex(index)}
                >
                  <img src={resolveImg(p.image)} alt={p.name} />
                </button>
              ))}
            </div>

            <div className="product-main-image">
              <img
                src={resolveImg(activeProduct.image)}
                alt={activeProduct.name || "PEVA shower curtain liner"}
              />
            </div>
          </div>

          <div className="product-hero-info">
            <h1
              className="product-hero-title"
              dangerouslySetInnerHTML={{ __html: currentHero.title }}
            ></h1>

            <div className="product-hero-price-meta">
              <span className="product-hero-badge">
                {currentHero.subcopy}
              </span>
            </div>

            <div className="product-hero-description">
              {currentHero.desc}
            </div>

            <div className="product-hero-chooser">
              <div className="chooser-row">
                <span className="chooser-label">Thickness</span>
                <div className="chooser-options">
                  <Link href="/4G" className={`chooser-pill ${thickness === "4G" ? "active" : ""}`}>
                    <span>Essential</span>
                  </Link>
                  <Link href="/6G" className={`chooser-pill ${thickness === "6G" ? "active" : ""}`}>
                    <span>Premium</span>
                  </Link>
                  <Link href="/8G" className={`chooser-pill ${thickness === "8G" ? "active" : ""}`}>
                    <span>HeavyDuty</span>
                  </Link>
                </div>
              </div>

              <div className="chooser-row">
                <span className="chooser-label">Finish</span>
                <div className="chooser-options">
                  {products && products.map((product, index) => {
                    const cleanLabel = product.color
                      .replace("Crystal ", "")
                      .replace("Pure ", "");
                    return (
                      <button
                        key={product.id || index}
                        className={`chooser-pill ${index === activeProductIndex ? "active" : ""}`}
                        onClick={() => setActiveProductIndex(index)}
                      >
                        <span>{cleanLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="chooser-row">
                <span className="chooser-label">Size</span>
                <div className="chooser-options">
                  <button className="chooser-pill active"><span>72″ × 72″</span></button>
                </div>
              </div>
            </div>

            <div className="product-hero-cta-row">
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="product-primary-button amazon-button"
              >
                <span className="amazon-btn-text">Buy Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z" />
                  <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623" />
                </svg>
              </a>
              <button
                type="button"
                className="product-secondary-button"
                onClick={() => scrollToSection("styles")}
              >
                View Styles
              </button>
            </div>

            <div className="product-hero-meta">
              <span>30% Recycled PEVA</span>
              <span>BPA-Free</span>
              <span>OEKO TEX Certified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-showcase-section" ref={stylesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Available Finishes</h2>
            <div
              className="section-subtitle"
              onClick={() => productCardsSliderRef.current?.scrollIntoView({ behavior: "smooth" })}
              style={{ cursor: "pointer" }}
            >
              Choose from our premium  collection
            </div>
          </div>

          <div className="product-cards-grid" ref={productCardsSliderRef}>
            {products.map((product, index) => {
              const imgSrc = resolveImg(product.image);

              return (
                <div key={`product-${index}`} className="product-card">
                  <div className="product-card-image">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={product.name}
                      />
                    ) : (
                      <div className="image-placeholder">
                        <span>{product.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="product-card-content">
                    <div className="product-card-header">
                      <h3 className="product-card-title">{product.name}</h3>
                    </div>

                    <div className="specs-container">
                      <div className="specs-content">
                        <div className="specs-grid">
                          <div className="spec-item">
                            <span className="spec-label">Material</span>
                            <span className="spec-value">100% PEVA</span>
                          </div>

                          <div className="spec-item">
                            <span className="spec-label">Color</span>
                            <div>
                              <span 
                                className="color-indicator" 
                                style={{
                                  backgroundColor: product.color.toLowerCase().includes('clear') ? '#eef2f5' : '#fff'
                                }}
                              ></span>
                              <span className="spec-value">{product.color}</span>
                            </div>
                          </div>

                          <div className="spec-item">
                            <span className="spec-label">Weight</span>
                            <span className="spec-value">
                              {thickness === "8G" ? "Heavy" : thickness === "6G" ? "Medium" : "Light"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-card-actions">
                      <a
                        href={product.link || amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-button card-button-primary amazon-button"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z" />
                          <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623" />
                        </svg>
                        <span>Buy Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ideal-for-section">
        <div className="ideal-for-container">
          <div className="section-header">
            <h2>Perfect For</h2>
            <div className="section-subtitle">Ideal for various lifestyles and settings</div>
          </div>

          <div className="ideal-for-grid">
            {idealForCards.map((card) => (
              <div key={card.id} className="ideal-for-card">
                <div className="ideal-for-image">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    loading="lazy"
                  />
                </div>
                <div className="ideal-for-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
    </div>
  );
}

export default ProductTemplate;