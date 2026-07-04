import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, X, Maximize } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Helper to parse YouTube, Vimeo, and Instagram URLs
  const getYoutubeId = (url: string) => {
    if (url.includes("/shorts/")) {
      const parts = url.split("/shorts/");
      if (parts[1]) {
        const id = parts[1].split(/[?&]/)[0];
        if (id && id.length === 11) return id;
      }
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getVimeoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
    const match = url.match(regExp);
    return match ? match[3] : null;
  };

  const getInstagramId = (url: string) => {
    const regExp = /instagram\.com\/(?:p|reel)\/([a-zA-Z0-9_\-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const ytId = getYoutubeId(videoUrl);
  const vimeoId = getVimeoId(videoUrl);
  const instagramId = getInstagramId(videoUrl);
  const isExternalVideo = !!(ytId || vimeoId || instagramId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
    } else {
      document.body.style.overflow = "";
      setIsPlaying(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle keyboard event (Escape key to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl"
        >
          {/* Close button at top right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-gray-400 backdrop-blur-md transition-all hover:border-[#FFD54A] hover:text-white hover:scale-105 cursor-pointer"
            id="close-modal-btn"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_0_80px_-10px_rgba(255,213,74,0.15)] flex flex-col"
          >
            {/* Aspect Ratio video container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
              {ytId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&playsinline=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full object-contain"
                />
              ) : vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&playsinline=1`}
                  title={title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full object-contain"
                />
              ) : instagramId ? (
                <div className="h-full w-full py-4 flex items-center justify-center bg-[#050505]">
                  <iframe
                    src={`https://www.instagram.com/reel/${instagramId}/embed`}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                    className="h-full max-h-[70vh] w-full max-w-[320px] rounded-lg shadow-2xl"
                  />
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onClick={() => togglePlay()}
                    className="h-full w-full object-contain cursor-pointer"
                  />

                  {/* Title Header overlay */}
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-6 pointer-events-none">
                    <span className="text-xs font-mono tracking-widest text-[#FFD54A]">PLAYING PROJECT</span>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white">{title}</h3>
                  </div>

                  {/* Huge Play/Pause overlay indicator when paused */}
                  {!isPlaying && (
                    <div 
                      onClick={() => togglePlay()}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFD54A] text-black shadow-[0_0_30px_#FFD54A]"
                      >
                        <Play className="ml-1 h-8 w-8 fill-black" />
                      </motion.div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Custom Glass Controls / External video footer */}
            {isExternalVideo ? (
              <div className="bg-zinc-950/80 border-t border-white/5 p-4 flex items-center justify-between backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    NOW PLAYING
                  </span>
                  <span className="text-sm font-display font-medium text-white">
                    {title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#A8A8A8] hidden sm:inline-block">
                    {instagramId ? "🎥 Watch & interact inside Instagram viewer" : "🔊 Click player speaker icon to unmute sound"}
                  </span>
                  <span className="text-[10px] font-mono border border-[#FFD54A]/20 text-[#FFD54A] rounded-md px-3 py-1 bg-[#FFD54A]/5">
                    {ytId ? "YOUTUBE PLAYER" : vimeoId ? "VIMEO PLAYER" : "INSTAGRAM REEL"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-950/80 border-t border-white/5 p-4 flex flex-col gap-4 backdrop-blur-md">
                {/* Timeline scrub bar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400 w-10 text-right">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.05}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-[#FFD54A] outline-none transition-all hover:bg-zinc-700"
                    style={{
                      background: `linear-gradient(to right, #FFD54A ${(currentTime / (duration || 1)) * 100}%, #27272a ${(currentTime / (duration || 1)) * 100}%)`,
                    }}
                  />
                  <span className="text-xs font-mono text-gray-400 w-10 text-left">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Control Buttons row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause */}
                    <button
                      onClick={() => togglePlay()}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#FFD54A] hover:text-black transition-all cursor-pointer"
                      id="play-pause-modal"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
                    </button>

                    {/* Volume controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all cursor-pointer"
                        id="volume-toggle-modal"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4 text-red-400" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider hidden sm:inline">
                        {isMuted ? "MUTED" : "IMMERSIVE AUDIO"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Specs Indicator */}
                    <span className="text-[10px] font-mono border border-white/10 rounded-md px-2 py-1 text-gray-400 bg-white/5 hidden sm:inline">
                      4K PRORES • 60 FPS
                    </span>

                    {/* Fullscreen */}
                    <button
                      onClick={handleFullscreen}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all cursor-pointer"
                      id="fullscreen-modal"
                    >
                      <Maximize className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
