
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("to");

  useEffect(() => {
    // If no slug parameter, show a message
    if (!slug) {
      navigate("/not-found");
      return;
    }

    // Validate guest from database (to be implemented)
    navigate(`/undangan?to=${encodeURIComponent(slug)}`);
  }, [slug, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-retirement-light p-4">
      <div className="text-center">
        <div className="w-12 h-12 border-t-4 border-retirement rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">Memuat undangan...</p>
      </div>
    </div>
  );
}
