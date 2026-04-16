"use client";
import Sidebar from "@/components/shared/Sidebar";

export default function ConsultantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <Sidebar role="consultant" />
      <main className="flex-1 lg:ml-[260px] min-w-0 p-4 sm:p-6 lg:p-8 pt-16 lg:pt-6">
        {children}
      </main>
    </div>
  );
}
