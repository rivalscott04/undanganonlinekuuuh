
export interface Guest {
  id?: number;
  name: string;
  slug: string;
  status?: 'active' | 'inactive';
  created_at?: string;
}
