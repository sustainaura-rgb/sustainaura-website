"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../styles/navbar.css';

import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShopClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Left Logo */}
        <div className="navbar-left">
          <Link href="/">
            <Image src="/SustainAura.png" alt="Logo" className="logo" width={200} height={50} priority />
          </Link>
        </div>

        {/* Center Image */}
        <div className="navbar-center-image">
          <Link href="/">
            <Image src="/finalsustain.png" alt="Middle" className="middle-image" width={100} height={100} priority />
          </Link>

        </div>

        {/* Right Links */}
        <div className="navbar-right">
          <Link href="/">Home</Link>
          <Link href="/shop" onClick={handleShopClick}>Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Hamburger for mobile */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`mobile-menu ${scrolled ? "scrolled" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={handleShopClick}>Shop</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
