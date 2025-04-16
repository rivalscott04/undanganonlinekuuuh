
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import confetti from "canvas-confetti";

export function HeroEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const handleOpenEnvelope = () => {
    // Trigger confetti effect with wedding-themed colors
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#403E43', '#E5DEFF', '#F6F6F7']
    });
    
    setIsOpen(true);
  };

  return (
    <section className="py-12 md:py-20 px-4 flex flex-col items-center justify-center min-h-[80vh] bg-[#F6F6F7] relative overflow-hidden">
      {/* Sasak Pattern Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <pattern id="sasakPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0 L90 30 L60 60 L30 30 Z" fill="#403E43" opacity="0.3" />
              <circle cx="60" cy="60" r="8" fill="#8A898C" opacity="0.5" />
              <path d="M0 60 Q30 75 60 60 Q30 45 0 60" fill="none" stroke="#8A898C" strokeWidth="1" opacity="0.5" />
              <path d="M60 0 Q75 30 60 60 Q45 30 60 0" fill="none" stroke="#8A898C" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sasakPattern)" />
        </svg>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md z-10"
          >
            {/* Envelope */}
            <div className="relative bg-white rounded-xl shadow-lg border border-[#E5DEFF] overflow-hidden p-8">
              {/* Envelope Flap - Top Triangle */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-24 bg-[#F6F6F7]"
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  zIndex: 5,
                  backgroundImage: `linear-gradient(45deg, rgba(138, 137, 140, 0.1), rgba(64, 62, 67, 0.05))`,
                  borderBottom: "1px dashed rgba(64, 62, 67, 0.2)"
                }}
              />
              
              <div className="pt-20 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-1 bg-[#E5DEFF] rounded-full"></div>
                  <div className="mx-4 text-xl font-medium text-[#403E43] font-serif">Undangan</div>
                  <div className="w-20 h-1 bg-[#E5DEFF] rounded-full"></div>
                </div>
                
                <h1 className="font-serif text-4xl font-bold text-[#403E43] mb-6">
                  Rival & Syahrina
                </h1>
                
                <div className="mb-4 text-sm text-[#8A898C]">
                  Kami mengundang Bapak/Ibu/Saudara/i
                </div>
                <div className="py-3 px-8 mb-6 mx-auto text-lg font-medium border border-[#E5DEFF] inline-block rounded-md text-[#403E43] font-serif">
                  Yth. {guestName}
                </div>
                <div className="text-sm text-[#8A898C] mb-8">
                  Untuk hadir dan memberikan doa restu
                </div>

                <Button 
                  onClick={handleOpenEnvelope}
                  className="px-6 py-6 text-white bg-[#403E43] hover:bg-[#555555] transition-colors font-serif"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Buka Undangan
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 text-center"
          >
            <div className="mb-4 text-xs sm:text-sm tracking-widest text-[#403E43] font-serif">
              UNDANGAN PERNIKAHAN
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-[#403E43] mb-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Rival
              </motion.span>
              <span className="mx-2 md:mx-4">&</span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Syahrina
              </motion.span>
            </h1>
            
            <div className="w-16 sm:w-20 h-1 bg-[#E5DEFF] mx-auto mb-6 rounded-full"></div>
            
            <p className="text-[#8A898C] text-sm sm:text-base max-w-lg mx-auto px-2 font-serif">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
            </p>
            <p className="text-[#403E43] mt-3 italic text-xs sm:text-sm font-serif">— QS. Ar-Rum: 21</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
