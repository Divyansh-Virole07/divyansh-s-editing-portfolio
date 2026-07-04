import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Play, ArrowRight, Video, Sparkles, Trophy, Eye } from "lucide-react";
import showreelThumbnail from "../assets/images/video_editor_showreel_thumbnail_1783103585238.jpg";

interface HeroProps {
  onPlayShowreel: () => void;
}

// Custom Counter hook for scroll-triggered stats count up
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <div ref={elementRef} className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight flex items-baseline">
      <span>{count}</span>
      <span className="text-[#FFD54A] ml-0.5">{suffix}</span>
    </div>
  );
}

export default function Hero({ onPlayShowreel }: HeroProps) {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const glowXSpring = useSpring(glowX, springConfig);
  const glowYSpring = useSpring(glowY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowX.set(x);
      glowY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [glowX, glowY]);

  // Generate random particles coordinates
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 border-b border-white/5 bg-mesh-radial"
      id="hero"
    >
      {/* Film Grain Texture overlay */}
      <div className="film-grain absolute inset-0 z-0 pointer-events-none" />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#FFD54A]/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: ["0vh", "-100vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Glow Spot */}
      <motion.div
        className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-[#FFD54A]/4 blur-[100px] z-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: glowXSpring,
          top: glowYSpring,
        }}
      />

      {/* Hero Centered Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 pt-10 pb-12">
        
        {/* Headline & Actions */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-white/10 bg-zinc-950/40 backdrop-blur rounded-full px-4 py-1.5 w-fit mb-6 shadow-[0_0_15px_rgba(255,213,74,0.03)]"
          >
            <Video className="h-3.5 w-3.5 text-[#FFD54A]" />
            <span className="text-xs font-mono tracking-widest text-[#FFD54A]">PREMIUM EDITING LABS</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-syne font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl"
          >
            I Turn Raw Footage Into Content People <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE082] to-[#FFD54A]">Can't Stop Watching.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#A8A8A8] text-base md:text-xl font-light mb-10 max-w-2xl leading-relaxed"
          >
            Short-form edits, high-retention YouTube videos, commercials, kinetic typography, and premium storytelling engineered to drive massive audience attention.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16 justify-center"
          >
            <a
              href="#contact"
              className="bg-[#FFD54A] hover:bg-white text-black font-display font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 click-shrink shadow-[0_0_30px_rgba(255,213,74,0.3)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4)] flex items-center gap-2 cursor-pointer"
              id="hero-hire-me"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#featured-reel"
              className="border border-white/10 hover:border-[#FFD54A] text-white hover:text-[#FFD54A] font-display font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur bg-white/5 hover:bg-white/5 hover:scale-105 click-shrink flex items-center gap-2 cursor-pointer"
              id="hero-view-work"
            >
              <span>View My Work</span>
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8 max-w-xl w-full"
          >
            <div className="flex flex-col items-center">
              <AnimatedCounter end={100} suffix="+" />
              <span className="text-[10px] md:text-xs font-mono text-[#A8A8A8] uppercase tracking-widest mt-1">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter end={10} suffix="M+" />
              <span className="text-[10px] md:text-xs font-mono text-[#A8A8A8] uppercase tracking-widest mt-1">Views Generated</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter end={2} suffix="+" />
              <span className="text-[10px] md:text-xs font-mono text-[#A8A8A8] uppercase tracking-widest mt-1">Years Experience</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
