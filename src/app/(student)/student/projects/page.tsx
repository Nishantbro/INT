import Link from "next/link";
import { FolderOpen, Search, Filter, Star, Download, ShoppingCart } from "lucide-react";

const projects = [
  { id: "1", title: "E-Commerce Platform", category: "Web Development", price: "₹499", tech: ["React", "Node.js", "MongoDB"], downloads: 120, rating: 4.8 },
  { id: "2", title: "AI Chatbot System", category: "Machine Learning", price: "₹799", tech: ["Python", "TensorFlow", "Flask"], downloads: 85, rating: 4.9 },
  { id: "3", title: "Hospital Management System", category: "Full Stack", price: "₹599", tech: ["Java", "Spring Boot", "MySQL"], downloads: 95, rating: 4.7 },
  { id: "4", title: "Social Media Dashboard", category: "Web Development", price: "₹399", tech: ["Next.js", "Tailwind", "Firebase"], downloads: 67, rating: 4.6 },
  { id: "5", title: "Expense Tracker App", category: "Mobile App", price: "₹349", tech: ["React Native", "Firebase"], downloads: 110, rating: 4.5 },
  { id: "6", title: "Portfolio Website Template", category: "Web Development", price: "₹199", tech: ["HTML", "CSS", "JavaScript"], downloads: 230, rating: 4.8 },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Project Store</h1>
          <p className="text-[#94A3B8]">Buy production-ready projects for your portfolio</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input type="text" placeholder="Search projects..." className="input-field !pl-10 text-sm !w-60" />
          </div>
          <button className="btn-secondary !py-2 !px-3"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Web Development", "Mobile App", "Machine Learning", "Full Stack", "Data Science"].map((f) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${f === "All" ? "bg-white text-black" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-white"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((item) => (
          <div key={item.id} className="glass-card overflow-hidden group hover:border-black/50 transition-all hover:-translate-y-1">
            <div className="h-36 bg-gray-100 border-b border-gray-200 flex items-center justify-center">
              <FolderOpen className="w-10 h-10 text-black/20 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-gray-100 text-black text-[10px] px-2 py-0.5 rounded border border-gray-200">{item.category}</span>
                <span className="flex items-center gap-1 text-xs text-black">
                  <Star className="w-3 h-3" fill="black" /> {item.rating}
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight">{item.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs border border-black/5 font-bold tracking-wide">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <div>
                  <span className="text-lg font-black text-black">{item.price}</span>
                  <span className="text-xs text-gray-400 ml-2"><Download className="w-3 h-3 inline" /> {item.downloads}</span>
                </div>
                <Link href={`/student/projects/${item.id}`} className="bg-white text-black hover:bg-gray-200 transition-colors rounded-lg text-xs font-semibold py-1.5 px-4 flex items-center gap-2">
                  <ShoppingCart className="w-3 h-3" /> Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
