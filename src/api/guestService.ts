
import { Guest } from '@/types/guest';

// Create a mock implementation that doesn't depend on Supabase
// This is a temporary solution until Supabase is properly integrated
export const guestService = {
  // Fetch all guests
  getGuests: async (): Promise<Guest[]> => {
    // Simulating API call with localStorage
    const storedGuests = localStorage.getItem('wedding_guests');
    return storedGuests ? JSON.parse(storedGuests) : [];
  },

  // Get a single guest by slug
  getGuestBySlug: async (slug: string): Promise<Guest | null> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    const guests = storedGuests ? JSON.parse(storedGuests) : [];
    const guest = guests.find((g: Guest) => g.slug === slug);
    return guest || null;
  },

  // Add a single guest
  addGuest: async (guest: Omit<Guest, 'id' | 'created_at'>): Promise<Guest> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    const guests = storedGuests ? JSON.parse(storedGuests) : [];
    
    // Generate an ID and created_at
    const newGuest = {
      ...guest,
      id: Date.now(),
      created_at: new Date().toISOString()
    };
    
    // Add to list and save
    guests.push(newGuest);
    localStorage.setItem('wedding_guests', JSON.stringify(guests));
    
    return newGuest;
  },

  // Update a guest
  updateGuest: async (guest: Guest): Promise<Guest> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    let guests = storedGuests ? JSON.parse(storedGuests) : [];
    
    // Find and update
    guests = guests.map((g: Guest) => g.id === guest.id ? guest : g);
    localStorage.setItem('wedding_guests', JSON.stringify(guests));
    
    return guest;
  },

  // Delete a guest
  deleteGuest: async (id: number): Promise<void> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    let guests = storedGuests ? JSON.parse(storedGuests) : [];
    
    // Filter out the deleted guest
    guests = guests.filter((g: Guest) => g.id !== id);
    localStorage.setItem('wedding_guests', JSON.stringify(guests));
  },

  // Import guests from CSV
  importGuests: async (guests: Omit<Guest, 'id' | 'created_at'>[]): Promise<void> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    let existingGuests = storedGuests ? JSON.parse(storedGuests) : [];
    
    // Add IDs and created_at
    const newGuests = guests.map(guest => ({
      ...guest,
      id: Date.now() + Math.floor(Math.random() * 1000), // Generate unique IDs
      created_at: new Date().toISOString()
    }));
    
    // Combine and save
    existingGuests = [...existingGuests, ...newGuests];
    localStorage.setItem('wedding_guests', JSON.stringify(existingGuests));
  },

  // Get guest count
  getGuestCount: async (): Promise<number> => {
    const storedGuests = localStorage.getItem('wedding_guests');
    const guests = storedGuests ? JSON.parse(storedGuests) : [];
    return guests.length;
  }
};
