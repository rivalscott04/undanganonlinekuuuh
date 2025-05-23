
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
    <div className="min-h-screen overflow-x-hidden w-full bg-[#F5F0FF]">
      {/* Music Toggle is always visible */}
      <MusicToggle />

      <HeroEnvelope onEnvelopeOpen={handleEnvelopeOpen} />

      {isEnvelopeOpen && (
        <>
          <FrameWrapper>
            <Intro />
          </FrameWrapper>
          
          <FrameWrapper className="bg-gradient-to-b from-[#FCF4FF] to-[#F5F0FF]">
            <CountdownTimer targetDate="2025-05-31T08:00:00" />
          </FrameWrapper>
          
          <FrameWrapper>
            <EventDetails />
          </FrameWrapper>
          
          <FrameWrapper className="bg-gradient-to-b from-[#FCF4FF] to-[#F5F0FF]">
            <RSVPConfirm />
          </FrameWrapper>

          <FrameWrapper>
            <section className="py-6 sm:py-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 mb-2 sm:mb-3">Amplop Digital</h2>
                  <div className="w-14 sm:w-16 h-1 bg-[#9b87f5]/70 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                  <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm">
                    Restu dan doa Anda adalah berkah bagi kami. Jika Anda ingin memberikan sesuatu, kami dengan penuh hormat akan menerimanya.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
                  {/* BSI Card */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-[#9b87f5]/20">
                    <div className="flex items-center justify-center h-10 mb-3">
                      <img src="/images/bsi-logo.svg" alt="BSI" className="h-24" />
                    </div>
                    <p className="text-center text-xs text-slate-600 mb-2">a.n Rival Biasrori</p>
                    <div className="flex items-center justify-center gap-2 bg-[#F5F0FF] rounded-md px-3 py-1.5 border border-[#9b87f5]/30">
                      <p className="font-mono text-slate-700 text-sm">7205700867</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("7205700867");
                          toast({
                            title: "Berhasil disalin",
                            description: "Nomor rekening telah disalin ke clipboard",
                          });
                        }}
                        className="p-1 hover:bg-[#E5DEFF] rounded-md transition-colors"
                      >
                        <Copy className="h-3 w-3 text-[#9b87f5]" />
                      </button>
                    </div>
                  </div>

                  {/* Bank NTB Card */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-[#9b87f5]/20">
                    <div className="flex items-center justify-center h-10 mb-3">
                      <img src="/images/ntb-logo.svg" alt="Bank NTB" className="h-16" />
                    </div>
                    <p className="text-center text-xs text-slate-600 mb-2">a.n Syahrina Ulya Ramadhani</p>
                    <div className="flex items-center justify-center gap-2 bg-[#F5F0FF] rounded-md px-3 py-1.5 border border-[#9b87f5]/30">
                      <p className="font-mono text-slate-700 text-sm">0010205703314</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("0010205703314");
                          toast({
                            title: "Berhasil disalin",
                            description: "Nomor rekening telah disalin ke clipboard",
                          });
                        }}
                        className="p-1 hover:bg-[#E5DEFF] rounded-md transition-colors"
                      >
                        <Copy className="h-3 w-3 text-[#9b87f5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FrameWrapper>

          <FrameWrapper className="bg-gradient-to-b from-[#FCF4FF] to-[#F5F0FF]">
            <section id="wishes" className="py-6 sm:py-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 mb-2 sm:mb-3">Ucapan & Doa</h2>
                  <div className="w-14 sm:w-16 h-1 bg-[#9b87f5]/70 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                  <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm">
                    Berikan ucapan dan doa restu untuk kedua mempelai
                  </p>
                </div>

                <WishesForm onWishSent={handleWishSent} />
                <WishesList wishes={wishes} />
              </div>
            </section>
          </FrameWrapper>

          <footer className="py-6 sm:py-8 bg-gradient-to-b from-[#FCF4FF] to-[#E5DEFF] text-center text-2xs sm:text-xs text-slate-600 border-t border-[#9b87f5]/20">
            <div className="max-w-4xl mx-auto px-4">
              <p className="mb-1 font-serif text-sm sm:text-base text-slate-800">Rival & Syahrina</p>
              <p className="mb-2 sm:mb-3">15 Juni 2024</p>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-600">
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
