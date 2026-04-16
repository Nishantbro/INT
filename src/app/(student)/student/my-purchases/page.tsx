import { Download, ShoppingBag, Clock, CreditCard } from "lucide-react";

const purchases = [
  { title: "E-Commerce Platform", category: "Web Development", price: "₹499", date: "Apr 5, 2026", type: "project" },
  { title: "Frontend Developer Intern", category: "Internship", price: "₹2,999", date: "Apr 3, 2026", type: "internship" },
  { title: "AI Chatbot System", category: "Machine Learning", price: "₹799", date: "Mar 28, 2026", type: "project" },
  { title: "Consultation - Dr. Arun Sharma", category: "Career Guidance", price: "₹500", date: "Mar 25, 2026", type: "consultation" },
  { title: "Portfolio Website Template", category: "Web Development", price: "₹199", date: "Mar 20, 2026", type: "project" },
];

const typeColors: Record<string, string> = { 
  project: "bg-[#1E293B] text-white border border-[#334155]", 
  internship: "bg-white text-black", 
  consultation: "bg-[#334155] text-white border border-[#475569]" 
};

export default function MyPurchasesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">My Purchases</h1>
        <p className="text-[#94A3B8]">View your purchase history and download projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="stat-card">
          <ShoppingBag className="w-5 h-5 text-white mb-2" />
          <div className="text-2xl font-bold text-white">5</div>
          <div className="text-sm text-[#94A3B8]">Total Purchases</div>
        </div>
        <div className="stat-card">
          <CreditCard className="w-5 h-5 text-white mb-2" />
          <div className="text-2xl font-bold text-white">₹4,996</div>
          <div className="text-sm text-[#94A3B8]">Total Spent</div>
        </div>
        <div className="stat-card">
          <Download className="w-5 h-5 text-white mb-2" />
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-sm text-[#94A3B8]">Projects Downloaded</div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr key={p.title}>
                 <td className="font-bold text-black">{p.title}</td>
                 <td><span className={`badge text-[10px] ${typeColors[p.type]}`}>{p.type}</span></td>
                 <td>{p.category}</td>
                 <td className="text-black font-black">{p.price}</td>
                 <td className="flex items-center gap-1 text-gray-500"><Clock className="w-3 h-3" /> {p.date}</td>
                <td>
                  {p.type === "project" ? (
                    <button className="bg-white text-black hover:bg-gray-200 transition-colors rounded-lg text-xs font-semibold py-1 px-3 flex items-center gap-2"><Download className="w-3 h-3" /> Download</button>
                  ) : (
                    <span className="text-xs text-[#64748B]">-</span>
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
