"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/servicesData";

const imageMap: Record<string, string> = {
  "audit_service": "/images/audit_service_1783490207180.png",
  "direct_tax_service": "/images/direct_tax_service_1783490216114.png",
  "indirect_tax_service": "/images/indirect_tax_service_1783490227257.png",
  "accounting_service": "/images/accounting_service_1783490236756.png",
  "general_finance_service": "/images/general_finance_service_1783490247912.png",
};

export function ServicesOverview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = servicesData[activeIdx];

  return (
    <section id="services-overview" className="bg-[#FFFFFF] py-16 lg:py-24 font-sans text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            <span className="text-[#FF3D3D] text-5xl md:text-6xl lg:text-7xl">W</span>hat We Offer
          </h2>
          
          <h3 className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-[#1A1A1A] mb-4">
            Specialized Financial & Legal Solutions Designed for Precision and Performance
          </h3>
          
          <p className="text-[#1A1A1A]/70 max-w-4xl text-sm md:text-base leading-relaxed">
            SPGK & ASSOCIATES delivers curated services across audit, taxation, advisory, and corporate compliance. We operate at the intersection of law, finance, and strategy — helping our clients reduce risks, unlock capital, and stay ahead of the regulatory curve. For us, excellence isn't a metric — it's our method.
          </p>
        </div>

        {/* Container for the 3-pane layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[700px]">
          
          {/* Left Pane: Sidebar Navigation (col-span-3) */}
          <div className="lg:col-span-3 h-full flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-2 lg:pr-6 pb-8 custom-scrollbar" data-lenis-prevent="true">
              {servicesData.map((service, idx) => {
                const isActive = activeIdx === idx;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="w-full flex items-start gap-6 py-5 border-b border-[#1A1A1A]/20 text-left group transition-colors hover:bg-[#1A1A1A]/10"
                  >
                    <span 
                      className={cn(
                        "font-serif text-sm transition-colors font-bold",
                        isActive ? "text-[#FF3D3D]" : "text-[#1A1A1A]/80 group-hover:text-[#1A1A1A]"
                      )}
                    >
                      {num}
                    </span>
                    <span 
                      className={cn(
                        "font-medium text-sm transition-colors",
                        isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]/70"
                      )}
                    >
                      {service.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Middle Pane: Featured Image (col-span-4) */}
          <div className="lg:col-span-4 h-[400px] lg:h-full relative overflow-hidden group">
            <Image unoptimized 
              src={imageMap[activeService.imagePrefix] || imageMap["general_finance_service"]} 
              alt={activeService.name} 
              fill 
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />
            {/* Dark gradient overlay for text readability without washing out the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
            
            {/* Top Left Indicator */}
            <div className="absolute top-6 left-6 font-serif text-sm tracking-widest text-white/70 drop-shadow-md">
              {String(activeIdx + 1).padStart(2, "0")} / {servicesData.length}
            </div>

            {/* Bottom Center Title */}
            <div className="absolute bottom-10 w-full px-6 text-center">
              <h3 className="font-serif text-2xl lg:text-3xl text-white drop-shadow-lg">
                {activeService.name}
              </h3>
            </div>
          </div>

          {/* Right Pane: Content & Sub-services (col-span-5) */}
          <div className="lg:col-span-5 h-full flex flex-col overflow-hidden">
            
            {/* Subheading */}
            <div className="mb-8">
              <p className="text-[#1A1A1A]/70 text-sm lg:text-base leading-relaxed pr-4">
                {activeService.subheading}
              </p>
            </div>
            
            {/* Scrollable Sub-services Grid */}
            <div className="flex-1 overflow-y-auto pr-6 pb-4 custom-scrollbar" data-lenis-prevent="true">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeService.subServices.map((sub, i) => (
                  <div 
                    key={i} 
                    className="border border-[#1A1A1A]/20 p-6 flex flex-col justify-start hover:border-[#FF3D3D]/50 transition-colors duration-300 bg-[#1A1A1A]/10"
                  >
                    <h4 className="font-sans font-medium text-[#1A1A1A] mb-2 text-sm lg:text-base leading-snug">
                      {sub.title}
                    </h4>
                    <p className="text-[#1A1A1A]/70 text-xs lg:text-sm leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6 mt-auto">
              <Link 
                href={activeService.href} 
                className="inline-flex items-center justify-between px-8 py-4 bg-[#FF3D3D] text-[#1A1A1A] uppercase tracking-widest text-xs font-bold hover:bg-[#d4b26f] transition-colors"
              >
                EXPLORE {activeService.name}
                <ArrowUpRight className="w-4 h-4 ml-8" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
