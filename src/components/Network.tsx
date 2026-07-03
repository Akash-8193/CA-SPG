"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const banks = [
  { name: "SBI", fullName: "State Bank of India", color: "text-blue-600" },
  { name: "PNB", fullName: "Punjab National Bank", color: "text-red-700" },
  { name: "Bank of Baroda", fullName: "Bank of Baroda", color: "text-orange-500" },
  { name: "HDFC BANK", fullName: "HDFC Bank", color: "text-blue-800" },
  null, // Center item
  { name: "ICICI Bank", fullName: "ICICI Bank", color: "text-orange-600" },
  { name: "AXIS BANK", fullName: "Axis Bank", color: "text-red-800" },
  { name: "YES BANK", fullName: "Yes Bank", color: "text-blue-700" },
  { name: "IDFC FIRST", fullName: "IDFC First Bank", color: "text-red-900" },
];

export function Network() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Lines animation
      gsap.fromTo(
        ".connecting-line",
        { strokeDasharray: "0, 1000" },
        {
          strokeDasharray: "10, 10",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Hexagons animation
      gsap.fromTo(
        ".hex-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
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
    <section ref={containerRef} className="py-24 md:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headers */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-luxury-gold tracking-[0.25em] uppercase text-[10px] md:text-xs font-bold mb-4">
            STRATEGIC ALLIANCES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-deep-navy font-medium mb-6">
            Connected. Collaborative. Committed.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            Our alliances reflect our commitment to deliver comprehensive, innovative and reliable financial solutions.
          </p>
        </div>

        {/* 3x3 Grid Area */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.05))" }}>
            <g className="stroke-luxury-gold/40" strokeWidth="1.5" strokeLinecap="round">
              {/* Top Row */}
              <line className="connecting-line" x1="50%" y1="50%" x2="16.66%" y2="16.66%" />
              <line className="connecting-line" x1="50%" y1="50%" x2="50%" y2="16.66%" />
              <line className="connecting-line" x1="50%" y1="50%" x2="83.33%" y2="16.66%" />
              
              {/* Middle Row */}
              <line className="connecting-line" x1="50%" y1="50%" x2="16.66%" y2="50%" />
              <line className="connecting-line" x1="50%" y1="50%" x2="83.33%" y2="50%" />
              
              {/* Bottom Row */}
              <line className="connecting-line" x1="50%" y1="50%" x2="16.66%" y2="83.33%" />
              <line className="connecting-line" x1="50%" y1="50%" x2="50%" y2="83.33%" />
              <line className="connecting-line" x1="50%" y1="50%" x2="83.33%" y2="83.33%" />
            </g>
          </svg>

          {/* Hexagon Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10">
            {banks.map((bank, index) => {
              
              // Center Highlight Item
              if (index === 4) {
                return (
                  <div key={index} className="hex-card aspect-[5/3] md:aspect-[2/1] relative flex items-center justify-center filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] group">
                    <div 
                      className="absolute inset-0 bg-deep-navy border-2 border-luxury-gold flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:scale-105"
                      style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)" }}
                    >
                      <Handshake className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />
                      <p className="text-white font-serif text-sm md:text-lg leading-tight">
                        Partnerships<br/>That Drive<br/>Progress
                      </p>
                    </div>
                  </div>
                );
              }

              // Normal Bank Items
              return (
                <div key={index} className="hex-card aspect-[5/3] md:aspect-[2/1] relative flex items-center justify-center filter drop-shadow-[0_8px_15px_rgba(0,0,0,0.06)] group">
                  <div 
                    className="absolute inset-0 bg-white flex flex-col items-center justify-center p-2 md:p-4 text-center transition-transform duration-300 group-hover:scale-105"
                    style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)" }}
                  >
                    <span className={cn("font-bold text-lg md:text-2xl font-sans tracking-tight", bank?.color)}>
                      {bank?.name}
                    </span>
                    <span className="hidden md:block text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-medium">
                      {bank?.fullName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
