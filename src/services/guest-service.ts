
import { Guest, GuestResponse } from '@/types/guest-local';
import Papa from 'papaparse';

// Replace these URLs with your actual MySQL API endpoints
const API_URL = 'YOUR_API_URL';

export const guestService = {
  // Fetch all guests
  getGuests: async (): Promise<Guest[]> => {
    // TODO: Replace with your actual API call
    const response = await fetch(`${API_URL}/guests`);
    const data = await response.json();
    return data;
  },

  // Add a single guest
  addGuest: async (guest: Omit<Guest, 'id' | 'created_at'>): Promise<Guest> => {
    // TODO: Replace with your actual API call
    const response = await fetch(`${API_URL}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    });
    const data = await response.json();
    return data;
  },

  // Import guests from CSV
  importGuests: async (file: File): Promise<Guest[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: async (results) => {
          try {
            const guests = results.data.slice(1).map((row: any) => ({
              name: row[0],
              slug: row[0].toLowerCase().replace(/\s+/g, '-'),
              status: 'active'
            }));

            // TODO: Replace with your actual API call
            const response = await fetch(`${API_URL}/guests/bulk`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ guests }),
            });
            const data = await response.json();
            resolve(data);
          } catch (error) {
            reject(error);
          }
        },
        header: true,
        error: (error) => reject(error),
      });
    });
  }
};
