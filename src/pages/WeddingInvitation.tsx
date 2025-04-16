
import React, { useState } from "react";
import { HeroEnvelope } from "@/components/HeroEnvelope";
import { Intro } from "@/components/Intro";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventDetails } from "@/components/EventDetails";
import { RSVPConfirm } from "@/components/RSVPConfirm";
import { WishesForm } from "@/components/WishesForm";
import { WishesList } from "@/components/WishesList";
import { MusicToggle } from "@/components/MusicToggle";
import { Toaster } from "@/components/ui/toaster";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function WeddingInvitation() {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Ahmad Fauzi",
      message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      timestamp: new Date().toISOString()
    },
    {
      name: "Keluarga Besar Sutanto",
      message: "Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fii khair. Semoga Allah memberkahimu dan memberikan keberkahan atasmu serta mengumpulkan kalian berdua dalam kebaikan.",
      timestamp: new Date(Date.now() - 3600000).toISOString()
    }
  ]);
  
  const handleWishSent = (newWish: Wish) => {
    setWishes(prevWishes => [newWish, ...prevWishes]);
  };
  
  return (
    <div className="bg-white min-h-screen">
      <MusicToggle />
      
      <HeroEnvelope />
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
          
          <WishesForm onWishSent={handleWishSent} />
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
    </div>
  );
}
