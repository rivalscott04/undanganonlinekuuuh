import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Check, X, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AbsentFlow } from "@/components/AbsentFlow";

export function RSVPConfirm() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  const isMobile = useIsMobile();
  
  const [status, setStatus] = useState<"idle" | "loading" | "attending" | "not-attending">("idle");
  
  const handleAttend = () => {
    setStatus("loading");
    
    // Simulate API delay
    setTimeout(() => {
      setStatus("attending");
      
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1500);
  };
  
  const handleDecline = () => {
    setStatus("loading");
    
    // Simulate API delay
    setTimeout(() => {
      setStatus("not-attending");
    }, 1500);
  };
  
  return (
    <section id="rsvp" className="py-12 md:py-20 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-retirement-dark mb-4">Konfirmasi Kehadiran</h2>
        <div className="w-16 sm:w-20 h-1 bg-retirement-accent/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
        
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 sm:space-y-8"
            >
              <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg text-center">
                Dengan penuh rasa syukur, kami mengundangmu untuk hadir di hari pernikahan kami, <span className="font-medium text-retirement-dark">{guestName}</span>.
              </p>
              
              <p className="text-slate-700 font-medium mb-6 sm:mb-8 text-base sm:text-lg text-center">
                Semoga Allah SWT Tuhan Yang Maha Esa mengizinkan kita bertemu dan bersilaturahmi di momen bahagia ini.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  onClick={handleAttend}
                  size={isMobile ? "default" : "lg"}
                  className="flex-1 py-4 sm:py-6 bg-retirement hover:bg-retirement-dark"
                >
                  <Check className="mr-2 h-4 w-4" />
                  InsyaAllah, Saya akan Hadir
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleDecline}
                  size={isMobile ? "default" : "lg"}
                  className="flex-1 py-4 sm:py-6 border-retirement-muted text-slate-700 hover:bg-retirement-light/30 hover:text-retirement-dark hover:border-retirement-dark transition-colors duration-300 group"
                >
                  <X className="mr-2 h-4 w-4 group-hover:text-retirement-dark" />
                  Mohon maaf, belum bisa hadir
                </Button>
              </div>
            </motion.div>
          )}
          
          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 sm:py-12 flex justify-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-retirement rounded-full animate-spin"></div>
            </motion.div>
          )}
          
          {status === "attending" && (
            <motion.div
              key="attending"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 sm:py-12 space-y-4 sm:space-y-6"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-retirement/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-retirement" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-medium text-retirement-dark text-center">
                MasyaAllah, terima kasih atas kesediaannya untuk hadir.
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base text-center px-4">
                Semoga perjumpaan kita di hari bahagia nanti membawa berkah dan kebaikan untuk kita semua.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base text-center px-4">
                Kami doakan, semoga setiap langkahmu menuju acara diberi kemudahan, kelancaran, dan limpahan rahmat dari Allah SWT.
              </p>
              
              <p className="text-retirement text-base sm:text-lg font-medium text-center">
                Sampai jumpa di hari yang penuh cinta dan doa ✨
              </p>
            </motion.div>
          )}
          
          {status === "not-attending" && (
            <motion.div
              key="not-attending"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-4 w-full"
            >
              <AbsentFlow />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
