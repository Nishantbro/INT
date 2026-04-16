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
  BookOpen,
  Building,
} from "lucide-react";

export default function StudentSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    degree: "",
    year: "",
    role: "student"
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

      // Success - Redirect to login
      window.location.href = "/login?registered=success";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0F172A] lg:bg-white text-white lg:text-black">
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
            Start Your
            <br />
            <span className="text-black/50">Career Journey</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Create your student account and unlock access to internships, projects, expert consultations, and career reels.
          </p>
          <div className="space-y-4">
            {[
              "Apply to curated internships",
              "Buy ready-made projects",
              "Book expert consultations",
              "Watch career reels from experts",
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
            <h2 className="text-2xl font-bold text-white">Student Sign Up</h2>
          </div>
          <p className="text-[#94A3B8] mb-6">
            Already have an account?{" "}
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
                    placeholder="Raj Kumar"
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">College</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="IIT Delhi"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-[#94A3B8] mb-1.5 block">Degree</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    name="degree"
                    required
                    value={formData.degree}
                    onChange={handleChange}
                    placeholder="B.Tech CSE"
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Year</label>
              <select
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
                className="input-field text-sm appearance-none cursor-pointer"
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="passout">Passout</option>
              </select>
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
              {loading ? "Creating Account..." : "Create Student Account"}
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </button>
          </form>

          <p className="text-center text-sm text-[#64748B] mt-6">
            Want to join as a consultant?{" "}
            <Link href="/signup/consultant" className="text-[#8B5CF6] font-medium hover:underline">
              Consultant Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
