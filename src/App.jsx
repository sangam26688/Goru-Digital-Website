import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"; // useLocation add kiya
import * as lucide from 'lucide-react';

import Loading from "./loader/Loading";
import Home from "./home/Home";
import Service from "./services/Service";
import Heronav from "./navbar/Heronav";
import Footer from "./footer/Footer";
import Protfolio from "./protfolio/Protfolio";
import Product from "./products/Product";
import About from "./about/About";
import Contact from "./contact/Contact";

// --- 🛠️ SCROLL RESTORATION COMPONENT ---
// Yeh component har page change par scroll ko wapas 0 (top) kar dega
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  // Loading state
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="bg-[#0d0b08] min-h-screen selection:bg-[#c9a84c] selection:text-black">
      
      {showContent ? (
        <>
          {/* Magic Component: Har click ke baad page starting se dikhega */}
          <ScrollToTop /> 
          
          <Heronav />
          
          {/* Main Content Area */}
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/portfolio" element={<Protfolio />} />
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </>
      ) : (
        <Loading onComplete={() => setShowContent(true)} />
      )}
    </div>
  );
};

export default App;