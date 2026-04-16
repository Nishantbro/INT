import { Clock, CheckCircle, XCircle, MessageSquare } from "lucide-react";

const bookings = [
  { student: "Raj Kumar", date: "Apr 10", time: "10:00 AM", topic: "Career Guidance", status: "confirmed", paid: "₹500" },
  { student: "Aditi Patel", date: "Apr 10", time: "2:00 PM", topic: "Resume Review", status: "confirmed", paid: "₹500" },
  { student: "Vikram Singh", date: "Apr 11", time: "4:00 PM", topic: "Interview Prep", status: "pending", paid: "₹500" },
  { student: "Sneha Gupta", date: "Apr 8", time: "11:00 AM", topic: "Career Switch", status: "completed", paid: "₹500" },
  { student: "Amit Jain", date: "Apr 7", time: "3:00 PM", topic: "Tech Mentoring", status: "completed", paid: "₹500" },
  { student: "Priya Das", date: "Apr 5", time: "10:00 AM", topic: "Study Abroad", status: "cancelled", paid: "₹500" },
];

const statusConfig: Record<string, { class: string }> = {
  confirmed: { class: "badge-success" },
  pending: { class: "badge-warning" },
  completed: { class: "badge-primary" },
  cancelled: { class: "badge-danger" },
};

export default function BookingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">My Bookings</h1>
        <p className="text-[#94A3B8]">Manage your consultation bookings</p>
      </div>

      <div className="flex gap-2 mb-6">
        {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map((f, i) => (
          <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "gradient-primary text-white" : "bg-[#1E293B] text-[#94A3B8] border border-[#334155]/50 hover:border-[#6C3CE1]"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead>
            <tr><th>Student</th><th>Date & Time</th><th>Topic</th><th>Amount</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.student + b.date}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">
                      {b.student.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="font-medium text-white">{b.student}</span>
                  </div>
                </td>
                <td className="flex items-center gap-1"><Clock className="w-3 h-3" /> {b.date}, {b.time}</td>
                <td>{b.topic}</td>
                <td className="text-[#10B981] font-semibold">{b.paid}</td>
                <td><span className={`badge text-[10px] ${statusConfig[b.status].class}`}>{b.status}</span></td>
                <td>
                  {(b.status === "confirmed" || b.status === "pending") && (
                    <button className="btn-primary text-xs !py-1 !px-2"><MessageSquare className="w-3 h-3" /> Chat</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
