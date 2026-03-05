import React from "react";
import '../../styles/sustainability.css';

const Sustainability = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Everyday Habits to Live More Sustainably",
    //   image: "/images/eco-habits.jpg",
      description:
        "Small daily changes — from reducing plastic to saving water — can make a huge difference. Discover practical ways to adopt a greener lifestyle.",
      link: "#",
    },
    {
      id: 2,
      title: "The Power of Eco-Friendly Packaging",
    //   image: "/images/eco-packaging.jpg",
      description:
        "Sustainable packaging isn’t just a trend; it’s a necessity. Learn how biodegradable materials help reduce waste and carbon footprint.",
      link: "#",
    },
    {
      id: 3,
      title: "Recycling Myths You Need to Stop Believing",
    //   image: "/images/recycling.jpg",
      description:
        "Not all recycling tips you hear are true! Let’s bust common myths and explore what really makes recycling effective.",
      link: "#",
    },
    {
      id: 4,
      title: "How Businesses Can Go Green Without Losing Profit",
    //   image: "/images/green-business.jpg",
      description:
        "Sustainability and profitability can coexist. Explore how eco-conscious practices can attract customers and reduce costs.",
      link: "#",
    },
  ];

  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <section className="sustain-hero">
        <div className="sustain-hero-overlay">
          <h1>Sustainaura</h1>
          <p>Inspiring a Greener Tomorrow, Today 🌿</p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Insights</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href={blog.link} className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
