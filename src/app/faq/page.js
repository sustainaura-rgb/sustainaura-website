"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle, FaLeaf, FaBoxOpen, FaShippingFast, FaEnvelope } from "react-icons/fa";
import "./faq.css";

const faqData = {
    "ABOUT US": [
        {
            question: "What is SustainAura's mission?",
            answer: "Our mission is to eliminate single-use PVC plastics from bathrooms worldwide. We are dedicated to providing high-quality, non-toxic, and eco-friendly shower liners that protect both your health and the planet, proving that sustainability doesn't mean compromising on durability or style."
        },
        {
            question: "How are SustainAura's products better for the planet?",
            answer: "Unlike traditional PVC liners that release harmful lux and VOCs, our PEVA liners are chlorine-free, phthalate-free, and odorless. We prioritize materials that are safer to produce and easier to recycle, significantly reducing the environmental footprint of your daily routine."
        },
        {
            question: "Where are your products made?",
            answer: "We ethically source our materials and partner with certified manufacturers who adhere to strict environmental and fair labor standards. Our design team is based locally, ensuring every product meets our high specifications for quality and sustainability."
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
            answer: "PEVA is a recyclable material (Category 4 LDPE in many areas). We recommend checking with your local recycling facility. We are also working on a take-back program to make the process even easier for you!"
        }
    ],
    "MATERIALS": [
        {
            question: "What are SustainAura's products made of?",
            answer: "Our premium liners are crafted from 100% PEVA (Polyethylene Vinyl Acetate). This material offers the durability and water resistance of vinyl without the chlorine and harmful plasticizers found in PVC. It's biodegradable in optimal conditions and much safer for indoor air quality."
        },
        {
            question: "What do your certifications mean?",
            answer: "Our materials are OEKO-TEX Standard 100 certified, meaning they have been tested for harmful substances and are harmless to human health. We also maintain strict prop-65 compliance."
        },
        {
            question: "Is your packaging eco-friendly?",
            answer: "Yes. We have eliminated plastic packaging from our supply chain. Your liner arrives in a reusable fabric bag or a recyclable craft paper box, printed with soy-based inks."
        }
    ],
    // "ORDERS & SHIPPING": [
    //     {
    //         question: "How much will I be charged for shipping?",
    //         answer: "We offer free standard shipping on all orders over $50 within the contiguous US. For orders under $50, a flat rate of $5.99 applies. Expedited shipping options are available at checkout."
    //     },
    //     {
    //         question: "Where do you ship?",
    //         answer: "Currently, we ship to all 50 US states and Canada. We are working on expanding our sustainable shipping network to Europe and beyond soon."
    //     },
    //     {
    //         question: "How long will it take for my order to arrive?",
    //         answer: "Standard shipping typically takes 3-5 business days. You will receive a tracking number via email as soon as your order ships, usually within 24 hours of purchase."
    //     },
    //     {
    //         question: "What is your return policy?",
    //         answer: "We stand by our quality. If you are not 100% satisfied, you can return your unused liner within 30 days of purchase for a full refund. We also offer a 1-year warranty against manufacturing defects."
    //     },
    //     {
    //         question: "What if my order is damaged in transit?",
    //         answer: "Please contact us immediately at support@sustainaura.com with a photo of the damage. We will send a replacement immediately at no cost to you."
    //     }
    // ],
    "CONTACT US": [
        {
            question: "How can I get in touch?",
            answer: (
                <div className="contact-details">
                    <p>We'd love to hear from you!</p>
                    <ul className="contact-list">
                        <li><strong>Email:</strong> info@sustainaura.com</li>
                        {/* <li><strong>Support:</strong> support@sustainaura.com</li> */}
                        {/* <li><strong>Instagram:</strong> @SustainAuraOfficial</li> */}
                    </ul>
                </div>
            )
        }
    ]
};

const FAQ = () => {
    const [activeTab, setActiveTab] = useState("ABOUT US");
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = Object.keys(faqData);

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <div className="faq-badge">
                        <FaQuestionCircle /> Help Center
                    </div>
                    <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
                    <p className="faq-subtitle">Find answers to common questions about our eco-friendly products and sustainable mission</p>
                </div>

                <div className="faq-layout">
                    {/* Sidebar Navigation */}
                    <div className="faq-sidebar">
                        <div className="sidebar-header">
                            <h3>Categories</h3>
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`category-btn ${activeTab === cat ? "active" : ""}`}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setActiveIndex(null);
                                }}
                            >
                                <span className="category-icon">
                                    {cat === "ABOUT US" && <FaLeaf />}
                                    {cat === "USE & CARE" && <FaBoxOpen />}
                                    {cat === "MATERIALS" && <FaLeaf />}
                                    {cat === "ORDERS & SHIPPING" && <FaShippingFast />}
                                    {cat === "CONTACT US" && <FaEnvelope />}
                                </span>
                                <span className="category-text">{cat}</span>
                                <span className="category-count">{faqData[cat].length}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="faq-content">
                        <div className="content-header">
                            <h3 className="category-title">
                                <span className="category-title-icon">
                                    {activeTab === "ABOUT US" && <FaLeaf />}
                                    {activeTab === "USE & CARE" && <FaBoxOpen />}
                                    {activeTab === "MATERIALS" && <FaLeaf />}
                                    {activeTab === "ORDERS & SHIPPING" && <FaShippingFast />}
                                    {activeTab === "CONTACT US" && <FaEnvelope />}
                                </span>
                                {activeTab}
                            </h3>
                            <p className="category-description">
                                {activeTab === "ABOUT US" && "Learn about our mission and values"}
                                {activeTab === "USE & CARE" && "Product usage and maintenance guidance"}
                                {activeTab === "MATERIALS" && "Information about our sustainable materials"}
                                {activeTab === "ORDERS & SHIPPING" && "Ordering and delivery information"}
                                {activeTab === "CONTACT US" && "Get in touch with our team"}
                            </p>
                        </div>
                        
                        <div className="faq-list">
                            {faqData[activeTab].map((faq, index) => (
                                <motion.div
                                    key={`${activeTab}-${index}`}
                                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={activeIndex === index}
                                    >
                                        <span className="question-number">Q{index + 1}</span>
                                        <span className="q-text">{faq.question}</span>
                                        <span className="q-icon">
                                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="faq-answer-wrapper"
                                            >
                                                <div className="faq-answer">
                                                    <div className="answer-indicator">A</div>
                                                    <div className="answer-content">{faq.answer}</div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* <div className="faq-footer">
                            <div className="need-help">
                                <FaQuestionCircle className="help-icon" />
                                <div>
                                    <h4>Still have questions?</h4>
                                    <p>Can't find the answer you're looking for? Please reach out to our friendly team.</p>
                                </div>
                                <a href="mailto:info@sustainaura.com" className="help-button">Contact Support</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;