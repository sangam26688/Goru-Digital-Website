import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
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

const App = () => {
  // 1. State banao jo loading handle kare
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {/* 2. Jab tak loading chal rahi hai, Loading component dikhao */}
      {showContent ? (
        /* 3. Loading khatam hone ke baad hi Routes load honge */
        <>
          <Heronav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Protfolio />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
           <Footer />
        </>
      ) : (
        <Loading onComplete={() => setShowContent(true)} />
      )}
    </div>
  );
};

export default App;