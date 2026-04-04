import React from 'react';
import { Star, Sparkles, Crown, Paintbrush } from 'lucide-react';

const tiers = [
  {
    id: 1,
    title: "Basic",
    desc: "Essential coverage for smaller events and intimate sessions. Perfect for those just starting out.",
    icon: <Star className="w-6 h-6" />,
    golden: false,
  },
  {
    id: 2,
    title: "Standard",
    desc: "Our most popular choice — full-day coverage with a curated gallery and highlight reel delivery.",
    icon: <Sparkles className="w-6 h-6" />,
    golden: true,
  },
  {
    id: 3,
    title: "Premium",
    desc: "Cinematic films, drone shots, photo albums, same-day edits, and dedicated creative direction.",
    icon: <Crown className="w-6 h-6" />,
    golden: false,
  },
  {
    id: 4,
    title: "Custom",
    desc: "Build your own package. Mix and match services, coverage hours, and deliverables as you wish.",
    icon: <Paintbrush className="w-6 h-6" />,
    golden: false,
  },
];

const ServicePakage = () => {
  return (
    <div className="min-h-screen bg-[#0d0b08] flex flex-col items-center justify-center px-6 py-16">

      {/* Heading */}
      <h2 className="text-white font-serif text-4xl mb-3 text-center">
        Our Package Tiers
      </h2>
      <p className="text-gray-400 text-center text-sm max-w-lg mb-12 leading-relaxed">
        We offer flexible packages tailored to fit every vision and budget. All packages can be customized to your needs.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full">

        {/* Top 3 cards */}
        {tiers.slice(0, 3).map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer
              border-2 hover:border-[#c9a84c]
              ${tier.golden
                ? 'bg-[#1e1c18] '
                : 'bg-[#1e1c18] border-transparent'
              }`}
          >
            {/* Icon Circle */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center
              ${tier.golden ? 'bg-[#c9a84c] text-black' : 'bg-[#2e2b27] text-gray-400'}`}>
              {tier.icon}
            </div>

            {/* Title */}
            <h3 className={`text-xl font-bold font-serif
              ${tier.golden ? 'text-[#c9a84c]' : 'text-white'}`}>
              {tier.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {tier.desc}
            </p>
          </div>
        ))}

        {/* 4th card - Custom - centered */}
        <div className="md:col-start-2 bg-[#1e1c18] border-2 border-transparent hover:border-[#c9a84c] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[#2e2b27] flex items-center justify-center">
            <Paintbrush className="w-6 h-6 text-[#c9a84c]" />
          </div>
          <h3 className="text-white text-xl font-bold font-serif">Custom</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Build your own package. Mix and match services, coverage hours, and deliverables as you wish.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicePakage;