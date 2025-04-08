
import React from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface NotificationToastProps {
  count: number;
  onComplete: () => void;
  onIgnore: () => void;
}

export function NotificationToast({ 
  count, 
  onComplete, 
  onIgnore 
}: NotificationToastProps) {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <div className="bg-retirement/10 p-2 rounded-full">
          <Bell className="h-5 w-5 text-retirement" />
        </div>
        <div className="font-medium">Perhatian!</div>
      </div>
      
      <div className="text-sm text-slate-700">
        Terdapat {count} data pegawai yang belum lengkap. 
        Silakan lengkapi data tersebut.
      </div>
      
      <div className="flex space-x-2 mt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          onClick={onIgnore}
        >
          Abaikan
        </Button>
        <Button 
          size="sm" 
          className="bg-retirement hover:bg-retirement-dark"
          onClick={onComplete}
        >
          Lengkapi
        </Button>
      </div>
    </div>
  );
}

export function showIncompleteDataNotification(count: number) {
  return toast({
    title: null,
    description: (
      <NotificationToast 
        count={count} 
        onComplete={() => {
          console.log("Navigate to complete data page");
          // Here you would add navigation logic to the data completion page
          toast({
            description: "Mengarahkan ke halaman pelengkapan data...",
            duration: 2000,
          });
        }} 
        onIgnore={() => {
          console.log("Notification ignored");
          toast({
            description: "Notifikasi diabaikan",
            duration: 2000,
          });
        }} 
      />
    ),
    duration: 10000, // Show for 10 seconds
  });
}
