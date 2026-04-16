import Link from "next/link";
import { CalendarCheck, DollarSign, Star, Users, TrendingUp, Clock, Video, ArrowRight } from "lucide-react";

const stats = [
  { label: "Total Bookings", value: "120", icon: CalendarCheck, color: "#6C3CE1", change: "+8 this week" },
  { label: "Total Earnings", value: "₹45,000", icon: DollarSign, color: "#10B981", change: "+₹5,200 this month" },
  { label: "Avg. Rating", value: "4.9", icon: Star, color: "#F59E0B", change: "32 reviews" },
  { label: "Reel Views", value: "2.4K", icon: Video, color: "#0EA5E9", change: "+340 this week" },
];

const todayBookings = [
  { student: "Raj Kumar", time: "10:00 AM", topic: "Career Guidance", status: "confirmed" },
  { student: "Aditi Patel", time: "2:00 PM", topic: "Resume Review", status: "confirmed" },
  { student: "Vikram Singh", time: "4:00 PM", topic: "Interview Prep", status: "pending" },
];

const recentReviews = [
  { student: "Raj Kumar", rating: 5, comment: "Amazing session! Very helpful career advice." },
  { student: "Sneha Gupta", rating: 5, comment: "Best resume review I have ever had!" },
  { student: "Amit Jain", rating: 4, comment: "Good session, would recommend to others." },
];

export default function ConsultantDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome, Dr. Sharma! 👋</h1>
        <p className="text-[#94A3B8]">Here&apos;s your consulting activity overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Bookings */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Today&apos;s Bookings</h2>
            <Link href="/consultant/bookings" className="text-sm text-[#8B5CF6] hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {todayBookings.map((b) => (
              <div key={b.student} className="flex items-center justify-between p-4 rounded-lg bg-[#0F172A]/50 hover:bg-[#0F172A] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white text-sm font-bold">
                    {b.student.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{b.student}</p>
                    <p className="text-xs text-[#94A3B8]">{b.topic}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#94A3B8] flex items-center gap-1"><Clock className="w-3 h-3" /> {b.time}</span>
                  <span className={`badge text-[10px] ${b.status === "confirmed" ? "badge-success" : "badge-warning"}`}>{b.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Recent Reviews</h2>
          <div className="space-y-4">
            {recentReviews.map((r) => (
              <div key={r.student} className="p-3 rounded-lg bg-[#0F172A]/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{r.student}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[#F59E0B]" fill="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#94A3B8]">{r.comment}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#334155]/30 space-y-2">
            <Link href="/consultant/slots" className="sidebar-link text-sm">
              <Clock className="w-4 h-4" /> Manage Slots
            </Link>
            <Link href="/consultant/reels" className="sidebar-link text-sm">
              <Video className="w-4 h-4" /> Upload Reel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
