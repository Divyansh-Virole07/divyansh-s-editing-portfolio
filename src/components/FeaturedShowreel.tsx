import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, Tv, Eye, ArrowUpRight, Volume2 } from "lucide-react";
import { SHOWREEL_URL, SHOWREEL_TITLE } from "../data";
import showreelThumbnail from "../assets/images/video_editor_showreel_thumbnail_1783103585238.jpg";

interface FeaturedShowreelProps {
  onPlay: () => void;
}

// Helper to extract YouTube ID
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function FeaturedShowreel({ onPlay }: FeaturedShowreelProps) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const ytId = getYoutubeId(SHOWREEL_URL);

  return (
    <section 
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden select-none" 
      id="featured-reel"
    >
      {/* Cinematic dark studio glows */}
      <div className="absolute top-0 inset-x-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FFD54A]/3 blur-[140px]" />
        {/* Soft studio floor lines */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54A] animate-ping" />
              <span className="text-xs font-mono tracking-widest text-[#FFD54A] uppercase">
                Featured Showreel
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              My Content Showreel
            </h2>
          </div>
          <p className="text-[#A8A8A8] text-sm md:text-base font-light max-w-md leading-relaxed">
            A high-impact compilation of premium edits, sound design, visual pacing, and high-retention content architecture.
          </p>
        </div>

        {/* Widescreen Cinematic Player Card */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
            id="featured-showreel-player"
          >
            {/* Inline player switch */}
            {isPlayingInline && ytId ? (
              <div className="absolute inset-0 w-full h-full bg-black z-10">
                <iframe
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=0&playsinline=1&modestbranding=1&rel=0`}
                  title={SHOWREEL_TITLE}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
                {/* Floating control to exit inline mode */}
                <button
                  onClick={() => setIsPlayingInline(false)}
                  className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-black/80 hover:bg-black text-xs font-mono text-white hover:text-[#FFD54A] border border-white/15 rounded-lg cursor-pointer transition-all uppercase tracking-widest"
                  id="close-inline-showreel-btn"
                >
                  Close Video
                </button>
              </div>
            ) : (
              /* High quality cinematic cover preview with background video loop */
              <div 
                onClick={() => setIsPlayingInline(true)}
                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col justify-between p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-0"
              >
                {/* High quality background thumbnail image */}
                <img
                  src={showreelThumbnail}
                  alt={SHOWREEL_TITLE}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.02] transition-transform duration-1000 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Top metadata badge */}
                <div className="flex justify-between items-center relative z-10">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#FFD54A] bg-black/70 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    CINEMATIC PREVIEW
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlay();
                      }}
                      className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all"
                      title="Open in fullscreen Lightbox"
                      id="fullscreen-trigger-btn"
                    >
                      <span>FULLSCREEN</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Center Giant Play Action */}
                <div className="my-auto text-center flex flex-col items-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-18 w-18 md:h-22 md:w-22 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                  >
                    <Play className="ml-1 h-8 w-8 md:h-10 md:w-10 fill-black text-black" />
                  </motion.div>
                  
                  <div className="flex flex-col gap-1 max-w-lg mx-auto">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">
                      {SHOWREEL_TITLE}
                    </h3>
                    <p className="text-xs md:text-sm font-mono text-gray-400">
                      Click anywhere to start inline playback • 01:30 Cinematic Cut
                    </p>
                  </div>
                </div>

                {/* Bottom parameters bar */}
                <div className="flex justify-between items-end relative z-10 text-[10px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Tv className="h-3.5 w-3.5 text-zinc-600" />
                    1080P PRORES TIMELINE
                  </span>
                  <span>© 2026 DIVYANSH MEDIA</span>
                </div>
              </div>
            )}

            {/* Accent interactive hover borders */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-[#FFD54A]/30 transition-all duration-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
