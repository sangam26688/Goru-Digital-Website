import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./loader/Loading";
import Heronav from "./navbar/Heronav";
import Footer from "./footer/Footer";

// --- 🚀 LAZY LOADING COMPONENTS ---
// Ab ye components tabhi load honge jab inki zaroorat hogi
const Home = lazy(() => import("./home/Home"));
const Service = lazy(() => import("./services/Service"));
const Protfolio = lazy(() => import("./protfolio/Protfolio"));
const Product = lazy(() => import("./products/Product"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));

// --- 🛠️ SCROLL RESTORATION COMPONENT ---
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="bg-[#0d0b08] min-h-screen selection:bg-[#c9a84c] selection:text-black">
      
      {showContent ? (
        <>
          {/* <ScrollToTop />  */}
          <Heronav />
          
          <main className="relative">
            {/* Suspense is zaroori for Lazy Loading */}
            {/* fallback mein tum chaho toh ek chota spinner dikha sakte ho */}
            <Suspense fallback={
              <div className="h-[60vh] flex items-center justify-center bg-[#0d0b08]">
                <div className="w-10 h-10 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/portfolio" element={<Protfolio />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
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