// App.jsx
import React from "react";
import Card from "../../services/Car";

const App = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-center text-3xl font-bold mb-10 uppercase tracking-widest">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {myServices.map((val) => (
          <Card
            key={val.id}
            title={val.title}
            desc={val.desc}
            img={val.img}
            category={val.category}
            tier={val.tier}
          />
        ))}
      </div>
    </div>
  );
};

export default App;