import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Heroimg = () => {
  const container = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Smooth Cinematic Zoom-In (Image entry)
    tl.fromTo(imageRef.current, 
      { scale: 1.4, filter: "brightness(0.2)" }, 
      { scale: 1, filter: "brightness(0.7)", duration: 3, ease: "expo.out" }
    );

    // 2. Heading Reveal (Staggered animation)
    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out"
    }, "-=2");

    // 3. Subtext & Line fade-in
    tl.from(".hero-subtext", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    // 4. Floating Scroll Icon
    gsap.to(".scroll-bar", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative h-[100svh] w-full overflow-hidden bg-black font-sans">
      
      {/* 1. Background Image (Fully Responsive) */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1768611260442-6c743f107d69?ixid=M3w2OTk3Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ1NTg0ODl8&ixlib=rb-4.1.0"
          alt="Goru Digital Hero" 
          className="w-full h-full object-cover object-[center_30%] md:object-center"
        />
        {/* Dynamic Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. Main Content Area */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Sub-headline */}
        <div className="overflow-hidden mb-4">
          <p className="hero-subtext text-[#c9a84c] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">
            Yamuna Nagar • Est. 2010
          </p>
        </div>

        {/* Main Headline (Responsive Text Sizes) */}
        <h1 className="hero-title text-white font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase flex flex-col md:flex-row items-center gap-0 md:gap-8">
          <span className="inline-block">Goru</span>
          <span className="inline-block italic font-light text-[#c9a84c] md:text-white">Digital</span>
        </h1>

        {/* Description */}
        <div className="hero-subtext mt-8 md:mt-12 max-w-lg md:max-w-2xl">
          <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase leading-relaxed font-light">
            Capturing the essence of your <span className="text-white">most precious moments</span> <br className="hidden md:block" /> 
            with a touch of cinematic elegance and raw emotions.
          </p>
          
          {/* Decorative Gold Line */}
          <div className="mt-8 h-[1px] w-24 bg-[#c9a84c]/50 mx-auto" />
        </div>
      </div>

      {/* 3. Responsive Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[#c9a84c] text-[9px] uppercase tracking-[0.4em] font-bold opacity-60">Explore</span>
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-[#c9a84c] to-transparent">
          <div className="scroll-bar w-full h-4 bg-white/20" />
        </div>
      </div>

      {/* Side Accents (Desktop Only) */}
      <div className="absolute left-10 bottom-10 hidden lg:block">
        <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-lr] rotate-180 font-bold">
          Cinematic Photography Studio
        </p>
      </div>

    </div>
  );
};

export default Heroimg;