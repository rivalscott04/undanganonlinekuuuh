
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
    // Create audio element with proper path
    audioRef.current = new Audio();
    
    // Set audio properties
    if (audioRef.current) {
      audioRef.current.src = "/music/wedding-song.mp3";
      audioRef.current.loop = true;
      
      // Add event listeners
      audioRef.current.addEventListener('canplaythrough', () => {
        setAudioLoaded(true);
        attemptAutoplay();
      });
      
      audioRef.current.addEventListener('error', (e) => {
        console.error("Audio loading error:", e);
        toast({
          title: "Musik tidak dapat dimuat",
          description: "Silakan klik tombol untuk mencoba lagi",
          variant: "destructive"
        });
      });
    }
    
    // Attempt to autoplay once the audio is loaded
    const attemptAutoplay = async () => {
      try {
        if (audioRef.current && audioLoaded) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay prevented by browser:", error);
        // Most browsers require user interaction before playing audio
      }
    };
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.removeEventListener('canplaythrough', () => {});
        audioRef.current.removeEventListener('error', () => {});
        audioRef.current = null;
      }
    };
  }, [toast]);
  
  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If audio isn't loaded yet, try loading it again
      if (!audioLoaded) {
        audioRef.current.load();
      }
      
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Play prevented:", error);
          toast({
            title: "Gagal memutar musik",
            description: "Silakan coba lagi",
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
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50"
    >
      <Button
        size={isMobile ? "sm" : "icon"}
        variant="outline"
        onClick={toggleMusic}
        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-md border-retirement-muted/30 hover:bg-retirement-light"
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
