
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Check, X, Heart } from "lucide-react";

export function RSVPConfirm() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  
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
    <section id="rsvp" className="py-20 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-retirement-dark mb-4">Konfirmasi Kehadiran</h2>
        <div className="w-20 h-1 bg-retirement-accent/50 mx-auto mb-6 rounded-full"></div>
        
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <p className="text-slate-600 mb-8">
                Kami sangat berharap kehadiranmu di hari bahagia kami, <span className="font-medium text-retirement-dark">{guestName}</span>.
              </p>
              
              <p className="text-slate-700 font-medium mb-8">
                Berkenankah Anda hadir untuk berbagi kebahagiaan bersama kami?
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  onClick={handleAttend}
                  className="flex-1 py-6 bg-retirement hover:bg-retirement-dark"
                >
                  <Check className="mr-2 h-4 w-4" />
                  InsyaAllah, Saya akan Hadir
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleDecline}
                  className="flex-1 py-6 border-retirement-muted text-slate-700 hover:bg-slate-100"
                >
                  <X className="mr-2 h-4 w-4" />
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
              className="py-12 flex justify-center"
            >
              <div className="w-16 h-16 border-t-4 border-retirement rounded-full animate-spin"></div>
            </motion.div>
          )}
          
          {status === "attending" && (
            <motion.div
              key="attending"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 space-y-6"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-retirement/10 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-retirement" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-retirement-dark">
                Terima kasih, kami tunggu di hari bahagia kami!
              </h3>
              
              <p className="text-slate-600">
                Kehadiran Anda akan melengkapi kebahagiaan kami pada hari spesial tersebut
              </p>
            </motion.div>
          )}
          
          {status === "not-attending" && (
            <motion.div
              key="not-attending"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 space-y-6"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-retirement-muted/30 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-slate-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-retirement-dark">
                Terima kasih atas doa dan perhatiannya
              </h3>
              
              <p className="text-slate-600">
                Semoga kita bisa bersua di kesempatan lain
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
