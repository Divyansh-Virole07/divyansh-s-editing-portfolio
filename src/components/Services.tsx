import { Smartphone, Youtube, Sparkles, Palette, Volume2, Image, Shuffle, Award, Check } from "lucide-react";
import { SERVICE_ITEMS } from "../data";

const iconMap: { [key: string]: any } = {
  Smartphone: Smartphone,
  Youtube: Youtube,
  Sparkles: Sparkles,
  Palette: Palette,
  Volume2: Volume2,
  Image: Image,
  Shuffle: Shuffle,
  Award: Award,
};

export default function Services() {
  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5" id="services">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-[#FFD54A]/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#FFD54A] block mb-3">
              WHAT I DO
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Services Crafted to Elevate Your Content
            </h2>
          </div>
          <p className="text-[#A8A8A8] text-sm md:text-base max-w-md font-light leading-relaxed">
            High-impact video editing tailored to tell your story, maximize viewer retention, and deliver premium cinematic quality across every single frame.
          </p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_ITEMS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="glass-card group p-5 rounded-2xl border border-white/5 bg-zinc-950/40 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#FFD54A]/30 flex flex-col justify-center min-h-[80px]"
                id={`service-card-${item.id}`}
              >
                {/* Radial Glow hover background */}
                <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(255, 213, 74, 0.05) 0%, transparent 70%) opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex items-center gap-4 relative z-10">
                  {/* Icon Header */}
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 border border-white/5 text-[#FFD54A] flex items-center justify-center transition-all duration-500 group-hover:bg-[#FFD54A] group-hover:text-black group-hover:scale-105 group-hover:shadow-[0_0_15px_#FFD54A]">
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-display font-semibold text-white group-hover:text-[#FFD54A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Glass glowing line */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD54A]/0 to-transparent group-hover:via-[#FFD54A]/30 transition-all duration-700" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
