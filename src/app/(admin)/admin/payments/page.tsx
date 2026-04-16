import { CreditCard, DollarSign, TrendingUp, Search, Download, ArrowUp } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "₹4,85,000", icon: DollarSign, color: "#10B981" },
  { label: "This Month", value: "₹62,500", icon: TrendingUp, color: "#0EA5E9" },
  { label: "Total Transactions", value: "1,234", icon: CreditCard, color: "#8B5CF6" },
  { label: "Avg. Transaction", value: "₹393", icon: ArrowUp, color: "#F59E0B" },
];

const payments = [
  { id: "PAY001", user: "Raj Kumar", type: "Project", item: "E-Commerce Platform", amount: "₹499", method: "UPI", status: "success", date: "Apr 7" },
  { id: "PAY002", user: "Aditi Patel", type: "Consultation", item: "Dr. Arun Sharma", amount: "₹500", method: "Card", status: "success", date: "Apr 7" },
  { id: "PAY003", user: "Vikram Singh", type: "Internship", item: "Frontend Dev Intern", amount: "₹2,999", method: "UPI", status: "success", date: "Apr 6" },
  { id: "PAY004", user: "Sneha Gupta", type: "Project", item: "AI Chatbot System", amount: "₹799", method: "Netbanking", status: "pending", date: "Apr 6" },
  { id: "PAY005", user: "Amit Jain", type: "Consultation", item: "Rahul Verma", amount: "₹600", method: "UPI", status: "success", date: "Apr 5" },
  { id: "PAY006", user: "Priya Das", type: "Project", item: "Portfolio Template", amount: "₹199", method: "Card", status: "failed", date: "Apr 5" },
];

const statusColors: Record<string, string> = { success: "badge-success", pending: "badge-warning", failed: "badge-danger" };
const typeColors: Record<string, string> = { Project: "badge-primary", Consultation: "badge-warning", Internship: "badge-success" };

export default function AdminPaymentsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div><h1 className="text-2xl font-bold text-white mb-1">Payment Reports</h1><p className="text-[#94A3B8]">Track all platform payments and revenue</p></div>
        <button className="btn-secondary text-sm"><Download className="w-4 h-4" /> Export CSV</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <s.icon className="w-5 h-5 mb-2" style={{ color: s.color }} />
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-sm text-[#94A3B8]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>ID</th><th>User</th><th>Type</th><th>Item</th><th>Amount</th><th>Method</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td className="font-mono text-xs text-[#8B5CF6]">{p.id}</td>
                <td className="font-medium text-white">{p.user}</td>
                <td><span className={`badge text-[10px] ${typeColors[p.type]}`}>{p.type}</span></td>
                <td className="text-sm">{p.item}</td>
                <td className="text-[#10B981] font-semibold">{p.amount}</td>
                <td>{p.method}</td>
                <td><span className={`badge text-[10px] ${statusColors[p.status]}`}>{p.status}</span></td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
