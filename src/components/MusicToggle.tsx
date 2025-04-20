
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
  
  // Create audio element on component mount
  useEffect(() => {
    console.log("Creating new audio element");
    
    // Create the audio element directly in the DOM for better browser compatibility
    const audioElement = document.createElement("audio");
    audioElement.id = "wedding-music";
    audioElement.loop = true;
    
    // Add sources with different paths to maximize chances of success
    const paths = ["/music/wedding-song.mp3", "/music/BIW.mp3", "music/wedding-song.mp3", "music/BIW.mp3"];
    
    paths.forEach(path => {
      const source = document.createElement("source");
      source.src = path;
      source.type = "audio/mp3";
      audioElement.appendChild(source);
      console.log(`Added audio source: ${path}`);
    });
    
    // Add event listeners
    audioElement.addEventListener("canplaythrough", () => {
      console.log("Audio can play through, marking as loaded");
      setAudioLoaded(true);
    });
    
    audioElement.addEventListener("error", (e) => {
      console.error("Audio element error:", e);
    });
    
    // Add to the DOM but hidden
    document.body.appendChild(audioElement);
    audioRef.current = audioElement;
    
    // Cleanup on unmount
    return () => {
      console.log("Cleaning up audio element");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.remove();
      }
    };
  }, []);
  
  // Function to toggle music playback
  const toggleMusic = () => {
    console.log("Toggle button clicked, audio loaded:", audioLoaded);
    
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
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Music playing successfully");
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
                  description: "Format audio mungkin tidak didukung browser Anda",
                  variant: "destructive"
                });
              }
            });
        }
      }
    } catch (error) {
      console.error("Error in toggle music:", error);
      toast({
        title: "Terjadi kesalahan",
        description: "Tidak dapat memutar atau menjeda musik",
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
