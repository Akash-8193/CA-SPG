"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    title: "Ensuring Accuracy, for Enhancing Trust",
    description: "Comprehensive audit solutions that go beyond compliance, delivering clarity, control, and confidence.",
    buttons: [
      { text: "Explore Our Audit Services", href: "/services/auditing-assurance" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Smart Accounting. Compliant Strategic Finance.",
    description: "From bookkeeping to financial strategy, we support your growth with precision, insight, and timely reporting.",
    buttons: [
      { text: "View Accounting & Financial Solutions", href: "/services/accounting" }
    ],
    image: "/images/hero_slide_2.png"
  },
  {
    title: "Simplifying Tax. Compliant Supporting Growth.",
    description: "Direct Tax, Indirect Tax, Corporate Law, Advisory & More, one firm for all your financial and compliance needs.",
    buttons: [
      { text: "Browse All Services", href: "/#services-overview" }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Strategic Solutions For Expansion",
    description: "Strategic financial, legal, and compliance solutions tailored to elevate and expand your business.",
    buttons: [
      { text: "Start Growing with Expert Guidance", href: "/#contact" },
      { text: "Unlock Your Business Growth", href: "/#services-overview" }
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Text Animation when slide changes
  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animated-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }, textRef);
    return () => ctx.revert();
  }, [activeIdx]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] lg:min-h-[110vh] w-full flex items-end justify-center overflow-hidden bg-[#FFFFFF]">
      
      {/* Background Images with Crossfade */}
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={cn(
            "absolute inset-0 z-0 h-[120%] w-full -top-[10%] transition-opacity duration-1000 ease-in-out",
            activeIdx === idx ? "opacity-100" : "opacity-0"
          )}
        >
          <Image unoptimized 
            src={slide.image} 
            alt={slide.title} 
            fill 
            className="object-cover opacity-100"
            priority={idx === 0}
            quality={100}
          />
        </div>
      ))}
      {/* Gradient overlay changed to dark for natural contrast and rich images */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-transparent z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 flex flex-col justify-end min-h-[100vh] lg:min-h-[110vh]">
        <div ref={textRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Animated Content Wrapper */}
          <div key={activeIdx} className="max-w-4xl">
            <div className="hero-animated-text inline-flex items-center gap-4 mb-8 px-6 py-2.5 rounded-full backdrop-blur-md bg-[#1A1A1A]/30 border border-[#FFFFFF]/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <span className="w-8 h-[1px] bg-[#FF3D3D] block" />
              <p className="text-[#FFFFFF] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold pt-0.5">
                Excellence by Method
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] leading-[1.1] mb-6 drop-shadow-lg">
              {slides[activeIdx].title.split(/(\.|,)/).map((segment, i) => (
                <span key={`${activeIdx}-${i}`} className="hero-animated-text inline-block mr-1">
                  {segment}
                </span>
              ))}
            </h1>
            <p className="hero-animated-text text-[#FFFFFF]/90 leading-relaxed font-sans text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md">
              {slides[activeIdx].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {slides[activeIdx].buttons.map((btn, i) => (
                <Link 
                  key={`${activeIdx}-btn-${i}`}
                  href={btn.href} 
                  className={cn(
                    "hero-animated-text group flex items-center justify-between border px-6 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500",
                    i === 0 
                      ? "border-[#FF3D3D] bg-[#FF3D3D] text-[#FFFFFF] hover:bg-transparent hover:text-[#FF3D3D]" 
                      : "border-[#FFFFFF]/30 text-[#FFFFFF] hover:border-[#FF3D3D] hover:text-[#FF3D3D] bg-[#1A1A1A]/20 backdrop-blur-sm"
                  )}
                >
                  <span className="font-semibold">{btn.text}</span>
                  <ArrowRight className="w-4 h-4 ml-6 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="hero-animated-text flex flex-col items-start lg:items-end gap-6 shrink-0">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className="group py-2 px-1"
                >
                  <div className={cn(
                    "h-[2px] transition-all duration-500",
                    activeIdx === idx ? "w-12 bg-[#FF3D3D]" : "w-6 bg-[#FFFFFF]/40 group-hover:bg-[#FFFFFF]/80"
                  )} />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[#FFFFFF]/80 font-serif text-sm">
              <span className="text-[#FF3D3D] font-bold">{String(activeIdx + 1).padStart(2, '0')}</span>
              <span className="w-8 h-[1px] bg-[#FFFFFF]/30" />
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator - Absolute Bottom Center */}
      <div className="absolute bottom-12 lg:bottom-[16vh] left-1/2 transform -translate-x-1/2 z-50">
         <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-md bg-[#1A1A1A]/30">
            <ArrowDown className="w-6 h-6" />
         </div>
      </div>
    </section>
  );
}
