import { Sparkles, ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/918319514044" },
    { name: "Instagram", href: "https://www.instagram.com/divyanshhh_07?igsh=MXhrcXF5N2Nrc3dvdg==" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/divyansh-virole-375621339?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Twitter", href: "https://x.com/Divyansh_Virole" },
  ];

  const navLinks = [
    { name: "Hero Showcase", href: "#hero" },
    { name: "Featured Reel", href: "#featured-reel" },
    { name: "Short Form", href: "#short-form-work" },
    { name: "Long Form Case Studies", href: "#long-form-work" },
    { name: "Services", href: "#services" },
    { name: "Common FAQs", href: "#faq" },
    { name: "Let's Talk", href: "#contact" },
  ];

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Absolute ambient bottom radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[300px] w-[500px] bg-[#FFD54A]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo brand block */}
          <div className="md:col-span-5 flex flex-col gap-y-6 md:gap-y-8">
            <div>
              <span className="text-xl font-syne font-extrabold tracking-widest text-white flex items-center gap-2.5">
                <span>DIVYANSH</span>
              </span>
              <p className="text-[#A8A8A8] text-xs md:text-sm font-light mt-4 max-w-sm leading-relaxed">
                I’m a professional video editor with 2+ years of experience. Through high-quality editing, storytelling, and engaging visuals, I’ve helped generate millions of views across multiple platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1 border border-white/10 hover:border-[#FFD54A] rounded-full py-1.5 px-4 bg-white/5 hover:bg-[#FFD54A]/5 text-xs text-[#A8A8A8] hover:text-[#FFD54A] transition-all"
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="h-3 w-3 text-[#A8A8A8] group-hover:text-[#FFD54A] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-4 md:col-start-7">
            <span className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-widest block mb-6">
              PORTFOLIO ARCHITECTURE
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-[#A8A8A8] hover:text-[#FFD54A] transition-colors font-light"
                  id={`footer-nav-${link.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom credits and scroll up */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-[#A8A8A8] opacity-60">
            © 2026 DIVYANSH MEDIA LTD. ALL RIGHTS RESERVED • CRAFTED WITH ULTRA-PREMIUM CINEMATIC PRINCIPLES
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs font-mono text-[#A8A8A8] hover:text-[#FFD54A] border border-white/5 hover:border-[#FFD54A]/20 bg-white/[0.01] hover:bg-[#FFD54A]/5 rounded-full py-2 px-5 transition-all cursor-pointer hover:scale-105"
            id="footer-scroll-top"
          >
            <span>BACK TO THE TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
