import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { TrendingUp, Award, Smile, Calendar } from "lucide-react";

interface StatItem {
  id: string;
  endVal: number;
  suffix: string;
  label: string;
  sub: string;
  icon: any;
}

interface StatCardProps {
  stat: StatItem;
  key?: string;
}

function StatCard({ stat }: StatCardProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;
    let start = 0;
    const duration = 2000;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * stat.endVal));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasTriggered, stat.endVal]);

  const Icon = stat.icon;

  return (
    <div
      ref={elementRef}
      className="glass-card group p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#FFD54A]/30 flex flex-col justify-between aspect-video lg:aspect-[1.5]"
    >
      {/* Dynamic light accent */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-[#FFD54A]/3 rounded-full blur-3xl group-hover:bg-[#FFD54A]/10 transition-colors pointer-events-none" />

      <div className="flex items-center justify-between">
        <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#FFD54A] group-hover:border-[#FFD54A]/30 group-hover:bg-[#FFD54A]/5 transition-all">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-mono text-[#A8A8A8] tracking-wider">VERIFIED RESULT</span>
      </div>

      <div className="mt-8">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white flex items-baseline">
          <span>{count}</span>
          <span className="text-[#FFD54A] ml-0.5">{stat.suffix}</span>
        </h3>
        
        <p className="text-sm font-semibold text-white mt-3 group-hover:text-[#FFD54A] transition-colors">
          {stat.label}
        </p>
        <p className="text-xs text-[#A8A8A8] mt-1 font-light leading-relaxed">
          {stat.sub}
        </p>
      </div>

      {/* Underline aesthetic border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#FFD54A]/30 transition-all duration-700" />
    </div>
  );
}

export default function Results() {
  const stats: StatItem[] = [
    {
      id: "stat-1",
      endVal: 10,
      suffix: "M+",
      label: "Views Generated",
      sub: "Aggregated viewership across organic YouTube episodes, startup launches, and trending Reels.",
      icon: TrendingUp,
    },
    {
      id: "stat-2",
      endVal: 100,
      suffix: "+",
      label: "Projects Completed",
      sub: "Premium high-fidelity cinematic video deliveries to founders, brands, agencies, and online rosters.",
      icon: Award,
    },
    {
      id: "stat-3",
      endVal: 98,
      suffix: "%",
      label: "Client Satisfaction",
      sub: "Determined via post-delivery reviews, focused on punctual, high-end pacing and smooth delivery.",
      icon: Smile,
    },
    {
      id: "stat-4",
      endVal: 2,
      suffix: "+",
      label: "Years Experience",
      sub: "Surgically refining audio balances, color grading parameters, and kinetic text layouts.",
      icon: Calendar,
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5" id="results">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FFD54A] uppercase block mb-3">
            PROVEN PERFORMANCE METRICS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Retention Stats that Back Up the Creative
          </h2>
          <p className="text-[#A8A8A8] text-sm md:text-base font-light leading-relaxed mt-4">
            We track data, pacing velocity, and organic viewer retention. Our edits aren't just visually beautiful—they are engineered to engage modern attention spans.
          </p>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}
