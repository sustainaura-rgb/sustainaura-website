import React from 'react';
import '../../styles/MaintenanceCare.css';
import { FaTshirt, FaHandSparkles } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';

const MaintenanceCare = () => {
    const steps = [
        {
            id: 1,
            icon: <MdLocalLaundryService />,
            title: "Step 1",
            desc: "Machine Wash Cold"
        },
        {
            id: 2,
            icon: <FaTshirt />,
            title: "Step 2",
            desc: "Air Dry to Maintain Freshness"
        },
        {
            id: 3,
            icon: <FaHandSparkles />,
            title: "Step 3",
            desc: "Spot Clean for Daily Maintenance"
        }
    ];

    return (
        <section className="maintenance-section">
            <div className="maintenance-content">
                <div className="maintenance-left">
                    <h2 className="maintenance-title">
                        Maintenance & Care
                    </h2>

                    <div className="maintenance-steps-snake">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`snake-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="snake-content-block">
                                    <div className="snake-number">0{index + 1}</div>
                                    <div className="snake-text">
                                        <p className="snake-desc">{step.desc}</p>
                                        <p className="snake-sub">Essential care for longevity</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="maintenance-footer-text">
                        Showcase the ease of maintenance and long-lasting freshness
                    </p>
                </div>

                <div className="maintenance-right">
                    <div className="maintenance-image-wrapper">
                        <img src="/maintenance-care-new.jpg" alt="Maintenance Guide" className="maintenance-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceCare;
