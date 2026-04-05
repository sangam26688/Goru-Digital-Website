import React, { useRef } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Card = ({ title, desc, img, category, tier }) => {
  const cardRef = useRef(null);

  // 1. Framer Motion: Magnetic/Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 2. GSAP: Subtle Entrance Animation
  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 95%",
      }
    });
  }, { scope: cardRef });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-[#161412] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(201,168,76,0.3)] flex flex-col h-full min-h-[500px] md:min-h-[550px] w-full"
    >
      
      {/* 3. Image Container with 3D Pop Effect */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="relative p-3 h-64 md:h-80 overflow-hidden shrink-0"
      >
        <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
          <motion.img 
            src={img} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" 
          />
          
          {/* Top Tier Badge */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl z-20">
            <Zap size={10} className="text-[#c9a84c] fill-[#c9a84c]" />
            <span className="text-white text-[9px] font-black uppercase tracking-[0.2em]">
              {tier}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Content Section */}
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="p-7 md:p-9 flex flex-col flex-grow"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]"></span>
          </span>
          <span className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold">
            {category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight group-hover:text-[#c9a84c] transition-colors duration-500">
          {title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans font-light flex-grow line-clamp-3 group-hover:text-gray-400 transition-colors">
          {desc}
        </p>

        {/* 5. Interactive Button */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="group/btn relative w-full mt-8 bg-transparent border border-white/10 text-white py-4 md:py-5 rounded-2xl font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:border-[#c9a84c]"
        >
          <div className="absolute inset-0 bg-[#c9a84c] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-black transition-colors duration-500">
            <span>Enquire Now</span>
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
          </div>
        </motion.button>
      </div>

      {/* Subtle Background Glow Accent */}
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#c9a84c]/10 blur-[80px] rounded-full group-hover:bg-[#c9a84c]/20 transition-all duration-700 -z-10"></div>
    </motion.div>
  );
};

export default Card;