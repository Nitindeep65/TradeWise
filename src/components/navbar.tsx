'use client';

// no state needed currently
import Link from 'next/link';


export default function Navbar() {
  // navbar currently doesn't use an open state

  return (
    <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="text-2xl font-black tracking-tight">
        Trade<span className="text-emerald-400">Wise</span>
      </div>
      <ul className="hidden md:flex gap-12">
        <li><a href="#features" className="text-white/70 hover:text-emerald-400 transition-colors font-medium">Features</a></li>
        <li><a href="#pricing" className="text-white/70 hover:text-emerald-400 transition-colors font-medium">Pricing</a></li>
        <li><a href="#about" className="text-white/70 hover:text-emerald-400 transition-colors font-medium">About</a></li>
        <li><a href="#support" className="text-white/70 hover:text-emerald-400 transition-colors font-medium">Support</a></li>
      </ul>
      <Link href="/Signup" className="bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold hover:shadow-[0_10px_40px_rgba(52,211,153,0.4)] hover:-translate-y-0.5 transition-all">
        Get Started
      </Link>
    </nav>
  );
}
