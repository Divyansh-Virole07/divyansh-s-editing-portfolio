import React from "react";
import { CLIENT_LOGOS } from "../data";
import {
  Activity,
  Layers,
  Cpu,
  Palette,
  Zap,
  TrendingUp,
  BookOpen,
  Gamepad2,
  Sparkles
} from "lucide-react";

// Map logo/creator name to associated moving lucide icon and tailwind animation classes
const LOGO_ICONS: Record<string, { icon: React.ComponentType<any>; anim: string; color: string }> = {
  "Ishan Sharma": { icon: Cpu, anim: "animate-pulse", color: "text-[#FFD54A]" },
  "Shruti Kapoor": { icon: BookOpen, anim: "animate-[pulse_3s_infinite]", color: "text-white/60" },
  "Jack Hampton Sports": { icon: Activity, anim: "animate-[bounce_3s_infinite]", color: "text-[#FFD54A]" },
  "Justin Moore": { icon: Layers, anim: "animate-[pulse_2s_infinite]", color: "text-white/60" },
  "Gamer to Maker Nation": { icon: Gamepad2, anim: "animate-[spin_10s_linear_infinite]", color: "text-[#FFD54A]" },
  "Abhishek Digra": { icon: Zap, anim: "animate-pulse", color: "text-[#FFD54A]" },
  "Priyanshi Jogani": { icon: Palette, anim: "animate-[bounce_4s_infinite]", color: "text-white/60" },
  "Matt Geist": { icon: TrendingUp, anim: "animate-pulse", color: "text-[#FFD54A]" },
  "Maxora": { icon: Sparkles, anim: "animate-[pulse_3s_infinite]", color: "text-white/60" },
  "And Many More": { icon: Sparkles, anim: "animate-pulse", color: "text-[#FFD54A]" },
};

export default function Trust() {
  return (
    <section className="relative w-full border-y border-white/5 bg-white/5 backdrop-blur-sm py-8 overflow-hidden">
      {/* Edge Fade Alpha Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 mb-2 text-center">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#A8A8A8] uppercase">
          COLLABORATIONS & RECOGNITION FROM SERIOUS CREATORS
        </span>
      </div>

      {/* Infinite scrolling row */}
      <div className="relative flex w-full overflow-hidden select-none mt-6 gap-12 md:gap-20">
        
        {/* Track 1 */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20 shrink-0 min-w-full justify-around">
          {CLIENT_LOGOS.map((logo, idx) => {
            const config = LOGO_ICONS[logo.name];
            const IconComponent = config ? config.icon : null;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                {IconComponent && (
                  <IconComponent className={`h-4.5 w-4.5 ${config.anim} ${config.color}`} />
                )}
                <span className="text-sm font-syne font-extrabold text-white tracking-widest uppercase">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono border border-white/5 text-[#A8A8A8] rounded px-1.5 py-0.5 whitespace-nowrap bg-white/5">
                  {logo.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20 shrink-0 min-w-full justify-around" aria-hidden="true">
          {CLIENT_LOGOS.map((logo, idx) => {
            const config = LOGO_ICONS[logo.name];
            const IconComponent = config ? config.icon : null;
            return (
              <div
                key={`dup-${idx}`}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                {IconComponent && (
                  <IconComponent className={`h-4.5 w-4.5 ${config.anim} ${config.color}`} />
                )}
                <span className="text-sm font-syne font-extrabold text-white tracking-widest uppercase">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono border border-white/5 text-[#A8A8A8] rounded px-1.5 py-0.5 whitespace-nowrap bg-white/5">
                  {logo.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
