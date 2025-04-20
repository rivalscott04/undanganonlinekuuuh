
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';
import { Guest } from '@/types/guest';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Initialize Supabase client (replace with your project URL and anon key)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!, 
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function GuestManagement() {
  const [guestName, setGuestName] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch guests
  const { data: guests } = useQuery({
    queryKey: ['guests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('guests')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Guest[];
    }
  });

  // Add guest mutation
  const addGuestMutation = useMutation({
    mutationFn: async (newGuest: Guest) => {
      const { data, error } = await supabase
        .from('guests')
        .insert(newGuest)
        .select()
        .single();
      
      if (error) throw error;
      return data as Guest;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
      setGuestName('');
      toast({
        title: "Tamu Berhasil Ditambahkan",
        description: "Undangan telah dibuat untuk tamu baru."
      });
    }
  });

  const handleAddGuest = () => {
    if (!guestName.trim()) {
      toast({
        title: "Error",
        description: "Nama tamu tidak boleh kosong",
        variant: "destructive"
      });
      return;
    }

    const newGuest: Guest = {
      name: guestName,
      slug: generateSlug(guestName),
      status: 'active'
    };

    addGuestMutation.mutate(newGuest);
  };

  const handleCopyLink = (slug: string) => {
    const invitationLink = `${window.location.origin}/undangan?to=${encodeURIComponent(slug)}`;
    navigator.clipboard.writeText(invitationLink);
    toast({
      title: "Link Tersalin",
      description: "Link undangan telah disalin ke clipboard"
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Manajemen Tamu Undangan</h1>
      
      <div className="flex mb-6">
        <Input 
          placeholder="Masukkan nama tamu" 
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleAddGuest} disabled={addGuestMutation.isPending}>
          Tambah Tamu
        </Button>
      </div>

      <div className="grid gap-4">
        {guests?.map((guest) => (
          <div 
            key={guest.id} 
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <div>
              <p className="font-medium">{guest.name}</p>
              <p className="text-sm text-gray-500">{guest.slug}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleCopyLink(guest.slug)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
