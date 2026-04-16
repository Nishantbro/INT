import { User, Mail, Phone, Briefcase, DollarSign, MessageSquare, Save, Star } from "lucide-react";

export default function ConsultantProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">My Profile</h1>
        <p className="text-[#94A3B8]">Manage your consultant profile</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl">AS</div>
          <h2 className="text-xl font-bold text-white">Dr. Arun Sharma</h2>
          <p className="text-sm text-[#94A3B8]">dr.sharma@gmail.com</p>
          <span className="badge-success mt-2 inline-block">Consultant</span>
          <div className="mt-6 pt-6 border-t border-[#334155]/30 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-[#94A3B8]">Rating</span><span className="flex items-center gap-1 text-white"><Star className="w-3 h-3 text-[#F59E0B]" fill="#F59E0B" /> 4.9</span></div>
            <div className="flex justify-between text-sm"><span className="text-[#94A3B8]">Sessions</span><span className="text-white">240</span></div>
            <div className="flex justify-between text-sm"><span className="text-[#94A3B8]">Earnings</span><span className="text-[#10B981]">₹48,000</span></div>
          </div>
        </div>
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Edit Profile</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Full Name</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" /><input type="text" defaultValue="Dr. Arun Sharma" className="input-field !pl-10 text-sm" /></div></div>
              <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Phone</label><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" /><input type="tel" defaultValue="9988776655" className="input-field !pl-10 text-sm" /></div></div>
            </div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Expertise</label><div className="relative"><Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" /><input type="text" defaultValue="Career Guidance" className="input-field !pl-10 text-sm" /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Hourly Rate (₹)</label><div className="relative"><DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" /><input type="number" defaultValue="500" className="input-field !pl-10 text-sm" /></div></div>
              <div><label className="text-sm text-[#94A3B8] mb-1.5 block">WhatsApp</label><div className="relative"><MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" /><input type="tel" defaultValue="919988776655" className="input-field !pl-10 text-sm" /></div></div>
            </div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Bio</label><textarea rows={4} defaultValue="10+ years in tech industry. Helped 500+ students land their dream jobs." className="input-field text-sm resize-none" /></div>
            <button type="submit" className="btn-primary !py-3"><Save className="w-4 h-4" /> Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
