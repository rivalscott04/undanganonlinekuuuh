
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, RotateCw, Clock } from "lucide-react";

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

interface StatCardsProps {
  data: PensiunData[];
}

export function StatCards({ data }: StatCardsProps) {
  const totalCount = data.length;
  const disetujuiCount = data.filter(item => item.status === 'Disetujui').length;
  const diprosesCount = data.filter(item => item.status === 'Diproses').length;
  const diajukanCount = data.filter(item => item.status === 'Diajukan').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in">
      <Card className="stat-card">
        <CardContent className="p-0">
          <div className="flex justify-between items-center p-5">
            <div>
              <div className="stat-title">Total Data</div>
              <div className="stat-value">{totalCount}</div>
            </div>
            <div className="stat-icon stat-total">
              <FileText />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card">
        <CardContent className="p-0">
          <div className="flex justify-between items-center p-5">
            <div>
              <div className="stat-title">Disetujui</div>
              <div className="stat-value">{disetujuiCount}</div>
            </div>
            <div className="stat-icon stat-approved">
              <CheckCircle />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card">
        <CardContent className="p-0">
          <div className="flex justify-between items-center p-5">
            <div>
              <div className="stat-title">Diproses</div>
              <div className="stat-value">{diprosesCount}</div>
            </div>
            <div className="stat-icon stat-process">
              <RotateCw />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="stat-card">
        <CardContent className="p-0">
          <div className="flex justify-between items-center p-5">
            <div>
              <div className="stat-title">Menunggu</div>
              <div className="stat-value">{diajukanCount}</div>
            </div>
            <div className="stat-icon stat-waiting">
              <Clock />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
