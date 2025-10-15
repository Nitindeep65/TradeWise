
export default function Stats() {
  const stats = [
    { number: '500K+', label: 'Active Traders' },
    { number: '$2.5B', label: 'Daily Volume' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6 -mt-16 relative z-10 animate-fade-in-up-delay-4">
      {stats.map((stat, i) => (
        <div 
          key={i}
          className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/5 hover:border-emerald-400/30 hover:-translate-y-2 transition-all group"
        >
          <div className="text-5xl font-black text-emerald-400 tracking-tighter mb-2">
            {stat.number}
          </div>
          <div className="text-white/50 text-sm">{stat.label}</div>
        </div>
      ))}

   
    </div>
  );
}
