import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Smooth transition ke liye
import Loading from "./loader/Loading";
import Heronav from "./navbar/Heronav";
import Footer from "./footer/Footer";

// --- 🚀 LAZY LOADING COMPONENTS ---
const Home = lazy(() => import("./home/Home"));
const Service = lazy(() => import("./services/Service"));
const Protfolio = lazy(() => import("./protfolio/Protfolio"));
const Product = lazy(() => import("./products/Product"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));

// --- 🛠️ SCROLL RESTORATION (Fixed & Integrated) ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Immediate reset to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- 🌀 CUSTOM MINI LOADER (For Suspense Fallback) ---
const PageLoader = () => (
  <div className="h-[100svh] w-full flex items-center justify-center bg-[#0d0b08]">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-[#c9a84c]/20 rounded-full"></div>
      <div className="absolute inset-0 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="bg-[#0d0b08] min-h-screen selection:bg-[#c9a84c] selection:text-black outline-none">
      <AnimatePresence mode="wait">
        {isLoading ? (
          // 1. Initial Branding Loader
          <Loading key="main-loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content" className="flex flex-col min-h-screen">
            {/* 2. Scroll Logic & Navbar */}
            <ScrollToTop />
            <Heronav />

            <main className="flex-grow relative">
              {/* 3. Suspense for Lazy Components */}
              <Suspense fallback={<PageLoader />}>
                {/* key={location.pathname} helps Framer Motion identify route changes */}
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/portfolio" element={<Protfolio />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* 404 Page (Optional but good) */}
                  <Route path="*" element={<div className="h-screen flex items-center justify-center text-white italic">Page Not Found</div>} />
                </Routes>
              </Suspense>
            </main>

            {/* 4. Footer stays at bottom */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;