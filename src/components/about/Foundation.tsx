"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const foundationPoints = [
  "Comprehensive business perspective",
  "Absolute confidentiality",
  "Transparent communication",
  "Uncompromising honesty",
  "Dedication to client success"
];

export function Foundation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Intro text reveal
      gsap.fromTo(
        ".foundation-intro",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Staggered 3D list reveal
      gsap.fromTo(
        ".foundation-item",
        { opacity: 0, y: 100, rotateX: -30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".foundation-list",
            start: "top 80%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-transparent text-[#1A1A1A] perspective-[1000px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Intro */}
        <div className="lg:w-1/2 foundation-intro flex flex-col justify-center">
          <p className="text-[#FF3D3D] tracking-[0.3em] uppercase text-xs font-semibold mb-8">
            Our Principles
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
            Upholding the highest standards of integrity, transparency, and loyalty.
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-6">
            At SPGK & ASSOCIATES, we uphold the highest standards of integrity, transparency, loyalty, and result oriented solutions. 
          </p>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Our commitment to professional ethics is unwavering, ensuring that every client receives honest, ethical, and top-tier financial guidance.
          </p>
        </div>

        {/* Right Side: The Foundation List */}
        <div className="lg:w-1/2 flex flex-col justify-center foundation-list">
          <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]/80 mb-12 foundation-intro">
            Our client relationships are built on the foundation of:
          </h3>
          
          <div className="flex flex-col gap-6">
            {foundationPoints.map((point, index) => (
              <div 
                key={index}
                className="foundation-item group flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)] hover:border-[#FF3D3D]/30 transition-all duration-500 transform-gpu cursor-default"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-[#FF3D3D]/10 group-hover:border-[#FF3D3D]/50 transition-colors duration-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-[#FF3D3D] transition-colors duration-500" />
                </div>
                <p className="font-sans text-lg md:text-2xl font-light text-slate-700 group-hover:text-[#1A1A1A] transition-colors duration-500 tracking-tight">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
