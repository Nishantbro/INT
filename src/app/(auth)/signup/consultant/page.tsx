"use client";
import Link from "next/link";
import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  Briefcase,
  DollarSign,
  MessageSquare,
  FileText,
} from "lucide-react";

export default function ConsultantSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    expertise: "",
    rate: "",
    whatsapp: "",
    bio: "",
    role: "consultant"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      // Success
      window.location.href = "/login?registered=success";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0F172A] lg:bg-white text-white lg:text-black">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-8 xl:p-12 bg-gray-50 border-r border-black/5">
        <div className="relative z-10 max-w-md">
          <Link href="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-black tracking-tight">
              Inturnship
            </span>
          </Link>
          <h1 className="text-4xl font-black text-black mb-4 leading-tight">
            Share Your
            <br />
            <span className="text-black/50">Expertise</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Join as a consultant and help students grow. Set your schedule, share reels, and earn while making a difference.
          </p>
          <div className="space-y-4">
            {[
              "Set your own consultation rates",
              "Upload career reels for students",
              "Flexible scheduling - you decide when",
              "Get paid securely via Razorpay",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>
                <span className="text-sm font-semibold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5 sm:p-8 lg:p-12 bg-[#0F172A] overflow-y-auto">
        <div className="w-full max-w-md py-8 sm:py-4">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Inturnship
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-white">Consultant Sign Up</h2>
          </div>
          <p className="text-[#94A3B8] mb-6">
            Already registered?{" "}
            <Link href="/login" className="text-[#8B5CF6] font-medium hover:underline">
              Log in
            </Link>
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-6">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. Sharma"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input-field !pl-10 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Area of Expertise</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <select
                  name="expertise"
                  required
                  value={formData.expertise}
                  onChange={handleChange}
                  className="input-field !pl-10 text-sm appearance-none cursor-pointer"
                >
                  <option value="">Select Expertise</option>
                  <option value="career">Career Guidance</option>
                  <option value="resume">Resume Building</option>
                  <option value="interview">Interview Preparation</option>
                  <option value="tech">Tech Mentoring</option>
                  <option value="abroad">Study Abroad</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Hourly Rate (₹)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="number"
                    name="rate"
                    required
                    value={formData.rate}
                    onChange={handleChange}
                    placeholder="500"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">WhatsApp Number</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="919876543210"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Short Bio</label>
              <textarea
                name="bio"
                required
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell students about your experience and how you can help..."
                className="input-field text-sm resize-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 8 characters"
                  className="input-field !pl-10 !pr-10 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded border-[#334155] bg-[#1E293B] accent-[#6C3CE1]"
              />
              <span className="text-xs text-[#94A3B8]">
                I agree to the{" "}
                <a href="#" className="text-[#8B5CF6] hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-[#8B5CF6] hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 transition-all font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Consultant Account"}
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </button>
          </form>

          <p className="text-center text-sm text-[#64748B] mt-6">
            Want to join as a student?{" "}
            <Link href="/signup/student" className="text-[#8B5CF6] font-medium hover:underline">
              Student Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
