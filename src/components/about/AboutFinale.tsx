"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutFinale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // The massive scaling text effect
      gsap.fromTo(
        textRef.current,
        { scale: 5, opacity: 0, filter: "blur(20px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          }
        }
      );

      // Fade up the intro paragraph
      gsap.fromTo(
        ".finale-intro",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-[#FFFFFF] flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background glow for emphasis */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] rounded-full bg-[#FF3D3D]/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-16">
        
        <p className="finale-intro text-[#1A1A1A]/70 font-light text-lg md:text-xl leading-relaxed max-w-3xl">
          With a broad range of services offered by our partners, qualified staff, and an extensive network of empaneled associates and technical experts, we deliver expert opinions and solutions across various domains, including regulatory compliance for businesses in India, FEMA compliance & compounding, and GST consultancy services.
        </p>

        <div className="relative">
          <p className="text-[#FF3D3D] tracking-[0.4em] uppercase text-[10px] md:text-xs font-semibold mb-8 absolute -top-12 left-1/2 -translate-x-1/2 w-full text-center">
            Our Promise
          </p>
          <h2 
            ref={textRef} 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[1.1] tracking-tight transform-gpu"
          >
            At SPGK & ASSOCIATES, we don't just provide financial solutions&mdash;we build <span className="text-[#FF3D3D] italic">lasting partnerships</span> that help businesses grow.
          </h2>
        </div>
        
      </div>
    </section>
  );
}
