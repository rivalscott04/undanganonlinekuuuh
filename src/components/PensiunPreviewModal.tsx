
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PensiunPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: File | null;
}

export function PensiunPreviewModal({ isOpen, onClose, file }: PensiunPreviewModalProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string>("");

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    setFileType(file.type);
    
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[750px] max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Preview Dokumen</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto my-4">
          {preview ? (
            <div className="flex justify-center">
              {fileType.includes('pdf') ? (
                <iframe 
                  src={preview} 
                  className="w-full h-[500px] border rounded"
                  title="PDF Preview"
                />
              ) : fileType.includes('image') ? (
                <img 
                  src={preview} 
                  alt="Document Preview" 
                  className="max-w-full max-h-[500px] object-contain"
                />
              ) : (
                <div className="p-8 text-center bg-muted rounded-md">
                  <p>Format file tidak dapat ditampilkan</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center bg-muted rounded-md">
              <p>Tidak ada file yang dipilih</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
