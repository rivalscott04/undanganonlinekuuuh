
import { Button } from "@/components/ui/button";
import { Folder, Plus } from "lucide-react";

interface EmptyStateProps {
  onAdd: () => void;
}

export function EmptyState({ onAdd }: EmptyStateProps) {
  return (
    <div className="empty-state py-16 px-4">
      <Folder className="h-16 w-16 text-muted-foreground/60 mb-4" />
      <h5 className="text-lg font-semibold mb-2">Belum ada data pensiun</h5>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        Belum ada data pensiun yang tersedia. Klik tombol di bawah untuk menambahkan data.
      </p>
      <Button 
        className="bg-retirement hover:bg-retirement-dark"
        onClick={onAdd}
      >
        <Plus className="mr-2 h-4 w-4" /> Tambah Data Pensiun
      </Button>
    </div>
  );
}
