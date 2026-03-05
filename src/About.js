import React from "react"; 
import './styles/About.css';
import { FaLeaf, FaWater, FaRecycle, FaBath, FaBalanceScale, FaLock, FaHome } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section with background and text */}
      <div className="about-hero-image">
        <div className="hero-overlay">
          {/* <h1 className="hero-heading">About Us</h1> */}
          <p className="hero-description">
            At <span className="brand">Sustain Aura</span>, we believe your home should be 
            as kind to the planet as it is to you. Our shower curtain liners are crafted 
            from durable, eco-conscious materials designed to last—reducing waste and 
            promoting sustainability.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="about-features" id="about">
        <h2 className="features-heading">Why Choose Sustain Aura?</h2>
        <div className="about-cards">
          <div className="about-card">
            <FaLeaf className="card-icon" />
            <h4>Eco-Conscious Choice</h4>
            <p>♻️ Made with 30% post-consumer recycled PEVA, a sustainable PVC-free alternative that’s odor-free and safe for your home & planet.</p>
          </div>

          <div className="about-card">
            <FaWater className="card-icon" />
            <h4>Waterproof & Quick-Dry</h4>
            <p>💧 Specially designed to repel water and dry quickly, helping keep your bathroom cleaner and fresher with less maintenance.</p>
          </div>

          <div className="about-card">
            <FaLock className="card-icon" />
            <h4>Rustproof & Durable</h4>
            <p>🔒 Equipped with 12 rustproof grommets and strong material, ensuring long-lasting use without tearing or wear.</p>
          </div>

          <div className="about-card">
            <FaBalanceScale className="card-icon" />
            <h4>Secure Weighted Bottom</h4>
            <p>⚖️ Three strong magnets at the bottom keep the liner in place, preventing billowing and clinging in showers or tubs.</p>
          </div>

          <div className="about-card">
            <FaBath className="card-icon" />
            <h4>Universal Fit</h4>
            <p>🛁 Sized at 72” x 72” to fit most showers and bathtubs. Perfect for minimalist bathrooms, rentals, and RVs.</p>
          </div>

          <div className="about-card">
            <FaHome className="card-icon" />
            <h4>Perfect For Any Bathroom</h4>
            <p>🏡 Ideal for eco-conscious households, rental properties, or RV bathrooms—bringing a fresh, minimalist upgrade to your daily shower.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
