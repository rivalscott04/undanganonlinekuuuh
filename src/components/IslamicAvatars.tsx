
import React from "react";

export const IslamicAvatars = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-8 mb-8">
      {/* Muslim Man with Peci (Chibi Style) */}
      <div className="w-20 h-20 sm:w-24 sm:h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="#FFD8B4" /> {/* Face */}
          <path d="M50 75 Q 70 75 70 55 Q 70 35 50 35 Q 30 35 30 55 Q 30 75 50 75" fill="#000000" /> {/* Peci */}
          <circle cx="42" cy="52" r="3" fill="#000000" /> {/* Left Eye */}
          <circle cx="58" cy="52" r="3" fill="#000000" /> {/* Right Eye */}
          <path d="M45 62 Q 50 65 55 62" fill="none" stroke="#000000" strokeWidth="2" /> {/* Smile */}
        </svg>
      </div>

      {/* Muslim Woman with Hijab (Chibi Style) */}
      <div className="w-20 h-20 sm:w-24 sm:h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 85 Q 80 85 80 50 Q 80 25 50 25 Q 20 25 20 50 Q 20 85 50 85" fill="#FFB6C1" /> {/* Hijab */}
          <circle cx="50" cy="55" r="25" fill="#FFD8B4" /> {/* Face */}
          <circle cx="42" cy="52" r="3" fill="#000000" /> {/* Left Eye */}
          <circle cx="58" cy="52" r="3" fill="#000000" /> {/* Right Eye */}
          <path d="M45 62 Q 50 65 55 62" fill="none" stroke="#000000" strokeWidth="2" /> {/* Smile */}
        </svg>
      </div>
    </div>
  );
};
