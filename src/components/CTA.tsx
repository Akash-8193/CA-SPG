"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-fade",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-deep-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center cta-fade">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
          Plan Finances With Confidence
        </h2>
        
        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl text-center">
          Reach out to SPGK & ASSOCIATES today for confident financial growth with our strategic advice and customized financial solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/services" className="group flex items-center gap-3 bg-luxury-gold text-deep-navy px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all hover:bg-white w-full sm:w-auto justify-center">
            Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="group flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all hover:bg-white/10 w-full sm:w-auto">
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  );
}
