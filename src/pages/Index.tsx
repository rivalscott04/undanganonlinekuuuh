
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      navigate(`/undangan?to=${encodeURIComponent(guestName.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-retirement-light p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md border border-retirement-muted/30 text-center">
        <h1 className="font-serif text-4xl text-retirement-dark mb-6">
          Undangan Pernikahan Digital
        </h1>
        <p className="text-slate-600 mb-8">
          Silakan masukkan nama Anda untuk melihat undangan
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full"
          />
          <Button 
            type="submit" 
            className="w-full bg-retirement hover:bg-retirement-dark"
          >
            Lihat Undangan
          </Button>
        </form>
        
        <div className="mt-8">
          <p className="text-sm text-slate-500">
            &copy; 2024 Digital Wedding Invitation
          </p>
        </div>
      </div>
    </div>
  );
}
