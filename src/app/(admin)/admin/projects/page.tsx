import { FolderOpen, Plus, Edit, Trash2, Eye, Download } from "lucide-react";

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "Web Dev", price: "₹499", sales: 120, revenue: "₹59,880", active: true },
  { id: 2, title: "AI Chatbot System", category: "ML", price: "₹799", sales: 85, revenue: "₹67,915", active: true },
  { id: 3, title: "Hospital Management", category: "Full Stack", price: "₹599", sales: 95, revenue: "₹56,905", active: true },
  { id: 4, title: "Social Media Dashboard", category: "Web Dev", price: "₹399", sales: 67, revenue: "₹26,733", active: true },
  { id: 5, title: "Portfolio Template", category: "Web Dev", price: "₹199", sales: 230, revenue: "₹45,770", active: false },
];

export default function AdminProjectsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div><h1 className="text-2xl font-bold text-white mb-1">Manage Projects</h1><p className="text-[#94A3B8]">Add, edit, and manage project store</p></div>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Project</button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Project</th><th>Category</th><th>Price</th><th>Sales</th><th>Revenue</th><th>Actions</th></tr></thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td className="font-medium text-white">{p.title}</td>
                <td><span className="badge-primary text-[10px]">{p.category}</span></td>
                <td className="text-white font-semibold">{p.price}</td>
                <td><span className="flex items-center gap-1"><Download className="w-3 h-3" /> {p.sales}</span></td>
                <td className="text-[#10B981] font-semibold">{p.revenue}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-[#1E293B] text-[#94A3B8] hover:text-white"><Eye className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-[#0EA5E9]/10 text-[#0EA5E9]"><Edit className="w-4 h-4" /></button>
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
