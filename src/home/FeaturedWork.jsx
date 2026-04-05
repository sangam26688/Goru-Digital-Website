import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const containerRef = useRef();

  const works = [
    {
      id: 1,
      title: "The Royal Union",
      category: "Wedding Film",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      year: "2025"
    },
    {
      id: 2,
      title: "Urban Romance",
      category: "Pre-Wedding",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      year: "2026"
    },
    {
      id: 3,
      title: "Ethereal Glow",
      category: "Candid Series",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      year: "2026"
    }
  ];

  useGSAP(() => {
    // 1. Reveal Animation for each project container
    gsap.utils.toArray(".work-item").forEach((item) => {
      const image = item.querySelector(".work-image-inner");
      
      // Slide up and fade in effect
      gsap.fromTo(item, 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 2. Parallax effect on images while scrolling
      gsap.to(image, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#0d0b08] py-32 px-6 md:px-16 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-bold"
          >
            Selected Projects
          </motion.h2>
          <h1 className="text-white text-6xl md:text-9xl font-serif tracking-tighter leading-none">
            Featured <br />
            <span className="italic font-light text-[#c9a84c]">Works</span>
          </h1>
        </div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/portfolio" className="flex items-center gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors group text-xs uppercase tracking-[0.3em] font-bold border-b border-gray-800 pb-2">
            View All Projects 
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#c9a84c]" />
          </a>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-48">
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className={`work-item flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
          >
            {/* Image Container with Parallax Logic */}
            <div className="w-full md:w-[60%] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm relative group cursor-none">
              <div className="work-image-inner w-full h-[120%] absolute -top-[10%]">
                 <img 
                  src={work.img} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2s] ease-out scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Overlay Label on Hover (Mobile touch support) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-[#c9a84c] text-black px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase">
                    View Story
                  </div>
              </div>
            </div>

            {/* Info Container */}
            <div className="w-full md:w-[40%] space-y-8">
              <div className="flex items-center gap-6 text-[#c9a84c] text-[10px] tracking-[0.5em] font-bold uppercase">
                <span>{work.category}</span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span>{work.year}</span>
              </div>
              
              <h3 className="text-white text-5xl md:text-7xl font-serif leading-[1.1] hover:italic transition-all cursor-pointer">
                {work.title}
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed max-w-sm font-light">
                A cinematic masterpiece capturing the essence of pure emotions and legacy. Every frame tells a story that lasts forever.
              </p>
              
              <div className="pt-6">
                <button className="group flex items-center gap-4 text-white hover:text-[#c9a84c] transition-all">
                  <span className="text-xs uppercase tracking-widest font-bold">Explore Project</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] group-hover:text-black transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;