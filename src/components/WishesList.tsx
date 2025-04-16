
import React from "react";
import { motion } from "framer-motion";
import { formatDistance } from "date-fns";
import { id } from "date-fns/locale";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

interface WishesListProps {
  wishes: Wish[];
}

export function WishesList({ wishes }: WishesListProps) {
  const formatTime = (timestamp: string) => {
    try {
      return formatDistance(new Date(timestamp), new Date(), {
        addSuffix: true,
        locale: id
      });
    } catch (error) {
      return "baru saja";
    }
  };
  
  return (
    <div className="mt-10 space-y-6 max-h-[500px] overflow-y-auto pr-2">
      {wishes.length === 0 ? (
        <div className="text-center py-10 text-slate-500 italic">
          Belum ada ucapan. Jadilah yang pertama memberikan ucapan dan doa.
        </div>
      ) : (
        wishes.map((wish, index) => (
          <motion.div
            key={`${wish.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-retirement-light/30 rounded-lg p-4 border border-retirement-muted/20"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-retirement-dark">{wish.name}</div>
              <div className="text-xs text-slate-500">{formatTime(wish.timestamp)}</div>
            </div>
            <p className="text-slate-700">{wish.message}</p>
          </motion.div>
        ))
      )}
    </div>
  );
}
