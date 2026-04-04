import React, { useState, useEffect, useRef } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import gsap from 'gsap';

const tabs = ['Photography', 'Wedding Cinematography', 'Pre-Wedding', 'Post-Wedding', 'Event Coverage', 'Candid', 'Video Editing'];

const tabImages = {
  Photography: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80"
  ],
  'Wedding Cinematography': [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80"
  ],
  'Pre-Wedding': [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
  ],
  'Post-Wedding': [
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80"
  ],
  'Event Coverage': [
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
  ],
  'Candid': [
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
  ],
  'Video Editing': [
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?w=800&q=80",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80"
  ]
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Photography');
  const gridRef = useRef(null);

  // GSAP Animation jab tab badle
  useEffect(() => {
    const items = gridRef.current.children;
    gsap.fromTo(items, 
      { opacity: 0, scale: 0.8, y: 30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)" }
    );
  }, [activeTab]);

  return (
    <div className="bg-[#0d0b08] min-h-screen px-6 py-20 flex flex-col items-center">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-[#1a1710] border border-white/5 px-4 py-2 rounded-full mb-6">
          <Camera className="w-4 h-4 text-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.4em] font-bold font-sans">Our Craft</span>
        </div>
        <h2 className="text-white font-serif text-5xl md:text-7xl mb-6 tracking-tighter">
          Visual <span className="text-[#c9a84c] italic font-light">Narratives</span>
        </h2>
      </div>

      {/* Modern Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-sm text-[10px] uppercase tracking-widest transition-all duration-500 border ${
              activeTab === tab
                ? 'bg-[#c9a84c] border-[#c9a84c] text-black font-bold shadow-[0_0_15px_rgba(201,168,76,0.2)]'
                : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Masonry Image Grid */}
      <div 
        ref={gridRef}
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl w-full"
      >
        {tabImages[activeTab].map((img, index) => (
          <div
            key={`${activeTab}-${index}`}
            className="relative group overflow-hidden rounded-sm break-inside-avoid shadow-lg"
          >
            <img
              src={img}
              alt={activeTab}
              loading="lazy"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            {/* Minimal Overlay Detail */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[#c9a84c] text-[9px] uppercase tracking-widest font-bold mb-1">Goru Digital</p>
                  <h4 className="text-white text-md font-serif italic">{activeTab} Series</h4>
                </div>
                <Maximize2 className="w-4 h-4 text-white opacity-50 mb-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-24 text-center">
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6">Ready to create your own story?</p>
        <button className="px-12 py-4 bg-transparent border border-[#c9a84c] text-[#c9a84c] uppercase text-xs tracking-[0.4em] font-bold hover:bg-[#c9a84c] hover:text-black transition-all duration-500">
          Book Your Session
        </button>
      </div>

    </div>
  );
};

export default Portfolio;