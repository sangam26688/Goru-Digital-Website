import React from "react";

const Card = () => {
  return (
    <div className="group w-[370px] bg-[#3a3630] border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-x1 transition-all duration-300 p-3 m-100">
      
      {/* Image Section - Fixed Height */}
      <div className="h-66 overflow-hidden">
        <img
          src="https://5de6b76f35ef976dc4d876fd98b1975b.cdn.bubble.io/cdn-cgi/image/w=768,h=282,f=auto,dpr=2,fit=contain/f1774558641541x387844721443310100/photo-1759274060575-c34db0c396aa%3Fixid%3DM3w2OTk3Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzQ1NTg1ODh8%26ixlib%3Drb-4.1.0"
          alt="Wedding Cinematography"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <div>
          <h1 className="text-xl font-bold text-white  tracking-tight">
            Basic Wedding Cinematography
          </h1>
        </div>

        <div>
          <p className="text-white text-sm leading-relaxed font-light">
            A budget-friendly wedding cinematography package covering ceremony
            highlights in a single edited film.
          </p>
        </div>

        {/* Button Section */}
        <div className="pt-2">
          <button 
            type="button" 
            className="w-full bg-[#f1a52a] text-white py-3 rounded-xl font-medium text-sm hover:bg-blue-600 transition-colors uppercase tracking-widest"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;