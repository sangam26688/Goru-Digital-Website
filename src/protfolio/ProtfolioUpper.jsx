import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const tabs = ['Photography', 'Wedding Cinematography', 'Pre-Wedding', 'Post-Wedding', 'Event Coverage', 'Candid', 'Video Editing'];

const ProtfolioUpper = () => {
  const [activeTab, setActiveTab] = useState('Photography');

  return (
    <div className="min-h-screen bg-[#0d0b08] flex flex-col items-center justify-center px-6 py-16">

      {/* Pill Badge */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-[#1e1c18]/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-3 flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs tracking-widest uppercase">Our Work</span>
          <Camera className="text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-white font-serif text-4xl md:text-5xl text-center mb-4 max-w-2xl leading-tight">
        A Visual Journey Through Every Cherished Moment
      </h2>

      {/* Subheading */}
      <p className="text-gray-400 text-center text-sm md:text-base max-w-xl leading-relaxed mb-12">
        Browse our curated collection of photography and cinematography — from intimate
        weddings to vibrant events, each image tells a story worth remembering.
      </p>

      {/* Tabs */}
      <div className="bg-[#1a1710] border border-gray-700 rounded-full px-2 py-2 flex flex-wrap gap-1 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab
                ? 'bg-[#c9a84c] text-black font-semibold'
                : 'text-gray-400 hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProtfolioUpper;