import Link from "next/link";
import { ArrowLeft, Star, Clock, Calendar, CreditCard, CheckCircle } from "lucide-react";

const availableSlots = [
  { date: "Apr 10, 2026", time: "10:00 AM - 11:00 AM", available: true },
  { date: "Apr 10, 2026", time: "2:00 PM - 3:00 PM", available: true },
  { date: "Apr 11, 2026", time: "10:00 AM - 11:00 AM", available: false },
  { date: "Apr 11, 2026", time: "4:00 PM - 5:00 PM", available: true },
  { date: "Apr 12, 2026", time: "11:00 AM - 12:00 PM", available: true },
  { date: "Apr 12, 2026", time: "3:00 PM - 4:00 PM", available: true },
];

export default function BookConsultationPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href="/student/consultations" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Consultants
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consultant Info */}
        <div className="glass-card p-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">AS</div>
            <h2 className="text-xl font-bold text-white">Dr. Arun Sharma</h2>
            <span className="badge-primary mt-2">Career Guidance</span>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-[#94A3B8]">Rating</span>
              <span className="flex items-center gap-1 text-white"><Star className="w-4 h-4 text-[#F59E0B]" fill="#F59E0B" /> 4.9</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94A3B8]">Sessions</span>
              <span className="text-white">240+</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#94A3B8]">Rate</span>
              <span className="text-[#10B981] font-semibold">₹500/hr</span>
            </div>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            10+ years in tech industry. Former engineering manager at Flipkart. Helped 500+ students land their dream jobs at FAANG companies.
          </p>
        </div>

        {/* Slot Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#8B5CF6]" /> Select a Time Slot
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableSlots.map((slot, i) => (
                <button
                  key={i}
                  disabled={!slot.available}
                  className={`p-4 rounded-lg text-left transition-all ${
                    slot.available
                      ? "bg-[#0F172A]/50 border border-[#334155]/30 hover:border-[#6C3CE1] hover:bg-[#6C3CE1]/5 cursor-pointer"
                      : "bg-[#0F172A]/30 border border-[#334155]/20 opacity-40 cursor-not-allowed"
                  }`}
                >
                  <p className="text-sm font-medium text-white">{slot.date}</p>
                  <p className="text-xs text-[#94A3B8] flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> {slot.time}
                  </p>
                  {!slot.available && <span className="text-[10px] text-[#EF4444]">Booked</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Booking Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#94A3B8]">Consultant</span>
                <span className="text-white">Dr. Arun Sharma</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#94A3B8]">Slot</span>
                <span className="text-white">Select a slot above</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#94A3B8]">Duration</span>
                <span className="text-white">1 Hour</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-[#334155]/30">
                <span className="text-white font-semibold">Total</span>
                <span className="text-[#10B981] font-bold text-lg">₹500</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-[#94A3B8] mb-1.5 block">Notes for consultant (optional)</label>
              <textarea rows={3} placeholder="What would you like to discuss?" className="input-field text-sm resize-none mb-4" />
            </div>
            <button className="btn-primary w-full justify-center !py-3.5">
              <CreditCard className="w-5 h-5" /> Pay ₹500 & Book
            </button>
            <p className="text-xs text-[#64748B] text-center mt-3">Secure payment via Razorpay • Meeting details sent via email</p>
          </div>
        </div>
      </div>
    </div>
  );
}
