import { Briefcase, Plus, Edit, Trash2, Eye, Search, ToggleLeft, ToggleRight } from "lucide-react";

const internships = [
  { id: 1, title: "Frontend Developer Intern", company: "TechCorp", type: "Remote", stipend: "₹15,000", apps: 124, active: true },
  { id: 2, title: "Data Science Intern", company: "DataMinds AI", type: "Hybrid", stipend: "₹20,000", apps: 89, active: true },
  { id: 3, title: "UI/UX Design Intern", company: "DesignHub", type: "Remote", stipend: "₹10,000", apps: 56, active: true },
  { id: 4, title: "Backend Developer Intern", company: "CloudSoft", type: "Onsite", stipend: "₹18,000", apps: 45, active: false },
  { id: 5, title: "Mobile App Developer", company: "AppVerse", type: "Remote", stipend: "₹12,000", apps: 78, active: true },
];

export default function AdminInternshipsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div><h1 className="text-2xl font-bold text-white mb-1">Manage Internships</h1><p className="text-[#94A3B8]">Create, edit, and manage internship listings</p></div>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Internship</button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Internship</th><th>Company</th><th>Type</th><th>Stipend</th><th>Applications</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {internships.map((item) => (
              <tr key={item.id}>
                <td className="font-medium text-white">{item.title}</td>
                <td>{item.company}</td>
                <td><span className="badge-primary text-[10px]">{item.type}</span></td>
                <td className="text-[#10B981] font-semibold">{item.stipend}</td>
                <td>{item.apps}</td>
                <td>
                  {item.active ? (
                    <span className="flex items-center gap-1 text-[#10B981] text-sm"><ToggleRight className="w-5 h-5" /> Active</span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#64748B] text-sm"><ToggleLeft className="w-5 h-5" /> Inactive</span>
                  )}
                </td>
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
