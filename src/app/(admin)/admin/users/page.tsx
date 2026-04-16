import { Users, Search, Shield, Ban, CheckCircle, Eye } from "lucide-react";

const users = [
  { name: "Raj Kumar", email: "raj@gmail.com", role: "student", status: "active", joined: "Mar 15", purchases: 5 },
  { name: "Dr. Arun Sharma", email: "dr.sharma@gmail.com", role: "consultant", status: "active", joined: "Feb 20", purchases: 0 },
  { name: "Aditi Patel", email: "aditi@gmail.com", role: "student", status: "active", joined: "Mar 28", purchases: 3 },
  { name: "Priya Mehta", email: "priya@gmail.com", role: "consultant", status: "pending", joined: "Apr 2", purchases: 0 },
  { name: "Vikram Singh", email: "vikram@gmail.com", role: "student", status: "banned", joined: "Jan 10", purchases: 1 },
  { name: "Sneha Reddy", email: "sneha@gmail.com", role: "consultant", status: "active", joined: "Mar 5", purchases: 0 },
  { name: "Amit Jain", email: "amit@gmail.com", role: "student", status: "active", joined: "Apr 5", purchases: 2 },
];

const roleColors: Record<string, string> = { student: "badge-primary", consultant: "badge-success", admin: "badge-warning" };
const statusColors: Record<string, string> = { active: "badge-success", pending: "badge-warning", banned: "badge-danger" };

export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div><h1 className="text-2xl font-bold text-white mb-1">Manage Users</h1><p className="text-[#94A3B8]">View and manage all platform users</p></div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input type="text" placeholder="Search users..." className="input-field !pl-10 text-sm !w-64" />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {["All (7)", "Students (4)", "Consultants (3)", "Active (5)", "Pending (1)", "Banned (1)"].map((f, i) => (
          <button key={f} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${i === 0 ? "gradient-primary text-white" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-[#6C3CE1]"}`}>{f}</button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Joined</th><th>Purchases</th><th>Actions</th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">{u.name.split(" ").map(n => n[0]).join("")}</div>
                    <div><p className="text-sm font-medium text-white">{u.name}</p><p className="text-xs text-[#64748B]">{u.email}</p></div>
                  </div>
                </td>
                <td><span className={`badge text-[10px] ${roleColors[u.role]}`}>{u.role}</span></td>
                <td><span className={`badge text-[10px] ${statusColors[u.status]}`}>{u.status}</span></td>
                <td>{u.joined}</td>
                <td>{u.purchases}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                    {u.status !== "active" && <button className="p-1.5 rounded-lg hover:bg-[#10B981]/10 text-[#10B981] transition-colors" title="Approve"><CheckCircle className="w-4 h-4" /></button>}
                    {u.status === "active" && <button className="p-1.5 rounded-lg hover:bg-[#EF4444]/10 text-[#EF4444] transition-colors" title="Ban"><Ban className="w-4 h-4" /></button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
