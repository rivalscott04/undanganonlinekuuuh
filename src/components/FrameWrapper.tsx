
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, Lamp } from "lucide-react";

interface FrameWrapperProps {
  children: ReactNode;
  className?: string;
  darkBackground?: boolean;
}

export function FrameWrapper({ children, className, darkBackground = false }: FrameWrapperProps) {
  return (
    <div className={cn(
      "relative px-4 py-6 sm:py-8 md:py-12 overflow-hidden", 
      darkBackground ? "bg-[#0A1929] text-white" : "bg-white",
      className
    )}>
      {/* Ornamental Frame - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl">
        <svg viewBox="0 0 1000 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M500 10 L950 10 C950 10 980 10 980 40 C980 70 950 100 920 100 C890 100 880 70 850 70 C820 70 810 100 780 100 C750 100 740 70 710 70 C680 70 670 100 640 100 C610 100 600 70 570 70 C540 70 530 100 500 100 L500 10Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M500 10 L50 10 C50 10 20 10 20 40 C20 70 50 100 80 100 C110 100 120 70 150 70 C180 70 190 100 220 100 C250 100 260 70 290 70 C320 70 330 100 360 100 C390 100 400 70 430 70 C460 70 470 100 500 100 L500 10Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M500 20 L900 20 C900 20 950 20 950 50 C950 80 900 90 880 90 C860 90 850 60 820 60 C790 60 780 90 750 90 C720 90 710 60 680 60 C650 60 640 90 610 90 C580 90 570 60 540 60 C510 60 500 90 500 90 L500 20Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <path 
            d="M500 20 L100 20 C100 20 50 20 50 50 C50 80 100 90 120 90 C140 90 150 60 180 60 C210 60 220 90 250 90 C280 90 290 60 320 60 C350 60 360 90 390 90 C420 90 430 60 460 60 C490 60 500 90 500 90 L500 20Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <circle cx="500" cy="10" r="5" fill="#33C3F0" />
          <circle cx="500" cy="90" r="8" fill="#0FA0CE" />
          {/* Decorative elements */}
          <circle cx="150" cy="70" r="3" fill="#33C3F0" />
          <circle cx="250" cy="70" r="3" fill="#33C3F0" />
          <circle cx="350" cy="70" r="3" fill="#33C3F0" />
          <circle cx="450" cy="70" r="3" fill="#33C3F0" />
          <circle cx="550" cy="70" r="3" fill="#33C3F0" />
          <circle cx="650" cy="70" r="3" fill="#33C3F0" />
          <circle cx="750" cy="70" r="3" fill="#33C3F0" />
          <circle cx="850" cy="70" r="3" fill="#33C3F0" />
        </svg>
      </div>

      {/* Ornamental Frame - Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl rotate-180">
        <svg viewBox="0 0 1000 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M500 10 L950 10 C950 10 980 10 980 40 C980 70 950 100 920 100 C890 100 880 70 850 70 C820 70 810 100 780 100 C750 100 740 70 710 70 C680 70 670 100 640 100 C610 100 600 70 570 70 C540 70 530 100 500 100 L500 10Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M500 10 L50 10 C50 10 20 10 20 40 C20 70 50 100 80 100 C110 100 120 70 150 70 C180 70 190 100 220 100 C250 100 260 70 290 70 C320 70 330 100 360 100 C390 100 400 70 430 70 C460 70 470 100 500 100 L500 10Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M500 20 L900 20 C900 20 950 20 950 50 C950 80 900 90 880 90 C860 90 850 60 820 60 C790 60 780 90 750 90 C720 90 710 60 680 60 C650 60 640 90 610 90 C580 90 570 60 540 60 C510 60 500 90 500 90 L500 20Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <path 
            d="M500 20 L100 20 C100 20 50 20 50 50 C50 80 100 90 120 90 C140 90 150 60 180 60 C210 60 220 90 250 90 C280 90 290 60 320 60 C350 60 360 90 390 90 C420 90 430 60 460 60 C490 60 500 90 500 90 L500 20Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <circle cx="500" cy="10" r="5" fill="#33C3F0" />
          <circle cx="500" cy="90" r="8" fill="#0FA0CE" />
          {/* Decorative elements */}
          <circle cx="150" cy="70" r="3" fill="#33C3F0" />
          <circle cx="250" cy="70" r="3" fill="#33C3F0" />
          <circle cx="350" cy="70" r="3" fill="#33C3F0" />
          <circle cx="450" cy="70" r="3" fill="#33C3F0" />
          <circle cx="550" cy="70" r="3" fill="#33C3F0" />
          <circle cx="650" cy="70" r="3" fill="#33C3F0" />
          <circle cx="750" cy="70" r="3" fill="#33C3F0" />
          <circle cx="850" cy="70" r="3" fill="#33C3F0" />
        </svg>
      </div>

      {/* Left Side Ornament */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] max-h-[500px] hidden md:block">
        <svg viewBox="0 0 100 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path 
            d="M10 300 C10 200 90 180 90 100 C90 20 10 0 10 0 L10 300Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M10 300 C10 400 90 420 90 500 C90 580 10 600 10 600 L10 300Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M20 300 C20 220 80 200 80 120 C80 40 20 20 20 20 L20 300Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <path 
            d="M20 300 C20 380 80 400 80 480 C80 560 20 580 20 580 L20 300Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <circle cx="20" cy="300" r="5" fill="#33C3F0" />
          <circle cx="80" cy="300" r="3" fill="#0FA0CE" />
        </svg>
      </div>

      {/* Right Side Ornament */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] max-h-[500px] hidden md:block">
        <svg viewBox="0 0 100 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path 
            d="M90 300 C90 200 10 180 10 100 C10 20 90 0 90 0 L90 300Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M90 300 C90 400 10 420 10 500 C10 580 90 600 90 600 L90 300Z" 
            fill="none" 
            stroke="#33C3F0" 
            strokeWidth="3"
            className="opacity-80"
          />
          <path 
            d="M80 300 C80 220 20 200 20 120 C20 40 80 20 80 20 L80 300Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <path 
            d="M80 300 C80 380 20 400 20 480 C20 560 80 580 80 580 L80 300Z" 
            fill="none" 
            stroke="#0FA0CE" 
            strokeWidth="2"
          />
          <circle cx="80" cy="300" r="5" fill="#33C3F0" />
          <circle cx="20" cy="300" r="3" fill="#0FA0CE" />
        </svg>
      </div>

      {/* Decorative Lanterns */}
      {darkBackground && (
        <>
          <div className="absolute left-[15%] top-[15%] opacity-70">
            <Lamp size={20} className="text-[#33C3F0]" />
          </div>
          <div className="absolute right-[15%] top-[15%] opacity-70">
            <Lamp size={20} className="text-[#33C3F0]" />
          </div>
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
            <Moon size={24} className="text-white opacity-80" />
          </div>
        </>
      )}

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative mx-auto",
          "border-[1px] border-[#33C3F0]/20",
          darkBackground ? "mt-16 mb-16" : "my-16",
          "max-w-4xl"
        )}
      >
        <div className="absolute inset-[3px] border-[1px] border-[#33C3F0]/30"></div>
        {children}
      </motion.div>
    </div>
  );
}
