"use client";
import Link from "next/link";
import {
  Briefcase,
  FolderOpen,
  Users,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  Video,
} from "lucide-react";

const statsData = [
  { label: "Applications", value: "12", icon: Briefcase, color: "#6C3CE1", change: "+3 this week" },
  { label: "Purchases", value: "5", icon: ShoppingBag, color: "#0EA5E9", change: "2 projects" },
  { label: "Consultations", value: "3", icon: Users, color: "#10B981", change: "1 upcoming" },
  { label: "Reels Watched", value: "48", icon: Video, color: "#F59E0B", change: "15 this week" },
];

const recentApplications = [
  { title: "Frontend Developer Intern", company: "TechCorp", status: "pending", date: "Apr 6" },
  { title: "Data Science Intern", company: "DataMinds AI", status: "accepted", date: "Apr 3" },
  { title: "UI/UX Design Intern", company: "DesignHub", status: "rejected", date: "Mar 28" },
  { title: "Backend Developer Intern", company: "CloudSoft", status: "pending", date: "Apr 7" },
];

const upcomingConsultations = [
  { consultant: "Dr. Arun Sharma", expertise: "Career Guidance", date: "Apr 10", time: "10:00 AM" },
  { consultant: "Priya Mehta", expertise: "Resume Building", date: "Apr 12", time: "2:00 PM" },
];

const statusColors: Record<string, string> = {
  pending: "badge-warning",
  accepted: "badge-success",
  rejected: "badge-danger",
};

import { useState, useEffect } from "react";

export default function StudentDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/user/profile");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
           // Redirect to login if not authenticated
           window.location.href = "/login";
        }
      } catch (err) {
        console.error("Failed to fetch profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B5CF6]"></div>
      </div>
    );
  }

  const firstName = user?.name?.split(" ")[0] || "User";
  const initials = user?.name?.split(" ").map((n: string) => n[0]).join("") || "U";

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome back, {firstName}! 👋</h1>
        <p className="text-[#94A3B8]">Here&apos;s what&apos;s happening with your applications and activities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsData.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <span className="text-xs text-[#94A3B8]">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-[#94A3B8]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Profile Completion */}
      <div className="glass-card p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white font-bold text-lg uppercase">
            {initials}
          </div>
          <div>
            <p className="text-white font-semibold">Complete your profile</p>
            <p className="text-sm text-[#94A3B8]">Add skills and resume to get better internship matches</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:w-32 h-2 bg-[#1E293B] rounded-full overflow-hidden">
            <div className="h-full w-[60%] bg-white rounded-full" />
          </div>
          <span className="text-sm text-[#94A3B8]">60%</span>
          <Link href="/student/profile" className="text-sm text-white font-medium whitespace-nowrap hover:underline">
            Complete →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Applications</h2>
            <Link href="/student/my-applications" className="text-sm text-[#94A3B8] hover:text-white hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {recentApplications.map((app) => (
              <div key={app.title} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center border border-black/5">
                    <Briefcase className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">{app.title}</p>
                    <p className="text-xs text-gray-500 font-medium">{app.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{app.date}</span>
                  <span className={`badge text-[10px] ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Consultations */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-black">Upcoming Sessions</h2>
            <Link href="/student/consultations" className="text-sm text-gray-500 hover:text-black hover:underline">
              Book New
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingConsultations.map((c) => (
              <div key={c.consultant} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 border border-black/10 flex items-center justify-center text-black text-sm font-black">
                    {c.consultant.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">{c.consultant}</p>
                    <p className="text-xs text-gray-500">{c.expertise}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.date}</span>
                  <span>{c.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-[#334155]/30 space-y-2">
            <Link href="/student/internships" className="sidebar-link text-sm hover:bg-[#1E293B] rounded-lg p-2 transition-colors">
              <Briefcase className="w-4 h-4" /> Browse Internships
            </Link>
            <Link href="/student/projects" className="sidebar-link text-sm hover:bg-[#1E293B] rounded-lg p-2 transition-colors">
              <FolderOpen className="w-4 h-4" /> Buy Projects
            </Link>
            <Link href="/reels" className="sidebar-link text-sm hover:bg-[#1E293B] rounded-lg p-2 transition-colors">
              <Video className="w-4 h-4" /> Watch Reels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
