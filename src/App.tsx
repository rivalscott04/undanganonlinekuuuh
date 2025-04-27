
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingInvitation from "./pages/WeddingInvitation";
import GuestList from "./pages/GuestList";
import AdminGuestManagement from "./pages/AdminGuestManagement";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEventSettings from "./pages/AdminEventSettings";
import AdminSettings from "./pages/AdminSettings";
import AdminMessages from "./pages/AdminMessages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/undangan" element={<WeddingInvitation />} />
          <Route path="/guests" element={<GuestList />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/guests" element={<AdminGuestManagement />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/events" element={<AdminEventSettings />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          {/* Redirect /not-found to root */}
          <Route path="/not-found" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

