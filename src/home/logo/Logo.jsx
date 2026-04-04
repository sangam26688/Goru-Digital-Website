import React from "react";

const Logo = () => {
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {/* Golden Camera Icon Container */}
      <div className="relative">
        <div className="w-11 h-11 bg-[#c9a84c] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] shadow-[0_0_20px_rgba(201,168,76,0.3)]">
          {/* Camera SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        
        {/* Subtle Ring Animation */}
        <div className="absolute inset-0 border border-[#c9a84c] rounded-full scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
      </div>

      {/* Text Branding */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-serif text-xl font-bold tracking-tighter group-hover:text-[#c9a84c] transition-colors duration-300">
          Goru <span className="italic font-light">Digital</span>
        </span>
        <span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[0.4em] mt-1 opacity-80">
          Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;
