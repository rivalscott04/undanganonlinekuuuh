
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Flower, Flower2 } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("to");
  
  useEffect(() => {
    navigate(`/undangan${slug ? `?to=${encodeURIComponent(slug)}` : ''}`);
  }, [navigate, slug]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F0FF] to-[#FCF4FF] p-4">
      <div className="text-center relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <Flower className="h-8 w-8 text-[#9b87f5] opacity-60" />
        </div>
        <div className="absolute -top-6 -left-8">
          <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-40" />
        </div>
        <div className="absolute -top-6 -right-8">
          <Flower2 className="h-6 w-6 text-[#9b87f5] opacity-40" />
        </div>
        <div className="w-8 h-8 border-t-2 border-[#9b87f5] rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-slate-700 text-sm">Memuat undangan...</p>
      </div>
    </div>
  );
}
