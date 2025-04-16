
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const handleOpenClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="relative min-h-screen bg-retirement-light/50">
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5 bg-repeat"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <AnimatePresence>
          {!isOpened ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md p-5 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-1 bg-retirement-accent/30 rounded-full"></div>
                <div className="mx-4 text-base font-medium text-retirement">Undangan</div>
                <div className="w-20 h-1 bg-retirement-accent/30 rounded-full"></div>
              </div>

              <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold text-retirement-dark mb-6">
                  Rival & Syahrina
                </h1>
                <p className="text-sm text-slate-500 mb-4">
                  Kami mengundang Bapak/Ibu/Saudara/i
                </p>
                <div className="inline-block py-3 px-8 mb-6 border border-retirement-accent/30 rounded-md">
                  <span className="text-lg font-medium text-retirement-dark">
                    Yth. {guestName}
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-[320px] mx-auto mb-8">
                <motion.div
                  className="relative aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[url('/lovable-uploads/10494380-8444-4af4-b71e-0f8b92d2a2d5.png')] bg-contain bg-center bg-no-repeat"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center text-retirement text-3xl font-serif">
                      RS
                    </div>
                  </div>
                </motion.div>
              </div>

              <Button 
                onClick={handleOpenClick}
                className="w-full py-6 text-white bg-retirement hover:bg-retirement-dark"
              >
                Buka Undangan
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              {/* This is where the InvitationContent will render */}
              <div className="text-center text-2xl text-retirement-dark">
                Loading invitation content...
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
