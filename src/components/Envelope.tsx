
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { validateGuest } from "@/utils/guestList";
import { AlertCircle } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isInvited, setIsInvited] = useState<boolean | null>(null);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  
  useEffect(() => {
    // Validate if guest is invited
    if (guestName !== "Tamu Undangan") {
      const isValidGuest = validateGuest(guestName);
      setIsInvited(isValidGuest);
    } else {
      // Default guest is always allowed
      setIsInvited(true);
    }
  }, [guestName]);

  const handleOpenClick = () => {
    setIsOpening(true);
    
    // Add delay to allow animation to complete before callback
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-retirement-light">
      <AnimatePresence>
        {!isOpening ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md border border-slate-200"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-retirement-accent/30 rounded-full"></div>
              <div className="mx-4 text-xl font-medium text-retirement">Undangan</div>
              <div className="w-20 h-1 bg-retirement-accent/30 rounded-full"></div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl font-bold text-retirement-dark mb-6">
                Rival & Syahrina
              </h1>
              <div className="mb-6 text-sm text-slate-500">
                Kami mengundang Bapak/Ibu/Saudara/i
              </div>
              <div className="py-3 px-8 mb-6 mx-auto text-lg font-medium border border-retirement-accent/30 inline-block rounded-md text-retirement-dark">
                Yth. {guestName}
              </div>
              <div className="text-sm text-slate-500 mb-8">
                Untuk hadir dan memberikan doa restu
              </div>
            </div>
            
            {isInvited === false && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">Maaf, Anda tidak terdaftar dalam daftar undangan</p>
              </div>
            )}

            <Button 
              onClick={handleOpenClick}
              disabled={isInvited === false}
              className="w-full py-6 text-white bg-retirement hover:bg-retirement-dark disabled:bg-slate-300"
            >
              Buka Undangan
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 0,
              scale: [1, 1.1, 0],
              rotateY: [0, 180, 180],
              y: [0, 0, -100]
            }}
            transition={{ 
              duration: 1.5,
              times: [0, 0.5, 1]
            }}
            className="w-full max-w-md aspect-[3/4] bg-white rounded-lg shadow-lg border border-slate-200 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-t-4 border-retirement rounded-full animate-spin"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
