
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface WishFormData {
  name: string;
  message: string;
}

interface WishesFormProps {
  onWishSent: (wish: WishFormData & { timestamp: string }) => void;
}

export function WishesForm({ onWishSent }: WishesFormProps) {
  const [formData, setFormData] = useState<WishFormData>({
    name: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon lengkapi nama dan ucapan Anda",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      const newWish = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      onWishSent(newWish);
      
      // Reset form
      setFormData({
        name: "",
        message: ""
      });
      
      toast({
        title: "Ucapan terkirim",
        description: "Terima kasih atas ucapan dan doa Anda"
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto bg-white rounded-lg p-6 shadow-sm border border-retirement-muted/30"
    >
      <h3 className="text-xl font-medium text-retirement-dark mb-4">Kirim Ucapan & Doa</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-retirement-muted/50 focus:border-retirement focus:ring-retirement"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            placeholder="Ucapan & doa untuk pengantin..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border-retirement-muted/50 focus:border-retirement focus:ring-retirement"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-retirement hover:bg-retirement-dark"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Kirim Ucapan
        </Button>
      </form>
    </motion.div>
  );
}
