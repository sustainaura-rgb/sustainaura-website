import React, { useState } from 'react';
import '../../styles/RealLifeGallery.css';

const RealLifeGallery = () => {
    const [activeId, setActiveId] = useState(1);

    const images = [
        {
            id: 1,
            src: "/real-life/gallery-full.jpg",
            title: "Perfect Fit & Drape",
            desc: "72x72 inch standard size for any bath",
            position: "center"
        },
        {
            id: 2,
            src: "/real-life/gallery-hooks.jpg",
            title: "Easy Installation",
            desc: "Smooth gliding hooks included",
            position: "center"
        },
        {
            id: 3,
            src: "/real-life/gallery-grommets.jpg",
            title: "Rust-Proof Grommets",
            desc: "Durable metal reinforcement",
            position: "center"
        },
        {
            id: 4,
            src: "/real-life/gallery-package.jpg",
            title: "Eco-Friendly Packaging",
            desc: "100% Recyclable materials",
            position: "center"
        },
        {
            id: 5,
            src: "/real-life/gallery-transparency.jpg",
            title: "Crystal Clarity",
            desc: "See-through safety & light",
            position: "center"
        },
        {
            id: 6,
            src: "/real-life/gallery-header.png",
            title: "Reinforced Header",
            desc: "Double-layered for extra strength",
            position: "center"
        }
    ];

    return (
        <section className="real-life-section">
            <div className="real-life-container">
                <div className="real-life-header">
                    <span className="premium-label">In The Wild</span>
                    <h2 className="real-life-title">Real Homes, Real Quality</h2>
                    <p className="real-life-subtitle">
                        Join thousands of happy customers upgrading their daily routine.
                    </p>
                </div>

                <div className="elastic-gallery">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className={`elastic-card ${activeId === img.id ? 'active' : ''}`}
                            onClick={() => setActiveId(img.id)}
                            onMouseEnter={() => setActiveId(img.id)}
                            style={{ backgroundImage: `url(${img.src})` }}
                        >
                            <div className="card-glass-overlay">
                                <div className="card-info">
                                    <h3 className="card-title">{img.title}</h3>
                                    <p className="card-desc">{img.desc}</p>
                                </div>
                                <div className="card-icon-circle">
                                    {activeId === img.id ? '−' : '+'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealLifeGallery;
