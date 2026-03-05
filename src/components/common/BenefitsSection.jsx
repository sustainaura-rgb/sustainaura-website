"use client";

import React from 'react';
import {
  PackageOpen,
  Award,
  Leaf,
  Shield,
  Recycle,
  Droplets,
  ShieldCheck
} from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import '../../styles/BenefitsSection.css';

const BenefitsSection = () => {

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
      description:
        'Our home essentials are certified compostable. They can easily be broken down within 90-180 days'
    },

    {
      id: 'certified',
      icon: <Award size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'CERTIFIED',
      description:
        "We've made sure to go the extra mile to get all our products certified for sustainability."
    },

    {
      id: 'nontoxic',
      icon: (
        <div className="icon-wrapper">
          <Leaf size={52} strokeWidth={1.5} className="primary-icon" />
        </div>
      ),
      title: 'NON TOXIC',
      description:
        'Planet-safe? Yes! But also health-safe! All our products are non-toxic and free from chemicals.'
    },

    {
      id: 'durable',
      icon: <Shield size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'DURABLE',
      description:
        'While sustainability is our motto, we make sure not to compromise on quality.'
    },

    {
      id: 'sustainable',
      icon: <Recycle size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'SUSTAINABLE',
      description:
        'Responsibly sourced materials and ethical production processes for a greener future.'
    },

    {
      id: 'waterresistant',
      icon: <Droplets size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'WATER RESISTANT',
      description:
        'Designed to repel moisture effectively, keeping your bathroom dry and fresh.'
    },

    {
      id: 'rustproof',
      icon: <ShieldCheck size={56} strokeWidth={1.5} className="primary-icon" />,
      title: 'RUSTPROOF',
      description:
        'Equipped with rustproof metal grommets for long-lasting durability in humid conditions.'
    }
  ];

  return (
    <section className="benefits-section">

      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2>Key Benefits</h2>
          <div className="section-subtitle">
            Why Choose Our Products
          </div>
        </div>

        {/* Slider */}
        <div className="benefits-swiper-container">

          <Swiper
            modules={[Autoplay, FreeMode]}

            loop={true}
            grabCursor={true}

            speed={5000}

            slidesPerView={'auto'}
            spaceBetween={24}

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

            /* Responsive Breakpoints */
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
              },

              /* Large Screens */
              1400: {
                slidesPerView: 5,
                spaceBetween: 40,
              },

              1600: {
                slidesPerView: 6,
                spaceBetween: 48,
              },
            }}

            className="benefits-swiper"
          >

            {/* Duplicate for smooth infinite scroll */}
            {[...benefits, ...benefits].map((benefit, index) => (

              <SwiperSlide
                key={`${benefit.id}-${index}`}
                className="benefit-slide"
              >

                <div className="benefit-item">

                  <div className={`benefit-icon ${benefit.id}`}>
                    {benefit.icon}
                  </div>

                  <h3 className="benefit-title">
                    {benefit.title}
                  </h3>

                  <p className="benefit-description">
                    {benefit.description}
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default BenefitsSection;
