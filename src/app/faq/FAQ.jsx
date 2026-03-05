"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLeaf, 
  FaTint, 
  FaGem, 
  FaEnvelope, 
  FaChevronDown,
  FaQuestionCircle
} from "react-icons/fa";
import '../../styles/FAQ.css';

const faqData = {
  "ABOUT SUSTAINAURA": [
    {
      question: "What is SustainAura's mission?",
      answer: "Our mission is to eliminate single-use PVC plastics from bathrooms worldwide. We are dedicated to providing high-quality, non-toxic, and eco-friendly shower liners that protect both your health and the planet, proving that sustainability doesn't mean compromising on durability or style."
    },
    {
      question: "How are SustainAura's products better for the planet?",
      answer: "Unlike traditional PVC liners that release harmful chemicals and VOCs, our PEVA liners are chlorine-free, phthalate-free, and odorless. We prioritize materials that are safer to produce and easier to recycle, significantly reducing the environmental footprint of your daily routine."
    },
    {
      question: "Where are your products made?",
      answer: "We ethically source our materials and partner with certified manufacturers who adhere to strict environmental and fair labor standards. Our design team ensures every product meets our high specifications for quality and sustainability."
    }
  ],
  "USE & CARE": [
    {
      question: "Are your products machine washable?",
      answer: "Yes, but with care. We recommend hand washing or wiping down with a damp cloth and mild soap for the longest lifespan. If machine washing is necessary, use a gentle cycle with cold water and hang to dry. Do not use bleach or tumble dry."
    },
    {
      question: "Are your products safe to use?",
      answer: "Absolutely. Our liners are 100% non-toxic and free from harmful chemicals like BPA, chlorides, and phthalates. They are safe for the whole family, including pets, and do not off-gas strong chemical odors like PVC liners."
    },
    {
      question: "How do I recycle my old liner?",
      answer: "PEVA is a recyclable material (Category 4 LDPE in many areas). We recommend checking with your local recycling facility. We are also working on a take-back program to make the process even easier!"
    }
  ],
  "MATERIALS & QUALITY": [
    {
      question: "What are SustainAura's products made of?",
      answer: "Our premium liners are crafted from 100% PEVA (Polyethylene Vinyl Acetate). This material offers the durability and water resistance of vinyl without the chlorine and harmful plasticizers found in PVC."
    },
    {
      question: "What do your certifications mean?",
      answer: "Our materials are OEKO-TEX Standard 100 certified, meaning they have been tested for harmful substances and are harmless to human health. We also maintain strict Prop 65 compliance."
    },
    {
      question: "Is your packaging eco-friendly?",
      answer: "Yes! We have eliminated plastic packaging from our supply chain. Your liner arrives in a reusable fabric bag or recyclable craft paper box, printed with soy-based inks."
    }
  ],
  "CONTACT & SUPPORT": [
    {
      question: "How can I get in touch?",
      answer: (
        <div className="contact-details">
          <p>We'd love to hear from you! Reach out through any of these channels:</p>
          <ul className="contact-list">
            <li><strong>Email:</strong> info@sustainaura.com</li>
            <li><strong>Business Hours:</strong> Mon-Fri, 9AM-5PM PST</li>
            <li><strong>Response Time:</strong> Within 24 hours</li>
          </ul>
        </div>
      )
    }
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("ABOUT SUSTAINAURA");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = Object.keys(faqData);

  return (
    <section className="faq-section" id="faq">
      {/* Floating decorative elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <FaQuestionCircle /> Help Center
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-layout">
          {/* Sidebar Navigation */}
          <div className="faq-sidebar">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                className={`category-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(cat);
                  setActiveIndex(null);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat === "ABOUT SUSTAINAURA" && <FaLeaf />}
                {cat === "USE & CARE" && <FaTint />}
                {cat === "MATERIALS & QUALITY" && <FaGem />}
                {cat === "CONTACT & SUPPORT" && <FaEnvelope />}
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="faq-content">
            <motion.h3 
              className="category-title"
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab}
            </motion.h3>
            
            <div className="faq-list">
              <AnimatePresence mode="wait">
                {faqData[activeTab].map((faq, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1 
                    }}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="q-text">{faq.question}</span>
                      <span className="q-icon">
                        <FaChevronDown />
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: "easeInOut" },
                              opacity: { duration: 0.3, delay: 0.1 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3 },
                              opacity: { duration: 0.2 }
                            }
                          }}
                          className="faq-answer-wrapper"
                        >
                          <div className="faq-answer">
                            {typeof faq.answer === 'string' ? (
                              <p>{faq.answer}</p>
                            ) : (
                              faq.answer
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;