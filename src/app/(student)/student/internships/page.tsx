import Link from "next/link";
import { Briefcase, Clock, MapPin, Search, Filter, ChevronRight, ArrowRight } from "lucide-react";

const internships = [
  { id: "1", title: "Frontend Developer Intern", company: "TechCorp India", location: "Remote", type: "remote", duration: "3 months", stipend: "₹349/only", skills: ["React", "TypeScript", "Tailwind"], deadline: "Apr 30" },
  { id: "2", title: "Data Science Intern", company: "DataMinds AI", location: "Bangalore", type: "hybrid", duration: "6 months", stipend: "₹449/only", skills: ["Python", "ML", "Pandas"], deadline: "May 15" },
  { id: "3", title: "UI/UX Design Intern", company: "DesignHub", location: "Remote", type: "remote", duration: "2 months", stipend: "₹549/only", skills: ["Figma", "Adobe XD", "Research"], deadline: "Apr 25" },
  { id: "4", title: "Backend Developer Intern", company: "CloudSoft", location: "Delhi NCR", type: "onsite", duration: "4 months", stipend: "₹649/only", skills: ["Node.js", "MongoDB", "Docker"], deadline: "May 5" },
  { id: "5", title: "Mobile App Developer Intern", company: "AppVerse", location: "Remote", type: "remote", duration: "3 months", stipend: "₹749/only", skills: ["React Native", "Firebase"], deadline: "May 10" },
  { id: "6", title: "DevOps Intern", company: "InfraCloud", location: "Pune", type: "hybrid", duration: "6 months", stipend: "₹849/only", skills: ["AWS", "Docker", "CI/CD"], deadline: "May 20" },
];

const typeColors: Record<string, string> = { 
  remote: "bg-[#1E293B] text-white border border-[#334155]", 
  hybrid: "bg-[#334155] text-white border border-[#475569]", 
  onsite: "bg-white text-black" 
};

export default function InternshipsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Browse Internships</h1>
          <p className="text-[#94A3B8]">Find and apply to curated internship opportunities</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input type="text" placeholder="Search internships..." className="input-field !pl-10 text-sm !w-60" />
          </div>
          <button className="btn-secondary !py-2 !px-3"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Remote", "Hybrid", "Onsite", "Paid", "Unpaid"].map((f) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${f === "All" ? "bg-white text-black" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-white"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Internship Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {internships.map((item) => (
          <div key={item.id} className="glass-card p-5 group hover:border-[#6C3CE1]/50 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className={`badge text-[10px] ${typeColors[item.type]}`}>{item.type}</span>
              <span className="text-xs text-[#64748B] flex items-center gap-1"><Clock className="w-3 h-3" /> {item.deadline}</span>
            </div>
            <h3 className="text-base font-bold text-black mb-1 leading-tight">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-1 font-medium">{item.company}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mb-3"><MapPin className="w-3 h-3" /> {item.location} • {item.duration}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.skills.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs border border-black/5 font-semibold">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-black/5">
              <span className="text-black font-black text-sm">{item.stipend}</span>
              <Link href={`/student/internships/${item.id}`} className="text-sm text-black font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Apply <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
