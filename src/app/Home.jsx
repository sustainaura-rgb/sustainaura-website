"use client";
import CardSwiper from '../components/common/Categories';
// import ContactUs from "./Contact";
import Home1 from '../components/Home1';
import Third from '../components/common/Thirdpart';
import ThicknessProducts from '../components/common/Thickness';
import IdealFor from '../components/common/IdealFor';
import BenefitsSection from '../components/common/BenefitsSection';
// import SEO from "./components/SEO"; // Handled by Next.js Metadata

function Home() {
    return (
        <>
            {/* <SEO ... /> */}
            <Home1 />
            {/* <ThicknessProducts /> */}

            <CardSwiper />
            {/* <ContactUs/> */}
            <Third />
            <IdealFor />
            <BenefitsSection />
        </>
    )
}
export default Home;