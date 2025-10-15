"use client";
import FeatureCard from './featurecard';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Execution',
      description: 'Sub-millisecond order execution with institutional-grade infrastructure. Your trades execute at the speed of thought with zero lag.'
    },
    {
      icon: '🤖',
      title: 'AI Market Intelligence',
      description: 'Advanced machine learning models analyze millions of data points to surface high-probability trading opportunities in real-time.'
    },
    {
      icon: '🛡️',
      title: 'Military-Grade Security',
      description: 'Bank-level encryption, multi-factor authentication, and cold storage protection. Your assets are secured by the same technology that protects government systems.'
    },
    {
      icon: '📊',
      title: 'Pro-Level Analytics',
      description: 'Advanced charting with 100+ technical indicators, custom algorithms, and real-time market depth visualization. Trade like a professional.'
    },
    {
      icon: '💎',
      title: 'Zero Commission Trading',
      description: 'Trade stocks, options, crypto, and forex without paying a single cent in commissions. Keep 100% of your profits where they belong.'
    },
    {
      icon: '🎯',
      title: 'Smart Automation',
      description: 'Build custom trading bots with no coding required. Automate your strategy and trade 24/7 while you sleep.'
    }
  ];

  return (
    <section id="features" className="relative px-6 py-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 tracking-tighter">
          Built For Modern Traders
        </h2>
        <p className="text-center text-white/50 text-xl mb-20">
          Everything you need to dominate the markets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
