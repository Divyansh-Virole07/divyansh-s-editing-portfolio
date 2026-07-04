import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5" id="faq">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FFD54A] uppercase block mb-3">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-[#A8A8A8] text-sm md:text-base font-light mt-4 max-w-xl mx-auto">
            Everything you need to know about the onboarding process, revision cycles, sound design integrations, and custom contract agreements.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FFD54A]/30 bg-zinc-950/80 shadow-[0_0_20px_rgba(255,213,74,0.05)]"
                    : "border-white/5 bg-zinc-950/30 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  id={`faq-trigger-${item.id}`}
                >
                  <span className={`text-base md:text-lg font-display font-medium transition-colors duration-300 ${
                    isOpen ? "text-[#FFD54A]" : "text-white"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#FFD54A]/10 border-[#FFD54A]/30 text-[#FFD54A]" 
                      : "bg-white/5 border-white/5 text-[#A8A8A8]"
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* Smooth Expandable Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 md:p-8 text-xs md:text-sm text-[#A8A8A8] leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
