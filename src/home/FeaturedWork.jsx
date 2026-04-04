import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from 'lucide-react';

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
    // Reveal Animation for each project
    gsap.utils.toArray(".work-item").forEach((item) => {
      gsap.from(item, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#0d0b08] py-32 px-6 md:px-16 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-[#c9a84c] text-xs tracking-[0.6em] uppercase font-bold">Selected Projects</h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif tracking-tighter leading-none">
            Featured <span className="italic font-light text-[#c9a84c]">Works</span>
          </h1>
        </div>
        <button className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors group text-sm uppercase tracking-widest font-bold"><a href="/portfolio">
          View All Projects <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-32">
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className={`work-item flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            {/* Image Container */}
            <div className="w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-2xl relative group cursor-pointer border border-white/5 shadow-2xl">
              <img 
                src={work.img} 
                alt={work.title}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Info Container */}
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex items-center gap-4 text-[#c9a84c] text-[10px] tracking-[0.4em] font-black uppercase">
                <span>{work.category}</span>
                <div className="h-[1px] w-8 bg-[#c9a84c]/40"></div>
                <span>{work.year}</span>
              </div>
              <h3 className="text-white text-4xl md:text-6xl font-serif leading-tight hover:text-[#c9a84c] transition-colors cursor-pointer">
                {work.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                A cinematic masterpiece capturing the essence of pure emotions and legacy. Every frame tells a story that lasts forever.
              </p>
              <div className="pt-4">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all duration-500">
                  <ArrowUpRight size={20} />
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