"use client";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Heart, MessageCircle, Share2, Bookmark, Play, Eye, Star, ArrowRight, User, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const reels = [
  { id: 1, consultant: "Dr. Arun Sharma", expertise: "Career Guidance", title: "5 Tips to Ace Any Interview", likes: 1243, comments: 89, views: "5.2K", bookmarked: false },
  { id: 2, consultant: "Priya Mehta", expertise: "Resume Building", title: "Resume Mistakes That Cost You Jobs", likes: 987, comments: 56, views: "3.8K", bookmarked: true },
  { id: 3, consultant: "Rahul Verma", expertise: "Tech Interviews", title: "DSA Roadmap for Beginners", likes: 2100, comments: 134, views: "8.1K", bookmarked: false },
  { id: 4, consultant: "Sneha Reddy", expertise: "Study Abroad", title: "How I Got Into Stanford", likes: 3200, comments: 210, views: "12K", bookmarked: false },
  { id: 5, consultant: "Amit Joshi", expertise: "Tech Mentoring", title: "React vs Next.js - Which to Learn?", likes: 1560, comments: 98, views: "6.4K", bookmarked: true },
  { id: 6, consultant: "Dr. Kavita Singh", expertise: "Career Guidance", title: "When to Switch Your Career", likes: 890, comments: 45, views: "2.9K", bookmarked: false },
  { id: 7, consultant: "Dr. Arun Sharma", expertise: "Career Guidance", title: "Top 3 In-Demand Skills 2026", likes: 1800, comments: 120, views: "7.2K", bookmarked: false },
  { id: 8, consultant: "Priya Mehta", expertise: "Resume Building", title: "ATS-Friendly Resume in 5 Minutes", likes: 2400, comments: 156, views: "9.5K", bookmarked: false },
];

const categories = ["All", "Career Tips", "Interview Prep", "Resume Tips", "Tech Tutorial", "Study Abroad", "Motivation"];

export default function ReelsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedReels, setLikedReels] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Check if user is authenticated
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const toggleLike = (id: number) => {
    setLikedReels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24 min-h-screen bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/25 rounded-full px-4 py-1.5 mb-4">
              <Video className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-[#FBBF24] text-sm font-medium">Career Reels</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Watch & <span className="gradient-text">Learn</span>
            </h1>
            <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Short, powerful videos from industry experts - career tips, tech tutorials, interview hacks, and more.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all duration-250 ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-md border border-white"
                    : "bg-black/40 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="reel-card group cursor-pointer relative bg-black"
              >
                {/* Video Placeholder (Monochromatic) */}
                <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 border border-white/10">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 border border-white/10">
                  <Eye className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs text-white font-bold">{reel.views}</span>
                </div>

                {/* Right Side Actions (Instagram-style) - Pure White Icons */}
                <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleLike(reel.id); }}
                    className="flex flex-col items-center gap-1 group/like"
                  >
                    <Heart
                      className={`w-7 h-7 transition-all duration-200 ${
                        likedReels.has(reel.id) ? "text-white fill-white scale-110" : "text-white group-hover/like:scale-110"
                      }`}
                    />
                    <span className="text-xs text-white font-bold">{likedReels.has(reel.id) ? reel.likes + 1 : reel.likes}</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <span className="text-xs text-white font-bold">{reel.comments}</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                    <Share2 className="w-6 h-6 text-white" />
                  </button>
                  <button className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                    <Bookmark className={`w-6 h-6 transition-all ${reel.bookmarked ? "text-white fill-white" : "text-white"}`} />
                  </button>
                </div>

                {/* Bottom Overlay */}
                <div className="reel-overlay p-5 pt-20 bg-gradient-to-t from-black via-black/60 to-transparent">
                  {/* Consultant Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-sm font-black shrink-0 shadow-lg">
                      {reel.consultant.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black text-white truncate tracking-tight">{reel.consultant}</p>
                      <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">{reel.expertise}</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-white font-bold mb-5 leading-snug line-clamp-2 tracking-tight">{reel.title}</p>

                  {/* Action Button - Monochromatic */}
                  <Link
                    href="/signup/student"
                    className="w-full py-3 rounded-xl bg-white text-black text-xs font-black text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-xl uppercase tracking-widest"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
