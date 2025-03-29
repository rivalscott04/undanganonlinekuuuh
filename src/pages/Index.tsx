
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PensiunTable } from "@/components/PensiunTable";
import { PensiunModal } from "@/components/PensiunModal";
import { PensiunPreviewModal } from "@/components/PensiunPreviewModal";
import { StatCards } from "@/components/StatCards";
import { EmptyState } from "@/components/EmptyState";
import { 
  FileText, 
  RefreshCw, 
  Plus
} from "lucide-react";
import { usePensiunData } from "@/hooks/usePensiunData";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const { toast } = useToast();
  const { data, isLoading, refresh } = usePensiunData();

  const handleRefresh = () => {
    refresh();
    toast({
      title: "Data diperbarui!",
      description: "Data pensiun telah diperbarui.",
    });
  };

  const handlePreview = (file: File) => {
    setPreviewFile(file);
    setIsPreviewModalOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewModalOpen(false);
    // Re-open the main modal if it was open
    if (isModalOpen) {
      setTimeout(() => {
        document.getElementById('pensiunModal')?.classList.add('show');
      }, 300);
    }
  };

  return (
    <div className="container px-4 py-6 mx-auto max-w-7xl animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Data Pensiun</h1>
        <Button 
          className="bg-retirement hover:bg-retirement-dark"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Tambah Data
        </Button>
      </div>
      
      {/* Stat Cards */}
      {data && data.length > 0 && (
        <StatCards data={data} />
      )}
      
      {/* Data Table */}
      <Card className="mt-6 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">Daftar Data Pensiun</CardTitle>
          <Button 
            variant="outline" 
            className="h-8 px-2 text-sm"
            onClick={handleRefresh}
          >
            <RefreshCw className="mr-2 h-3.5 w-3.5" /> Refresh
          </Button>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="h-96 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin h-8 w-8 border-4 border-retirement-muted border-t-retirement rounded-full"></div>
                <span className="text-muted-foreground">Memuat data...</span>
              </div>
            </div>
          ) : data && data.length > 0 ? (
            <PensiunTable data={data} />
          ) : (
            <EmptyState onAdd={() => setIsModalOpen(true)} />
          )}
        </CardContent>
      </Card>
      
      {/* Modals */}
      <PensiunModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onPreview={handlePreview}
      />
      
      <PensiunPreviewModal
        isOpen={isPreviewModalOpen}
        onClose={handleClosePreview}
        file={previewFile}
      />
    </div>
  );
};

export default Index;
