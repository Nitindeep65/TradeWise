'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-400 opacity-15 blur-[120px] -top-48 -right-24 animate-float" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500 opacity-15 blur-[120px] -bottom-36 -left-24 animate-float-delayed" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-fuchsia-500 opacity-15 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-32 md:pt-48 pb-24 max-w-7xl mx-auto">
        <div className="inline-block px-5 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-semibold mb-8 animate-fade-in-up">
          🚀 Now with AI-powered insights
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 animate-fade-in-up-delay-1">
          Trade Smarter<br />
          <span className="bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
            With Intelligence
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay-2">
          Next-generation trading platform powered by artificial intelligence. Execute faster, analyze deeper, and profit smarter with real-time market intelligence.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-32 animate-fade-in-up-delay-3">
          <button className="bg-emerald-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_20px_60px_rgba(52,211,153,0.4)] hover:-translate-y-1 transition-all">
            Start Trading Free
          </button>
          <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all">
            Watch Demo →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 20s ease-in-out infinite;
          animation-delay: -10s;
        }
        
        .animate-float-slow {
          animation: float 20s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 1s ease-out 0.1s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
