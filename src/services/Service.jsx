import React, { useEffect, useRef } from 'react'
import ServiceCards from './ServiceCards'
import gsap from 'gsap'

const Service = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP se animation karenge jo crash nahi hoti
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    // pt-24 mobile ke liye aur md:pt-32 desktop ke liye taaki Nav dikhe
    <div className="min-h-screen bg-[#0d0b08] pt-28 md:pt-40 pb-20 px-6 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Simple Header with GSAP Ref */}
        <header ref={headerRef} className="text-center mb-16 md:mb-24">
          <h2 className="text-[#c9a84c] text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold mb-4">
            Studio Expertise
          </h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tighter uppercase">
            Our <span className="italic font-light text-[#c9a84c]">Services</span>
          </h1>
          <div className="h-[1px] w-20 bg-[#c9a84c]/30 mx-auto mt-8" />
        </header>

        {/* Service Cards Section */}
        <div className="w-full">
          <ServiceCards />
        </div>
      </div>

      {/* Side Text - Decorative */}
      <div className="absolute left-6 bottom-10 hidden lg:block opacity-10">
        <p className="text-white text-[10px] uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180 font-black">
          Goru Digital Studio • 2026
        </p>
      </div>
    </div>
  )
}

export default Service