"use client";
import { useState, useEffect } from "react";
import { User as UserIcon, Mail, Phone, Building, BookOpen, Code, Save, CheckCircle2 } from "lucide-react";

export default function StudentProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    degree: "",
    skills: "",
    bio: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/user/profile");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setFormData({
            name: data.name || "",
            phone: data.phone || "",
            college: data.college || "",
            degree: data.degree || "",
            skills: data.skills || "",
            bio: data.bio || ""
          });
        }
      } catch (err) {
        console.error("Failed to fetch profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/user/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await res.json();
        throw new Error(data.message || "Failed to update profile");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B5CF6]"></div>
      </div>
    );
  }

  const initials = user?.name?.split(" ").map((n: string) => n[0]).join("") || "U";
  const memberSince = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Mar 2026";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">My Profile</h1>
        <p className="text-gray-500">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="glass-card p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-[#334155] border-2 border-[#475569] mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl uppercase">{initials}</div>
          <h2 className="text-xl font-bold text-black">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <span className="bg-[#1E293B] text-white text-[10px] px-3 py-1 rounded border border-[#334155] mt-2 inline-block capitalize">{user?.role}</span>
          <div className="mt-6 pt-6 border-t border-[#334155]/30 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Member Since</span>
              <span className="text-black font-bold">{memberSince}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Applications</span>
              <span className="text-black font-bold">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Purchases</span>
              <span className="text-black font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-lg font-bold text-black mb-6">Edit Profile</h3>
          
          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-3 rounded-lg text-sm mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Profile updated successfully!
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-6">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" value={user?.email} className="input-field !pl-10 text-sm opacity-50 cursor-not-allowed" disabled />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">College</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">Degree</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="input-field !pl-10 text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">Skills</label>
              <div className="relative">
                <Code className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="input-field !pl-10 text-sm"
                  placeholder="React, TypeScript, Python..."
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Separate skills with commas</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">Bio</label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="input-field text-sm resize-none"
              />
            </div>
            <button type="submit" disabled={saving} className="bg-white text-black hover:bg-gray-200 transition-colors rounded-lg font-semibold py-2.5 px-6 flex items-center justify-center gap-2 mt-4 disabled:opacity-50">
              <Save className="w-4 h-4" /> {saving ? "Saving Changes..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
