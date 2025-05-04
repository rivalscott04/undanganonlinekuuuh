
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Diamond, Heart, Flower, GiftIcon, Sparkles } from "lucide-react";

interface FrameWrapperProps {
  children: ReactNode;
  className?: string;
}

export function FrameWrapper({ children, className }: FrameWrapperProps) {
  return (
    <div className={cn(
      "relative px-4 py-6 sm:py-8 md:py-12 overflow-hidden bg-gradient-to-b from-[#EDF1F7] to-[#F8FAFC]", 
      className
    )}>
      {/* Top Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl">
        <svg viewBox="0 0 1000 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M500 10 L950 10 C950 10 980 10 980 40 C980 45 970 50 950 50 C930 50 920 30 900 30 C880 30 870 50 850 50 C830 50 820 30 800 30 C780 30 770 50 750 50 C730 50 720 30 700 30 C680 30 670 50 650 50 C630 50 620 30 600 30 C580 30 570 50 550 50 C530 50 520 30 500 30" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-80"
          />
          <path 
            d="M500 10 L50 10 C50 10 20 10 20 40 C20 45 30 50 50 50 C70 50 80 30 100 30 C120 30 130 50 150 50 C170 50 180 30 200 30 C220 30 230 50 250 50 C270 50 280 30 300 30 C320 30 330 50 350 50 C370 50 380 30 400 30 C420 30 430 50 450 50 C470 50 480 30 500 30" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-80"
          />
          <circle cx="500" cy="10" r="4" fill="#33C3F0" />
          <circle cx="500" cy="30" r="3" fill="#33C3F0" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute left-[5%] top-[15%] text-[#33C3F0]/30 hidden md:block">
        <Diamond size={20} />
      </div>
      <div className="absolute right-[5%] top-[20%] text-[#33C3F0]/30 hidden md:block">
        <Diamond size={20} />
      </div>
      <div className="absolute left-[8%] bottom-[15%] text-[#33C3F0]/30 hidden md:block">
        <Heart size={20} />
      </div>
      <div className="absolute right-[8%] bottom-[20%] text-[#33C3F0]/30 hidden md:block">
        <Heart size={20} />
      </div>

      {/* Left Side Ornament */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] max-h-[400px] hidden md:block">
        <svg viewBox="0 0 50 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path 
            d="M10 200 C10 150 40 150 40 100 C40 50 10 50 10 0 L10 200Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-60"
          />
          <path 
            d="M10 200 C10 250 40 250 40 300 C40 350 10 350 10 400 L10 200Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-60"
          />
          <circle cx="10" cy="200" r="3" fill="#33C3F0" />
          <circle cx="40" cy="100" r="2" fill="#33C3F0" className="opacity-60" />
          <circle cx="40" cy="300" r="2" fill="#33C3F0" className="opacity-60" />
        </svg>
      </div>

      {/* Right Side Ornament */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] max-h-[400px] hidden md:block">
        <svg viewBox="0 0 50 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path 
            d="M40 200 C40 150 10 150 10 100 C10 50 40 50 40 0 L40 200Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-60"
          />
          <path 
            d="M40 200 C40 250 10 250 10 300 C10 350 40 350 40 400 L40 200Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-60"
          />
          <circle cx="40" cy="200" r="3" fill="#33C3F0" />
          <circle cx="10" cy="100" r="2" fill="#33C3F0" className="opacity-60" />
          <circle cx="10" cy="300" r="2" fill="#33C3F0" className="opacity-60" />
        </svg>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl">
        <svg viewBox="0 0 1000 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M500 50 L950 50 C950 50 980 50 980 20 C980 15 970 10 950 10 C930 10 920 30 900 30 C880 30 870 10 850 10 C830 10 820 30 800 30 C780 30 770 10 750 10 C730 10 720 30 700 30 C680 30 670 10 650 10 C630 10 620 30 600 30 C580 30 570 10 550 10 C530 10 520 30 500 30" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-80"
          />
          <path 
            d="M500 50 L50 50 C50 50 20 50 20 20 C20 15 30 10 50 10 C70 10 80 30 100 30 C120 30 130 10 150 10 C170 10 180 30 200 30 C220 30 230 10 250 10 C270 10 280 30 300 30 C320 30 330 10 350 10 C370 10 380 30 400 30 C420 30 430 10 450 10 C470 10 480 30 500 30" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="2"
            className="opacity-80"
          />
          <circle cx="500" cy="50" r="4" fill="#33C3F0" />
          <circle cx="500" cy="30" r="3" fill="#33C3F0" />
        </svg>
      </div>

      {/* Islamic Pattern Corners */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-30">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L50,0 L50,50 C22.5,50 0,27.5 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1.5" />
          <path d="M0,0 L35,0 L35,35 C16,35 0,19 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M10,0 C10,10 0,10 0,10" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M20,0 C20,20 0,20 0,20" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M30,0 C30,30 0,30 0,30" fill="none" stroke="#33C3F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 opacity-30 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L50,0 L50,50 C22.5,50 0,27.5 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1.5" />
          <path d="M0,0 L35,0 L35,35 C16,35 0,19 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M10,0 C10,10 0,10 0,10" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M20,0 C20,20 0,20 0,20" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M30,0 C30,30 0,30 0,30" fill="none" stroke="#33C3F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-30 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L50,0 L50,50 C22.5,50 0,27.5 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1.5" />
          <path d="M0,0 L35,0 L35,35 C16,35 0,19 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M10,0 C10,10 0,10 0,10" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M20,0 C20,20 0,20 0,20" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M30,0 C30,30 0,30 0,30" fill="none" stroke="#33C3F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30 transform scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L50,0 L50,50 C22.5,50 0,27.5 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1.5" />
          <path d="M0,0 L35,0 L35,35 C16,35 0,19 0,0 Z" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M10,0 C10,10 0,10 0,10" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M20,0 C20,20 0,20 0,20" fill="none" stroke="#33C3F0" strokeWidth="1" />
          <path d="M30,0 C30,30 0,30 0,30" fill="none" stroke="#33C3F0" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative mx-auto",
          "bg-white/95 backdrop-blur-sm shadow-sm",
          "border-[1px] border-[#33C3F0]/20",
          "my-16",
          "max-w-4xl"
        )}
      >
        {/* Inner Decorative Border */}
        <div className="absolute inset-[5px] border-[1px] border-[#33C3F0]/30"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#33C3F0]/50"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#33C3F0]/50"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#33C3F0]/50"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#33C3F0]/50"></div>
        
        <div className="relative z-10 p-5">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

