"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FileSearch, Calculator, Briefcase, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const spgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = ''; // Unlock scroll
        }
      });

      // Initial state
      gsap.set([".hero-logo", ".hero-text", ".terminal-text", ".icon-box", ".divider", ".spg-image"], { 
        y: 40, 
        opacity: 0 
      });

      // Animate In
      tl.to(".hero-logo", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      })
      .to(".hero-text", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.6")
      .to(".terminal-text", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")
      .to([".icon-box", ".divider"], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.2")
      .to(".spg-image", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.0")
      
      // Hold for reading (5.5 seconds to cover loading)
      .to({}, { duration: 5.5 })

      // Animate Out
      .to(".spg-image", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in"
      })
      .to([".hero-logo", ".hero-text", ".terminal-text", ".icon-box", ".divider"], {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "power3.in"
      }, "-=0.4")
      .to(containerRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "expo.inOut"
      });

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col md:flex-row items-center justify-start md:px-24 overflow-hidden"
    >
      {/* Top Header Logo */}
      <div ref={logoRef} className="absolute top-8 left-8 md:top-12 md:left-24 z-20">
        <h1 className="hero-logo font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#FFFFFF]">
          SPGK <span className="font-light text-[#FF3D3D]">& ASSOCIATES</span>
        </h1>
      </div>

      {/* Right Giant Image (3D Effect) */}
      <div 
        ref={spgRef}
        className="absolute right-[-20%] md:right-[-10%] top-[55%] md:top-[55%] -translate-y-1/2 w-[700px] md:w-[1000px] h-full pointer-events-none opacity-40 md:opacity-100 flex items-center justify-end z-0"
      >
        {/* Using mix-blend-screen ensures the black background of the image completely disappears on the pure black bg */}
        <img 
          src="/spg_3d_logo.png" 
          alt="SPG 3D Logo" 
          className="spg-image w-full h-full object-contain mix-blend-screen opacity-90" 
        />
      </div>

      {/* Left Content */}
      <div className="flex flex-col z-10 max-w-2xl px-8 md:px-0 mt-32 md:mt-16">
        <div ref={textRef} className="mb-8">
          
          <p className="hero-text text-gray-300 font-sans text-lg md:text-xl leading-[1.8] mb-12 max-w-sm tracking-wide">
            Chartered Accountants<br />
            Transforming complexity into<br />
            clarity and financial challenges<br />
            into opportunities.
          </p>

          <div className="terminal-text flex items-center text-[#FF3D3D] font-sans text-lg md:text-xl font-extrabold mb-16 md:mb-24 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-[#FF3D3D] mr-4"></div>
            <span>Driving Financial Growth</span>
          </div>
        </div>

        {/* Bottom Icons - Matching Screenshot Layout exactly */}
        <div ref={iconsRef} className="flex items-center gap-6 md:gap-10">
          
          <div className="icon-box flex flex-col items-start gap-3">
            <FileSearch className="w-[22px] h-[22px] text-[#888888]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#666666] font-bold">AUDIT</span>
          </div>

          <div className="divider w-[1px] h-10 bg-white/10 hidden sm:block"></div>

          <div className="icon-box flex flex-col items-start gap-3">
            <Calculator className="w-[22px] h-[22px] text-[#888888]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#666666] font-bold">TAXATION</span>
          </div>

          <div className="divider w-[1px] h-10 bg-white/10 hidden sm:block"></div>

          <div className="icon-box flex flex-col items-start gap-3">
            <Briefcase className="w-[22px] h-[22px] text-[#888888]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#666666] font-bold">ADVISORY</span>
          </div>

          <div className="divider w-[1px] h-10 bg-white/10 hidden sm:block"></div>

          <div className="icon-box flex flex-col items-start gap-3 hidden sm:flex">
            <ShieldCheck className="w-[22px] h-[22px] text-[#888888]" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase text-[#666666] font-bold">COMPLIANCE</span>
          </div>

        </div>
      </div>

    </div>
  );
}
