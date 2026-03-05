import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/layout/Navbar';
import CardSwiper from './components/common/Categories';
import AboutUs from './About2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FourG from './4G';
import Home from './Home';
import SixG from './6G';
import EightG from './8G';
import AdminPage from "./AdminPage";
import Contact from './Contact';
import Footer from './components/layout/Footer';
import Sustainability from './components/common/Sustainibility';
import About from './About';
import AboutUsPremium from './About2';
import ThicknessProducts from './components/common/Thickness';
import ScrollToTop from './components/common/ScrollToTop';
import FAQSection from './FAQ';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* <About /> */}
      {/* <CardSwiper /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/4G" element={<FourG />} />
        <Route path="/about" element={<AboutUsPremium />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/6G" element={<SixG />} />
        <Route path="/8G" element={<EightG />} />
        <Route path="/faq" element={<FAQSection />} />
        {/* <Route path="/sustainability" element={<Sustainability />}/> */}

        <Route path="/admin" element={<AdminPage />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
