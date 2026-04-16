import { CalendarCheck, Eye, Clock } from "lucide-react";

const consultations = [
  { student: "Raj Kumar", consultant: "Dr. Arun Sharma", date: "Apr 10", time: "10:00 AM", status: "confirmed", amount: "₹500" },
  { student: "Aditi Patel", consultant: "Priya Mehta", date: "Apr 10", time: "2:00 PM", status: "confirmed", amount: "₹400" },
  { student: "Vikram Singh", consultant: "Rahul Verma", date: "Apr 11", time: "4:00 PM", status: "pending", amount: "₹600" },
  { student: "Sneha Gupta", consultant: "Dr. Arun Sharma", date: "Apr 8", time: "11:00 AM", status: "completed", amount: "₹500" },
  { student: "Amit Jain", consultant: "Amit Joshi", date: "Apr 7", time: "3:00 PM", status: "completed", amount: "₹450" },
  { student: "Priya Das", consultant: "Sneha Reddy", date: "Apr 5", time: "10:00 AM", status: "cancelled", amount: "₹550" },
];

const statusColors: Record<string, string> = { confirmed: "badge-success", pending: "badge-warning", completed: "badge-primary", cancelled: "badge-danger" };

export default function AdminConsultationsPage() {
  return (
    <div>
      <div className="mb-8"><h1 className="text-2xl font-bold text-white mb-1">Manage Consultations</h1><p className="text-[#94A3B8]">Monitor all consultation bookings</p></div>
      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Student</th><th>Consultant</th><th>Date & Time</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {consultations.map((c, i) => (
              <tr key={i}>
                <td className="font-medium text-white">{c.student}</td>
                <td>{c.consultant}</td>
                <td className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.date}, {c.time}</td>
                <td className="text-[#10B981] font-semibold">{c.amount}</td>
                <td><span className={`badge text-[10px] ${statusColors[c.status]}`}>{c.status}</span></td>
                <td><button className="p-1.5 rounded-lg hover:bg-[#1E293B] text-[#94A3B8] hover:text-white"><Eye className="w-4 h-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
