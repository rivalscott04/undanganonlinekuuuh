
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
    audioRef.current = new Audio();
    
    const tryLoadAudio = (audioPath: string) => {
      console.log("Trying to load audio from:", audioPath);
      
      if (!audioRef.current) return;
      
      audioRef.current.src = audioPath;
      audioRef.current.loop = true;
      
      // Remove previous event listeners if any
      const handleCanPlay = () => {
        console.log("Audio loaded successfully from:", audioPath);
        setAudioLoaded(true);
        attemptAutoplay();
      };
      
      const handleError = (e: Event) => {
        console.error("Audio loading error:", e);
        if (audioRef.current?.error) {
          console.error("Error code:", audioRef.current.error.code);
          console.error("Error message:", audioRef.current.error.message);
        }
        
        // If we tried the absolute path and it failed, try relative path
        if (audioPath === "/music/BIW.mp3") {
          console.log("Trying alternative audio path...");
          tryLoadAudio("music/BIW.mp3");
        } else if (audioPath === "music/BIW.mp3") {
          console.log("Trying with audio element in DOM...");
          tryWithAudioElement();
        } else {
          toast({
            title: "Musik tidak dapat dimuat",
            description: "Silakan klik tombol untuk mencoba lagi",
            variant: "destructive"
          });
        }
      };
      
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('error', handleError);
      
      // Store the event listeners for cleanup
      return { handleCanPlay, handleError };
    };
    
    const tryWithAudioElement = () => {
      // As a last resort, create an audio element in the DOM
      const audioElement = document.createElement('audio');
      audioElement.id = 'wedding-music';
      audioElement.loop = true;
      audioElement.preload = 'auto';
      
      // Try with a different file format if available
      const source = document.createElement('source');
      source.src = '/music/wedding-song.mp3';
      source.type = 'audio/mp3';
      
      audioElement.appendChild(source);
      document.body.appendChild(audioElement);
      
      audioElement.oncanplaythrough = () => {
        console.log("Audio loaded successfully with DOM element");
        audioRef.current = audioElement;
        setAudioLoaded(true);
        attemptAutoplay();
      };
      
      audioElement.onerror = () => {
        console.error("Failed to load audio even with DOM element");
        toast({
          title: "Musik tidak dapat dimuat",
          description: "Silakan klik tombol untuk mencoba lagi",
          variant: "destructive"
        });
      };
    };
    
    // Attempt to autoplay once the audio is loaded
    const attemptAutoplay = async () => {
      try {
        if (audioRef.current && audioLoaded) {
          await audioRef.current.play();
          setIsPlaying(true);
          console.log("Autoplay successful");
        }
      } catch (error) {
        console.log("Autoplay prevented by browser:", error);
        // Most browsers require user interaction before playing audio
      }
    };
    
    // Start by trying the absolute path
    const listeners = tryLoadAudio("/music/BIW.mp3");
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        if (listeners) {
          audioRef.current.removeEventListener('canplaythrough', listeners.handleCanPlay);
          audioRef.current.removeEventListener('error', listeners.handleError);
        }
        
        audioRef.current.pause();
        audioRef.current.src = "";
        
        // Remove audio element from DOM if we added one
        const domAudio = document.getElementById('wedding-music');
        if (domAudio) {
          document.body.removeChild(domAudio);
        }
        
        audioRef.current = null;
      }
    };
  }, [toast]);
  
  const toggleMusic = () => {
    if (!audioRef.current) {
      // If audio element doesn't exist, recreate it
      audioRef.current = new Audio("/music/wedding-song.mp3");
      audioRef.current.loop = true;
      audioRef.current.load();
    }
    
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
          console.log("Music playing");
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
