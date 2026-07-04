import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import VideoModal from "./components/VideoModal";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import FeaturedShowreel from "./components/FeaturedShowreel";
import ShortFormCarousel from "./components/ShortFormCarousel";
import LongFormCarousel from "./components/LongFormCarousel";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SHOWREEL_URL, SHOWREEL_TITLE } from "./data";

export default function App() {
  // Mobile Nav Hamburger State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global Lightbox Video State
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [playingVideoUrl, setPlayingVideoUrl] = useState("");
  const [playingVideoTitle, setPlayingVideoTitle] = useState("");

  // Page Header opacity on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerPlayVideo = (url: string, title: string) => {
    setPlayingVideoUrl(url);
    setPlayingVideoTitle(title);
    setIsVideoOpen(true);
  };

  const triggerShowreel = () => {
    triggerPlayVideo(SHOWREEL_URL, SHOWREEL_TITLE);
  };

  const navItems = [
    { name: "Showreel", href: "#featured-reel" },
    { name: "Portfolio", href: "#short-form-work" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-[#FFD54A] selection:text-black">
      
      {/* Film Grain Texture overlay */}
      <div className="film-grain fixed inset-0 z-40 pointer-events-none" />

      {/* Floating Premium Header */}
      <header
        className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 border-b ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-lg md:text-xl font-syne font-extrabold tracking-widest text-white hover:opacity-80 transition-opacity"
            id="brand-logo-nav"
          >
            <span>DIVYANSH</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 border border-white/5 bg-zinc-950/40 backdrop-blur px-6 py-2 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-mono text-gray-400 hover:text-[#FFD54A] tracking-wider uppercase transition-colors"
                id={`desktop-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block flex items-center gap-3">
            <a
              href="https://wa.me/918319514044"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFD54A] hover:bg-white text-black font-display font-bold text-xs py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-105 click-shrink flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,213,74,0.2)] cursor-pointer"
              id="cta-nav"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/40 text-white backdrop-blur cursor-pointer hover:border-[#FFD54A]"
            id="mobile-hamburger-btn"
          >
            <Menu className="h-5 w-5" />
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl p-6 flex flex-col justify-between"
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-lg font-syne font-extrabold tracking-widest text-white">
                <span>DIVYANSH</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                id="close-mobile-menu-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links middle */}
            <nav className="flex flex-col gap-6 text-center my-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold tracking-tight text-white hover:text-[#FFD54A] transition-colors"
                  id={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/918319514044"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-[#FFD54A] flex items-center justify-center gap-2"
                id="mobile-nav-contact"
              >
                <span>Book a Call (WhatsApp)</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </nav>

            {/* Bottom Credits */}
            <div className="text-center text-[10px] font-mono text-gray-600">
              © 2026 DIVYANSH MEDIA • ULTRA-PREMIUM CINEMATIC PORTFOLIO
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Structural Modules */}
      <main>
        
        {/* 1. Hero Module */}
        <Hero onPlayShowreel={triggerShowreel} />

        {/* 2. Client Moving Logos Section */}
        <Trust />

        {/* 3. Widescreen Cinematic Featured Showreel */}
        <FeaturedShowreel onPlay={triggerShowreel} />

        {/* 4. Short Form Video Carousel */}
        <ShortFormCarousel onSelectProject={triggerPlayVideo} />

        {/* 5. Long Form Videos Widescreen Carousel */}
        <LongFormCarousel onSelectProject={(project) => triggerPlayVideo(project.videoUrl, project.title)} />

        {/* 7. Services & Capabilities Grid */}
        <Services />

        {/* 8. Common FAQ Accordions */}
        <FAQ />

        {/* 9. Contact Discovery Conversions Panel */}
        <Contact />

      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Global Reusable Fullscreen Lightbox Player */}
      <VideoModal
        isOpen={isVideoOpen}
        videoUrl={playingVideoUrl}
        title={playingVideoTitle}
        onClose={() => setIsVideoOpen(false)}
      />

    </div>
  );
}
