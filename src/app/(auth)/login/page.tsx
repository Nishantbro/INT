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
  ChevronDown,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"student" | "consultant">("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      // Redirect based on user role from API response
      const userRole = data.user.role;
      if (userRole === "admin") window.location.href = "/admin/dashboard";
      else if (userRole === "consultant") window.location.href = "/consultant/dashboard";
      else window.location.href = "/student/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0F172A] lg:bg-white text-white lg:text-black">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 relative items-center justify-center p-8 xl:p-12 border-r border-black/5">
        <div className="relative z-10 max-w-md text-left w-full">
          <Link href="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-black tracking-tight">
              Inturnship
            </span>
          </Link>
          <h1 className="text-4xl font-black text-black mb-4 leading-tight">
            Welcome Back!
            <br />
            <span className="text-black/50">Continue Learning.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Log in to access your internships, projects, consultations, and more.
            Your career journey continues here.
          </p>
          <div className="mt-12 space-y-4">
            {[
              "Access your Dashboard",
              "Track Applications & Purchases",
              "Book Expert Consultations",
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
        <div className="w-full max-w-md py-8 sm:py-0">
          {/* Mobile Logo */}
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

          <h2 className="text-2xl font-bold text-white mb-2">Log In</h2>
          <p className="text-gray-400 mb-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup/student" className="text-white font-bold hover:underline">
              Sign up
            </Link>
          </p>

          {/* Role Toggle */}
          <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-xl border border-white/10">
            {(["student", "consultant"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  role === r
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {r === "student" ? "Student" : "Consultant"}
              </button>
            ))}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-6">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input-field !pl-11"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field !pl-11 !pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/10 bg-white/5 accent-white"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-white font-bold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 transition-all font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log In"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#334155]" />
            <span className="text-xs text-[#64748B]">OR</span>
            <div className="flex-1 h-px bg-[#334155]" />
          </div>

          {/* Google Login */}
          <button className="w-full py-3 rounded-xl border border-[#334155] bg-[#1E293B] text-white text-sm font-medium flex items-center justify-center gap-3 hover:border-[#6C3CE1] transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
