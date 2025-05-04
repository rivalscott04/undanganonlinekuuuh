
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("to");
  
  useEffect(() => {
    navigate(`/undangan${slug ? `?to=${encodeURIComponent(slug)}` : ''}`);
  }, [navigate, slug]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1929] p-4">
      <div className="text-center">
        <div className="w-8 h-8 border-t-2 border-[#33C3F0] rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-slate-300 text-sm">Memuat undangan...</p>
      </div>
    </div>
  );
}
