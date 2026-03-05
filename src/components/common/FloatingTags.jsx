"use client";
import React, { useState } from "react";
import '../../styles/floatingtags.css';
import { FaLeaf, FaRecycle, FaHandHoldingHeart, FaDollarSign, FaGlobeAmericas, FaLightbulb } from "react-icons/fa";

const tagsData = [
    {
        id: "eco",
        label: "Eco-friendly",
        icon: <FaLeaf />,
        color: "#4CAF50",
        text: "We are a dedicated team of environmental enthusiasts committed to protecting and preserving our planet. At our core, we believe in the power of collective action.",
    },
    {
        id: "recycle",
        label: "Recycling",
        icon: <FaRecycle />,
        color: "#2196F3",
        text: "Our products are designed with the circular economy in mind. We prioritize materials that can be recycled or composted, ensuring nothing goes to waste.",
    },
    {
        id: "sustainable",
        label: "Sustainable",
        icon: <FaHandHoldingHeart />,
        color: "#8BC34A",
        text: "Sustainability is at the heart of our design process. From sourcing raw materials to manufacturing, every step is optimized to reduce our carbon footprint.",
    },
    {
        id: "affordable",
        label: "Affordable",
        icon: <FaDollarSign />,
        color: "#E91E63",
        text: "We believe eco-conscious living shouldn't be a luxury. Our mission is to make high-quality sustainable products accessible to everyone.",
    },
    {
        id: "environmental",
        label: "Environmental",
        icon: <FaGlobeAmericas />,
        color: "#FF9800",
        text: "Our commitment extends beyond products. We actively support environmental initiatives and partner with organizations dedicated to restoring our natural world.",
    },
    {
        id: "inspire",
        label: "Inspire Lifestyle",
        icon: <FaLightbulb />,
        color: "#9C27B0",
        text: "We aim to inspire a shift in perspective. By offering beautiful, functional alternatives, we empower you to embrace a more sustainable lifestyle with ease.",
    },
];

const FloatingTags = () => {
    const [activeTag, setActiveTag] = useState(tagsData[0]);

    return (
        <section className="ft-section">
            <div className="ft-container">
                {/* Floating Tags - Left Side */}
                <button
                    className={`ft-tag pos-1 ${activeTag.id === "eco" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[0])}
                    style={{ "--accent-color": tagsData[0].color }}
                >
                    <span className="ft-icon" style={{ color: tagsData[0].color }}>{tagsData[0].icon}</span>
                    <span className="ft-label">{tagsData[0].label}</span>
                </button>

                <button
                    className={`ft-tag pos-2 ${activeTag.id === "recycle" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[1])}
                    style={{ "--accent-color": tagsData[1].color }}
                >
                    <span className="ft-icon" style={{ color: tagsData[1].color }}>{tagsData[1].icon}</span>
                    <span className="ft-label">{tagsData[1].label}</span>
                </button>

                <button
                    className={`ft-tag pos-3 ${activeTag.id === "sustainable" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[2])}
                    style={{ "--accent-color": tagsData[2].color }}
                >
                    <span className="ft-icon" style={{ color: tagsData[2].color }}>{tagsData[2].icon}</span>
                    <span className="ft-label">{tagsData[2].label}</span>
                </button>


                {/* Center Content */}
                <div className="ft-center-content">
                    <div className="ft-content-card">
                        <p className="ft-description" key={activeTag.id}>
                            {activeTag.text}
                        </p>
                        <button className="ft-learn-more">Learn More About It →</button>
                    </div>
                </div>

                {/* Floating Tags - Right Side */}
                <button
                    className={`ft-tag pos-4 ${activeTag.id === "affordable" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[3])}
                    style={{ "--accent-color": tagsData[3].color }}
                >
                    <span className="ft-label">{tagsData[3].label}</span>
                    <span className="ft-icon" style={{ color: tagsData[3].color }}>{tagsData[3].icon}</span>
                </button>

                <button
                    className={`ft-tag pos-5 ${activeTag.id === "environmental" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[4])}
                    style={{ "--accent-color": tagsData[4].color }}
                >
                    <span className="ft-label">{tagsData[4].label}</span>
                    <span className="ft-icon" style={{ color: tagsData[4].color }}>{tagsData[4].icon}</span>
                </button>

                <button
                    className={`ft-tag pos-6 ${activeTag.id === "inspire" ? "active" : ""}`}
                    onClick={() => setActiveTag(tagsData[5])}
                    style={{ "--accent-color": tagsData[5].color }}
                >
                    <span className="ft-label">{tagsData[5].label}</span>
                    <span className="ft-icon" style={{ color: tagsData[5].color }}>{tagsData[5].icon}</span>
                </button>

            </div>
        </section>
    );
};

export default FloatingTags;
