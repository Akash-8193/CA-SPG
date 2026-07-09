"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient gradient animation
      gsap.to(".ambient-glow", {
        rotate: 360,
        scale: 1.2,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Text reveal on load
      gsap.fromTo(
        ".hero-text span",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Pinned scroll effect: text scales down and fades out
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        animation: gsap.to(textRef.current, {
          scale: 0.8,
          opacity: 0,
          y: -100,
          filter: "blur(20px)",
          ease: "power2.inOut"
        })
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
      
      {/* Animated Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="ambient-glow absolute w-[60vw] h-[60vw] bg-[#FF3D3D]/10 rounded-full blur-[120px] opacity-60 mix-blend-screen translate-x-1/4 -translate-y-1/4" />
        <div className="ambient-glow absolute w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen -translate-x-1/4 translate-y-1/4" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A1128_100%)]" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24" ref={textRef}>
        
        <div className="hero-text mb-6">
          <span className="block text-[#FF3D3D] tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-8">
            Our Story
          </span>
        </div>

        <h1 className="hero-text font-serif text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-12 flex flex-col gap-2">
          <span>SPGK & ASSOCIATES is a distinguished</span>
          <span className="text-[#1A1A1A]/70">Chartered Accountants firm registered under</span>
          <span>Rules 190 of the Chartered Accountant Act.</span>
        </h1>

        <div className="hero-text flex flex-col gap-6 max-w-3xl mx-auto text-[#1A1A1A]/70 text-lg md:text-xl font-light leading-relaxed">
          <span>
            Established in 2007 by CA Satya Prakash Gupta, our firm is headquartered in Ghaziabad, U.P., India.
          </span>
          <span>
            We provide a wide range of financial services, including Tax Consultancy, NRI Advisory Services, Company Incorporation in India and Abroad, Accounting & Auditing, Company Law Services, Financial & Corporate Advisory, Capital Advisory and much more.
          </span>
          <span className="text-[#1A1A1A]/70 font-medium">
            Our firm is committed to delivering high-quality, financial solutions to help businesses navigate complex financial aspects and achieve long-term success.
          </span>
        </div>

      </div>
    </section>
  );
}
