
import React, { useState } from "react";
import { HeroEnvelope } from "@/components/HeroEnvelope";
import InvitationPage from "./InvitationPage";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
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
    <>
      <HeroEnvelope isOpen={isOpened} onOpen={() => setIsOpened(true)} />
      {isOpened && <InvitationPage wishes={wishes} onWishSent={handleWishSent} />}
    </>
  );
}
