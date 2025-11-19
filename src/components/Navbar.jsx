import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Zagosa CRM</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Customers</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.zagosacrm.com/login" className="text-slate-200 hover:text-white text-sm">Sign in</a>
            <a href="https://app.zagosacrm.com/register" className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/20 hover:brightness-110 transition">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-slate-200">Features</a>
              <a href="#testimonials" className="text-slate-200">Customers</a>
              <a href="#pricing" className="text-slate-200">Pricing</a>
              <a href="#faq" className="text-slate-200">FAQ</a>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://app.zagosacrm.com/login" className="flex-1 text-center rounded-md border border-white/10 px-4 py-2 text-slate-200">Sign in</a>
              <a href="https://app.zagosacrm.com/register" className="flex-1 text-center rounded-md bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-white shadow">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
