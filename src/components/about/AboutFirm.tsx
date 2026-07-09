"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutFirm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const ctx = gsap.context(() => {
      // Background parallax effect
      gsap.to(".bg-wireframe", {
        yPercent: 30,
        rotate: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden text-[#1A1A1A] cursor-crosshair min-h-screen flex items-center">
      
      {/* Background Parallax Wireframe / Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="bg-wireframe w-[100vw] h-[100vw] rounded-full border border-[#1A1A1A]/20 absolute -left-[20%] -top-[20%]" />
        <div className="bg-wireframe w-[80vw] h-[80vw] rounded-full border border-[#1A1A1A]/20 absolute -right-[10%] -bottom-[10%]" />
        <div className="bg-wireframe w-[60vw] h-[60vw] rounded-full border border-[#FF3D3D]/20 absolute right-[20%] top-[10%]" />
      </div>

      {/* Base Text (Dimmed) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pointer-events-none">
        
        <p className="text-[#FF3D3D] tracking-[0.3em] uppercase text-xs font-semibold mb-12 opacity-50">
          About Our Firm
        </p>

        <div className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] opacity-20 transition-opacity duration-1000 flex flex-col gap-12">
          <p>
            SPGK & ASSOCIATES was founded by CA Satya Prakash Gupta, who brought over 40 years of industry expertise. Today, our firm is a coalition of highly qualified and experienced professionals dedicated to adding value and optimizing financial outcomes for our clients.
          </p>
          <p>
            As a trusted Chartered Accountancy firm, we work alongside seasoned professionals in allied legal and financial sectors. We believe in staying at the forefront of India's growing financial and regulatory terms, ensuring that our clients receive consistent, up-to-date, and superior-quality services.
          </p>
          <p>
            Our team comprises highly skilled professionals who provide holistic business solutions under one roof, continuously enhancing their knowledge to keep pace with industry advancements.
          </p>
        </div>
      </div>

      {/* Spotlight Overlay Layer (Reveals bright text) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, #0a0a0a 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a] mix-blend-multiply" />
      </div>

      {/* Bright Text inside the mask (This is what actually glows) */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none flex items-center max-w-6xl mx-auto px-6 md:px-12"
        style={{
          clipPath: `circle(300px at ${mousePos.x}px ${mousePos.y}px)`
        }}
      >
        <div className="w-full">
          <p className="text-[#FF3D3D] tracking-[0.3em] uppercase text-xs font-semibold mb-12 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
            About Our Firm
          </p>

          <div className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-[#1A1A1A] flex flex-col gap-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <p>
              SPGK & ASSOCIATES was founded by CA Satya Prakash Gupta, who brought over 40 years of industry expertise. Today, our firm is a coalition of highly qualified and experienced professionals dedicated to adding value and optimizing financial outcomes for our clients.
            </p>
            <p>
              As a trusted Chartered Accountancy firm, we work alongside seasoned professionals in allied legal and financial sectors. We believe in staying at the forefront of India's growing financial and regulatory terms, ensuring that our clients receive consistent, up-to-date, and superior-quality services.
            </p>
            <p className="text-[#FF3D3D] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
              Our team comprises highly skilled professionals who provide holistic business solutions under one roof, continuously enhancing their knowledge to keep pace with industry advancements.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
