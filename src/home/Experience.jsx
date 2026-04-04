import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // 1. Numbers Counting Animation
    const items = gsap.utils.toArray(".stat-number");
    
    items.forEach((item) => {
      const targetValue = parseInt(item.getAttribute("data-target"));
      
      gsap.fromTo(item, 
        { innerText: 0 }, 
        {
          innerText: targetValue,
          duration: 2,
          snap: { innerText: 1 }, // Integers mein count karne ke liye
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // Jab 90% screen par aaye tab shuru ho
          }
        }
      );
    });

    // 2. Text Reveal Animation (Left side)
    gsap.from(".exp-text", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".exp-text",
        start: "top 85%",
      }
    });

    // 3. Stats Border Animation (Right side)
    gsap.from(".stat-box", {
      scaleY: 0,
      transformOrigin: "top",
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".stat-box",
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-10 bg-[#0d0b08] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="exp-text text-[#c9a84c] text-[10px] md:text-xs tracking-[0.5em] uppercase font-black">
            The Experience
          </h2>
          <h3 className="exp-text text-white text-4xl md:text-6xl font-serif leading-tight">
            We don't just take photos, <br className="hidden md:block"/> 
            we curate <span className="italic text-[#c9a84c] font-light">Emotions</span>.
          </h3>
          <p className="exp-text text-gray-500 font-sans leading-relaxed text-base md:text-lg max-w-md">
            Yamuna Nagar based luxury studio specializing in cinematic wedding films and high-end portraits. 
            <span className="text-white/80 block mt-4 italic font-serif">"Har shot mein ek kahani hai."</span>
          </p>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          
          {/* Stat 1 */}
          <div className="stat-box border-l border-[#c9a84c]/50 pl-5 md:pl-8 py-2 md:py-6 group">
            <h4 className="text-white text-4xl md:text-6xl font-bold mb-2 font-sans group-hover:text-[#c9a84c] transition-colors duration-500">
              <span className="stat-number" data-target="500">0</span>+
            </h4>
            <p className="text-gray-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold">
              Weddings Covered
            </p>
          </div>

          {/* Stat 2 */}
          <div className="stat-box border-l border-[#c9a84c]/50 pl-5 md:pl-8 py-2 md:py-6 group">
            <h4 className="text-white text-4xl md:text-6xl font-bold mb-2 font-sans group-hover:text-[#c9a84c] transition-colors duration-500">
              <span className="stat-number" data-target="14">0</span>+
            </h4>
            <p className="text-gray-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold">
              Years Experience
            </p>
          </div>

          {/* Stat 3 */}
          <div className="stat-box border-l border-[#c9a84c]/50 pl-5 md:pl-8 py-2 md:py-6 group">
            <h4 className="text-white text-4xl md:text-6xl font-bold mb-2 font-sans group-hover:text-[#c9a84c] transition-colors duration-500">
              <span className="stat-number" data-target="100">0</span>%
            </h4>
            <p className="text-gray-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold">
              Client Smiles
            </p>
          </div>

          {/* Stat 4 */}
          <div className="stat-box border-l border-[#c9a84c]/50 pl-5 md:pl-8 py-2 md:py-6 group">
            <h4 className="text-white text-4xl md:text-6xl font-bold mb-2 font-sans group-hover:text-[#c9a84c] transition-colors duration-500">
              4K
            </h4>
            <p className="text-gray-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold">
              Cinematic Gear
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;