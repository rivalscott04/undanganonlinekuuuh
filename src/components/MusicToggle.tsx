
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/music/wedding-song.mp3");
    audioRef.current.loop = true;
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Handle autoplay restrictions
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Autoplay prevented:", error);
          });
      }
      
      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
    
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);
    
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isPlaying]);
  
  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .catch(error => {
          console.error("Play prevented:", error);
        });
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 z-50"
    >
      <Button
        size="icon"
        variant="outline"
        onClick={toggleMusic}
        className="rounded-full h-10 w-10 bg-white shadow-md border-retirement-muted/30 hover:bg-retirement-light"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-retirement" />
        ) : (
          <VolumeX className="h-5 w-5 text-slate-500" />
        )}
      </Button>
    </motion.div>
  );
}
