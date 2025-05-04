
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
import { Copy, Heart } from "lucide-react";
import { FrameWrapper } from "@/components/FrameWrapper";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function WeddingInvitation() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

  const handleWishSent = (newWish: Wish) => {
    setWishes(prevWishes => [newWish, ...prevWishes]);
  };

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  const { toast } = useToast();

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-white">
      {/* Music Toggle is now always visible, regardless of envelope state */}
      <MusicToggle />

      <HeroEnvelope onEnvelopeOpen={handleEnvelopeOpen} />

      {isEnvelopeOpen && (
        <>
          <FrameWrapper darkBackground={true} className="bg-[#0A1929] text-white">
            <Intro />
          </FrameWrapper>
          
          <FrameWrapper>
            <CountdownTimer targetDate="2025-05-31T08:00:00" />
          </FrameWrapper>
          
          <FrameWrapper darkBackground={true} className="bg-[#0A1929] text-white">
            <EventDetails />
          </FrameWrapper>
          
          <FrameWrapper>
            <RSVPConfirm />
          </FrameWrapper>

          <FrameWrapper darkBackground={true} className="bg-[#0A1929] text-white">
            <section className="py-6 sm:py-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">Amplop Digital</h2>
                  <div className="w-14 sm:w-16 h-1 bg-[#33C3F0]/70 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                  <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
                    Restu dan doa Anda adalah berkah bagi kami. Jika Anda ingin memberikan sesuatu, kami dengan penuh hormat akan menerimanya.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
                  {/* BSI Card */}
                  <div className="bg-[#112233] rounded-lg p-4 shadow-sm border border-[#33C3F0]/20">
                    <div className="flex items-center justify-center h-10 mb-3">
                      <img src="/images/bsi-logo.svg" alt="BSI" className="h-24" />
                    </div>
                    <p className="text-center text-xs text-slate-300 mb-2">a.n Rival Biasrori</p>
                    <div className="flex items-center justify-center gap-2 bg-[#0F1E2C] rounded-md px-3 py-1.5 border border-[#33C3F0]/30">
                      <p className="font-mono text-white text-sm">7205700867</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("7205700867");
                          toast({
                            title: "Berhasil disalin",
                            description: "Nomor rekening telah disalin ke clipboard",
                          });
                        }}
                        className="p-1 hover:bg-[#1A2C3D] rounded-md transition-colors"
                      >
                        <Copy className="h-3 w-3 text-[#33C3F0]" />
                      </button>
                    </div>
                  </div>

                  {/* Bank NTB Card */}
                  <div className="bg-[#112233] rounded-lg p-4 shadow-sm border border-[#33C3F0]/20">
                    <div className="flex items-center justify-center h-10 mb-3">
                      <img src="/images/ntb-logo.svg" alt="Bank NTB" className="h-16" />
                    </div>
                    <p className="text-center text-xs text-slate-300 mb-2">a.n Syahrina Ulya Ramadhani</p>
                    <div className="flex items-center justify-center gap-2 bg-[#0F1E2C] rounded-md px-3 py-1.5 border border-[#33C3F0]/30">
                      <p className="font-mono text-white text-sm">0010205703314</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("0010205703314");
                          toast({
                            title: "Berhasil disalin",
                            description: "Nomor rekening telah disalin ke clipboard",
                          });
                        }}
                        className="p-1 hover:bg-[#1A2C3D] rounded-md transition-colors"
                      >
                        <Copy className="h-3 w-3 text-[#33C3F0]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FrameWrapper>

          <FrameWrapper>
            <section id="wishes" className="py-6 sm:py-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 mb-2 sm:mb-3">Ucapan & Doa</h2>
                  <div className="w-14 sm:w-16 h-1 bg-[#33C3F0]/70 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                  <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm">
                    Berikan ucapan dan doa restu untuk kedua mempelai
                  </p>
                </div>

                <WishesForm onWishSent={handleWishSent} />
                <WishesList wishes={wishes} />
              </div>
            </section>
          </FrameWrapper>

          <footer className="py-6 sm:py-8 bg-[#0A1929] text-center text-2xs sm:text-xs text-slate-300 border-t border-[#33C3F0]/20">
            <div className="max-w-4xl mx-auto px-4">
              <p className="mb-1 font-serif text-sm sm:text-base text-white">Rival & Syahrina</p>
              <p className="mb-2 sm:mb-3">15 Juni 2024</p>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-300">
                Made with <Heart className="h-4 w-4 text-[#ea384c] fill-[#ea384c]" /> by Couple
              </div>
              <p>© 2025 Digital Wedding Invitation</p>
            </div>
          </footer>
        </>
      )}

      <Toaster />
    </div>
  );
}
