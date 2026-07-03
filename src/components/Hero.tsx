"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    title: "Ensuring Accuracy, for Enhancing Trust",
    description: "Comprehensive audit solutions that go beyond compliance, delivering clarity, control, and confidence.",
    buttonText: "Explore Our Audit Services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.fromTo(
        ".hero-heading-word",
        { y: 150, opacity: 0, rotateZ: 5 },
        { y: 0, opacity: 1, rotateZ: 0, duration: 1.5, stagger: 0.1, ease: "power4.out" }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.8, ease: "power3.out" }
      );
      
      // Parallax Scroll
      gsap.to(imageRef.current, {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headingWords = slides[0].title.split(", ");

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full flex items-end justify-center overflow-hidden bg-deep-navy">
      <div ref={imageRef} className="absolute inset-0 z-0 h-[120%] w-full -top-[10%]">
        <Image 
          src={slides[0].image} 
          alt="Premium Architecture" 
          fill 
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-deep-navy/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          <div className="max-w-4xl overflow-hidden">
            <h1 className="font-serif text-[12vw] sm:text-[8vw] lg:text-[6vw] text-white leading-[0.9] tracking-tighter uppercase">
              {headingWords.map((word, i) => (
                <div key={i} className="overflow-hidden block">
                  <span className="hero-heading-word inline-block">{word}</span>
                </div>
              ))}
            </h1>
          </div>
          
          <div className="max-w-md hero-sub flex flex-col items-start lg:items-end lg:text-right">
            <p className="text-luxury-gold tracking-[0.3em] uppercase text-xs mb-6 font-semibold flex items-center gap-4 before:content-[''] before:block before:w-12 before:h-[1px] before:bg-luxury-gold">
              Excellence by Method
            </p>
            <p className="text-white/80 leading-relaxed font-sans text-lg mb-8">
              {slides[0].description}
            </p>
            <div className="flex flex-col w-full gap-4">
              <button className="group flex items-center justify-between w-full border border-white/20 hover:border-luxury-gold text-white px-8 py-5 text-xs tracking-[0.2em] uppercase transition-all hover:bg-luxury-gold hover:text-deep-navy duration-500">
                <span>{slides[0].buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
