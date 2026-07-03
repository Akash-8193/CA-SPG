"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const leaders = [
  {
    name: "Dr. Anil Gupta",
    role: "International Business Strategist",
    desc: "Founder of Connect Ventures",
    quote: '"A global thinker empowering businesses to scale across borders with confidence."',
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "CS Akansha Agarwal",
    role: "Company Secretary",
    desc: "Expert in Compliance & Corporate Law",
    quote: '"A compliance expert known for her precision, consistency, and corporate law finesse."',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  }
];

export function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lead-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <p className="text-luxury-gold tracking-[0.2em] uppercase text-xs mb-6 font-semibold">Leadership</p>
          <h2 className="font-serif text-3xl md:text-5xl text-deep-navy mb-4">
            Our Partners. Your Advantage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {leaders.map((leader, index) => (
            <div key={index} className="lead-card group flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative rounded-sm overflow-hidden bg-slate-100">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-deep-navy mb-2">{leader.name}</h3>
                <p className="text-luxury-gold text-xs tracking-widest uppercase font-semibold mb-2">
                  {leader.role}
                </p>
                <p className="text-slate-500 font-sans text-sm mb-6">
                  {leader.desc}
                </p>
                <div className="w-8 h-[1px] bg-deep-navy/20 mb-6" />
                <p className="text-slate-gray italic leading-relaxed text-sm">
                  {leader.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
