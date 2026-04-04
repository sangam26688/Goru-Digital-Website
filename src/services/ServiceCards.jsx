import React, { useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef();
  const titleRef = useRef();

  const myServices = [
    {
      id: 1,
      title: "Basic Wedding Cinematography",
      desc: "Essential cinematic coverage for your big day.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
      category: "Wedding Cinematography",
      tier: "Basic"
    },
    {
      id: 2,
      title: "Basic Pre-Wedding Shoot",
      desc: "Classic pre-wedding photography at beautiful locations.",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500",
      category: "Pre-Wedding Shoots",
      tier: "Basic"
    },
    {
      id: 3,
      title: "Standard Wedding Cinematography",
      desc: "High-quality cinematic film with professional editing.",
      img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500",
      category: "Wedding Cinematography",
      tier: "Standard"
    },
    {
      id: 4,
      title: "Standard Event Coverage",
      desc: "Comprehensive coverage for all your special events.",
      img: "https://5de6b76f35ef976dc4d876fd98b1975b.cdn.bubble.io/cdn-cgi/image/w=192,h=253,f=auto,dpr=1.25,fit=contain/f1774558646171x506006678220811700/photo-1614886204085-cbfe07505e8c%3Fixid%3DM3w2OTk3Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ1NTg1OTB8%26ixlib%3Drb-4.1.0",
      category: "Event Coverage",
      tier: "Standard"
    },
    {
      id: 5,
      title: "Standard Candid Photography",
      desc: "Capturing natural emotions and spontaneous moments.",
      img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500",
      category: "Candid Photography",
      tier: "Standard"
    },
    {
      id: 6,
      title: "Standard Video Editing",
      desc: "Professional post-production for your raw footage.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500",
      category: "Video Editing",
      tier: "Standard"
    },
    {
      id: 7,
      title: "Premium Wedding Cinematography",
      desc: "Elite cinematic storytelling with 4K & Drone.",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500",
      category: "Wedding Cinematography",
      tier: "Premium"
    },
    {
      id: 8,
      title: "Premium Post-Wedding Shoot",
      desc: "Luxury post-wedding sessions in exotic themes.",
      img: "https://images.unsplash.com/photo-1544333346-60832789382b?w=500",
      category: "Post-Wedding Shoots",
      tier: "Premium"
    },
    {
      id: 9,
      title: "Premium Candid Photography",
      desc: "Artistic photography with high-end retouching.",
      img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500",
      category: "Candid Photography",
      tier: "Premium"
    },
    {
      id: 10,
      title: "Premium Video Editing",
      desc: "Cinematic color grading and advanced VFX work.",
      img: "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?w=500",
      category: "Video Editing",
      tier: "Premium"
    },
    {
      id: 11,
      title: "Custom Wedding Cinematography",
      desc: "Personalized film packages built for your needs.",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
      category: "Wedding Cinematography",
      tier: "Custom"
    },
    {
      id: 12,
      title: "Custom Pre-Wedding Shoot",
      desc: "Your vision, our lenses. Fully customized shoots.",
      img: "https://images.unsplash.com/photo-1522673607200-1648832cee33?w=500",
      category: "Pre-Wedding Shoots",
      tier: "Custom"
    },
    {
      id: 13,
      title: "Custom Post-Wedding Shoot",
      desc: "Unique concepts tailored for every couple.",
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500",
      category: "Post-Wedding Shoots",
      tier: "Custom"
    },
    {
      id: 14,
      title: "Custom Event Coverage",
      desc: "Flexible plans for corporate or private gatherings.",
      img: "https://images.unsplash.com/photo-1475721027187-40aeae77c987?w=500",
      category: "Event Coverage",
      tier: "Custom"
    },
    {
      id: 15,
      title: "Custom Candid Photography",
      desc: "Photography styles matched to your preference.",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500",
      category: "Candid Photography",
      tier: "Custom"
    },
    {
      id: 16,
      title: "Custom Video Editing",
      desc: "Bespoke editing styles from reels to full films.",
      img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500",
      category: "Video Editing",
      tier: "Custom"
    },
  ];

  useGSAP(() => {
    // 1. Header Reveal
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    // 2. Cards Entrance Animation
    gsap.from(".service-card", {
      scale: 0.9,
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2, // Ek-ek karke aayenge
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0d0b08] py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <header ref={titleRef} className="max-w-4xl mx-auto text-center mb-20 space-y-4">
        <h2 className="text-[#c9a84c] text-xs md:text-sm tracking-[0.6em] uppercase font-bold">
          Our Specialization
        </h2>
        <h1 className="text-white text-5xl md:text-7xl font-serif tracking-tight leading-none">
          Our <span className="italic font-light text-[#c9a84c]">Services</span>
        </h1>
        <div className="h-[1px] w-24 bg-[#c9a84c]/40 mx-auto mt-6"></div>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-sans leading-relaxed pt-4">
          Choose the perfect package for your special occasion. From luxury weddings to custom cinematic edits.
        </p>
      </header>

      {/* Services Grid */}
      <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {myServices.map((val) => (
          <div key={val.id} className="service-card">
            <Card
              title={val.title}
              desc={val.desc}
              img={val.img}
              category={val.category}
              tier={val.tier}
            />
          </div>
        ))}
      </div>

      {/* Footer Branding for the section */}
      <div className="mt-32 text-center">
        <p className="text-white/10 text-[8rem] md:text-[15rem] font-serif font-black select-none pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 leading-none">
          GORU
        </p>
      </div>

    </div>
  );
};

export default App;