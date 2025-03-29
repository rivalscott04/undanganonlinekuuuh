
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Eye, Pencil, Trash, MoreVertical, FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Pegawai {
  nama: string;
}

interface PensiunData {
  id: number;
  nip: string;
  pegawai: Pegawai;
  tmt_pensiun: string;
  tempat_tugas: string;
  jenis_pensiun: string;
  status: string;
  file_sk: string | null;
}

interface PensiunTableProps {
  data: PensiunData[];
}

export function PensiunTable({ data }: PensiunTableProps) {
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setSelectedId(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting item with ID: ${selectedId}`);
    // Here you would call your delete API
    // After successful deletion:
    setDeleteConfirmOpen(false);
  };

  return (
    <div className="relative overflow-x-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[5%]">No</TableHead>
            <TableHead className="w-[20%]">Pegawai</TableHead>
            <TableHead className="w-[12%]">TMT Pensiun</TableHead>
            <TableHead className="w-[15%]">Tempat Tugas</TableHead>
            <TableHead className="w-[10%]">Jenis</TableHead>
            <TableHead className="w-[10%]">Status</TableHead>
            <TableHead className="w-[10%]">File SK</TableHead>
            <TableHead className="w-[8%] text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id} className="hover:bg-muted/30">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="name-cell">{item.pegawai?.nama || 'N/A'}</div>
                <div className="nip-cell">{item.nip}</div>
              </TableCell>
              <TableCell>{formatDate(item.tmt_pensiun)}</TableCell>
              <TableCell>{item.tempat_tugas}</TableCell>
              <TableCell>{item.jenis_pensiun}</TableCell>
              <TableCell>
                <span className={`status-badge status-${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </TableCell>
              <TableCell>
                {item.file_sk ? (
                  <a href={`/preview/${item.id}`} target="_blank" className="file-badge">
                    <FileText className="mr-1 h-3 w-3" /> Lihat
                  </a>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => window.location.href = `/pensiun/${item.id}`}>
                      <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.location.href = `/pensiun/${item.id}/edit`}>
                      <Pencil className="mr-2 h-4 w-4" /> Edit Data
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-retirement-rejected focus:text-retirement-rejected"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" /> Hapus Data
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Penghapusan</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus data pensiun ini? 
              Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
