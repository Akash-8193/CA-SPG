"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { name: "Auditing & Assurance", href: "/services/auditing-assurance", img: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop" },
  { name: "Direct Tax", href: "/services/direct-tax", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
  { name: "Indirect Tax", href: "/services/indirect-tax", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" },
  { name: "Accounting", href: "/services/accounting", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  { name: "Company Law", href: "/services/company-law", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" },
  { name: "Financial Services", href: "/services/financial-services", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { name: "Capital Advisory", href: "/services/capital-advisory", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" },
  { name: "IPO Services", href: "/services/ipo-services", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" },
  { name: "Management Consultancy", href: "/services/management-consultancy", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
  { name: "Due Diligence", href: "/services/due-diligence", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" },
  { name: "FEMA Advisory", href: "/services/fema-advisory", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop" },
  { name: "ESG", href: "/services/esg", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop" },
  { name: "Infrastructural", href: "/services/infrastructural-project-management", img: "https://images.unsplash.com/photo-1541888086925-0c13d4cc0444?q=80&w=2070&auto=format&fit=crop" },
  { name: "Software Consultancy", href: "/services/software-consultancy", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" },
];

export function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left image container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
      });

      // Update active image based on scroll position of right items
      const items = gsap.utils.toArray<HTMLElement>('.service-list-item');
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveIdx(i);
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-warm-white text-deep-navy">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Sticky Image - Hidden on mobile, sticky on desktop */}
        <div ref={leftColRef} className="hidden lg:block w-1/2 h-screen relative overflow-hidden">
          {services.map((srv, idx) => (
            <Image
              key={idx}
              src={srv.img}
              alt={srv.name}
              fill
              className={cn(
                "object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                activeIdx === idx ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 grayscale"
              )}
            />
          ))}
          <div className="absolute inset-0 bg-deep-navy/10 mix-blend-multiply" />
          
          <div className="absolute bottom-12 left-12 z-10">
             <p className="text-white tracking-[0.2em] uppercase text-xs font-semibold mb-2">What We Offer</p>
             <h2 className="font-serif text-4xl text-white">Our Expertise</h2>
          </div>
        </div>

        {/* Right Scrollable List */}
        <div className="w-full lg:w-1/2 py-32 px-4 sm:px-12 lg:px-24 flex flex-col justify-center">
          
          <div className="lg:hidden mb-16">
            <p className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-2">What We Offer</p>
            <h2 className="font-serif text-4xl text-deep-navy">Our Expertise</h2>
          </div>

          <div className="space-y-0">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className={cn(
                  "service-list-item block py-8 md:py-12 border-b border-deep-navy/10 group transition-all duration-500",
                  activeIdx === idx ? "opacity-100" : "opacity-30 hover:opacity-60"
                )}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-xl md:text-2xl text-deep-navy/40 group-hover:text-luxury-gold transition-colors duration-500">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-deep-navy group-hover:text-luxury-gold transition-colors duration-500 -tracking-tight">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
