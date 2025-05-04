
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Flower, Flower2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("to");
  
  useEffect(() => {
    navigate(`/undangan${slug ? `?to=${encodeURIComponent(slug)}` : ''}`);
  }, [navigate, slug]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F0FF] to-[#FCF4FF] p-4 overflow-hidden">
      <div className="text-center relative">
        {/* Animated Flower at the top */}
        <motion.div 
          className="absolute -top-12 left-1/2 -translate-x-1/2"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1] 
          }}
          transition={{ 
            duration: 3, 
            ease: "easeInOut", 
            repeat: Infinity
          }}
        >
          <Flower className="h-8 w-8 text-[#9b87f5] opacity-60" />
        </motion.div>
        
        {/* Animated Flower top left */}
        <motion.div 
          className="absolute -top-6 -left-8"
          animate={{ 
            rotate: [0, -10, 0, 10, 0],
            y: [0, -5, 0, 5, 0] 
          }}
          transition={{ 
            duration: 4, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-40" />
        </motion.div>
        
        {/* Animated Flower top right */}
        <motion.div 
          className="absolute -top-6 -right-8"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            y: [0, 5, 0, -5, 0] 
          }}
          transition={{ 
            duration: 4.5, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        >
          <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-40" />
        </motion.div>
        
        {/* Floating flowers around the loading spinner */}
        <div className="relative">
          {/* Floating flower 1 */}
          <motion.div 
            className="absolute -left-16 -top-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              x: [0, -20, -40],
              y: [0, -15, -30] 
            }}
            transition={{ 
              duration: 5, 
              ease: "easeInOut", 
              repeat: Infinity,
              delay: 0.2
            }}
          >
            <Flower2 className="h-5 w-5 text-[#9b87f5] opacity-30" />
          </motion.div>
          
          {/* Floating flower 2 */}
          <motion.div 
            className="absolute -right-12 -top-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 0.8, 0],
              x: [0, 15, 30],
              y: [0, -10, -25] 
            }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut", 
              repeat: Infinity,
              delay: 1.5
            }}
          >
            <Flower className="h-4 w-4 text-[#9b87f5] opacity-30" />
          </motion.div>
          
          {/* Loading spinner with subtle pulse animation */}
          <motion.div 
            className="w-8 h-8 border-t-2 border-[#9b87f5] rounded-full mx-auto mb-3"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.2, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            <motion.div 
              className="w-full h-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            />
          </motion.div>
        </div>

        <motion.p 
          className="text-slate-700 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Memuat undangan...
        </motion.p>
        
        {/* Additional decorative floating flowers */}
        <motion.div 
          className="absolute bottom-5 -left-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 0.9, 0],
            x: [0, -10, -20],
            y: [0, 10, 20] 
          }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        >
          <Flower2 className="h-4 w-4 text-[#9b87f5] opacity-30" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 -right-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 0.9, 0],
            x: [0, 10, 20],
            y: [0, 15, 30] 
          }}
          transition={{ 
            duration: 5.5, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <Flower className="h-5 w-5 text-[#9b87f5] opacity-30" />
        </motion.div>
      </div>
    </div>
  );
}
