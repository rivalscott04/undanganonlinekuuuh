
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    console.log("Setting up audio element");
    
    // Create audio element
    const audio = new Audio();
    audio.loop = true;
    
    // Set up event listeners
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio can play through");
    });
    
    audio.addEventListener("error", (e) => {
      console.error("Audio element error:", e);
      toast({
        title: "Audio Error",
        description: "Could not load audio file.",
        variant: "destructive"
      });
    });
    
    // Try multiple sources - important for production vs development environments
    const possibleSources = [
      "/music/wedding-song.mp3",
      "music/wedding-song.mp3",
      "/music/BIW.mp3",
      "music/BIW.mp3",
      // Add relative path for Vite dev server
      "../music/wedding-song.mp3",
      "../public/music/wedding-song.mp3"
    ];
    
    // Try to load each source until one works
    const trySource = (index: number) => {
      if (index >= possibleSources.length) {
        console.error("All audio sources failed to load");
        return;
      }
      
      const source = possibleSources[index];
      console.log(`Trying audio source: ${source}`);
      
      audio.src = source;
      
      // If this source fails, try the next one
      audio.onerror = () => {
        console.log(`Source failed: ${source}, trying next...`);
        trySource(index + 1);
      };
    };
    
    // Start trying sources
    trySource(0);
    
    // Store reference
    audioRef.current = audio;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [toast]);
  
  const toggleMusic = () => {
    console.log("Toggle button clicked");
    
    if (!audioRef.current) {
      console.error("Audio element not available");
      toast({
        title: "Musik tidak tersedia",
        description: "Silakan muat ulang halaman",
        variant: "destructive"
      });
      return;
    }
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log("Music paused");
      } else {
        // Force load if needed
        if (audioRef.current.readyState === 0) {
          audioRef.current.load();
        }
        
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Music playing successfully");
              
              // Show success toast
              toast({
                title: "Musik diputar",
                description: "Nikmati lagu pernikahan kami",
              });
            })
            .catch(error => {
              console.error("Play prevented:", error);
              
              // User interaction error
              if (error.name === "NotAllowedError") {
                toast({
                  title: "Interaksi Pengguna Diperlukan",
                  description: "Silakan klik lagi untuk memutar musik",
                  variant: "destructive"
                });
              } else {
                toast({
                  title: "Gagal memutar musik",
                  description: error.message || "Format audio mungkin tidak didukung browser Anda",
                  variant: "destructive"
                });
              }
            });
        }
      }
    } catch (error: any) {
      console.error("Error in toggle music:", error);
      toast({
        title: "Terjadi kesalahan",
        description: error.message || "Tidak dapat memutar atau menjeda musik",
        variant: "destructive"
      });
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[9999]"
    >
      <Button
        size={isMobile ? "sm" : "icon"}
        variant="outline"
        onClick={toggleMusic}
        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-md border-retirement-muted/30 hover:bg-retirement-light cursor-pointer"
        type="button"
        aria-label={isPlaying ? "Pause music" : "Play music"}
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
