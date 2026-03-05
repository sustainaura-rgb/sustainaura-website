"use client";
import React, { useState, useRef } from "react";
import '../../styles/Contact.css';
// import SEO from "./components/SEO"; // Handled by Next.js metadata
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    inquiry: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const inquiryTypeRef = useRef(null);
  const inquiryRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const getFieldError = (field, value) => {
    if (field === "name") {
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }

    if (field === "email") {
      if (!value.trim()) return "Email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Please enter a valid email address.";
      }
    }

    if (field === "inquiryType") {
      if (!value) return "Please select a type of inquiry.";
    }

    if (field === "inquiry") {
      if (!value.trim()) return "Inquiry is required.";
      if (value.trim().length < 10) {
        return "Inquiry should be at least 10 characters.";
      }
    }

    return "";
  };

  // check previous fields; just set errors, don't move focus
  const handleFieldFocus = (field) => {
    if (field === "name") return;

    if (field === "email") {
      const nameError = getFieldError("name", formData.name);
      if (nameError) {
        setErrors((prev) => ({ ...prev, name: nameError }));
      }
    }

    if (field === "inquiryType") {
      const nameError = getFieldError("name", formData.name);
      const emailError = getFieldError("email", formData.email);

      if (nameError || emailError) {
        setErrors((prev) => ({
          ...prev,
          ...(nameError ? { name: nameError } : {}),
          ...(emailError ? { email: emailError } : {})
        }));
      }
    }

    if (field === "inquiry") {
      const nameError = getFieldError("name", formData.name);
      const emailError = getFieldError("email", formData.email);
      const inquiryTypeError = getFieldError("inquiryType", formData.inquiryType);

      if (nameError || emailError || inquiryTypeError) {
        setErrors((prev) => ({
          ...prev,
          ...(nameError ? { name: nameError } : {}),
          ...(emailError ? { email: emailError } : {}),
          ...(inquiryTypeError ? { inquiryType: inquiryTypeError } : {})
        }));
      }
    }
  };

  const validateField = (field) => {
    const value = formData[field];
    const error = getFieldError(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validate = () => {
    const newErrors = {};

    newErrors.name = getFieldError("name", formData.name) || "";
    newErrors.email = getFieldError("email", formData.email) || "";
    newErrors.inquiryType =
      getFieldError("inquiryType", formData.inquiryType) || "";
    newErrors.inquiry = getFieldError("inquiry", formData.inquiry) || "";

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`https://mern-backend-py4u.onrender.com/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      const emailSent = data?.data?.emailSent ?? false;
      const savedToDB = data?.data?.savedToDB ?? false;

      if (data.success && (emailSent || savedToDB)) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: emailSent
            ? "We have received your message and will be in touch shortly."
            : "Your inquiry was saved. We will review it properly.",
          confirmButtonColor: "#6CBC3C",
          confirmButtonText: "Close"
        });
        setFormData({
          name: "",
          email: "",
          inquiryType: "",
          inquiry: ""
        });
        setErrors({});
        setStatus("Inquiry submitted successfully!");
      } else {
        const serverMsg = data?.message || "Failed to submit. Try again.";
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: serverMsg,
          confirmButtonColor: "#d33",
          confirmButtonText: "Close"
        });
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Something went wrong. Please check your connection.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Close"
      });
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
      </div>

      <div className="contact-container">
        {/* Left Info Column */}
        <motion.div
          className="contact-info"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="section-header">
            {/* <span className="section-subtitle">Connect With Us</span> */}
            <h2 className="section-title">Get in Touch</h2>
          </motion.div>

          <motion.p variants={fadeIn} className="contact-description">
            Whether you have questions about our sustainable materials, wholesale opportunities,
            or custom branding for your business, we're here to help you make the eco-friendly switch.
          </motion.p>

          <motion.div variants={fadeIn} className="contact-highlights">
            <div className="highlight-pill">
              <span className="highlight-dot" />
              <span>Response within 24h</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-dot" />
              <span>Eco-Consultation</span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="contact-methods">
            <div className="method-card">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@sustainaura.eco">info@sustainaura.eco</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form Column */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="form-card">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>We'd love to hear from you.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => validateField("name")}
                  onFocus={() => handleFieldFocus("name")}
                  required
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => validateField("email")}
                  onFocus={() => handleFieldFocus("email")}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType" className="form-label">Subject</label>
                <div className="select-wrapper">
                  <select
                    ref={inquiryTypeRef}
                    id="inquiryType"
                    className={`form-select ${errors.inquiryType ? "error" : ""}`}
                    value={formData.inquiryType}
                    onChange={handleChange}
                    onBlur={() => validateField("inquiryType")}
                    onFocus={() => handleFieldFocus("inquiryType")}
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="custom_branding">Custom Branding / Complaint</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="product_question">Product Question</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                {errors.inquiryType && <span className="error-text">{errors.inquiryType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="inquiry" className="form-label">Message</label>
                <textarea
                  ref={inquiryRef}
                  id="inquiry"
                  className={`form-textarea ${errors.inquiry ? "error" : ""}`}
                  placeholder="How can we help you today?"
                  value={formData.inquiry}
                  onChange={handleChange}
                  onBlur={() => validateField("inquiry")}
                  onFocus={() => handleFieldFocus("inquiry")}
                  required
                />
                {errors.inquiry && <span className="error-text">{errors.inquiry}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <span className="loading-spinner" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
