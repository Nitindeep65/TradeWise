"use client";
export default function CTA() {
  return (
    <section className="relative px-6 py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-emerald-400/15 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
          Ready To Level Up?
        </h2>
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          Join 500,000+ traders whove already discovered the edge that AI-powered trading provides. Start your journey today.
        </p>
        <button className="bg-emerald-400 text-black px-12 py-5 rounded-xl font-bold text-lg hover:shadow-[0_20px_60px_rgba(52,211,153,0.4)] hover:-translate-y-1 transition-all">
          Create Free Account
        </button>
      </div>
    </section>
  );
}
