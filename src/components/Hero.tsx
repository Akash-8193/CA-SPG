"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
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
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, textRef);
    return () => ctx.revert();
  }, [activeIdx]);

  // Format title for premium look (mixing fonts)
  const formatTitle = (title: string) => {
    const parts = title.split(/(,|\.)/);
    return parts.map((part, index) => {
      if (part === ',' || part === '.') return <span key={index} className="text-white">{part}</span>;
      // Make the second part italic serif
      if (index > 0 && part.trim().length > 0) {
        return <span key={index} className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-light">{part}</span>;
      }
      return <span key={index} className="font-black text-white">{part}</span>;
    });
  };

  return (
    <section ref={containerRef} className="relative min-h-[100vh] lg:min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Images with Slow Zoom (Ken Burns) and Crossfade */}
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={cn(
            "absolute inset-0 z-0 w-full h-full transition-opacity duration-1500 ease-in-out",
            activeIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className={cn("w-full h-full transform transition-transform duration-[10000ms] ease-linear", activeIdx === idx ? "scale-110" : "scale-100")}>
            <Image 
              unoptimized 
              src={slide.image} 
              alt={slide.title} 
              fill 
              className="object-cover"
              priority={idx === 0}
              quality={100}
            />
          </div>
        </div>
      ))}
      
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10 pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <div ref={textRef} className="flex flex-col items-center w-full max-w-5xl">
          
          {/* Badge */}
          <div className="hero-animated-text inline-flex items-center space-x-3 px-6 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-pulse" />
            <span className="text-white/90 tracking-[0.25em] uppercase text-xs md:text-sm font-bold">
              Excellence by Method
            </span>
          </div>

          {/* Main Title */}
          <h1 key={`title-${activeIdx}`} className="hero-animated-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-12 drop-shadow-2xl">
            {formatTitle(slides[activeIdx].title)}
          </h1>
          
          {/* Glassmorphism Card for Description & Buttons */}
          <div className="hero-animated-text w-full max-w-3xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <p className="text-white/90 leading-relaxed font-sans text-lg md:text-xl lg:text-2xl mb-10 drop-shadow-md">
              {slides[activeIdx].description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {slides[activeIdx].buttons.map((btn, i) => (
                <Link 
                  key={`${activeIdx}-btn-${i}`}
                  href={btn.href} 
                  className={cn(
                    "group flex items-center justify-center px-8 py-5 rounded-full text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 w-full sm:w-auto",
                    i === 0 
                      ? "bg-[#FF3D3D] text-white hover:bg-[#b90a2a] hover:shadow-[0_0_30px_rgba(255,61,61,0.5)] border border-transparent" 
                      : "bg-white/10 text-white hover:bg-white hover:text-black border border-white/20 backdrop-blur-sm"
                  )}
                >
                  <span>{btn.text}</span>
                  <ArrowRight className={cn("w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1", i === 0 ? "text-white" : "text-white group-hover:text-black")} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Vertical Slider Controls */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className="group flex flex-col items-center gap-2"
          >
            <span className={cn(
              "text-xs font-bold font-mono transition-all duration-300",
              activeIdx === idx ? "text-[#FF3D3D]" : "text-white/30 group-hover:text-white/60"
            )}>
              0{idx + 1}
            </span>
            <div className={cn(
              "w-0.5 rounded-full transition-all duration-500",
              activeIdx === idx ? "h-16 bg-[#FF3D3D] shadow-[0_0_10px_rgba(255,61,61,0.8)]" : "h-8 bg-white/20 group-hover:bg-white/40"
            )} />
          </button>
        ))}
      </div>

    </section>
  );
}
