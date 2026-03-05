"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/categories.css'; 
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const bestSellers = [
  { name: '4G Frosty', img: '/4G-Frosty.jpg', url: '/shop' },
  { name: '4G Clear', img: '/4G-White.jpg', url: '/shop' },
  { name: '6G Solid White', img: '/6G-Solid-White.jpg', url: '/shop' },
  { name: '8G Clear', img: '/8G-Clear.jpg', url: '/shop' },
  { name: '4G Solid White', img: '/4G-Solid-White.jpg', url: '/shop' },
  { name: '6G Frosty', img: '/6G-Frosty.jpg', url: '/shop' },
  { name: '8G Frosty', img: '/8G-Frosty.jpg', url: '/shop' },
  { name: '6G Clear', img: '/6G-Clear.jpg', url: '/shop' },
];

export default function BestSellerCarousel() {
  const router = useRouter();

  const handleProductClick = (url) => {
    router.push(url);
  };

  return (
    <section className="best-sellers-section">
      <div className="section-container">

        <div className="best-sellers-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-gradient">Our Products</span>
            </h2>
            <p className="section-subtitle">
              Premium eco-friendly shower liners
            </p>
          </div>
        </div>

        <div className="carousel-wrapper">
          {/* Nav Buttons */}
          <button className="nav-btn prev-btn" aria-label="Previous products">
            <FaArrowLeft />
          </button>

          <button className="nav-btn next-btn" aria-label="Next products">
            <FaArrowRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            loop={true}
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="best-sellers-swiper"
          >
            {bestSellers.map((product, index) => (
              <SwiperSlide key={product.name + index}>
                <div
                  className="best-seller-card"
                  onClick={() => handleProductClick(product.url)}
                >
                  <div className="bs-image-container">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="best-seller-image"
                    />
                  </div>

                  {/* UPDATED BUTTON STRUCTURE */}
                  <button className="view-product-btn">
                    {product.name}
                    <span className="btn-arrow">
                      <FaArrowRight size={12} />
                    </span>
                  </button>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}