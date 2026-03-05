import React from "react";
import Link from 'next/link';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="sa-footer">
      <div className="sa-footer-inner">
        {/* Brand */}
        <div className="sa-footer-col sa-footer-brand">
          <h3 className="sa-footer-logo">SustainAura</h3>
          <p className="sa-footer-tagline">
            Eco-conscious shower curtain liners crafted for healthier, greener bathrooms.
          </p>
          <div className="sa-footer-contact">
            <a
              href="mailto:info@sustainaura.eco"
              className="sa-footer-chip"
            >
              <span className="sa-footer-chip-label">Mail</span>
              <span className="sa-footer-chip-value">info@sustainaura.eco</span>
            </a>
            {/* <a
              href="https://a.co/d/1gs8ryW"
              target="_blank"
              rel="noreferrer"
              className="sa-footer-chip sa-footer-chip-amazon"
            >
              <span className="sa-footer-chip-value">View on Amazon</span>
            </a> */}
          </div>
        </div>

        {/* Links */}
        <div className="sa-footer-col">
          <h4 className="sa-footer-heading">Explore</h4>
          <ul className="sa-footer-links">
            <li>
              <Link href="/4G">Products</Link>
            </li>
            <li>
              <a href="/#thickness">Choose Your Thickness</a>
            </li>
            <li>
              <a href="/#why-sustainaura">Why SustainAura</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="sa-footer-col">
          <h4 className="sa-footer-heading">Support</h4>
          <ul className="sa-footer-links">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link href="/about">About Us</Link>
            </li> */}
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="sa-footer-bottom">
        <p>
          © 2025{" "}
          <span className="sa-footer-brand-highlight">
            SustainAura Official
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
