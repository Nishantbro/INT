import { DollarSign, TrendingUp, Calendar, ArrowUp, ArrowDown } from "lucide-react";

const monthlySummary = [
  { month: "April 2026", earnings: "₹12,500", sessions: 25, status: "current" },
  { month: "March 2026", earnings: "₹15,000", sessions: 30, status: "paid" },
  { month: "February 2026", earnings: "₹11,000", sessions: 22, status: "paid" },
  { month: "January 2026", earnings: "₹9,500", sessions: 19, status: "paid" },
];

const recentPayments = [
  { student: "Raj Kumar", amount: "₹500", date: "Apr 7", type: "Consultation" },
  { student: "Aditi Patel", amount: "₹500", date: "Apr 6", type: "Consultation" },
  { student: "Vikram Singh", amount: "₹500", date: "Apr 5", type: "Consultation" },
  { student: "Sneha Gupta", amount: "₹500", date: "Apr 4", type: "Consultation" },
  { student: "Amit Jain", amount: "₹500", date: "Apr 3", type: "Consultation" },
];

export default function EarningsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Earnings</h1>
        <p className="text-[#94A3B8]">Track your consultation earnings and payouts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <DollarSign className="w-5 h-5 text-[#10B981] mb-2" />
          <div className="text-2xl font-bold text-white">₹48,000</div>
          <div className="text-sm text-[#94A3B8]">Total Earnings</div>
        </div>
        <div className="stat-card">
          <TrendingUp className="w-5 h-5 text-[#0EA5E9] mb-2" />
          <div className="text-2xl font-bold text-white">₹12,500</div>
          <div className="text-sm text-[#94A3B8]">This Month</div>
          <div className="text-xs text-[#10B981] flex items-center gap-0.5 mt-1"><ArrowUp className="w-3 h-3" /> 12% vs last month</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-[#8B5CF6] mb-2" />
          <div className="text-2xl font-bold text-white">96</div>
          <div className="text-sm text-[#94A3B8]">Total Sessions</div>
        </div>
        <div className="stat-card">
          <DollarSign className="w-5 h-5 text-[#F59E0B] mb-2" />
          <div className="text-2xl font-bold text-white">₹500</div>
          <div className="text-sm text-[#94A3B8]">Avg. Per Session</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Monthly Summary</h3>
          <div className="space-y-3">
            {monthlySummary.map((m) => (
              <div key={m.month} className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50">
                <div>
                  <p className="text-sm font-medium text-white">{m.month}</p>
                  <p className="text-xs text-[#94A3B8]">{m.sessions} sessions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#10B981]">{m.earnings}</p>
                  <span className={`badge text-[10px] ${m.status === "current" ? "badge-warning" : "badge-success"}`}>{m.status === "current" ? "In Progress" : "Paid"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Payments</h3>
          <div className="space-y-3">
            {recentPayments.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">
                    {p.student.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{p.student}</p>
                    <p className="text-xs text-[#94A3B8]">{p.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#10B981]">{p.amount}</p>
                  <p className="text-xs text-[#64748B]">{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
