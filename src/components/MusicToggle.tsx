
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

// Define the locations where we'll look for music files
const MUSIC_PATHS = [
  "/music/wedding-song.mp3",
  "/music/BIW.mp3",
  "music/wedding-song.mp3",
  "music/BIW.mp3"
];

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  // Create and set up the audio element
  useEffect(() => {
    console.log("Initializing audio with path:", MUSIC_PATHS[currentPathIndex]);
    
    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    audio.src = MUSIC_PATHS[currentPathIndex];
    
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio loaded successfully");
      setAudioLoaded(true);
    });
    
    audio.addEventListener("error", () => {
      console.error(`Failed to load audio from ${audio.src}`);
      
      // Try the next path in our array if available
      if (currentPathIndex < MUSIC_PATHS.length - 1) {
        setCurrentPathIndex(prevIndex => prevIndex + 1);
      } else {
        // We've tried all paths and none worked
        toast({
          title: "Musik tidak dapat dimuat",
          description: "Silakan periksa koneksi internet Anda dan coba lagi",
          variant: "destructive"
        });
      }
    });
    
    audioRef.current = audio;
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", () => {});
        audioRef.current.removeEventListener("error", () => {});
        audioRef.current = null;
      }
    };
  }, [currentPathIndex, toast]);
  
  // Handle music toggle
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
      console.log("Music paused");
    } else {
      // Play the audio
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Music playing");
          })
          .catch(error => {
            console.error("Play prevented:", error);
            
            // If it's a user interaction issue, tell them
            if (error.name === "NotAllowedError") {
              toast({
                title: "Gagal memutar musik",
                description: "Browser menghalangi pemutaran otomatis. Silakan klik lagi.",
                variant: "destructive"
              });
            } else {
              // Try the next audio path
              if (currentPathIndex < MUSIC_PATHS.length - 1) {
                setCurrentPathIndex(prevIndex => prevIndex + 1);
              } else {
                toast({
                  title: "Gagal memutar musik",
                  description: "Format audio tidak didukung oleh browser Anda",
                  variant: "destructive"
                });
              }
            }
          });
      }
    }
  };
  
  // Create a hardcoded audio element directly in the DOM as a fallback
  useEffect(() => {
    // Add a direct audio tag to the DOM as a last resort
    const createFallbackAudio = () => {
      if (!audioLoaded && currentPathIndex === MUSIC_PATHS.length - 1) {
        console.log("Creating fallback audio element in DOM");
        const audioElement = document.createElement("audio");
        audioElement.id = "wedding-music-fallback";
        audioElement.loop = true;
        
        // Add sources for each path
        MUSIC_PATHS.forEach(path => {
          const source = document.createElement("source");
          source.src = path;
          source.type = "audio/mp3";
          audioElement.appendChild(source);
        });
        
        // Append to body but hidden
        document.body.appendChild(audioElement);
        
        // If our main audio fails, try to use this one
        audioRef.current = audioElement;
      }
    };
    
    // Add fallback after a delay
    const fallbackTimer = setTimeout(createFallbackAudio, 5000);
    
    return () => {
      clearTimeout(fallbackTimer);
      const fallbackElement = document.getElementById("wedding-music-fallback");
      if (fallbackElement) {
        fallbackElement.remove();
      }
    };
  }, [audioLoaded, currentPathIndex]);
  
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
