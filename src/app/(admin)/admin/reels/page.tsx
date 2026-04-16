import { Video, Eye, Trash2, Ban, CheckCircle, Heart } from "lucide-react";

const reels = [
  { id: 1, title: "5 Tips to Ace Your Interview", consultant: "Dr. Arun Sharma", views: 5200, likes: 1243, status: "active", date: "Apr 5" },
  { id: 2, title: "Resume Mistakes That Cost You Jobs", consultant: "Priya Mehta", views: 3800, likes: 987, status: "active", date: "Apr 4" },
  { id: 3, title: "DSA Roadmap for Beginners", consultant: "Rahul Verma", views: 8100, likes: 2100, status: "active", date: "Apr 3" },
  { id: 4, title: "How I Got Into Stanford", consultant: "Sneha Reddy", views: 12000, likes: 3200, status: "active", date: "Apr 2" },
  { id: 5, title: "Inappropriate Content", consultant: "Unknown", views: 150, likes: 5, status: "flagged", date: "Apr 6" },
  { id: 6, title: "Top 3 In-Demand Skills 2026", consultant: "Dr. Arun Sharma", views: 7200, likes: 1800, status: "active", date: "Apr 1" },
];

const statusColors: Record<string, string> = { active: "badge-success", flagged: "badge-danger", inactive: "badge-warning" };

export default function AdminReelsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Manage Reels</h1>
        <p className="text-[#94A3B8]">Review, approve, and moderate consultant reels</p>
      </div>

      <div className="flex gap-2 mb-6">
        {["All (6)", "Active (5)", "Flagged (1)"].map((f, i) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "gradient-primary text-white" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-[#6C3CE1]"}`}>{f}</button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Reel</th><th>Consultant</th><th>Views</th><th>Likes</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {reels.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-12 rounded bg-gradient-to-br from-[#F59E0B]/20 to-[#6C3CE1]/20 flex items-center justify-center"><Video className="w-4 h-4 text-[#64748B]" /></div>
                    <span className="font-medium text-white text-sm">{r.title}</span>
                  </div>
                </td>
                <td>{r.consultant}</td>
                <td className="flex items-center gap-1"><Eye className="w-3 h-3" /> {r.views.toLocaleString()}</td>
                <td className="flex items-center gap-1"><Heart className="w-3 h-3 text-red-400" /> {r.likes.toLocaleString()}</td>
                <td>{r.date}</td>
                <td><span className={`badge text-[10px] ${statusColors[r.status]}`}>{r.status}</span></td>
                <td>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-[#1E293B] text-[#94A3B8] hover:text-white"><Eye className="w-4 h-4" /></button>
                    {r.status === "flagged" && <button className="p-1.5 rounded-lg hover:bg-[#10B981]/10 text-[#10B981]"><CheckCircle className="w-4 h-4" /></button>}
                    <button className="p-1.5 rounded-lg hover:bg-[#EF4444]/10 text-[#EF4444]"><Trash2 className="w-4 h-4" /></button>
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
