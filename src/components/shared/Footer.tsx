import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Twitter,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-black tracking-tight">
                Inturnship
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students with real-world internships, ready-made
              projects, and expert career consultations. Build your future,
              starting today.
            </p>
            <div className="flex gap-2.5">
              {[Instagram, MessageCircle, Twitter, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black hover:bg-black/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["Internships", "/#internships"],
                ["Projects", "/#projects"],
                ["Consultants", "/#consultants"],
                ["Reels", "/reels"],
                ["About Us", "/#about"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-600 text-sm hover:text-black transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships List */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Internships</h4>
            <ul className="space-y-3">
              {[
                ["Frontend Developer", "/signup/student"],
                ["Data Science", "/signup/student"],
                ["UI/UX Design", "/signup/student"],
                ["Backend Developer", "/signup/student"],
                ["Full Stack Engineer", "/signup/student"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-600 text-sm hover:text-black transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-black mt-0.5 shrink-0" />
                <span>hello@educonnect.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-black mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-black mt-0.5 shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Inturnship. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
