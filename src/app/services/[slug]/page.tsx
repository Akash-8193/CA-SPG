"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { servicesData } from "@/data/servicesData";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  
  // Find the specific service from our data
  const service = servicesData.find(s => slug && s.href.endsWith(`/${slug}`));
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service || !containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
      
      // Staggered cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.4 }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [service]);

  // All conditional returns MUST be AFTER all hooks (useParams, useRef, useEffect)
  if (!slug) {
    return <div className="min-h-screen bg-[#FFFFFF]" />; // empty state to prevent flash
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] text-[#1A1A1A]">
        <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
        <p className="text-[#FF3D3D] mb-8">Debug Slug: {slug}</p>
        <Link href="/" className="px-6 py-3 border border-[#FF3D3D] text-[#FF3D3D] hover:bg-[#FF3D3D] hover:text-[#1A1A1A] transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFFFFF] font-sans pt-24 pb-16">
      
      {/* Hero Section */}
      <section className="bg-[#FFFFFF] py-20 lg:py-32 px-4 relative overflow-hidden">
        {/* Immersive Background Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,_rgba(197,160,89,0.15)_0%,_rgba(10,25,47,0)_70%)] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,_rgba(29,53,87,0.3)_0%,_rgba(10,25,47,0)_70%)] pointer-events-none" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link href="/#services-overview" className="inline-flex items-center text-[#FF3D3D] hover:text-[#1A1A1A] transition-colors mb-8 text-xs tracking-widest uppercase font-semibold border border-[#FF3D3D]/30 hover:border-[#FF3D3D]/80 rounded-full px-6 py-2 bg-[#1A1A1A]/10 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-3" />
            Back to Services
          </Link>
          
          <h1 className="hero-text font-serif text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 leading-tight drop-shadow-lg">
            {service.name}
          </h1>
          
          <div className="hero-text w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-8" />
          
          <p className="hero-text text-[#1A1A1A]/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {service.subheading}
          </p>
        </div>
      </section>

      {/* Sub-services Grid (Overlapping the hero section slightly) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.subServices.map((sub, idx) => (
            <div 
              key={idx} 
              className="service-card bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(10,25,47,0.05)] border border-slate-gray/10 hover:border-[#FF3D3D]/50 hover:shadow-[0_20px_40px_rgba(197,160,89,0.1)] transition-all duration-500 group flex flex-col"
            >
              {/* Number Indicator */}
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center mb-6 group-hover:bg-[#FF3D3D]/10 group-hover:scale-110 transition-all duration-300 border border-transparent group-hover:border-[#FF3D3D]/20">
                <span className="text-[#FF3D3D] font-serif font-bold text-lg">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="font-sans font-semibold text-[#1A1A1A] text-xl mb-4 leading-snug group-hover:text-[#FF3D3D] transition-colors duration-300">
                {sub.title}
              </h3>
              
              <p className="text-[#1A1A1A]/70 leading-relaxed text-sm">
                {sub.desc}
              </p>
              
              {/* Decorative Line */}
              <div className="mt-auto pt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-[1px] bg-gradient-to-r from-luxury-gold/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
