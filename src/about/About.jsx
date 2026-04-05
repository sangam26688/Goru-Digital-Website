import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Focus, Award, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

gsap.registerPlugin(ScrollTrigger);

// 1. Optimized Three.js Particles
const BackgroundStars = () => {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#c9871a" size={0.004} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal Heading
    gsap.from(".about-title", {
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // Responsive Parallax
    gsap.to(".parallax-img", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Story Text Entrance
    gsap.from(".story-anim", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="about-page bg-[#0d0b08] text-amber-50 overflow-hidden font-serif relative">
      
      {/* 3D Decor - Fixed Positioning */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <BackgroundStars />
        </Canvas>
      </div>

      {/* SECTION 1: HERO - Dynamic Heights */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.h1 
          initial={{ letterSpacing: "-0.05em" }}
          whileInView={{ letterSpacing: "0.02em" }}
          transition={{ duration: 2 }}
          className="about-title text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-light leading-[0.9] tracking-tighter uppercase"
        >
          Capturing <br /> <span className="text-[#c9871a] italic font-serif">Legacy</span>
        </motion.h1>
        <p className="mt-8 md:mt-12 text-gray-400 font-sans tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-[10px] font-bold">
          Established since 2010 • Yamuna Nagar
        </p>
        <div className="absolute bottom-10 animate-bounce opacity-40 hidden sm:block">
          <ArrowDown size={24} className="text-[#c9871a]" />
        </div>
      </section>

      {/* SECTION 2: PARALLAX IMAGE - Aspect Ratio Fixed */}
      <section className="parallax-container h-[60vh] md:h-[90vh] w-full overflow-hidden relative border-y border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070" 
          className="parallax-img w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
          alt="Studio View"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase border-y border-[#c9871a]/30 py-4 md:py-6 text-center"
          >
            Our Vision
          </motion.h2>
        </div>
      </section>

      {/* SECTION 3: THE STORY - Mobile Grid Fix */}
      <section className="story-section min-h-screen py-20 md:py-40 px-6 sm:px-12 md:px-24 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <div className="space-y-8 md:space-y-12 flex flex-col justify-center">
          <h3 className="story-anim text-[#c9871a] text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans font-black">The Journey</h3>
          <p className="story-anim text-3xl sm:text-4xl md:text-6xl leading-[1.1] font-light tracking-tight">
            Goru Digital is about <span className="text-white italic">freezing time</span> when moments matter.
          </p>
          <p className="story-anim text-gray-500 font-sans leading-relaxed text-base md:text-lg font-light max-w-xl">
            Yamuna Nagar se shuru hua ye safar aaj har badi wedding ki jaan ban chuka hai. Humne hazaaron muskurahaton ko lens mein utara hai. Hum technology aur art ka wo blend use karte hain jo yaadon ko cinematic banati hai.
          </p>
          <div className="story-anim pt-4">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 border border-[#c9871a] text-[#c9871a] uppercase text-[9px] md:text-[10px] tracking-[0.4em] font-bold hover:bg-[#c9871a] hover:text-black transition-all"
            >
              View Our Work
            </motion.button>
          </div>
        </div>
        
        {/* Responsive Image Card */}
        <div className="relative group mt-10 lg:mt-0">
          <div className="w-full h-[450px] sm:h-[600px] md:h-[700px] bg-[#1a1712] rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-[80px] md:rounded-bl-[120px] overflow-hidden border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[2s]" alt="Camera lens" />
          </div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-[#c9871a] text-black p-6 sm:p-10 md:p-12 shadow-2xl"
          >
            <p className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">14+</p>
            <p className="text-[8px] sm:text-[10px] font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase font-black opacity-80 mt-2">Years of Experience</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: STATS - Scrollable/Grid Mix */}
      <section className="stats-section py-20 md:py-40 bg-black/20 relative z-10 border-t border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 px-4 sm:px-10 max-w-7xl mx-auto">
          {[
            { icon: <Camera />, val: "500+", label: "Weddings" },
            { icon: <Heart />, val: "100%", label: "Smiles" },
            { icon: <Focus />, val: "4K", label: "Gear" },
            { icon: <Award />, val: "Top", label: "Studio" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="stat-card p-6 md:p-12 border border-white/5 bg-[#12100c] flex flex-col items-center text-center rounded-sm"
            >
              <div className="text-[#c9871a] mb-4 md:mb-8 scale-75 md:scale-100">{stat.icon}</div>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.val}</h4>
              <p className="text-gray-600 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA - Responsive Text */}
      <section className="py-24 md:h-[70vh] flex flex-col items-center justify-center bg-[#c9871a] text-black relative z-10 px-6">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-light text-center mb-10 md:mb-16 tracking-tighter leading-tight">
          Ready to write your <br /> <span className="italic">story</span> with us?
        </h2>
        <motion.a 
          href="/contact" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-10 md:px-20 py-4 md:py-6 rounded-full font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-black shadow-2xl text-center"
        >
          Let's Talk
        </motion.a>
      </section>
      
    </div>
  );
};

export default About;