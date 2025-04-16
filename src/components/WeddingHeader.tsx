
import React from 'react';
import { motion } from 'framer-motion';

export function WeddingHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-center py-16 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <pattern id="headerPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0 L90 30 L60 60 L30 30 Z" fill="#445981" opacity="0.3" />
              <circle cx="60" cy="60" r="8" fill="#c8a961" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerPattern)" />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif text-[#445981] mb-8">
          Rival & Syahrina
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-slate-700 italic mb-4 leading-relaxed">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
            istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa 
            tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>
          <p className="text-sm text-[#445981] italic">— QS. Ar-Rum: 21</p>
        </div>
      </div>
    </motion.div>
  );
}
