"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle, FaLeaf, FaBoxOpen, FaShippingFast, FaEnvelope } from "react-icons/fa";
import '../../styles/aboutus.css';

// =========================================
// FAQ DATA
// =========================================
const faqData = {
  "ABOUT US": [
    {
      question: "What is SustainAura's mission?",
      answer: "We exist to detoxify the most intimate spaces in your home. By eliminating toxic PVC from the bathroom, we provide high-performance, non-toxic alternatives that protect your respiratory health and the planet without compromising on elegance or durability."
    },
    {
      question: "How is SustainAura different from standard 'eco' brands?",
      answer: "Unlike brands that use 'greenwashing' to hide low-quality materials, we focus on material science. Our PEVA liners are specifically engineered for zero off-gassing and high-gauge durability, ensuring they last longer and perform better than traditional vinyl."
    },
    {
      question: "Where are your products designed?",
      answer: "Our products are designed locally with a focus on minimalist aesthetics and ethical sourcing. We partner only with certified manufacturers who uphold the highest global standards for environmental safety and fair labor practices."
    }
  ],
  "USE & QUALITY": [
    {
      question: "Are your products machine washable?",
      answer: "For maximum longevity, we recommend a simple wipe-down with a damp cloth and mild soap. However, our liners are machine-washable on a cold, gentle cycle. To maintain the material integrity, always hang to dry and avoid heat or bleach."
    },
    {
      question: "Will I smell any chemical odors?",
      answer: "No. Traditional PVC liners release harmful VOCs and strong chemical smells. Because SustainAura uses high-purity, phthalate-free PEVA, our products are completely odorless and safe for those with chemical sensitivities."
    },
    {
      question: "How do I recycle my liner at the end of its life?",
      answer: "Our PEVA material is a Category 4 LDPE recyclable. We recommend checking with your local facility to ensure it is processed correctly. We are also developing a dedicated take-back program to further our commitment to a circular economy."
    }
  ],
  "MATERIAL SAFETY": [
    {
      question: "What exactly is PEVA?",
      answer: "PEVA (Polyethylene Vinyl Acetate) is a non-chlorinated alternative to PVC. It provides the same waterproof benefits as vinyl but is biodegradable in optimal conditions and entirely free of the toxic plasticizers that cause 'new curtain smell' and indoor air pollution."
    },
    {
      question: "What do your safety certifications mean?",
      answer: "Our materials are OEKO-TEX Standard 100 certified, which is the gold standard for textile safety. This ensures every liner has been rigorously tested for over 100 harmful substances, making them safe for children and pets."
    },
    {
      question: "How is the packaging sustainable?",
      answer: "We have removed all single-use plastics from our shipping process. Your order will arrive in a reusable fabric storage bag or a recyclable craft box, printed with eco-friendly soy-based inks to ensure a zero-waste unboxing experience."
    }
  ],
  "CONTACT US": [
    {
      question: "How can I get in touch?",
      answer: (
        <div className="contact-details">
          <p>We'd love to hear from you!</p>
          <ul className="contact-list">
            <li><strong>Email:</strong> info@sustainaura.com</li>
          </ul>
        </div>
      )
    }
  ]
};

// =========================================
// ENHANCED FAQ COMPONENT WITH ANIMATIONS
// =========================================
function FAQSection() {
  const [activeTab, setActiveTab] = useState("ABOUT US");
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const categories = Object.keys(faqData);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <FaQuestionCircle /> Help Center
          </div>
          <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
        </div>

        <div className="faq-layout">
          {/* Enhanced Sidebar Navigation */}
          <div className="faq-sidebar">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                className={`category-btn ${activeTab === cat ? "active" : ""} ${hoveredTab === index ? "hover" : ""}`}
                onClick={() => {
                  setActiveTab(cat);
                  setActiveIndex(null);
                }}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {cat === "ABOUT US" && <FaLeaf />}
                {cat === "USE & CARE" && <FaBoxOpen />}
                {cat === "MATERIALS" && <FaLeaf />}
                {cat === "ORDERS & SHIPPING" && <FaShippingFast />}
                {cat === "CONTACT US" && <FaEnvelope />}
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Enhanced Content Area */}
          <div className="faq-content">
            <motion.h3 
              className="category-title"
              key={activeTab}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab}
            </motion.h3>
            <div className="faq-list">
              {faqData[activeTab].map((faq, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <span className="q-text">{faq.question}</span>
                    <motion.span 
                      className="q-icon"
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer-wrapper"
                      >
                        <motion.div 
                          className="faq-answer"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================
// ENHANCED MAIN COMPONENT WITH SCROLL ANIMATIONS
// =========================================
export default function AboutUsPremium() {
 const cardData = [
  {
  id: 1,
  title: "Toxic-Free",
  icon: "🌿",
  description: "Pure PEVA materials that keep your indoor air quality clean and safe."
},

  { 
    id: 2, 
    title: "Earth-First", 
    icon: "🌍", 
    description: "Prioritizing the planet by eliminating harmful PVC from every bathroom." 
  },
  { 
    id: 3, 
    title: "Durability", 
    icon: "💎", 
    description: "Thoughtfully engineered to last longer, reducing waste through longevity." 
  },
  { 
    id: 4, 
    title: "Modern Design", 
    icon: "✨", 
    description: "Minimalist aesthetics that elevate your space without sacrificing utility." 
  },
  { 
    id: 5, 
    title: "Zero Odor", 
    icon: "🌬️", 
    description: "Chemical-free manufacturing means no 'new plastic' smell in your home." 
  },
  { 
    id: 6, 
    title: "Certified Safe", 
    icon: "✅", 
    description: "Strict adherence to safety standards for your family and the ecosystem." 
  },
];
  const [activeCard, setActiveCard] = useState(cardData[0]);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse position tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sections = [
  {
    title: "The Catalyst",
    content: "SustainAura was born from a realization that the most intimate space in our home—the bathroom—was often the most toxic. We saw how traditional PVC liners leaked chemicals into the air we breathe and the water we use. We knew there had to be a cleaner way."
  },
  {
    title: "The Invention",
    content: "We spent months researching alternatives to vinyl that didn't feel cheap or flimsy. By perfecting high-gauge PEVA, we created a liner that mimics the performance of industrial plastic while remaining 100% chlorine and phthalate-free."
  },
  {
    title: "The Evolution",
    content: "What started with a single shower liner has evolved into a mission to detoxify the home. We’ve expanded our focus to ensure every touchpoint—from our material sourcing to our plastic-free packaging—upholds the highest ecological standards."
  },
  {
    title: "The Future",
    content: "Our vision is to set a new standard for home essentials where 'eco-friendly' isn't a premium feature, but the baseline. We’re working toward a circular future where every SustainAura product can be returned to the earth responsibly."
  }
];

  return (
    <div className="aboutus-container" ref={containerRef}>
      {/* Animated Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Hero Section with Enhanced Effects */}
      <section 
        className={`aboutus-hero ${isVisible ? "animate-in" : ""}`} 
        ref={heroRef}
        style={{
          transform: `translateX(${(mousePosition.x - 0.5) * 20}px) translateY(${(mousePosition.y - 0.5) * 20}px)`
        }}
      >
        <div className="hero-content">
          <div className="hero-text-content">
            {/* <motion.nav 
              className="pdp-breadcrumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/">Home</a>
              <span className="separator">&gt;</span>
              <span className="current">About Us</span>
            </motion.nav> */}
            
            <motion.div 
              className="aboutus-badge glow"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Sustainability Meets Design</span>
            </motion.div>

            <motion.h1 
              className="aboutus-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="title-line accent">The Story Behind</span>
              <span className="title-line brand-name">SustainAura</span>
            </motion.h1>

            <motion.div 
              className="hero-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </motion.div>

            <motion.p 
              className="aboutus-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At <strong>SustainAura</strong>, we believe that small, mindful
              choices can create a ripple of positive change — not just in our
              homes, but across the planet.
            </motion.p>

            <motion.div 
              className="cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="aboutus-cta primary"
                onClick={() => {
                  document.querySelector(".story-timeline")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Story</span>
                <div className="cta-arrow">→</div>
              </motion.button>
            </motion.div>
          </div>

          {/* Enhanced Visual Content with Parallax */}
          <motion.div 
            className="au-visual-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="au-main-visual">
              <motion.div 
                className="au-image-frame"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="au-image-placeholder">
                  <motion.div 
                    className="au-placeholder-content"
                    key={activeCard.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {activeCard.icon}
                    </motion.span>
                    <h3>{activeCard.title}</h3>
                    <p>{activeCard.description}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Floating Cards */}
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className={`au-floating-card au-card-${index + 1} ${activeCard.id === card.id ? 'active' : ''}`}
                  onClick={() => setActiveCard(card)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    x: (mousePosition.x - 0.5) * 10,
                    y: (mousePosition.y - 0.5) * 10
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <span className="card-icon">{card.icon}</span>
                  <span>{card.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Story Timeline */}
      <section className="story-timeline scroll-animate">
        <div className="timeline-container">
          <motion.div 
            className="timeline-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey of Purpose</h2>
            <p>From a simple idea to a sustainable movement</p>
          </motion.div>

          <div className="timeline">
            <div className="timeline-track"></div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${activeSection === index ? "active" : ""}`}
                onMouseEnter={() => setActiveSection(index)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <div className="marker-outer">
                    <div className="marker-inner"></div>
                  </div>
                </div>

                <div className="timeline-content">
                  <motion.div 
                    className="content-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section - FIXED ORDER */}
      <section className="mission-section scroll-animate">
        <div className="mission-container">
          {/* CONTENT FIRST - Will be on LEFT on desktop, TOP on mobile */}
          <motion.div 
            className="mission-content-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-header">
              <motion.div 
                className="mission-badge"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span>Our Core Belief</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Small Choices,
                <br />
                Lasting Impact
              </motion.h2>
            </div>

            <div className="mission-body">
              <motion.div 
                className="mission-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  We believe that true sustainability isn't about perfection —
                  it's about progress. Every conscious choice, no matter how
                  small, contributes to a brighter, cleaner future for our
                  planet.
                </p>
              </motion.div>

              <div className="mission-stats">
                <motion.div 
                  className="stat"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Sustainable</div>
                </motion.div>
                <motion.div 
                  className="stat"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="stat-number" >0</div>
                  <div className="stat-label">Toxic Materials</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECOND - Will be on RIGHT on desktop, BOTTOM on mobile */}
          <motion.div 
            className="mission-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-image-container">
              <motion.img
                src="/finalearth.jpg"
                alt="Sustainable Earth Mission"
                className="mission-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Values Section */}
     {/* Enhanced Values Section */}
     {/* Enhanced Values Section */}
      <section className="values-section scroll-animate">
        <div className="values-container">
          <motion.div 
            className="values-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Sustainable Promise</h2>
            <p>Bite-sized commitments to a cleaner home</p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="value-icon">
                <span>🛡️</span>
              </div>
              <h3>Non-Toxic</h3>
              <p>
                Pure PEVA materials. No PVC, BPA, or phthalates—keeping 
                your steam and indoor air safe.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="value-icon">
                <span>🌊</span>
              </div>
              <h3>Recyclable</h3>
              <p>
                Built for longevity and fully recyclable (Category 4) 
                to keep plastic out of our oceans.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="value-icon">
                <span>🔍</span>
              </div>
              <h3>Transparent</h3>
              <p>
                Zero greenwashing. We provide the data to prove 
                our products are truly better for you.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="value-icon">
                <span>🚫</span>
              </div>
              <h3>Plastic-Free</h3>
              <p>
                Delivered in 100% compostable mailers with zero 
                unnecessary plastic wrap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Enhanced FAQ Section */}
      {/* <FAQSection /> */}

      {/* Enhanced Final CTA */}
      <section className="aboutus-final-cta scroll-animate">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Our Sustainable Movement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Make sustainability a way of living — not a luxury. Explore our
            collection of home essentials and discover how effortless
            eco-friendly living can be.
          </motion.p>

          <motion.div 
            className="cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="cta-button primary"
              onClick={() => {
                window.location.href = "/shop";
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(255, 255, 255, 0.1)",
                  "0 15px 35px rgba(255, 255, 255, 0.2)",
                  "0 10px 25px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              <span>Shop Sustainable Products</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}