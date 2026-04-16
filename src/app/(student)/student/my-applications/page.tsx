import { Briefcase, Clock, CheckCircle, XCircle, Hourglass } from "lucide-react";

const applications = [
  { title: "Frontend Developer Intern", company: "TechCorp India", status: "pending", date: "Apr 7, 2026", type: "Remote" },
  { title: "Data Science Intern", company: "DataMinds AI", status: "accepted", date: "Apr 3, 2026", type: "Hybrid" },
  { title: "UI/UX Design Intern", company: "DesignHub", status: "rejected", date: "Mar 28, 2026", type: "Remote" },
  { title: "Backend Developer Intern", company: "CloudSoft", status: "pending", date: "Apr 6, 2026", type: "Onsite" },
  { title: "Mobile App Developer", company: "AppVerse", status: "accepted", date: "Mar 20, 2026", type: "Remote" },
];

const statusConfig: Record<string, { label: string; class: string; icon: typeof CheckCircle }> = {
  pending: { label: "Pending", class: "bg-[#1E293B] text-[#94A3B8] border border-[#334155]", icon: Hourglass },
  accepted: { label: "Accepted", class: "bg-white text-black", icon: CheckCircle },
  rejected: { label: "Rejected", class: "bg-[#334155] text-[#94A3B8] border border-[#475569]", icon: XCircle },
};

export default function MyApplicationsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">My Applications</h1>
        <p className="text-[#94A3B8]">Track the status of your internship applications</p>
      </div>

      <div className="flex gap-3 mb-6">
        {["All (5)", "Pending (2)", "Accepted (2)", "Rejected (1)"].map((f, i) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-white text-black" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-white"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Internship</th>
              <th>Company</th>
              <th>Type</th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const st = statusConfig[app.status];
              return (
                <tr key={app.title}>
                  <td className="font-bold text-black">{app.title}</td>
                  <td>{app.company}</td>
                  <td><span className="bg-gray-100 text-black text-[10px] px-2 py-0.5 rounded border border-black/10 font-bold uppercase tracking-wide">{app.type}</span></td>
                  <td className="flex items-center gap-1 text-gray-500"><Clock className="w-3 h-3" /> {app.date}</td>
                  <td>
                    <span className={`badge text-[10px] ${st.class}`}>
                      <st.icon className="w-3 h-3" /> {st.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
