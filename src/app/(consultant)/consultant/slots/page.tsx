import { Clock, Plus, Trash2, Calendar } from "lucide-react";

const existingSlots = [
  { id: 1, date: "Apr 10, 2026", time: "10:00 AM - 11:00 AM", booked: false },
  { id: 2, date: "Apr 10, 2026", time: "2:00 PM - 3:00 PM", booked: true, student: "Raj Kumar" },
  { id: 3, date: "Apr 11, 2026", time: "10:00 AM - 11:00 AM", booked: false },
  { id: 4, date: "Apr 11, 2026", time: "4:00 PM - 5:00 PM", booked: true, student: "Aditi Patel" },
  { id: 5, date: "Apr 12, 2026", time: "11:00 AM - 12:00 PM", booked: false },
  { id: 6, date: "Apr 12, 2026", time: "3:00 PM - 4:00 PM", booked: false },
];

export default function SlotsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Slots</h1>
          <p className="text-[#94A3B8]">Set your availability for consultations</p>
        </div>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Slot</button>
      </div>

      {/* Add Slot Form */}
      <div className="glass-card p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Create New Slot</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-[#94A3B8] mb-1.5 block">Date</label>
            <input type="date" className="input-field text-sm" />
          </div>
          <div>
            <label className="text-sm text-[#94A3B8] mb-1.5 block">Start Time</label>
            <input type="time" className="input-field text-sm" />
          </div>
          <div>
            <label className="text-sm text-[#94A3B8] mb-1.5 block">End Time</label>
            <input type="time" className="input-field text-sm" />
          </div>
        </div>
        <button className="btn-primary mt-4"><Plus className="w-4 h-4" /> Create Slot</button>
      </div>

      {/* Existing Slots */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Your Slots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {existingSlots.map((slot) => (
            <div key={slot.id} className={`p-4 rounded-lg border transition-all ${slot.booked ? "bg-[#10B981]/5 border-[#10B981]/30" : "bg-[#0F172A]/50 border-[#334155]/30 hover:border-[#6C3CE1]"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#8B5CF6]" /> {slot.date}
                </span>
                {!slot.booked && (
                  <button className="text-[#EF4444] hover:bg-[#EF4444]/10 p-1 rounded"><Trash2 className="w-4 h-4" /></button>
                )}
              </div>
              <p className="text-xs text-[#94A3B8] flex items-center gap-1"><Clock className="w-3 h-3" /> {slot.time}</p>
              {slot.booked ? (
                <span className="badge-success text-[10px] mt-2">Booked by {slot.student}</span>
              ) : (
                <span className="badge-primary text-[10px] mt-2">Available</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
