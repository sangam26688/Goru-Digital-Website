import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // 1. Heading Animation (Fade in & Scale)
    gsap.from(".about-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // 2. Image Parallax Effect
    gsap.to(".parallax-img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // 3. Staggered Text Reveal (Story Section)
    gsap.from(".story-text p", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".story-text",
        start: "top 80%",
      },
    });

    // 4. Horizontal Scroll or Scale for Features
    const cards = gsap.utils.toArray(".stat-card");
    gsap.from(cards, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 75%",
      },
    });

    // 5. Background Color Change on Scroll
    gsap.to(".about-page", {
      backgroundColor: "#1a1712",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top center",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="about-page bg-[#0d0b08] text-amber-50 overflow-hidden font-serif">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-5 relative">
        <h1 className="about-title text-7xl md:text-[10rem] font-light leading-none tracking-tighter uppercase">
          Capturing <br /> <span className="text-[#c9871a] italic">Legacy</span>
        </h1>
        <p className="mt-10 text-gray-400 font-sans tracking-[0.3em] uppercase text-xs">
          Established since 2010 • Yamuna Nagar
        </p>
        <div className="absolute bottom-10 animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-[#c9871a]"></i>
        </div>
      </section>

      {/* SECTION 2: PARALLAX IMAGE */}
      <section className="parallax-container h-[80vh] w-full overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070" 
          className="parallax-img w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          alt="Studio View"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest border-y border-white/20 py-4">OUR VISION</h2>
        </div>
      </section>

      {/* SECTION 3: THE STORY */}
      <section className="story-section min-h-screen py-32 px-10 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="story-text space-y-10">
          <h3 className="text-[#c9871a] text-sm tracking-[0.5em] uppercase font-sans">The Journey</h3>
          <p className="text-3xl md:text-5xl leading-tight font-light">
            Goru Digital Studio is not just about taking photos. It's about <span className="text-white underline decoration-[#c9871a]">freezing time</span>.
          </p>
          <p className="text-gray-400 font-sans leading-relaxed text-lg">
            Yamuna Nagar se shuru hua ye safar aaj har badi wedding aur event ki jaan ban chuka hai. Humne hazaaron muskurahaton ko apne lens mein utara hai. Hamari team technology aur art ka wo perfect blend use karti hai jo aapki yaadon ko cinematic banati hai.
          </p>
          <div className="pt-10">
            <button className="px-10 py-4 border border-[#c9871a] text-[#c9871a] hover:bg-[#c9871a] hover:text-black transition-all duration-500 uppercase text-xs tracking-widest">
              View Our Work
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[600px] bg-[#1a1712] rounded-tl-[100px] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070" className="w-full h-full object-cover opacity-60" alt="Camera lens" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#c9871a] text-black p-10 hidden md:block">
            <p className="text-5xl font-bold">14+</p>
            <p className="text-xs font-sans tracking-widest uppercase font-bold">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS/FEATURES */}
      <section className="stats-section py-32 bg-black/50 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 max-w-7xl mx-auto">
          <div className="stat-card p-10 border border-white/5 bg-[#12100c]">
            <i className="ri-camera-3-line text-4xl text-[#c9871a] mb-5 block"></i>
            <h4 className="text-4xl font-bold mb-2">500+</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Weddings Shot</p>
          </div>
          <div className="stat-card p-10 border border-white/5 bg-[#12100c]">
            <i className="ri-heart-line text-4xl text-[#c9871a] mb-5 block"></i>
            <h4 className="text-4xl font-bold mb-2">100%</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Happy Clients</p>
          </div>
          <div className="stat-card p-10 border border-white/5 bg-[#12100c]">
            <i className="ri-focus-2-line text-4xl text-[#c9871a] mb-5 block"></i>
            <h4 className="text-4xl font-bold mb-2">4K</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Cinematic Gear</p>
          </div>
          <div className="stat-card p-10 border border-white/5 bg-[#12100c]">
            <i className="ri-award-line text-4xl text-[#c9871a] mb-5 block"></i>
            <h4 className="text-4xl font-bold mb-2">Top</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Studio in HR</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER CALL TO ACTION */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-[#c9871a] text-black">
        <h2 className="text-4xl md:text-6xl font-light text-center mb-10">Ready to write your <br /> story with us?</h2>
        <a href="/contact" className="bg-black text-white px-12 py-5 rounded-full hover:scale-110 transition-all duration-300 font-sans tracking-widest uppercase text-sm">
          Let's Talk
        </a>
      </section>
    </div>
  );
};

export default About;