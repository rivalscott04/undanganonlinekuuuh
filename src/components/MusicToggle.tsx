
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    // Create audio element
    const audioElement = new Audio();
    audioElement.loop = true;
    audioElement.preload = 'auto';
    
    // Set audio source with fallbacks
    audioElement.src = '/music/BIW.mp3';
    
    // Log when audio is ready
    audioElement.oncanplaythrough = () => {
      console.log("Audio loaded successfully");
      setAudioLoaded(true);
    };
    
    // Handle errors
    audioElement.onerror = () => {
      console.error("Audio failed to load, trying alternative path");
      // Try alternative paths if the first one fails
      audioElement.src = 'music/BIW.mp3';
      
      // Add a second error handler for the alternative path
      audioElement.onerror = () => {
        console.error("All audio paths failed");
        toast({
          title: "Musik tidak dapat dimuat",
          description: "Silakan klik tombol untuk mencoba lagi",
          variant: "destructive"
        });
      };
    };
    
    audioRef.current = audioElement;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [toast]);
  
  const toggleMusic = () => {
    if (!audioRef.current) {
      toast({
        title: "Musik tidak tersedia",
        description: "Silakan muat ulang halaman",
        variant: "destructive"
      });
      return;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Force reload the audio src before playing to handle potential stale sources
      const currentSrc = audioRef.current.src;
      audioRef.current.src = currentSrc;
      
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("Music playing");
        })
        .catch(error => {
          console.error("Play prevented:", error);
          toast({
            title: "Gagal memutar musik",
            description: "Silakan izinkan pemutaran audio di browser Anda",
            variant: "destructive"
          });
        });
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[100]"
    >
      <Button
        size={isMobile ? "sm" : "icon"}
        variant="outline"
        onClick={toggleMusic}
        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-md border-retirement-muted/30 hover:bg-retirement-light"
        type="button"
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-retirement" />
        ) : (
          <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500" />
        )}
      </Button>
    </motion.div>
  );
}
