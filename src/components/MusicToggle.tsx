
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
    // Create an audio element directly in the DOM for better browser compatibility
    const audioElement = document.createElement('audio');
    audioElement.id = 'wedding-music';
    audioElement.loop = true;
    audioElement.preload = 'auto';
    
    // Add multiple sources with different paths to increase chances of success
    const paths = [
      { src: '/music/wedding-song.mp3', type: 'audio/mp3' },
      { src: 'music/wedding-song.mp3', type: 'audio/mp3' },
      { src: '/music/BIW.mp3', type: 'audio/mp3' },
      { src: 'music/BIW.mp3', type: 'audio/mp3' }
    ];
    
    // Add all sources to increase chances of successful loading
    paths.forEach(path => {
      const source = document.createElement('source');
      source.src = path.src;
      source.type = path.type;
      audioElement.appendChild(source);
    });
    
    // Add the audio element to the DOM
    document.body.appendChild(audioElement);
    audioRef.current = audioElement;
    
    // Log when audio is ready
    audioElement.oncanplaythrough = () => {
      console.log("Audio loaded successfully");
      setAudioLoaded(true);
    };
    
    // Handle errors more gracefully
    audioElement.onerror = (e) => {
      console.error("Audio couldn't be loaded", e);
      toast({
        title: "Musik tidak dapat dimuat",
        description: "Silakan klik tombol untuk mencoba lagi",
        variant: "destructive"
      });
    };
    
    // Cleanup function to properly remove the audio element
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        
        // Remove audio element from DOM
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
      // If audio element doesn't exist for some reason, show error
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
