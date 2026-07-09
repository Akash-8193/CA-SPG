"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Lightbulb, Users, Target } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const strengths = [
  {
    title: "Client's Goodwill",
    desc: "Built on our ability to serve and retain long-term association; we build long-lasting partnerships that help.",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    title: "Commercial Sense",
    desc: "Gained through decades of experience in solving diverse business and financial challenges.",
    icon: Lightbulb,
    color: "text-amber-500"
  },
  {
    title: "Continuity Of Personnel",
    desc: "A motivated team supported by ongoing professional development and rewarding career opportunities within the firm.",
    icon: Users,
    color: "text-blue-500"
  },
  {
    title: "Personalised Services",
    desc: "Rooted in the core principles established by our founders, ensuring dedicated and customized solutions for every client.",
    icon: Target,
    color: "text-emerald-500"
  }
];

export function CoreStrengths() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollRef.current;
      if (!container) return;

      const totalScroll = container.scrollWidth - window.innerWidth;

      // Horizontal Scroll Animation
      gsap.to(container, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll + window.innerWidth}`,
          invalidateOnRefresh: true,
        }
      });

      // 3D Tilt effect on cards as they come into view
      gsap.utils.toArray(".strength-card").forEach((card: any, i) => {
        gsap.fromTo(card, 
          { rotateY: 45, opacity: 0, scale: 0.8 },
          { 
            rotateY: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontal-scroll") || undefined, // Not strictly needed if we just trigger based on standard scroll, but better with scrub
              start: "left center+=300",
              end: "left center",
              scrub: true
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-[#FFFFFF] overflow-hidden flex items-center relative perspective-[1000px]">
      
      {/* Absolute intro text block pinned on the left */}
      <div className="absolute top-1/4 left-6 md:left-24 z-10 w-full max-w-md pointer-events-none mix-blend-exclusion">
        <p className="text-[#FF3D3D] tracking-[0.2em] uppercase text-xs font-semibold mb-6">Our Approach</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
          Our approach ensures that our clients stay ahead.
        </h2>
        <p className="text-[#1A1A1A]/70 font-light text-lg">
          We add value through professional, proactive, and flexible financial strategies that align with individual business goals.
        </p>
      </div>

      <div ref={scrollRef} className="flex flex-nowrap h-full items-center pl-[100vw] pr-[20vw] gap-12 md:gap-24">
        
        {/* The Title slide to introduce strengths */}
        <div className="shrink-0 w-[50vw] md:w-[30vw] flex items-center justify-center">
          <h3 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] opacity-20 whitespace-nowrap">
            Our Core Strengths &mdash;
          </h3>
        </div>

        {/* The Cards */}
        {strengths.map((item, idx) => (
          <div 
            key={idx} 
            className="strength-card shrink-0 w-[85vw] md:w-[40vw] h-[50vh] md:h-[60vh] bg-[#1A1A1A]/10 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col justify-between transform-gpu"
          >
            <div className="flex justify-between items-start">
              <span className="font-serif text-6xl md:text-8xl text-[#1A1A1A]/10 leading-none">
                0{idx + 1}
              </span>
              <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6">
                {item.title}
              </h4>
              <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
