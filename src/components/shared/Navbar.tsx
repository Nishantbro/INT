"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-black/5 shadow-sm"
          : "bg-white/80 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-black tracking-tight">
              Inturnship
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Features", href: "/#features" },
              { label: "Internships", href: "/#internships" },
              { label: "Projects", href: "/#projects" },
              { label: "Consultants", href: "/#consultants" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reels"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-black/5"
            >
              Reels
              <span className="bg-black text-[10px] px-2 py-0.5 rounded-full text-white font-semibold">
                NEW
              </span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="btn-secondary text-sm !py-2 !px-5"
            >
              Login
            </Link>
            <Link
              href="/signup/student"
              className="btn-primary text-sm !py-2 !px-5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-black hover:bg-black/5 transition-colors p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-50 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-white/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Menu panel */}
        <div
          className={`relative bg-white border-b border-black/10 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-4 py-5 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {[
              { label: "Features", href: "/#features" },
              { label: "Internships", href: "/#internships" },
              { label: "Projects", href: "/#projects" },
              { label: "Consultants", href: "/#consultants" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-600 hover:text-black px-4 py-3 rounded-md hover:bg-black/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reels"
              className="text-sm font-medium text-gray-600 hover:text-black flex items-center px-4 py-3 rounded-md hover:bg-black/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Reels
              <span className="bg-black text-[10px] px-2 py-0.5 rounded-full text-white font-semibold ml-2">
                NEW
              </span>
            </Link>

            <div className="pt-4 mt-2 border-t border-black/5 flex flex-col gap-2.5">
              <Link
                href="/login"
                className="btn-secondary text-center text-sm !py-2.5"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup/student"
                className="btn-primary text-center text-sm !py-2.5"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
