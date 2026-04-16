import Link from "next/link";
import { Star, Search, Clock, ArrowRight, Video } from "lucide-react";

const consultants = [
  { id: "1", name: "Dr. Arun Sharma", expertise: "Career Guidance", rating: 4.9, sessions: 240, rate: "₹500/hr", bio: "10+ years in tech industry. Helped 500+ students land their dream jobs." },
  { id: "2", name: "Priya Mehta", expertise: "Resume Building", rating: 4.8, sessions: 180, rate: "₹400/hr", bio: "HR professional with experience at Google, Microsoft. Expert resume reviewer." },
  { id: "3", name: "Rahul Verma", expertise: "Tech Interviews", rating: 4.7, sessions: 310, rate: "₹600/hr", bio: "Ex-Amazon engineer. Interview coach specializing in DSA and system design." },
  { id: "4", name: "Sneha Reddy", expertise: "Study Abroad", rating: 4.9, sessions: 150, rate: "₹550/hr", bio: "MS from Stanford. Guides students on GRE, SOP, and university selection." },
  { id: "5", name: "Amit Joshi", expertise: "Tech Mentoring", rating: 4.6, sessions: 200, rate: "₹450/hr", bio: "Full-stack developer with 8 years experience. Mentors junior developers." },
  { id: "6", name: "Dr. Kavita Singh", expertise: "Career Guidance", rating: 4.8, sessions: 290, rate: "₹500/hr", bio: "Career counselor and psychologist. Specializes in career transitions." },
];

export default function ConsultationsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Expert Consultants</h1>
          <p className="text-[#94A3B8]">Book 1-on-1 sessions with industry professionals</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input type="text" placeholder="Search by name or expertise..." className="input-field !pl-10 text-sm !w-72" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Career Guidance", "Resume Building", "Tech Interviews", "Tech Mentoring", "Study Abroad"].map((f) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${f === "All" ? "bg-white text-black" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-white"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {consultants.map((c) => (
          <div key={c.id} className="glass-card p-5 group hover:border-[#6C3CE1]/50 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gray-100 border border-black/5 flex items-center justify-center text-black font-bold text-lg shrink-0">
                {c.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h3 className="text-base font-bold text-black">{c.name}</h3>
                <span className="bg-gray-50 text-gray-600 text-[10px] px-2 py-0.5 rounded border border-black/5 font-bold uppercase tracking-wide">{c.expertise}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed font-medium">{c.bio}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 font-bold">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-black" fill="black" /> {c.rating}</span>
              <span>{c.sessions} sessions</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-black/5">
              <span className="text-black font-black">{c.rate}</span>
              <Link href={`/student/consultations/book/${c.id}`} className="bg-black text-white hover:bg-gray-800 transition-colors rounded-lg text-xs font-bold py-2 px-4 flex items-center gap-2 uppercase tracking-wider">
                Book Now <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
