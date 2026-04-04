import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loading = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const lineRef = useRef(null);
  const percentRef = useRef(null);
  const contentRef = useRef(null);
  
  // 1. Images ka array (Yahan apni best shoots ki links daal de)
  const bgImages = [
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
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80",

    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=800&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    "https://images.unsplash.com/photo-1544333346-60832789382b?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  
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
    "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=800&q=80",
  
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
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
 
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
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",

  ];
  // 2. State to hold the selected image
  const [selectedBg, setSelectedBg] = useState("");

  useEffect(() => {
    // 3. Random image select karna jab component load ho
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    setSelectedBg(bgImages[randomIndex]);

    const tl = gsap.timeline();

    tl.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(lineRef.current,
      { width: "0%" },
      { width: "100%", duration: 2.5, ease: "power2.inOut" }
    )
    .to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function () {
        if (percentRef.current) {
          percentRef.current.innerText = Math.round(this.targets()[0].val) + "%";
        }
      }
    }, "<")
    .to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => { if (onComplete) onComplete(); }
    });

  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-50 bg-black">

      {/* Dynamic Background Image */}
      {selectedBg && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${selectedBg}')`,
          }}
        />
      )}

      {/* Dark Overlay (Taaki text clear dikhe) */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center h-full gap-5">
        <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] flex items-center justify-center">
          <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <h1 className="text-white font-serif text-4xl">Goru Digital Studio</h1>
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Crafting Your Experience...</p>

        <div className="w-72 h-[2px] bg-white/30 rounded-full overflow-hidden">
          <div ref={lineRef} className="h-full bg-[#c9a84c]" style={{ width: '0%' }} />
        </div>

        <p ref={percentRef} className="text-[#c9a84c] text-sm font-mono">0%</p>
      </div>
    </div>
  );
};

export default Loading;
