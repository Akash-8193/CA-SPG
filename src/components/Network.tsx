"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Landmark, Building2, Briefcase } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const networkCategories = [
  {
    title: "Public Sector Banks",
    icon: Landmark,
    theme: "bg-deep-navy text-white",
    border: "border-white/10",
    textMuted: "text-white/60",
    entities: ["State Bank of India", "Punjab National Bank", "Bank of Baroda", "Union Bank", "Bank of India", "Bank of Maharashtra", "Punjab & Sind Bank"]
  },
  {
    title: "Private Banks & NBFCs",
    icon: Building2,
    theme: "bg-ivory text-deep-navy",
    border: "border-deep-navy/10",
    textMuted: "text-slate-gray",
    entities: ["IDFC First Bank", "Axis Bank", "HDFC", "Yes Bank", "RBL Bank", "Standard Chartered Bank", "Tata Capital Ltd", "Bajaj Finance", "Aditya Birla Finance", "India Bulls"]
  },
  {
    title: "Specialized Lenders",
    icon: Briefcase,
    theme: "bg-white text-deep-navy",
    border: "border-deep-navy/10",
    textMuted: "text-slate-gray",
    entities: ["SIDBI", "LIC", "Power Finance Corporation"]
  }
];

export function Network() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${100 + index * 40}`,
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          id: `card-pin-${index}`,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pb-32 bg-warm-white relative">

      {/* Section Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-luxury-gold tracking-[0.3em] uppercase text-xs mb-4 font-semibold">Strategic Alliances</p>
        <h2 className="font-serif text-4xl md:text-6xl text-deep-navy">
          Our Network of Partners
        </h2>
      </div>

      {/* Stacking Cards */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-[10vh]">
        {networkCategories.map((cat, idx) => (
          <div
            key={idx}
            className={cn(
              "stack-card relative w-full rounded-t-3xl border-t border-x overflow-hidden shadow-2xl origin-top mb-10 h-[60vh] flex flex-col p-8 md:p-16",
              cat.theme,
              cat.border
            )}
            style={{ zIndex: idx }}
          >
            {/* Background Texture/Gradient */}
            {idx === 0 && <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-gold/5 to-transparent pointer-events-none" />}
            {idx === 1 && <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />}

            <div className="flex items-center gap-4 mb-12 relative z-10">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-50">
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl md:text-5xl">{cat.title}</h3>
            </div>

            <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
              {cat.entities.map((entity, i) => (
                <span key={i} className={cn("font-sans text-lg md:text-xl font-light", cat.textMuted)}>
                  {entity}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
