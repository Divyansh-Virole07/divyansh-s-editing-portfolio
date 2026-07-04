import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Eye, Play, Sparkles } from "lucide-react";
import { SHORT_FORM_PROJECTS } from "../data";
import { ShortFormProject } from "../types";

interface ShortFormCarouselProps {
  onSelectProject: (videoUrl: string, title: string) => void;
}

export default function ShortFormCarousel({ onSelectProject }: ShortFormCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse Drag Scrolling States
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollLimits);
      // Run once on load
      checkScrollLimits();
      // Handle resize
      window.addEventListener("resize", checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Mouse Drag Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier speeds up scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
    checkScrollLimits();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section 
      className="relative w-full bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden" 
      id="short-form-work"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header section with arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#FFD54A] block mb-3">
              ORGANIC IMPACT
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Short Form Carousel
            </h2>
          </div>

          {/* Carousel Buttons */}
          <div className="flex gap-3 items-center">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? "border-white/10 text-white bg-zinc-950/40 hover:border-[#FFD54A] hover:text-[#FFD54A] hover:scale-105"
                  : "border-white/5 text-gray-700 bg-zinc-950/10 cursor-not-allowed"
              }`}
              id="short-scroll-left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${
                canScrollRight
                  ? "border-white/10 text-white bg-zinc-950/40 hover:border-[#FFD54A] hover:text-[#FFD54A] hover:scale-105"
                  : "border-white/5 text-gray-700 bg-zinc-950/10 cursor-not-allowed"
              }`}
              id="short-scroll-right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Box */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        >
          {SHORT_FORM_PROJECTS.map((project) => {
            const isHovered = activeHoverId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isDragging) {
                    onSelectProject(project.videoUrl, project.title);
                  }
                }}
                onMouseEnter={() => setActiveHoverId(project.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className="flex-none w-[85vw] md:w-[calc(33.333%-16px)] aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/80 snap-start snap-always hover:border-[#FFD54A] hover:shadow-[0_0_40px_rgba(255,213,74,0.1)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col justify-end p-4"
                data-cursor="play"
              >
                {/* Static Thumbnail Background */}
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-105 opacity-20" : "scale-100 opacity-60"
                  }`}
                />

                {/* Autoplay preview on Hover */}
                {isHovered && (
                  <video
                    src={(project.videoUrl.includes("instagram.com") || project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be"))
                      ? "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-showing-a-social-media-feed-41708-large.mp4"
                      : project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 animate-fade-in"
                  />
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 pointer-events-none" />

                {/* Info Text Area */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  
                  {/* Top Stats badge */}
                  <div className="mb-auto flex items-center justify-end">
                    {isHovered && (
                      <span className="text-[9px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded-full border border-white/5 animate-pulse flex items-center gap-1">
                        <Sparkles className="h-2.5 w-2.5 text-[#FFD54A]" /> LIVE PREVIEW
                      </span>
                    )}
                  </div>

                  {/* Title & metadata */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#FFD54A] uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xs md:text-sm font-display font-bold text-white mt-1 leading-snug">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-2">
                      <span className="text-[10px] font-mono text-[#A8A8A8]">
                        DURATION: {project.duration}s
                      </span>
                      <span className="text-[10px] font-mono text-[#FFD54A] flex items-center gap-1 font-semibold group-hover:underline">
                        <span>PREVIEW</span>
                        <Play className="h-2.5 w-2.5 fill-current" />
                      </span>
                    </div>
                  </div>

                </div>

                {/* Inner Border lines */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-[#FFD54A]/30 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Slider instructions */}
        <div className="w-full text-center mt-6 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54A] animate-ping" />
          <span className="text-xs font-mono text-[#A8A8A8] uppercase tracking-widest">
            Drag to pan • Scroll horizontally • Tap to play
          </span>
        </div>

      </div>
    </section>
  );
}
