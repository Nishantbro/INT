import Link from "next/link";
import { ArrowLeft, Star, Download, CheckCircle, ShoppingCart, Shield, FolderOpen, Code, Layers } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href="/student/projects" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card overflow-hidden">
            <div className="h-56 bg-gradient-to-br from-[#6C3CE1]/20 to-[#0EA5E9]/20 flex items-center justify-center">
              <FolderOpen className="w-16 h-16 text-[#6C3CE1]/30" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-primary">Web Development</span>
                <span className="flex items-center gap-1 text-sm text-[#F59E0B]">
                  <Star className="w-4 h-4" fill="#F59E0B" /> 4.8 (32 reviews)
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">E-Commerce Platform</h1>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                A complete e-commerce platform with product catalog, shopping cart, user authentication, payment integration (Razorpay), order management, and admin dashboard. Built with modern technologies and best practices. Perfect for college projects or starting your own online store.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">What&apos;s Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {["Complete source code", "Database schema", "API documentation", "Deployment guide", "12 months free updates", "Email support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React 18", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS", "JWT Auth", "Cloudinary"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-[#6C3CE1]/10 text-[#A78BFA] text-sm border border-[#6C3CE1]/20">{t}</span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Code, title: "Clean Code", desc: "Well-structured, documented" },
                  { icon: Layers, title: "Full Stack", desc: "Frontend + Backend + DB" },
                  { icon: Shield, title: "Secure", desc: "JWT Auth, helmet, CORS" },
                  { icon: Download, title: "Easy Setup", desc: "Docker + README guide" },
                ].map((f) => (
                  <div key={f.title} className="p-3 rounded-lg bg-[#0F172A]/50 flex items-start gap-3">
                    <f.icon className="w-5 h-5 text-[#8B5CF6] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">{f.title}</p>
                      <p className="text-xs text-[#94A3B8]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buy Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-6 sticky top-6">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">₹499</span>
              <span className="text-sm text-[#64748B] line-through ml-2">₹999</span>
              <span className="badge-success ml-2">50% OFF</span>
            </div>
            <button className="btn-primary w-full justify-center !py-3.5 mb-3">
              <ShoppingCart className="w-5 h-5" /> Buy Now
            </button>
            <p className="text-xs text-[#64748B] text-center mb-4">Secure payment • Instant download</p>
            <div className="space-y-3 pt-4 border-t border-[#334155]/30">
              {[
                { label: "Downloads", value: "120+" },
                { label: "Last Updated", value: "Apr 2, 2026" },
                { label: "File Size", value: "45 MB" },
                { label: "Format", value: "ZIP (Source Code)" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-[#94A3B8]">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
