import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  Sliders,
  Layers,
  Scissors,
  Wand2,
  Music,
  Sparkles,
  Tv,
  Film,
  CheckCircle2,
  MousePointer,
  RotateCcw,
  Terminal,
  Volume2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";

// Real AE expression script that compiles
const WORKFLOW_SCRIPT = `// AFTER EFFECTS - KINETIC MOTION SCRIPT
const textLayer = app.project.activeItem.layer("MY AMAZON BUSINESS STORY");

// Apply modern high-retention bouncy kinetic curve
textLayer.scale.expression = \`
  n = 0;
  if (numKeys > 0){
    n = nearestKey(time).index;
    if (key(n).time > time) n--;
  }
  if (n == 0) { t = 0; } else { t = time - key(n).time; }
  if (n > 0 && t < 1) {
    v = key(n).value;
    amp = 0.08; freq = 3.0; decay = 5.0;
    v + [Math.sin(t*freq*Math.PI*2)/Math.exp(t*decay)*amp*100, 0];
  } else { value; }
\`;

// Link color grade variables to Essential Graphics Controller
const lutIntensity = thisComp.layer("CONTROLLER").effect("Warm Gold LUT")("Slider");
textLayer.text.sourceText.style.setFillColor([1.0, 1.0, 1.0, 1.0]); // White Text Layer
textLayer.text.sourceText.style.setFont("Space Grotesk");

// Enable high-retention cinematic Motion Blur
textLayer.motionBlur = true;
textLayer.shutterAngle = 180;
console.log("🔥 COMPOSITION SUCCESSFULLY COMPILED!");`;

export default function InteractiveEditorDeck() {
  // 3D Perspective Mouse Tracking for the setup
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end fluid movement
  const springConfig = { damping: 30, stiffness: 120, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const scale = useSpring(1, springConfig);

  const [typedIndex, setTypedIndex] = useState(250); // start with partial script typed

  // Active Workspace: "premiere" (Video timeline/monitors) or "after_effects" (Layers/Keyframes/Scripts)
  const [activeTab, setActiveTab] = useState<"premiere" | "after_effects">("premiere");

  // Premiere & Video Editing variables
  const [isPlaying, setIsPlaying] = useState(true);
  const [playProgress, setPlayProgress] = useState(30);
  const [speedMultiplier, setSpeedMultiplier] = useState(2.0); // 1.0x to 4.0x speed ramp
  const [lutIntensity, setLutIntensity] = useState(1.15); // brightness/contrast
  const [isGlowActive, setIsGlowActive] = useState(true);
  const [cutsCount, setCutsCount] = useState(2); // razor tool cuts

  // After Effects Layers variables
  const [isTextLayerVisible, setIsTextLayerVisible] = useState(true);
  const [isTextLayerLocked, setIsTextLayerLocked] = useState(false);
  const [textScale, setTextScale] = useState(100); // text size layer scaling
  const [easingWarp, setEasingWarp] = useState(0.5); // Bezier Curve visual warp (0.1 to 0.9)

  // Simulated audio spectrum bars
  const [waveHeights, setWaveHeights] = useState<number[]>([15, 35, 60, 45, 80, 55, 30, 75, 90, 40, 20, 65, 85, 45, 15, 50, 75, 60, 30, 10]);

  // Mouse tilt tracking handlers
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (event.clientX - rect.left) / width - 0.5;
    const relativeY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => scale.set(1.02);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  // Playhead and spectrum wave update loops (scales with current Speed Multiplier!)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayProgress((prev) => (prev >= 100 ? 0 : prev + 0.3 * speedMultiplier));
        setWaveHeights((prev) =>
          prev.map((h) => Math.max(10, Math.min(100, h + (Math.random() * 20 - 10) * speedMultiplier)))
        );
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  const triggerAutoComplete = () => {
    setTypedIndex(WORKFLOW_SCRIPT.length);
  };

  const triggerRazorCut = () => {
    setCutsCount((prev) => (prev >= 5 ? 1 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[500px] h-[400px] mx-auto perspective-1000 select-none">
      
      {/* Dynamic ambient background aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD54A]/5 via-[#FFD54A]/3 to-transparent rounded-[32px] blur-3xl -z-10" />

      {/* Main 3D Perspective Container */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full bg-zinc-950/95 backdrop-blur-md rounded-3xl border border-white/10 p-4.5 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

        {/* ==================== FLOATING EDITING SCREEN ==================== */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full h-[310px] rounded-xl bg-[#09090d] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between"
        >
          
          {/* Top Bar with Application Switchers */}
          <div className="flex items-center justify-between px-3.5 py-1.5 bg-black/50 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>

            {/* Premiere Pro & After Effects Tab Selector */}
            <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 rounded-md border border-white/5">
              <button
                onClick={() => setActiveTab("premiere")}
                className={`px-2.5 py-0.5 text-[8.5px] font-mono tracking-wider rounded transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === "premiere"
                    ? "bg-[#002d5a] text-sky-400 font-bold border border-sky-500/30 shadow-[0_0_8px_rgba(56,189,248,0.2)]"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span className="w-1 h-1 bg-sky-400 rounded-sm" />
                PREMIERE PRO
              </button>
              <button
                onClick={() => setActiveTab("after_effects")}
                className={`px-2.5 py-0.5 text-[8.5px] font-mono tracking-wider rounded transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === "after_effects"
                    ? "bg-[#3d135c] text-purple-400 font-bold border border-purple-500/30 shadow-[0_0_8px_rgba(192,132,252,0.2)]"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span className="w-1 h-1 bg-purple-400 rounded-sm" />
                AFTER EFFECTS
              </button>
            </div>

            <div className="flex items-center gap-1 text-[8px] font-mono text-zinc-500">
              <span className="w-1 h-1 bg-[#FFD54A] rounded-full animate-pulse" />
              <span>LIVE SCREEN</span>
            </div>
          </div>

          {/* Core Workspace Screens */}
          <div className="relative flex-1 bg-black/10 p-3 overflow-hidden">
            
            {/* 🎥 PREMIERE PRO: PROGRAM MONITOR & TIMELINE WORKSPACE */}
            {activeTab === "premiere" && (
              <div className="w-full h-full flex gap-3 relative">
                
                {/* 1. Miniature Vertical Video Preview (9:16) */}
                <div className="w-[110px] h-full bg-zinc-950 rounded-lg border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-inner">
                  {/* Dynamic brightness overlay representing LUT slider */}
                  <div 
                    className="absolute inset-0 transition-all duration-200 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,213,74,0.12) 0%, rgba(10,10,20,0.85) 100%)`,
                      filter: `brightness(${lutIntensity}) contrast(1.1)`,
                    }}
                  />
                  
                  {/* Corners cropping guides */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30" />
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/30" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/30" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30" />

                  {/* Program view top info */}
                  <div className="p-1 flex justify-between items-center text-[7px] font-mono text-zinc-500 relative z-10">
                    <span>9:16 LIVE</span>
                    <span className="text-red-500 animate-pulse">●</span>
                  </div>

                  {/* Active Text Element on Preview - White Text */}
                  <div className="px-1 text-center relative z-10">
                    <AnimatePresence>
                      {isTextLayerVisible && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: textScale / 100 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-[8px] leading-tight font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] uppercase px-1 py-1.5 border border-dashed border-white/20 rounded"
                        >
                          My Amazon<br />
                          Business<br />
                          Story
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Program monitor play status bar */}
                  <div className="p-1 bg-black/60 border-t border-white/5 flex items-center justify-between text-[6px] font-mono text-zinc-400 relative z-10">
                    <span className="text-[#FFD54A] font-bold">{speedMultiplier.toFixed(1)}x SPEED</span>
                    <span>FIT (60%)</span>
                  </div>
                </div>

                {/* 2. Audio Spectrum & Live Tracks Timeline Controls */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  
                  {/* Timeline Header Metadata */}
                  <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-zinc-900/40 p-1 rounded border border-white/5">
                    <span className="text-zinc-300 font-medium truncate">Seq_Master_Clip_02</span>
                    <span className="text-sky-400">60 FPS</span>
                  </div>

                  {/* Visual Video Track Cuts */}
                  <div className="flex flex-col gap-1 my-1.5">
                    {/* Video Track 2: Adjustment Layer */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] font-mono text-zinc-500 w-3">V2</span>
                      <div className="flex-1 h-3.5 bg-purple-950/40 border border-purple-500/20 rounded-sm flex items-center justify-between px-1.5 relative overflow-hidden">
                        <span className="text-[7px] font-mono text-purple-300">Adjustment_LUT</span>
                        <div className="flex gap-1">
                          {Array.from({ length: cutsCount }).map((_, idx) => (
                            <div key={idx} className="w-px h-full bg-purple-400/50 absolute" style={{ left: `${(idx + 1) * (100 / (cutsCount + 1))}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Video Track 1: Active Clip */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] font-mono text-zinc-500 w-3">V1</span>
                      <div className="flex-1 h-3.5 bg-amber-950/40 border border-amber-500/20 rounded-sm flex items-center justify-between px-1.5 relative overflow-hidden">
                        <span className="text-[7px] font-mono text-amber-300">amazon_story.mp4</span>
                        <div className="flex gap-1">
                          {Array.from({ length: cutsCount }).map((_, idx) => (
                            <div key={idx} className="w-px h-full bg-amber-400/50 absolute" style={{ left: `${(idx + 1) * (100 / (cutsCount + 1))}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Audio Track 1: Backing SFX */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] font-mono text-zinc-500 w-3">A1</span>
                      <div className="flex-1 h-3.5 bg-sky-950/40 border border-sky-500/20 rounded-sm flex items-center justify-between px-1.5 relative">
                        <span className="text-[7px] font-mono text-sky-300">ambient_beat.wav</span>
                        <Music className="h-2.5 w-2.5 text-sky-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Live adjustment sliders for Premiere Pro */}
                  <div className="bg-black/40 border border-white/5 p-1.5 rounded flex flex-col gap-1.5">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[7px] font-mono text-zinc-400">
                        <span>COLOR LUT INTENSITY</span>
                        <span className="text-[#FFD54A] font-bold">{lutIntensity.toFixed(2)}x</span>
                      </div>
                      <input 
                        type="range"
                        min="0.5"
                        max="1.8"
                        step="0.05"
                        value={lutIntensity}
                        onChange={(e) => setLutIntensity(parseFloat(e.target.value))}
                        className="w-full accent-[#FFD54A] h-1 rounded bg-zinc-800 cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[7px] font-mono text-zinc-400">
                        <span>SPEED RAMP MULTIPLIER</span>
                        <span className="text-sky-400 font-bold">{speedMultiplier.toFixed(1)}x</span>
                      </div>
                      <input 
                        type="range"
                        min="1.0"
                        max="4.0"
                        step="0.2"
                        value={speedMultiplier}
                        onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
                        className="w-full accent-sky-400 h-1 rounded bg-zinc-800 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Premiere Pro Quick action tools */}
                  <div className="flex justify-between items-center text-[7px] font-mono text-zinc-500 border-t border-white/5 pt-1 mt-1">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      SYSTEM OPTIMAL
                    </span>
                    <button 
                      onClick={triggerRazorCut}
                      className="px-2 py-0.5 rounded border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 hover:bg-zinc-800 flex items-center gap-1 cursor-pointer text-[7px]"
                    >
                      <Scissors className="h-2 w-2 text-zinc-400" />
                      RAZOR SPLIT ({cutsCount} CUTS)
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* ✨ AFTER EFFECTS: VFX LAYER LIST & KINETIC SCRIPT */}
            {activeTab === "after_effects" && (
              <div className="w-full h-full flex flex-col justify-between relative gap-1.5 font-mono text-[9px]">
                
                {/* 1. Expression Code Script with Typing display */}
                <div className="bg-black/30 border border-white/5 p-1.5 rounded-lg flex-1 overflow-y-auto max-h-[110px] text-left leading-relaxed relative">
                  <div className="absolute top-1 right-2 text-[7px] text-purple-400">EXPRESSION MONITOR</div>
                  <pre className="whitespace-pre-wrap font-mono text-[8px] text-zinc-300">
                    {WORKFLOW_SCRIPT.substring(0, typedIndex)}
                    <span className="w-1 h-2.5 bg-purple-400 inline-block animate-pulse ml-0.5" />
                  </pre>
                </div>

                {/* 2. Interactive After Effects Layer Stack */}
                <div className="bg-zinc-950/80 border border-white/5 rounded p-1.5 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[7px] text-zinc-500 pb-0.5 border-b border-white/5 font-semibold">
                    <span>AE COMP LAYERS (ACTIVE)</span>
                    <span>KEYFRAMES</span>
                  </div>

                  {/* Layer 1: Text Layer (White Text "MY AMAZON BUSINESS STORY") */}
                  <div className="flex items-center justify-between gap-2 bg-purple-950/15 border border-purple-500/10 p-1 rounded-sm">
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => setIsTextLayerVisible(!isTextLayerVisible)}
                        className="text-zinc-400 hover:text-white cursor-pointer"
                        title="Toggle Layer Visibility"
                      >
                        {isTextLayerVisible ? <Eye className="h-3 w-3 text-emerald-400" /> : <EyeOff className="h-3 w-3 text-zinc-600" />}
                      </button>
                      <button
                        onClick={() => setIsTextLayerLocked(!isTextLayerLocked)}
                        className="text-zinc-400 hover:text-white cursor-pointer"
                        title="Toggle Layer Lock"
                      >
                        {isTextLayerLocked ? <Lock className="h-3 w-3 text-[#FFD54A]" /> : <Unlock className="h-3 w-3 text-zinc-600" />}
                      </button>
                      <span className="font-bold text-white uppercase text-[8px]">
                        T: "MY AMAZON STORY"
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] text-purple-400">SCALE: {textScale}%</span>
                      <input 
                        type="range"
                        min="50"
                        max="150"
                        value={textScale}
                        disabled={isTextLayerLocked}
                        onChange={(e) => setTextScale(parseInt(e.target.value))}
                        className="w-12 h-1 accent-purple-400 rounded cursor-pointer disabled:opacity-30"
                      />
                    </div>
                  </div>

                  {/* Layer 2: Transition effect */}
                  <div className="flex items-center justify-between gap-1 bg-zinc-900/40 p-1 rounded-sm text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Eye className="h-3 w-3 text-zinc-500" />
                      <Unlock className="h-3 w-3 text-zinc-600" />
                      <span className="text-[8px]">FX: GLITCH_TRANSITION</span>
                    </div>
                    <div className="flex gap-0.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="text-[7px]">00:05.10</span>
                    </div>
                  </div>
                </div>

                {/* Easing Bezier Curve Graph - Warp Control */}
                <div className="flex items-center justify-between bg-black/50 px-2 py-1 rounded border border-white/5 text-[7px] text-zinc-400 gap-3">
                  <span className="flex items-center gap-1 text-purple-400 font-bold">
                    <TrendingUp className="h-3 w-3" />
                    BEZIER CURVE
                  </span>
                  
                  {/* Interactive ease curve warp slider */}
                  <div className="flex-1 flex items-center gap-1.5">
                    <span className="text-[6px]">SHARP</span>
                    <input 
                      type="range"
                      min="0.1"
                      max="0.9"
                      step="0.05"
                      value={easingWarp}
                      onChange={(e) => setEasingWarp(parseFloat(e.target.value))}
                      className="flex-1 accent-purple-400 h-1 rounded cursor-pointer bg-zinc-800"
                    />
                    <span className="text-[6px]">SMOOTH</span>
                  </div>

                  <button 
                    onClick={triggerAutoComplete}
                    className="text-[#FFD54A] hover:underline"
                  >
                    [COMPILE]
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Connected timeline seek bar */}
          <div className="px-4 py-1.5 bg-black border-t border-white/5 flex flex-col gap-1">
            <div className="relative w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-amber-400 to-[#FFD54A]"
                style={{ width: `${playProgress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[7px] font-mono text-zinc-500 tracking-wider">
              <span>00:0{Math.floor((playProgress * 10) / 100)}:15</span>
              <span className="text-[#FFD54A] font-bold">ACTIVE TIMELINE PLAYING</span>
              <span>10.0s MAX</span>
            </div>
          </div>

        </div>

        {/* ==================== CONTROLS FOOTER ==================== */}
        <div 
          style={{ transform: "translateZ(15px)" }}
          className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-2 border-t border-white/5"
        >
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                isPlaying 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-zinc-900 border-white/5 text-zinc-500"
              }`}
            >
              {isPlaying ? <Pause className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5" />}
              <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
            </button>
            <button 
              onClick={() => {
                setLutIntensity(1.15);
                setSpeedMultiplier(2.0);
                setTextScale(100);
                setTypedIndex(250);
              }}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="h-2.5 w-2.5" />
              RESET
            </button>
          </div>

          <div className="flex items-center gap-1 text-emerald-500 font-bold">
            <span>READY TO EXPORT</span>
            <CheckCircle2 className="h-3 w-3" />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
