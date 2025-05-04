import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Flower, Flower2 } from "lucide-react";

interface FrameWrapperProps {
  children: ReactNode;
  className?: string;
}

export function FrameWrapper({ children, className }: FrameWrapperProps) {
  return (
    <div className={cn(
      "relative px-4 py-6 sm:py-8 md:py-12 overflow-hidden bg-gradient-to-b from-[#F5F0FF] to-[#FCF4FF]", 
      className
    )}>
      {/* Top Floral Frame */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl">
        <div className="relative h-16">
          {/* Central Flower */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[#9b87f5]">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,5 C42,2 45,0 50,0 C55,0 58,2 60,5 C62,8 60,12 57,15 C54,18 50,20 40,20 C30,20 26,18 23,15 C20,12 18,8 20,5 C22,2 25,0 30,0 C35,0 38,2 40,5 Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M40,5 C42,2 45,0 50,0 C55,0 58,2 60,5 C62,8 60,12 57,15 C54,18 50,20 40,20 C30,20 26,18 23,15 C20,12 18,8 20,5 C22,2 25,0 30,0 C35,0 38,2 40,5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="40" cy="10" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Left Side Floral Pattern */}
          <div className="absolute left-0 top-4 w-[45%] h-10">
            <svg width="100%" height="100%" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M200,20 Q180,5 160,20 Q140,35 120,20 Q100,5 80,20 Q60,35 40,20 Q20,5 0,20" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
              <path d="M200,20 Q170,30 140,20 Q110,10 80,20 Q50,30 20,20 Q10,15 0,20" stroke="#9b87f5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              
              {/* Small flowers along the vine */}
              <circle cx="20" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="60" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="100" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="140" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="180" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Right Side Floral Pattern */}
          <div className="absolute right-0 top-4 w-[45%] h-10">
            <svg width="100%" height="100%" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,20 Q20,5 40,20 Q60,35 80,20 Q100,5 120,20 Q140,35 160,20 Q180,5 200,20" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
              <path d="M0,20 Q30,30 60,20 Q90,10 120,20 Q150,30 180,20 Q190,15 200,20" stroke="#9b87f5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              
              {/* Small flowers along the vine */}
              <circle cx="20" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="60" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="100" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="140" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="180" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Left Side Floral Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="relative h-[400px] w-16">
          <div className="absolute top-0 left-0">
            <Flower className="h-8 w-8 text-[#9b87f5] opacity-40" />
          </div>
          <div className="absolute top-1/4 left-4">
            <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-30" />
          </div>
          <div className="absolute top-2/4 left-1">
            <Flower className="h-10 w-10 text-[#9b87f5] opacity-40" />
          </div>
          <div className="absolute top-3/4 left-4">
            <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-30" />
          </div>
          
          {/* Vertical vine with flowers */}
          <div className="absolute top-0 left-8 h-full w-4">
            <svg width="100%" height="100%" viewBox="0 0 20 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,0 Q5,100 15,200 Q5,300 10,400" stroke="#9b87f5" strokeWidth="1" fill="none" />
              <circle cx="10" cy="80" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="10" cy="160" r="2" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="10" cy="240" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="10" cy="320" r="2" fill="#9b87f5" fillOpacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Right Side Floral Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="relative h-[400px] w-16">
          <div className="absolute top-0 right-0">
            <Flower className="h-8 w-8 text-[#9b87f5] opacity-40" />
          </div>
          <div className="absolute top-1/4 right-4">
            <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-30" />
          </div>
          <div className="absolute top-2/4 right-1">
            <Flower className="h-10 w-10 text-[#9b87f5] opacity-40" />
          </div>
          <div className="absolute top-3/4 right-4">
            <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-30" />
          </div>
          
          {/* Vertical vine with flowers */}
          <div className="absolute top-0 right-8 h-full w-4">
            <svg width="100%" height="100%" viewBox="0 0 20 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,0 Q15,100 5,200 Q15,300 10,400" stroke="#9b87f5" strokeWidth="1" fill="none" />
              <circle cx="10" cy="80" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="10" cy="160" r="2" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="10" cy="240" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="10" cy="320" r="2" fill="#9b87f5" fillOpacity="0.4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Floral Frame */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl">
        <div className="relative h-16">
          {/* Central Flower */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[#9b87f5]">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,35 C42,38 45,40 50,40 C55,40 58,38 60,35 C62,32 60,28 57,25 C54,22 50,20 40,20 C30,20 26,22 23,25 C20,28 18,32 20,35 C22,38 25,40 30,40 C35,40 38,38 40,35 Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M40,35 C42,38 45,40 50,40 C55,40 58,38 60,35 C62,32 60,28 57,25 C54,22 50,20 40,20 C30,20 26,22 23,25 C20,28 18,32 20,35 C22,38 25,40 30,40 C35,40 38,38 40,35 Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="40" cy="30" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Left Side Floral Pattern */}
          <div className="absolute left-0 bottom-4 w-[45%] h-10">
            <svg width="100%" height="100%" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M200,20 Q180,35 160,20 Q140,5 120,20 Q100,35 80,20 Q60,5 40,20 Q20,35 0,20" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
              <path d="M200,20 Q170,10 140,20 Q110,30 80,20 Q50,10 20,20 Q10,25 0,20" stroke="#9b87f5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              
              {/* Small flowers along the vine */}
              <circle cx="20" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="60" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="100" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="140" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="180" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Right Side Floral Pattern */}
          <div className="absolute right-0 bottom-4 w-[45%] h-10">
            <svg width="100%" height="100%" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,20 Q20,35 40,20 Q60,5 80,20 Q100,35 120,20 Q140,5 160,20 Q180,35 200,20" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
              <path d="M0,20 Q30,10 60,20 Q90,30 120,20 Q150,10 180,20 Q190,25 200,20" stroke="#9b87f5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              
              {/* Small flowers along the vine */}
              <circle cx="20" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="60" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="100" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
              <circle cx="140" cy="20" r="2.5" fill="#9b87f5" fillOpacity="0.4" />
              <circle cx="180" cy="20" r="3" fill="#9b87f5" fillOpacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Animated Corner Floral Elements */}
      {/* Top Left Corner */}
      <motion.div 
        className="absolute top-0 left-0 w-24 h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1, 0.95, 1] 
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M30,0 C30,30 0,30 0,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
            <path d="M50,0 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
            <path d="M20,0 C20,20 0,20 0,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
            
            {/* Floral element with animation */}
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              <path d="M25,15 C30,10 35,15 30,20 C25,25 20,20 25,15" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M15,25 C20,20 25,25 20,30 C15,35 10,30 15,25" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M35,25 C40,20 45,25 40,30 C35,35 30,30 35,25" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M25,35 C30,30 35,35 30,40 C25,45 20,40 25,35" fill="#9b87f5" fillOpacity="0.2" />
              <circle cx="25" cy="25" r="3" fill="#9b87f5" />
            </motion.g>
          </svg>
        </motion.div>
      </motion.div>

      {/* Top Right Corner */}
      <motion.div 
        className="absolute top-0 right-0 w-24 h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            rotate: [0, -5, 0, 5, 0],
            scale: [1, 0.95, 1, 1.05, 1] 
          }}
          transition={{ 
            duration: 7, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M70,0 C70,30 100,30 100,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
            <path d="M50,0 C50,50 100,50 100,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
            <path d="M80,0 C80,20 100,20 100,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
            
            {/* Floral element with animation */}
            <motion.g
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              <path d="M75,15 C70,10 65,15 70,20 C75,25 80,20 75,15" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M85,25 C80,20 75,25 80,30 C85,35 90,30 85,25" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M65,25 C60,20 55,25 60,30 C65,35 70,30 65,25" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M75,35 C70,30 65,35 70,40 C75,45 80,40 75,35" fill="#9b87f5" fillOpacity="0.2" />
              <circle cx="75" cy="25" r="3" fill="#9b87f5" />
            </motion.g>
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Left Corner */}
      <motion.div 
        className="absolute bottom-0 left-0 w-24 h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1, 0.95, 1] 
          }}
          transition={{ 
            duration: 9, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M30,100 C30,70 0,70 0,70" stroke="#9b87f5" strokeWidth="1" fill="none" />
            <path d="M50,100 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
            <path d="M20,100 C20,80 0,80 0,80" stroke="#9b87f5" strokeWidth="1" fill="none" />
            
            {/* Floral element with animation */}
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              <path d="M25,85 C30,90 35,85 30,80 C25,75 20,80 25,85" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M15,75 C20,80 25,75 20,70 C15,65 10,70 15,75" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M35,75 C40,80 45,75 40,70 C35,65 30,70 35,75" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M25,65 C30,70 35,65 30,60 C25,55 20,60 25,65" fill="#9b87f5" fillOpacity="0.2" />
              <circle cx="25" cy="75" r="3" fill="#9b87f5" />
            </motion.g>
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Right Corner */}
      <motion.div 
        className="absolute bottom-0 right-0 w-24 h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            rotate: [0, -5, 0, 5, 0],
            scale: [1, 0.95, 1, 1.05, 1] 
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M70,100 C70,70 100,70 100,70" stroke="#9b87f5" strokeWidth="1" fill="none" />
            <path d="M50,100 C50,50 100,50 100,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
            <path d="M80,100 C80,80 100,80 100,80" stroke="#9b87f5" strokeWidth="1" fill="none" />
            
            {/* Floral element with animation */}
            <motion.g
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              <path d="M75,85 C70,90 65,85 70,80 C75,75 80,80 75,85" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M85,75 C80,80 75,75 80,70 C85,65 90,70 85,75" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M65,75 C60,80 55,75 60,70 C65,65 70,70 65,75" fill="#9b87f5" fillOpacity="0.2" />
              <path d="M75,65 C70,70 65,65 70,60 C75,55 80,60 75,65" fill="#9b87f5" fillOpacity="0.2" />
              <circle cx="75" cy="75" r="3" fill="#9b87f5" />
            </motion.g>
          </svg>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative mx-auto",
          "bg-white/90 backdrop-blur-sm shadow-sm",
          "border-[1px] border-[#9b87f5]/20",
          "my-16",
          "max-w-4xl"
        )}
      >
        {/* Inner Decorative Border */}
        <div className="absolute inset-[6px] border-[1px] border-[#9b87f5]/20"></div>
        
        {/* Corner Flowers - Original static ones are replaced by the animated ones above */}
        
        <div className="relative z-10 p-5">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
