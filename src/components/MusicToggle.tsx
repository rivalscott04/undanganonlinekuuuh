
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  // Setup audio element
  useEffect(() => {
    console.log("Setting up audio element");
    
    const audio = new Audio();
    audio.loop = true;
    audio.src = "/music/BIW.mp3";
    audioRef.current = audio;
    
    // Set up event listeners after assigning the audio reference
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio loaded successfully and can play through");
      
      // On desktop, attempt autoplay after canplaythrough event
      if (!isMobile && !hasInteracted) {
        audio.play().then(() => {
          setIsPlaying(true);
          showMusicToast();
        }).catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    });
    
    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e);
      toast({
        title: "Kesalahan Audio",
        description: "Tidak dapat memuat file musik",
        variant: "destructive"
      });
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        // Clean up event listeners
        audioRef.current.removeEventListener("canplaythrough", () => {});
        audioRef.current.removeEventListener("error", () => {});
      }
    };
  }, [isMobile, hasInteracted, toast]);
  
  // Show welcome dialog with music notification
  useEffect(() => {
    if (showDialog) {
      const timer = setTimeout(() => {
        setShowDialog(false);
        
        // For mobile, show a toast explaining they need to tap
        if (isMobile && !hasInteracted) {
          toast({
            title: "Ketuk tombol musik",
            description: "Ketuk tombol di kanan atas untuk memutar musik",
          });
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showDialog, toast, isMobile, hasInteracted]);
  
  const showMusicToast = () => {
    toast({
      title: "Musik diputar",
      description: "Nikmati lagu pernikahan kami",
    });
  };
  
  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        toast({
          title: "Musik dijeda",
          description: "Ketuk tombol untuk memutar lagi",
        });
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setHasInteracted(true);
              showMusicToast();
            })
            .catch(error => {
              console.error("Play prevented:", error);
              toast({
                title: "Interaksi diperlukan",
                description: "Silakan klik lagi untuk memutar musik",
                variant: "destructive"
              });
            });
        }
      }
    } catch (error) {
      console.error("Toggle music error:", error);
    }
  };
  
  return (
    <>
      {showDialog && (
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogContent className="sm:max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center">Memutar Musik</AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                Silakan nikmati lagu pernikahan kami
                {isMobile && (
                  <p className="mt-2 text-sm text-gray-500">
                    Ketuk tombol musik di kanan atas untuk memutar musik
                  </p>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )}

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
          className={`rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-md border-retirement-muted/30 hover:bg-retirement-light cursor-pointer ${!isPlaying && isMobile ? 'animate-pulse' : ''}`}
          type="button"
          aria-label={isPlaying ? "Mute music" : "Unmute music"}
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-retirement" />
          ) : (
            <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500" />
          )}
        </Button>
      </motion.div>
    </>
  );
}
