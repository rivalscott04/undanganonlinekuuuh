
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

      {/* Corner Floral Elements */}
      <div className="absolute top-0 left-0 w-24 h-24">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M30,0 C30,30 0,30 0,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
          <path d="M50,0 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <path d="M20,0 C20,20 0,20 0,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
          
          {/* Floral element */}
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" fill="#9b87f5" fillOpacity="0.2" />
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" stroke="#9b87f5" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="15" r="1.5" fill="#9b87f5" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M30,0 C30,30 0,30 0,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
          <path d="M50,0 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <path d="M20,0 C20,20 0,20 0,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
          
          {/* Floral element */}
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" fill="#9b87f5" fillOpacity="0.2" />
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" stroke="#9b87f5" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="15" r="1.5" fill="#9b87f5" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-24 h-24 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M30,0 C30,30 0,30 0,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
          <path d="M50,0 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <path d="M20,0 C20,20 0,20 0,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
          
          {/* Floral element */}
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" fill="#9b87f5" fillOpacity="0.2" />
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" stroke="#9b87f5" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="15" r="1.5" fill="#9b87f5" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24 transform scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M30,0 C30,30 0,30 0,30" stroke="#9b87f5" strokeWidth="1" fill="none" />
          <path d="M50,0 C50,50 0,50 0,50" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <path d="M20,0 C20,20 0,20 0,20" stroke="#9b87f5" strokeWidth="1" fill="none" />
          
          {/* Floral element */}
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" fill="#9b87f5" fillOpacity="0.2" />
          <path d="M15,15 C20,10 25,10 25,15 C25,20 20,20 15,15" stroke="#9b87f5" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="15" r="1.5" fill="#9b87f5" />
        </svg>
      </div>

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
        
        {/* Corner Flowers */}
        <div className="absolute top-3 left-3 w-12 h-12 text-[#9b87f5]">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M25,5 C30,5 30,15 25,15 C20,15 20,5 25,5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,15 C20,15 20,25 15,25 C10,25 10,15 15,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,35 C20,35 20,45 15,45 C10,45 10,35 15,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,15 C40,15 40,25 35,25 C30,25 30,15 35,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,35 C40,35 40,45 35,45 C30,45 30,35 35,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M25,45 C30,45 30,35 25,35 C20,35 20,45 25,45 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M45,25 C45,30 35,30 35,25 C35,20 45,20 45,25 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M5,25 C5,30 15,30 15,25 C15,20 5,20 5,25 Z" fill="currentColor" fillOpacity="0.2" />
            <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute top-3 right-3 w-12 h-12 text-[#9b87f5]">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M25,5 C30,5 30,15 25,15 C20,15 20,5 25,5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,15 C20,15 20,25 15,25 C10,25 10,15 15,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,35 C20,35 20,45 15,45 C10,45 10,35 15,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,15 C40,15 40,25 35,25 C30,25 30,15 35,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,35 C40,35 40,45 35,45 C30,45 30,35 35,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M25,45 C30,45 30,35 25,35 C20,35 20,45 25,45 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M45,25 C45,30 35,30 35,25 C35,20 45,20 45,25 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M5,25 C5,30 15,30 15,25 C15,20 5,20 5,25 Z" fill="currentColor" fillOpacity="0.2" />
            <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute bottom-3 left-3 w-12 h-12 text-[#9b87f5]">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M25,5 C30,5 30,15 25,15 C20,15 20,5 25,5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,15 C20,15 20,25 15,25 C10,25 10,15 15,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,35 C20,35 20,45 15,45 C10,45 10,35 15,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,15 C40,15 40,25 35,25 C30,25 30,15 35,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,35 C40,35 40,45 35,45 C30,45 30,35 35,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M25,45 C30,45 30,35 25,35 C20,35 20,45 25,45 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M45,25 C45,30 35,30 35,25 C35,20 45,20 45,25 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M5,25 C5,30 15,30 15,25 C15,20 5,20 5,25 Z" fill="currentColor" fillOpacity="0.2" />
            <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute bottom-3 right-3 w-12 h-12 text-[#9b87f5]">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M25,5 C30,5 30,15 25,15 C20,15 20,5 25,5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,15 C20,15 20,25 15,25 C10,25 10,15 15,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M15,35 C20,35 20,45 15,45 C10,45 10,35 15,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,15 C40,15 40,25 35,25 C30,25 30,15 35,15 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M35,35 C40,35 40,45 35,45 C30,45 30,35 35,35 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M25,45 C30,45 30,35 25,35 C20,35 20,45 25,45 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M45,25 C45,30 35,30 35,25 C35,20 45,20 45,25 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M5,25 C5,30 15,30 15,25 C15,20 5,20 5,25 Z" fill="currentColor" fillOpacity="0.2" />
            <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>
        
        <div className="relative z-10 p-5">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
