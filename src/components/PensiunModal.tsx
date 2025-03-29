
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Eye, Save, X } from "lucide-react";

interface PensiunModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPreview: (file: File) => void;
}

const formSchema = z.object({
  nip: z.string().min(1, { message: "NIP harus dipilih" }),
  tmt_pensiun: z.string().min(1, { message: "TMT Pensiun harus diisi" }),
  tempat_tugas: z.string().min(1, { message: "Tempat tugas harus diisi" }),
  jenis_pensiun: z.string().min(1, { message: "Jenis pensiun harus dipilih" }),
  status: z.string().min(1, { message: "Status harus dipilih" }),
  file_sk: z.any().optional(),
});

export function PensiunModal({ isOpen, onClose, onPreview }: PensiunModalProps) {
  const { toast } = useToast();
  const [nama, setNama] = useState("");
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nip: "",
      tmt_pensiun: "",
      tempat_tugas: "",
      jenis_pensiun: "",
      status: "",
      file_sk: undefined,
    },
  });

  // When status is changed to "Disetujui", show file upload section
  useEffect(() => {
    const status = form.watch("status");
    setShowFileUpload(status === "Disetujui");
  }, [form.watch("status")]);

  // Mock function to get employee data by NIP
  const fetchEmployeeData = async (nip: string) => {
    // This would be an API call in a real app
    setTimeout(() => {
      setNama("John Doe");
      form.setValue("tmt_pensiun", "2023-12-31");
    }, 500);
  };

  // When NIP changes
  useEffect(() => {
    const nip = form.watch("nip");
    if (nip) {
      fetchEmployeeData(nip);
    } else {
      setNama("");
      form.setValue("tmt_pensiun", "");
    }
  }, [form.watch("nip")]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    // Here you would call your API to save the data
    
    toast({
      title: "Data tersimpan!",
      description: "Data pensiun telah berhasil disimpan.",
    });
    
    // Close modal and reset form
    onClose();
    form.reset();
    setNama("");
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handlePreviewClick = () => {
    if (selectedFile) {
      onPreview(selectedFile);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl">Input Data Pensiun</DialogTitle>
          <DialogDescription>
            Isi form berikut untuk menambahkan data pensiun baru.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6">
            <FormField
              control={form.control}
              name="nip"
              render={({ field }) => (
                <FormItem className="grid grid-cols-12 items-center gap-4">
                  <FormLabel className="col-span-4 text-right">NIP</FormLabel>
                  <div className="col-span-8">
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="-- Pilih NIP --" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="123456789">123456789</SelectItem>
                        <SelectItem value="987654321">987654321</SelectItem>
                        <SelectItem value="456789123">456789123</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-4 text-right text-sm font-medium">Nama</div>
              <div className="col-span-8">
                <Input value={nama} disabled />
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="tmt_pensiun"
              render={({ field }) => (
                <FormItem className="grid grid-cols-12 items-center gap-4">
                  <FormLabel className="col-span-4 text-right">TMT Pensiun</FormLabel>
                  <div className="col-span-8">
                    <FormControl>
                      <Input type="date" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tempat_tugas"
              render={({ field }) => (
                <FormItem className="grid grid-cols-12 items-center gap-4">
                  <FormLabel className="col-span-4 text-right">Tempat Tugas</FormLabel>
                  <div className="col-span-8">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="jenis_pensiun"
              render={({ field }) => (
                <FormItem className="grid grid-cols-12 items-center gap-4">
                  <FormLabel className="col-span-4 text-right">Jenis Pensiun</FormLabel>
                  <div className="col-span-8">
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="-- Pilih Jenis Pensiun --" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BUP">BUP</SelectItem>
                        <SelectItem value="APS">APS</SelectItem>
                        <SelectItem value="Janda/Duda">Janda/Duda</SelectItem>
                        <SelectItem value="Pensiun Dini">Pensiun Dini</SelectItem>
                        <SelectItem value="Lainnya">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="grid grid-cols-12 items-center gap-4">
                  <FormLabel className="col-span-4 text-right">Status</FormLabel>
                  <div className="col-span-8">
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="-- Pilih Status --" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Diajukan">Diajukan</SelectItem>
                        <SelectItem value="Diproses">Diproses</SelectItem>
                        <SelectItem value="Disetujui">Disetujui</SelectItem>
                        <SelectItem value="Ditolak">Ditolak</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            {showFileUpload && (
              <FormField
                control={form.control}
                name="file_sk"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="grid grid-cols-12 items-center gap-4">
                    <FormLabel className="col-span-4 text-right">Upload SK Pensiun</FormLabel>
                    <div className="col-span-8">
                      <div className="flex">
                        <FormControl>
                          <Input 
                            type="file" 
                            {...field} 
                            onChange={(e) => {
                              onChange(e.target.files?.[0] || null);
                              handleFileChange(e);
                            }}
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </FormControl>
                        {selectedFile && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="ml-2"
                            onClick={handlePreviewClick}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Format yang diperbolehkan: PDF, JPG, JPEG, PNG (Maks. 2MB)
                      </p>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            )}
          </form>
        </Form>
        
        <DialogFooter className="p-6 pt-2">
          <Button variant="outline" onClick={onClose}>
            <X className="mr-2 h-4 w-4" /> Batal
          </Button>
          <Button 
            className="bg-retirement hover:bg-retirement-dark"
            onClick={form.handleSubmit(onSubmit)}
          >
            <Save className="mr-2 h-4 w-4" /> Simpan Data
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
