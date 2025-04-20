
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
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function WeddingInvitation() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
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
  
  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };
  
  const { toast } = useToast();
  
  return (
    <div className="bg-white min-h-screen overflow-x-hidden w-full">
      <MusicToggle />
      
      <HeroEnvelope onEnvelopeOpen={handleEnvelopeOpen} />
      
      {isEnvelopeOpen && (
        <>
          <Intro />
          <CountdownTimer targetDate="2025-08-08T10:00:00" />
          <EventDetails />
          <RSVPConfirm />
          
          <section className="py-16 sm:py-20 px-4 bg-[#F1F0FB]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-retirement-dark mb-3 sm:mb-4">Amplop Digital</h2>
                <div className="w-16 sm:w-20 h-1 bg-retirement-accent/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                  Restu dan doa Anda adalah berkah bagi kami. Jika Anda ingin memberikan sesuatu, kami dengan penuh hormat akan menerimanya.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {/* BSI Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-retirement-muted/20">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <div className="w-20 h-8 bg-retirement-light/20 rounded flex items-center justify-center text-sm font-medium text-retirement-dark">
                      BSI
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-600 mb-2">a.n Rival Biasrori</p>
                  <div className="flex items-center justify-center gap-2 bg-retirement-light/10 rounded-md px-3 py-2 border border-retirement-muted/30">
                    <p className="font-mono text-retirement-dark">7205700867</p>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("7205700867");
                        toast({
                          title: "Berhasil disalin",
                          description: "Nomor rekening telah disalin ke clipboard",
                        });
                      }}
                      className="p-1 hover:bg-retirement-light/20 rounded-md transition-colors"
                    >
                      <Copy className="h-4 w-4 text-retirement" />
                    </button>
                  </div>
                </div>

                {/* Bank NTB Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-retirement-muted/20">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <div className="w-20 h-8 bg-retirement-light/20 rounded flex items-center justify-center text-sm font-medium text-retirement-dark">
                      Bank NTB
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-600 mb-2">a.n Syahrina Ulya Ramadhani</p>
                  <div className="flex items-center justify-center gap-2 bg-retirement-light/10 rounded-md px-3 py-2 border border-retirement-muted/30">
                    <p className="font-mono text-retirement-dark">0010205703314</p>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("0010205703314");
                        toast({
                          title: "Berhasil disalin",
                          description: "Nomor rekening telah disalin ke clipboard",
                        });
                      }}
                      className="p-1 hover:bg-retirement-light/20 rounded-md transition-colors"
                    >
                      <Copy className="h-4 w-4 text-retirement" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="wishes" className="py-16 sm:py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-retirement-dark mb-3 sm:mb-4">Ucapan & Doa</h2>
                <div className="w-16 sm:w-20 h-1 bg-retirement-accent/50 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                  Berikan ucapan dan doa restu untuk kedua mempelai
                </p>
              </div>
              
              <WishesForm onWishSent={handleWishSent} />
              <WishesList wishes={wishes} />
            </div>
          </section>
          
          <footer className="py-8 sm:py-10 bg-[#F1F0FB] text-center text-xs sm:text-sm text-slate-500 border-t border-retirement-muted/20">
            <div className="max-w-4xl mx-auto px-4">
              <p className="mb-1 sm:mb-2 font-serif text-base sm:text-lg text-retirement-dark">Rival & Syahrina</p>
              <p className="mb-3 sm:mb-4">15 Juni 2024</p>
              <p>© 2024 Digital Wedding Invitation</p>
            </div>
          </footer>
        </>
      )}
      
      <Toaster />
    </div>
  );
}
