import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../home/logo/Logo";
import { Menu, X, Camera } from "lucide-react"; // Icons ke liye

const Heronav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect taaki niche jaane par navbar solid ho jaye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/service" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/5" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* 1. Logo Section */}
        <NavLink className="flex items-center gap-2 group cursor-pointer ">
          <Logo />
          
        </NavLink>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300
                ${isActive ? "text-[#c9871a]" : "text-gray-400 hover:text-white"}
                group
              `}
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9871a] transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* 3. CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button className="hidden lg:flex items-center gap-2 bg-[#c9871a] hover:bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-lg shadow-[#c9871a]/20 active:scale-95">
            <Camera size={14} />
            Book Shoot
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible translate-y-[-20px]"}
      `}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl font-serif italic hover:text-[#c9871a] transition-all"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Heronav;