import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { Menu, X, Camera } from "lucide-react";
import gsap from "gsap";

const Heronav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navRef = useRef(null);

  useEffect(() => {
    // Scroll handling with a threshold to avoid jitter
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/service" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        // Fixed: will-change-transform added to prevent repaint flicker
        className={`fixed top-0 left-0 w-full z-[999] will-change-transform transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-black/95 backdrop-blur-md py-3 shadow-xl translate-y-0"
            : "bg-transparent py-5 md:py-8 translate-y-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="relative z-[1001] transition-transform active:scale-95">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-[11px] uppercase tracking-[0.25em] font-black transition-colors duration-300
                  ${isActive ? "text-[#c9a84c]" : "text-gray-400 hover:text-white"}
                  group
                `}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c9a84c] transition-all duration-500 
                  ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </NavLink>
            ))}
          </div>

          {/* CTA & Toggle */}
          <div className="flex items-center gap-5">
            <button className="hidden sm:flex items-center gap-2 bg-[#c9a84c] text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95">
              <Camera size={14} />
              <span className="hidden xl:inline">Book Now</span>
            </button>

            {/* Mobile Menu Button - Z-index high to stay on top */}
            <button
              className="lg:hidden relative z-[1001] text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} className="text-[#c9a84c]" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- STABLE MOBILE MENU OVERLAY --- */}
      <div
        className={`
          fixed inset-0 bg-black z-[998] lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500
          ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-3xl sm:text-4xl font-serif italic transition-all ${
                  isActive ? "text-[#c9a84c] scale-110" : "text-white/70"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="mt-4 bg-[#c9a84c] text-black px-12 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-90 transition-transform">
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Heronav;