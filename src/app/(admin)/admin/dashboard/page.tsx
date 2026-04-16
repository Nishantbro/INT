import { Users, Briefcase, FolderOpen, CreditCard, TrendingUp, DollarSign, Video, CalendarCheck, ArrowUp, ArrowDown, Eye } from "lucide-react";

const stats = [
  { label: "Total Users", value: "5,234", icon: Users, color: "#6C3CE1", change: "+124 this month", up: true },
  { label: "Active Internships", value: "48", icon: Briefcase, color: "#0EA5E9", change: "+5 this week", up: true },
  { label: "Projects Sold", value: "892", icon: FolderOpen, color: "#10B981", change: "+32 this month", up: true },
  { label: "Revenue", value: "₹4,85,000", icon: DollarSign, color: "#F59E0B", change: "+18% vs last month", up: true },
  { label: "Consultations", value: "340", icon: CalendarCheck, color: "#8B5CF6", change: "+28 this month", up: true },
  { label: "Total Reels", value: "156", icon: Video, color: "#EF4444", change: "+12 this week", up: true },
];

const recentPayments = [
  { user: "Raj Kumar", type: "Project Purchase", amount: "₹499", date: "Apr 7", status: "success" },
  { user: "Aditi Patel", type: "Consultation", amount: "₹500", date: "Apr 7", status: "success" },
  { user: "Vikram Singh", type: "Internship", amount: "₹2,999", date: "Apr 6", status: "success" },
  { user: "Sneha Gupta", type: "Project Purchase", amount: "₹799", date: "Apr 6", status: "pending" },
  { user: "Amit Jain", type: "Consultation", amount: "₹600", date: "Apr 5", status: "success" },
];

const recentUsers = [
  { name: "Raj Kumar", email: "raj@gmail.com", role: "student", date: "Apr 7" },
  { name: "Dr. Arun Sharma", email: "dr.sharma@gmail.com", role: "consultant", date: "Apr 6" },
  { name: "Aditi Patel", email: "aditi@gmail.com", role: "student", date: "Apr 6" },
  { name: "Priya Mehta", email: "priya@gmail.com", role: "consultant", date: "Apr 5" },
];

const roleColors: Record<string, string> = { student: "badge-primary", consultant: "badge-success", admin: "badge-warning" };
const paymentColors: Record<string, string> = { success: "badge-success", pending: "badge-warning", failed: "badge-danger" };

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
        <p className="text-[#94A3B8]">Platform overview and analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
            </div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-[#94A3B8] mb-1">{stat.label}</div>
            <div className="text-[10px] text-[#10B981] flex items-center gap-0.5">
              <ArrowUp className="w-3 h-3" /> {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Payments</h2>
          <div className="space-y-3">
            {recentPayments.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">
                    {p.user.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{p.user}</p>
                    <p className="text-xs text-[#94A3B8]">{p.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#10B981]">{p.amount}</p>
                  <span className={`badge text-[10px] ${paymentColors[p.status]}`}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Users */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-4">New Users</h2>
          <div className="space-y-3">
            {recentUsers.map((u) => (
              <div key={u.email} className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">
                    {u.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{u.name}</p>
                    <p className="text-xs text-[#94A3B8]">{u.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`badge text-[10px] ${roleColors[u.role]}`}>{u.role}</span>
                  <p className="text-xs text-[#64748B] mt-1">{u.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
