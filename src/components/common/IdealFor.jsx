"use client";
import React from 'react';
import '../../styles/IdealFor.css';

const IdealFor = () => {
  // Updated Ideal For cards with images (exact same as product template)
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
    <section className="ideal-for-section">
      <div className="container">
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
  );
};

export default IdealFor;