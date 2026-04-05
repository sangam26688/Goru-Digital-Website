import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// 1. Three.js Floating Particles (Luxury Background)
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#c9a84c" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Experience = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Numbers Counting Animation
    const items = gsap.utils.toArray(".stat-number");
    items.forEach((item) => {
      const targetValue = parseInt(item.getAttribute("data-target"));
      gsap.fromTo(item, 
        { innerText: 0 }, 
        {
          innerText: targetValue,
          duration: 2.5,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        }
      );
    });

    // Vertical Border Reveal
    gsap.from(".stat-border", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".stat-box",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 px-6 md:px-16 bg-[#0a0908] border-t border-white/5 overflow-hidden">
      
      {/* Three.js Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content (Framer Motion) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block border-b border-[#c9a84c]/30 pb-2">
            <h2 className="text-[#c9a84c] text-[10px] md:text-xs tracking-[0.6em] uppercase font-black">
              The Legacy
            </h2>
          </div>
          <h3 className="text-white text-5xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
            We don't just click, <br /> 
            we <span className="italic text-[#c9a84c] font-light">immortalize</span>.
          </h3>
          <p className="text-gray-500 font-sans leading-relaxed text-lg max-w-md font-light">
            Yamuna Nagar's premier luxury studio. We capture the whispers, the tears, and the unscripted joy.
            <span className="text-[#c9a84c]/80 block mt-6 italic font-serif text-xl">"Har shot mein ek kahani hai."</span>
          </p>
        </motion.div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          
          {[
            { label: "Weddings Covered", target: "500", suffix: "+" },
            { label: "Years Experience", target: "14", suffix: "+" },
            { label: "Client Smiles", target: "100", suffix: "%" },
            { label: "Cinematic Gear", target: "4", suffix: "K" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="stat-box relative pl-8 py-6 group"
            >
              {/* GSAP Animated Border */}
              <div className="stat-border absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#c9a84c] to-transparent opacity-50" />
              
              <h4 className="text-white text-5xl md:text-6xl font-bold mb-3 font-sans transition-colors duration-500 group-hover:text-[#c9a84c]">
                {stat.target === "4" ? "4" : <span className="stat-number" data-target={stat.target}>0</span>}
                {stat.suffix}
              </h4>
              <p className="text-gray-600 uppercase text-[10px] tracking-[0.4em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;