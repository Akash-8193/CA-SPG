"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  {
    num: "01",
    title: "Our Vision",
    description: "To be India's most trusted financial advisory partner, helping businesses transform complexity into clarity and financial challenges into opportunities.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Our Mission",
    description: "To empower clients through data-driven financial strategies, reliable access to funding, and a strong foundation of financial knowledge.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Core Values",
    description: "At SPGK & ASSOCIATES, we uphold integrity, prioritize client-focused solutions, and drive growth through a blend of experience and data-driven insight.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

export function VisionMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollRef.current;
      if (!container) return;

      const totalScroll = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full">
      <section ref={containerRef} className="h-screen w-full bg-[#FFFFFF] overflow-hidden flex items-center relative">
        <div className="absolute top-12 left-6 md:top-16 md:left-12 z-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] drop-shadow-sm">
            <span className="text-[#FF3D3D] text-4xl md:text-5xl lg:text-6xl">W</span>ho We Are
          </h2>
        </div>

        <div ref={scrollRef} className="flex flex-nowrap h-full items-center pl-[10vw] md:pl-[20vw] pr-[20vw]">
          
          {/* Intro Slide */}
          <div className="w-[80vw] md:w-[60vw] shrink-0 mr-32 flex flex-col justify-center h-full">
            <h2 className="font-serif text-[8vw] md:text-[5vw] text-[#1A1A1A] leading-[1.1] mb-8">
              Excellence isn't a metric. <br/>
              <span className="italic text-[#1A1A1A]/80">It's our method.</span>
            </h2>
          </div>

          {/* Content Slides */}
          {items.map((item, idx) => (
            <div key={idx} className="w-[90vw] md:w-[70vw] shrink-0 flex flex-col md:flex-row items-center gap-12 md:gap-24 mr-24 h-[70vh]">
              
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full rounded-sm overflow-hidden">
                <Image unoptimized
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[#FF3D3D] font-serif text-6xl md:text-8xl opacity-60 leading-none mb-4 drop-shadow-sm">
                  {item.num}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-6">
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A]/70 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
