'use client';

import { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
};

  return (
    <div
      className="relative p-12 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden group hover:-translate-y-3 hover:border-emerald-400/30 hover:bg-white/5 hover:shadow-[0_30px_80px_rgba(52,211,153,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(52, 211, 153, 0.1) 0%, transparent 50%)`
          }}
        />
      )}
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-emerald-400/10 border border-emerald-400/20 rounded-xl flex items-center justify-center text-3xl mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
