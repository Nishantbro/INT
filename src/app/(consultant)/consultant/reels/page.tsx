import { Video, Upload, Eye, Heart, Trash2, Plus } from "lucide-react";

const myReels = [
  { id: 1, title: "5 Tips to Ace Your Interview", views: 1200, likes: 89, date: "Apr 5" },
  { id: 2, title: "Resume Do's and Don'ts", views: 890, likes: 67, date: "Apr 2" },
  { id: 3, title: "How to Choose Your Career Path", views: 340, likes: 28, date: "Mar 28" },
];

export default function ConsultantReelsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">My Reels</h1>
          <p className="text-[#94A3B8]">Upload short videos for students to discover you</p>
        </div>
      </div>

      {/* Upload Form */}
      <div className="glass-card p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#F59E0B]" /> Upload New Reel
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="border-2 border-dashed border-[#334155] rounded-xl p-10 text-center hover:border-[#F59E0B] transition-colors cursor-pointer mb-4">
              <Video className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
              <p className="text-sm text-[#94A3B8]">Click to upload video</p>
              <p className="text-xs text-[#64748B] mt-1">MP4, MOV • Max 60 seconds • Max 50MB</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Reel Title</label>
              <input type="text" placeholder="e.g. 5 Tips to Ace Your Interview" className="input-field text-sm" />
            </div>
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Description</label>
              <textarea rows={3} placeholder="Short description of the reel" className="input-field text-sm resize-none" />
            </div>
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Category</label>
              <select className="input-field text-sm">
                <option value="">Select Category</option>
                <option value="career">Career Tips</option>
                <option value="interview">Interview Prep</option>
                <option value="resume">Resume Tips</option>
                <option value="tech">Tech Tutorial</option>
                <option value="motivation">Motivation</option>
              </select>
            </div>
            <button className="btn-primary !py-3 w-full justify-center">
              <Upload className="w-4 h-4" /> Upload Reel
            </button>
          </div>
        </div>
      </div>

      {/* My Reels List */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Published Reels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myReels.map((reel) => (
            <div key={reel.id} className="rounded-xl bg-[#0F172A]/50 border border-[#334155]/30 overflow-hidden group">
              <div className="aspect-[9/16] max-h-[280px] bg-gradient-to-br from-[#F59E0B]/10 to-[#6C3CE1]/10 flex items-center justify-center">
                <Video className="w-10 h-10 text-[#64748B]" />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium text-white mb-2">{reel.title}</h4>
                <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {reel.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {reel.likes}</span>
                  <span>{reel.date}</span>
                </div>
                <button className="text-xs text-[#EF4444] mt-3 flex items-center gap-1 hover:underline">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
