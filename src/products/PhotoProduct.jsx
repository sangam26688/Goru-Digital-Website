import React, { useRef } from 'react';
import { Sparkles, Image, ShieldCheck, Truck, Clock, Camera, ArrowRight, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, title: "Photo Cushion", desc: "A soft, high-quality cushion printed with your favorite photo.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=60" }, // Image size optimized
  { id: 2, title: "Photo Keychain", desc: "A durable and stylish keychain featuring personalized prints.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60" },
  { id: 3, title: "Photo Frame", desc: "Elegant wooden frames to display your cherished memories.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=60" },
  { id: 4, title: "Photo Album", desc: "A premium hardcover album to preserve wedding memories.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=60" },
  { id: 5, title: "Photo Mug", desc: "Start your day with personalized mugs with your favorite photo.", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=60" },
  { id: 6, title: "Canvas Print", desc: "Large format canvas prints that turn photos into wall art.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=60" },
  { id: 7, title: "Photo Calendar", desc: "A custom 12-month calendar featuring your best photos.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=60" },
];

const PhotoProducts = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Fast Header Entry (No ScrollTrigger needed)
    gsap.from(".header-content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1
    });

    // Efficient Scroll Animations
    const cards = gsap.utils.toArray(".anim-card");
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Jaldi trigger hoga
            toggleActions: "play none none none", // Dobara calculate nahi karega
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#0d0b08] min-h-screen text-amber-50 overflow-hidden relative font-sans">
      
      {/* Optimized Background Glow */}
      <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] bg-[#c9a84c]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 1. Header Section */}
      <div className="px-6 md:px-10 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        <div className="header-content">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
             <div className="h-[1px] w-8 bg-[#c9a84c]"></div>
             <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.4em] font-bold">Goru Studio Collection</span>
          </div>
          <h2 className="text-white font-serif text-5xl md:text-8xl mb-4 tracking-tighter leading-none">
            Custom <span className="text-[#c9a84c] italic font-light font-serif">Products</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed text-center md:text-left">
            Relive your favourite moments with our premium <span className="text-white italic">excellence</span> in custom printing.
          </p>
        </div>
        <div className="header-content bg-[#1e1c18]/50 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 flex items-center gap-3">
          <ShoppingBag className="w-4 h-4 text-[#c9a84c]" />
          <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em]">{products.length} Items</span>
        </div>
      </div>

      {/* 2. WHY CHOOSE US (Optimized Grid) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-32 feature-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck />, title: "Premium Quality", desc: "UV resistant prints." },
            { icon: <Camera />, title: "Studio Retouch", desc: "Pro editing before print." },
            { icon: <Truck />, title: "Safe Delivery", desc: "Secure Yamuna Nagar delivery." },
            { icon: <Clock />, title: "48H Turnaround", desc: "Ready within 2-3 days." }
          ].map((feature, i) => (
            <div key={i} className="anim-card p-8 bg-[#161410] border border-white/5 rounded-2xl group transition-all duration-300 shadow-xl">
              <div className="text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Product Grid (Fast Loading) */}
      <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-10 pb-32">
        {products.map((product) => (
          <div key={product.id} className="anim-card group bg-[#1a1710] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-2xl">
            <div className="h-72 overflow-hidden relative">
              <img
                src={product.img}
                alt={product.title}
                loading="lazy" // Browsers images ko slow load karega jab zaroorat ho
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[9px] text-[#c9a84c] font-black tracking-widest">
                EXCLUSIVE
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-serif text-3xl font-medium tracking-tighter">{product.title}</h3>
                <Image className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{product.desc}</p>
              <button className="group/btn relative w-full overflow-hidden bg-transparent border border-[#c9a84c]/50 text-white py-5 rounded-2xl transition-all duration-300 hover:text-black">
                <div className="absolute inset-0 bg-[#c9a84c] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                <div className="relative z-10 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
                   <span>Inquire Now</span>
                   <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="pb-20 opacity-5 select-none pointer-events-none text-center">
         <h2 className="text-[10rem] md:text-[20rem] font-serif font-bold leading-none tracking-tighter">GORU</h2>
      </div>

    </div>
  );
};

export default PhotoProducts;