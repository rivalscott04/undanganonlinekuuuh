
import React from "react";
import { motion } from "framer-motion";
import { Intro } from "@/components/Intro";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventDetails } from "@/components/EventDetails";
import { RSVPConfirm } from "@/components/RSVPConfirm";
import { WishesForm } from "@/components/WishesForm";
import { WishesList } from "@/components/WishesList";
import { MusicToggle } from "@/components/MusicToggle";
import { Toaster } from "@/components/ui/toaster";

interface InvitationPageProps {
  wishes: {
    name: string;
    message: string;
    timestamp: string;
  }[];
  onWishSent: (newWish: { name: string; message: string; timestamp: string; }) => void;
}

export default function InvitationPage({ wishes, onWishSent }: InvitationPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-white min-h-screen"
    >
      <MusicToggle />
      <Intro />
      <CountdownTimer targetDate="2025-08-08T10:00:00" />
      <EventDetails />
      <RSVPConfirm />
      
      <section id="wishes" className="py-20 px-4 bg-retirement-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-retirement-dark mb-4">Ucapan & Doa</h2>
            <div className="w-20 h-1 bg-retirement-accent/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 max-w-xl mx-auto">
              Berikan ucapan dan doa restu untuk kedua mempelai
            </p>
          </div>
          
          <WishesForm onWishSent={onWishSent} />
          <WishesList wishes={wishes} />
        </div>
      </section>
      
      <footer className="py-10 bg-white text-center text-sm text-slate-500 border-t border-retirement-muted/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2 font-serif text-lg text-retirement-dark">Rival & Syahrina</p>
          <p className="mb-4">15 Juni 2024</p>
          <p>© 2024 Digital Wedding Invitation</p>
        </div>
      </footer>
      
      <Toaster />
    </motion.div>
  );
}
