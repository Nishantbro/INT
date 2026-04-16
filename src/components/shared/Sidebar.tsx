"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  Briefcase,
  FolderOpen,
  Users,
  CalendarCheck,
  ShoppingBag,
  FileText,
  User,
  Clock,
  DollarSign,
  Settings,
  CreditCard,
  Video,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

interface SidebarProps {
  role: "student" | "consultant" | "admin";
}

const menuItems = {
  student: [
    { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { label: "Internships", href: "/student/internships", icon: Briefcase },
    { label: "Projects", href: "/student/projects", icon: FolderOpen },
    { label: "Consultations", href: "/student/consultations", icon: Users },
    { label: "Reels", href: "/reels", icon: Video },
    { label: "My Applications", href: "/student/my-applications", icon: FileText },
    { label: "My Purchases", href: "/student/my-purchases", icon: ShoppingBag },
    { label: "Profile", href: "/student/profile", icon: User },
  ],
  consultant: [
    { label: "Dashboard", href: "/consultant/dashboard", icon: LayoutDashboard },
    { label: "My Slots", href: "/consultant/slots", icon: Clock },
    { label: "Bookings", href: "/consultant/bookings", icon: CalendarCheck },
    { label: "Upload Reel", href: "/consultant/reels", icon: Video },
    { label: "Earnings", href: "/consultant/earnings", icon: DollarSign },
    { label: "Profile", href: "/consultant/profile", icon: User },
  ],
  admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Internships", href: "/admin/internships", icon: Briefcase },
    { label: "Projects", href: "/admin/projects", icon: FolderOpen },
    { label: "Consultations", href: "/admin/consultations", icon: CalendarCheck },
    { label: "Reels", href: "/admin/reels", icon: Video },
    { label: "Payments", href: "/admin/payments", icon: CreditCard },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ],
};

const roleLabels = {
  student: "Student Panel",
  consultant: "Consultant Panel",
  admin: "Admin Panel",
};

const roleColors = {
  student: "bg-white text-black",
  consultant: "bg-[#1E293B] text-white border border-[#334155]",
  admin: "bg-[#334155] text-white",
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = menuItems[role];

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-lg bg-[#1E293B] border border-[#334155]/50 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen bg-[#0a0f1e] border-r border-[#334155]/40 z-40 transition-all duration-300 flex flex-col ${
          collapsed ? "w-[72px]" : "w-[260px]"
        } ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#334155]/40 shrink-0">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <div className="w-9 h-9 min-w-[36px] rounded-lg bg-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-black" />
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-white whitespace-nowrap tracking-tight">
                Inturnship
              </span>
            )}
          </Link>
          <div className="flex items-center gap-1">
            {/* Close button on mobile */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-[#94A3B8] hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Collapse toggle on desktop */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-[#94A3B8] hover:text-white transition-colors hidden lg:block p-1 rounded-md hover:bg-white/5"
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Role Badge */}
        {!collapsed && (
          <div className="px-4 py-3 shrink-0">
            <div
              className={`${roleColors[role]} rounded-lg px-3 py-2 text-center shadow-sm`}
            >
              <span className="text-xs font-semibold tracking-wide uppercase">
                {roleLabels[role]}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="px-3 py-2 space-y-0.5 overflow-y-auto flex-1 min-h-0">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-[#94A3B8] hover:bg-[#1E293B]/80 hover:text-white"
                }`}
              >
                <item.icon className={`w-5 h-5 min-w-[20px] ${isActive ? "text-black" : ""}`} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-[#334155]/30 shrink-0">
          <button
            onClick={async () => {
              try {
                await fetch("/api/auth/logout", { method: "POST" });
                window.location.href = "/";
              } catch (err) {
                console.error("Logout failed", err);
              }
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#EF4444] hover:bg-[#EF4444]/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5 min-w-[20px]" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
