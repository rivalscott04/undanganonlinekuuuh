
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addToCalendar } from "@/utils/calendar";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: string;
}

export function CountdownTimer({ targetDate = "2025-06-15T08:00:00" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 overflow-hidden">
      {/* Floral Ornaments */}
      <div className="absolute -left-4 top-0 text-retirement/10">
        <Flower2 className="w-24 h-24 sm:w-32 sm:h-32 rotate-45" />
      </div>
      <div className="absolute -right-4 bottom-0 text-retirement/10">
        <Flower2 className="w-24 h-24 sm:w-32 sm:h-32 -rotate-45" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10 sm:mb-12">
          <motion.h3 
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl text-retirement-dark mb-4"
          >
            Save the Date
          </motion.h3>
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-retirement-accent/50 mx-auto mb-6"
          />
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 mb-4"
          >
            15 Juni 2025 - 13 Dzulhijjah 1445 H
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              variant="outline" 
              size="sm"
              className="border-retirement text-retirement hover:bg-retirement hover:text-white"
              onClick={() => addToCalendar({
                title: "Pernikahan Rival & Syahrina",
                description: "Akad Nikah dan Resepsi Pernikahan",
                startDate: targetDate,
                location: "Jakarta, Indonesia"
              })}
            >
              <CalendarPlus className="w-4 h-4 mr-2" />
              Tambahkan ke Kalender
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto"
        >
          {timeBlocks.map(({ label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                key={`${label}-${value}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-retirement-light/70 border border-retirement-muted/30 rounded-xl p-3 sm:p-6 mb-2 shadow-sm"
              >
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-retirement-dark">
                  {String(value).padStart(2, '0')}
                </span>
              </motion.div>
              <span className="text-xs sm:text-sm text-slate-600 font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
