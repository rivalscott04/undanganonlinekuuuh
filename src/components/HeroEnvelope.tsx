import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import confetti from "canvas-confetti";

interface HeroEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function HeroEnvelope({ isOpen, onOpen }: HeroEnvelopeProps) {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const handleOpenEnvelope = () => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#445981', '#c8a961', '#E5EAF2']
    });
    
    onOpen();
  };

  return (
    <section className={`
      fixed inset-0 z-[999] 
      ${isOpen ? 'pointer-events-none' : 'bg-white'}
      transition-colors duration-500
    `}>
      <div className="py-12 md:py-20 px-4 flex flex-col items-center justify-center min-h-screen bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <svg
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <pattern id="elegantPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60 0 L90 30 L60 60 L30 30 Z" fill="#445981" opacity="0.3" />
                <circle cx="60" cy="60" r="8" fill="#c8a961" opacity="0.5" />
                <path d="M0 60 Q30 75 60 60 Q30 45 0 60" fill="none" stroke="#445981" strokeWidth="1" opacity="0.5" />
                <path d="M60 0 Q75 30 60 60 Q45 30 60 0" fill="none" stroke="#445981" strokeWidth="1" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegantPattern)" />
          </svg>
        </div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-md z-10"
            >
              <div className="relative bg-white rounded-xl shadow-lg border border-[#445981]/10 overflow-hidden p-8">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-24 bg-[#E5EAF2]"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    zIndex: 5,
                    backgroundImage: "linear-gradient(45deg, rgba(68, 89, 129, 0.1), rgba(200, 169, 97, 0.05))",
                    borderBottom: "1px dashed rgba(68, 89, 129, 0.2)"
                  }}
                />
                
                <div className="pt-20 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-[1px] bg-[#445981]/20 rounded-full"></div>
                    <div className="mx-4 text-xl font-medium text-[#445981]">Undangan</div>
                    <div className="w-20 h-[1px] bg-[#445981]/20 rounded-full"></div>
                  </div>
                  
                  <h1 className="font-serif text-4xl font-bold text-[#445981] mb-6">
                    Rival & Syahrina
                  </h1>
                  
                  <div className="mb-4 text-sm text-slate-600">
                    Kami mengundang Bapak/Ibu/Saudara/i
                  </div>
                  <div className="py-3 px-8 mb-6 mx-auto text-lg font-medium border border-[#445981]/20 inline-block rounded-md text-[#445981]">
                    Yth. {guestName}
                  </div>
                  <div className="text-sm text-slate-600 mb-8">
                    Untuk hadir dan memberikan doa restu
                  </div>

                  <Button 
                    onClick={handleOpenEnvelope}
                    className="px-6 py-6 text-white bg-[#445981] hover:bg-[#3a496f] transition-colors shadow-md"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Buka Undangan
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
