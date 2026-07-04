import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, RefreshCw, Mail, Phone, MapPin, Sparkles, MessageCircle, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    // Simulate high-end API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5" id="contact">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-mesh-radial opacity-50 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FFD54A] uppercase bg-[#FFD54A]/5 border border-[#FFD54A]/10 px-3 py-1 rounded-full inline-block mb-4">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight">
            Let's Make Something Epic
          </h2>
          <p className="text-[#A8A8A8] text-sm md:text-base font-light mt-4 leading-relaxed">
            Have a project in mind, want to scale your brand's retention, or need top-tier cinematic story edits? Get in touch below.
          </p>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: WhatsApp / Call Booking & Social Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* WhatsApp Book a Call Main Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-zinc-950/60 flex flex-col justify-between relative overflow-hidden group hover:border-[#FFD54A]/40 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 h-40 w-40 bg-[#FFD54A]/5 rounded-full blur-[50px] pointer-events-none" />
              
              <div>
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 text-[#FFD54A] flex items-center justify-center mb-6">
                  <MessageCircle className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  Book a Strategy Call Instantly
                </h3>
                <p className="text-[#A8A8A8] text-xs md:text-sm font-light leading-relaxed mb-6">
                  Skip the emails and chat directly on WhatsApp to coordinate raw footage delivery, discuss retention frameworks, or review timelines.
                </p>
              </div>

              <a
                href="https://wa.me/918319514044"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFD54A] hover:bg-white text-black font-display font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,213,74,0.25)] group-hover:shadow-[0_4px_30px_rgba(255,213,74,0.35)] cursor-pointer text-sm"
              >
                <span>CHAT & BOOK ON WHATSAPP</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Direct Channels Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:divyanshvirole7@gmail.com"
                className="glass-card p-5 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-white/10 hover:bg-white/[0.02] transition-all flex items-center gap-4 group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 text-[#FFD54A] flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] font-mono text-[#A8A8A8] uppercase block tracking-wider">EMAIL ME</span>
                  <span className="text-xs font-semibold text-white truncate block group-hover:text-[#FFD54A] transition-colors">
                    divyanshvirole7@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918319514044"
                className="glass-card p-5 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-white/10 hover:bg-white/[0.02] transition-all flex items-center gap-4 group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 text-[#FFD54A] flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#A8A8A8] uppercase block tracking-wider">CALL ME DIRECTLY</span>
                  <span className="text-xs font-semibold text-white block group-hover:text-[#FFD54A] transition-colors">
                    +91 83195 14044
                  </span>
                </div>
              </a>
            </div>

            {/* Premium Social Links Bar */}
            <div className="glass-card p-5 rounded-2xl border border-white/5 bg-zinc-950/40 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-widest">CONNECT</span>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/divyanshhh_07?igsh=MXhrcXF5N2Nrc3dvdg=="
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD54A]/30 text-gray-400 hover:text-[#FFD54A] flex items-center justify-center transition-all"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/divyansh-virole-375621339?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD54A]/30 text-gray-400 hover:text-[#FFD54A] flex items-center justify-center transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/Divyansh_Virole"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD54A]/30 text-gray-400 hover:text-[#FFD54A] flex items-center justify-center transition-all"
                  title="Twitter / X"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden bg-zinc-950/40 backdrop-blur-md shadow-2xl h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-[#FFD54A]" />
                      <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">QUICK INQUIRY</span>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-wider">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Divyansh"
                        className="bg-white/5 border border-white/5 text-white placeholder-zinc-700 text-sm rounded-xl py-3 px-4 focus:outline-none focus:border-[#FFD54A] focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-wider">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="creator@brand.com"
                        className="bg-white/5 border border-white/5 text-white placeholder-zinc-700 text-sm rounded-xl py-3 px-4 focus:outline-none focus:border-[#FFD54A] focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-wider">PROJECT OVERVIEW *</label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your content requirements, editing style, references, etc."
                        className="bg-white/5 border border-white/5 text-white placeholder-zinc-700 text-sm rounded-xl py-3 px-4 focus:outline-none focus:border-[#FFD54A] focus:bg-white/[0.08] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white hover:bg-[#FFD54A] disabled:bg-zinc-800 text-black disabled:text-gray-500 font-display font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>SENDING APPLICATION...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="h-16 w-16 rounded-full bg-[#FFD54A]/10 border border-[#FFD54A]/20 flex items-center justify-center text-[#FFD54A] mb-6 shadow-[0_0_25px_rgba(255,213,74,0.15)] animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <span className="text-[10px] font-mono text-[#FFD54A] tracking-widest bg-[#FFD54A]/5 border border-[#FFD54A]/20 rounded-full px-4 py-1 flex items-center gap-1.5 mb-4">
                      <Sparkles className="h-3.5 w-3.5" />
                      MESSAGE DELIVERED
                    </span>

                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                      Thanks for reaching out, {name}!
                    </h3>
                    
                    <p className="text-[#A8A8A8] text-xs font-light max-w-sm mb-6 leading-relaxed">
                      We've received your request and will get back to you at <span className="text-white font-mono">{email}</span> within 24 hours.
                    </p>

                    <button
                      onClick={handleReset}
                      className="border border-white/10 hover:border-[#FFD54A] text-[#A8A8A8] hover:text-[#FFD54A] bg-white/5 rounded-xl px-5 py-2 font-mono text-xs transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>SEND ANOTHER</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
