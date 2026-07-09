"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landmark, Building2, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const networkData = [
  {
    category: "Public Sector Banks",
    accent: "bg-[#FF3D3D]",
    iconBg: "bg-white/5 border border-white/10",
    iconColor: "text-white",
    icon: Building2,
    banks: [
      "State Bank of India",
      "Punjab National Bank",
      "Bank of Baroda",
      "Union Bank",
      "Bank of India",
      "Bank of Maharashtra",
      "Punjab & Sind Bank"
    ]
  },
  {
    category: "Private Banks & NBFCs",
    accent: "bg-[#FF3D3D]",
    iconBg: "bg-[#FF3D3D]/10 border border-[#FF3D3D]/30 shadow-[0_0_20px_rgba(255,61,61,0.2)]",
    iconColor: "text-[#FF3D3D]",
    icon: Landmark,
    banks: [
      "IDFC First Bank",
      "Axis Bank",
      "HDFC",
      "Yes Bank",
      "RBL Bank",
      "Standard Chartered Bank",
      "Tata Capital Ltd",
      "Bajaj Finance",
      "Aditya Birla Finance",
      "India Bulls"
    ]
  },
  {
    category: "Specialized Lenders",
    accent: "bg-[#FF3D3D]",
    iconBg: "bg-white/5 border border-white/10",
    iconColor: "text-white",
    icon: Wallet,
    banks: [
      "SIDBI",
      "LIC",
      "Power Finance Corporation"
    ]
  }
];

export function Network() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Entrance Animation
      gsap.fromTo(
        ".network-3d-card",
        { opacity: 0, y: 80, rotateX: 30, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateX: -y / 30,
      rotateY: x / 30,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid-pattern.svg')] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF3D3D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#FF3D3D] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 drop-shadow-sm">
            Strategic Alliances
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium mb-6">
            Our Network of Partners
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-[17px] font-light leading-[1.8]">
            We collaborate with India's most trusted financial institutions to deliver comprehensive, reliable, and scalable funding solutions for your business.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 [perspective:2000px]">
          {networkData.map((group, idx) => (
            <div 
              key={idx}
              ref={el => { cardRefs.current[idx] = el }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="network-3d-card group relative h-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transform-gpu transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(255,61,61,0.15)] hover:border-[#FF3D3D]/30 hover:bg-white/[0.07]"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* Inner floating content */}
              <div className="relative h-full flex flex-col" style={{ transform: "translateZ(40px)" }}>
                
                {/* Header Section */}
                <div className="flex items-center gap-5 mb-8">
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500", group.iconBg)}>
                    <group.icon className={cn("w-6 h-6", group.iconColor)} />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#FF3D3D] transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Separator Line */}
                <div className="w-full h-[1px] bg-white/10 mb-8 relative overflow-hidden">
                  <div className={cn("absolute top-0 left-0 h-full w-12 group-hover:w-full transition-all duration-700 ease-in-out bg-gradient-to-r from-[#FF3D3D] to-transparent")} />
                </div>

                {/* Banks List */}
                <ul className="flex-1 space-y-4">
                  {group.banks.map((bank, bankIdx) => (
                    <li 
                      key={bankIdx} 
                      className="flex items-center text-white/60 hover:text-white transition-colors group/item"
                    >
                      <svg className="w-4 h-4 mr-4 text-[#FF3D3D] opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 mr-4 transition-all duration-300 group-hover/item:hidden" />
                      <span className="font-sans font-light text-sm lg:text-[15px] tracking-wide group-hover/item:-translate-x-2 transition-transform duration-300">
                        {bank}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
