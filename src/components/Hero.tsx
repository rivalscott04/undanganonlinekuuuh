
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="py-20 px-4 flex flex-col items-center justify-center min-h-[60vh] bg-retirement-light/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5 bg-repeat z-0"></div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center"
      >
        <div className="mb-4 text-retirement text-sm tracking-widest">UNDANGAN PERNIKAHAN</div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-retirement-dark mb-6">
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
        
        <div className="w-20 h-1 bg-retirement-accent/50 mx-auto mb-6 rounded-full"></div>
        
        <p className="text-slate-600 max-w-lg mx-auto">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
        </p>
        <p className="text-retirement-dark mt-3 italic">— QS. Ar-Rum: 21</p>
      </motion.div>
    </motion.div>
  );
}
