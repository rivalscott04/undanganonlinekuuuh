
import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";

interface WishesListProps {
  wishes?: any[];
}

export function WishesList({ wishes }: WishesListProps) {
  if (!wishes || wishes.length === 0) {
    return (
      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
        {[1, 2, 3].map((_, index) => (
          <Skeleton key={index} className="h-20 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
      {wishes.map((wish, index) => (
        <motion.div
          key={`${wish.name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-retirement-light/30 rounded-lg p-3 sm:p-4 border border-retirement-muted/20"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="font-medium text-retirement-dark text-sm sm:text-base">{wish.name}</div>
            <div className="text-2xs sm:text-xs text-slate-500">baru saja</div>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm">{wish.message}</p>
        </motion.div>
      ))}
    </div>
  );
}

