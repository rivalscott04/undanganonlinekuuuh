
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: string;
}

export function CountdownTimer({ targetDate = "2025-08-08T10:00:00" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="py-8 sm:py-12">
      <h3 className="text-center font-serif text-2xl sm:text-3xl text-retirement-dark mb-6 sm:mb-8">
        Save the Date
      </h3>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto px-4">
        {timeBlocks.map(({ label, value }) => (
          <div key={label} className="text-center">
            <motion.div
              key={value}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-retirement-light/50 border border-retirement-muted/30 rounded-xl p-2 sm:p-4 mb-2"
            >
              <span className="font-serif text-xl sm:text-3xl md:text-4xl text-retirement-dark">
                {String(value).padStart(2, '0')}
              </span>
            </motion.div>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
