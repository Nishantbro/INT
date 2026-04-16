import { Settings, Globe, CreditCard, Shield, Bell, Save, Mail } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8"><h1 className="text-2xl font-bold text-white mb-1">Settings</h1><p className="text-[#94A3B8]">Configure platform settings</p></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-[#8B5CF6]" /> General Settings</h3>
          <div className="space-y-4">
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Platform Name</label><input type="text" defaultValue="Inturnship" className="input-field text-sm" /></div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Tagline</label><input type="text" defaultValue="Kickstart Your Career With Real Experience" className="input-field text-sm" /></div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Contact Email</label><input type="email" defaultValue="hello@educonnect.com" className="input-field text-sm" /></div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Contact Phone</label><input type="tel" defaultValue="+91 98765 43210" className="input-field text-sm" /></div>
          </div>
        </div>

        {/* Payment */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5 text-[#10B981]" /> Payment Settings</h3>
          <div className="space-y-4">
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Razorpay Key ID</label><input type="text" defaultValue="rzp_live_xxxxxxxxxxxx" className="input-field text-sm font-mono" /></div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Razorpay Key Secret</label><input type="password" defaultValue="xxxxxxxxxxxxxxxx" className="input-field text-sm font-mono" /></div>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Payment Mode</label>
              <select className="input-field text-sm"><option>Live</option><option>Test / Sandbox</option></select>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-[#F59E0B]" /> Security</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Auto-approve student signups</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Require consultant approval</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Enable email verification</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Moderate reels before publish</span>
              <input type="checkbox" className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Bell className="w-5 h-5 text-[#0EA5E9]" /> Notifications</h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Email on new signup</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Email on new payment</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-[#0F172A]/50 cursor-pointer">
              <span className="text-sm text-white">Email on flagged reel</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#6C3CE1]" />
            </label>
            <div><label className="text-sm text-[#94A3B8] mb-1.5 block">Admin Email for Alerts</label><input type="email" defaultValue="admin@educonnect.com" className="input-field text-sm" /></div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="btn-primary !py-3 !px-8"><Save className="w-5 h-5" /> Save All Settings</button>
      </div>
    </div>
  );
}
