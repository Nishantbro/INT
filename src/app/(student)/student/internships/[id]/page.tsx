import Link from "next/link";
import { ArrowLeft, Briefcase, Clock, MapPin, CheckCircle, Send, Building, DollarSign, Calendar, Users } from "lucide-react";

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href="/student/internships" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Internships
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge-success">Remote</span>
              <span className="badge-warning">Trending</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h1>
            <p className="text-[#94A3B8] flex items-center gap-2 mb-6">
              <Building className="w-4 h-4" /> TechCorp India
              <span className="text-[#334155]">•</span>
              <MapPin className="w-4 h-4" /> Remote
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Clock, label: "Duration", value: "3 Months" },
                { icon: DollarSign, label: "Stipend", value: "₹15,000/mo" },
                { icon: Calendar, label: "Deadline", value: "Apr 30, 2026" },
                { icon: Users, label: "Applicants", value: "124" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg bg-[#0F172A]/50 text-center">
                  <item.icon className="w-5 h-5 text-[#8B5CF6] mx-auto mb-1" />
                  <p className="text-xs text-[#94A3B8]">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">About the Internship</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
              We are looking for a passionate Frontend Developer Intern to join our team. You will work on building modern, responsive web applications using React.js and TypeScript. This is a great opportunity to gain real-world experience while working with experienced developers.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
            <ul className="space-y-2 mb-4">
              {["Proficiency in React.js and TypeScript", "Understanding of HTML5, CSS3, and responsive design", "Basic knowledge of Git and version control", "Strong problem-solving skills", "Good communication skills"].map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" /> {r}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Git", "REST APIs"].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-[#6C3CE1]/10 text-[#A78BFA] text-sm border border-[#6C3CE1]/20">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Apply */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Apply Now</h3>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Cover Letter</label>
                <textarea rows={5} placeholder="Why are you interested in this internship?" className="input-field text-sm resize-none" />
              </div>
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Resume (PDF)</label>
                <div className="border-2 border-dashed border-[#334155] rounded-lg p-6 text-center hover:border-[#6C3CE1] transition-colors cursor-pointer">
                  <p className="text-sm text-[#94A3B8]">Click to upload or drag & drop</p>
                  <p className="text-xs text-[#64748B] mt-1">PDF, max 5MB</p>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full justify-center !py-3">
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-white mb-3">About TechCorp India</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              TechCorp India is a leading software development company building innovative solutions for clients worldwide. Founded in 2018, with 200+ employees across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
