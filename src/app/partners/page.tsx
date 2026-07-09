"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PartnersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroScrollContainerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const heroTextGroupRef = useRef<HTMLDivElement>(null);
  
  // Refs for the sticky horizontal scroll section
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);

  // New refs for Associate Network sliding effect
  const associatePinRef = useRef<HTMLDivElement>(null);
  const associatePanel2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // 1. Hero Zoom-Through Animation
      // ----------------------------------------------------
      if (heroScrollContainerRef.current && heroTextGroupRef.current && heroBgRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroScrollContainerRef.current,
            start: "top top",
            end: "bottom top", // Drives animation over the spacer
            scrub: 1,
          }
        });

        tl.to(heroBgRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        }, 0.6); 

        tl.to(heroTextGroupRef.current, {
          scale: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.in"
        }, 0);
      }

      // ----------------------------------------------------
      // 2. Horizontal Slide-In Stacking Effect
      // ----------------------------------------------------
      if (pinContainerRef.current && panel2Ref.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top", 
            end: "+=150%",    // Increased scroll duration for the pause
            pin: true,        
            scrub: 1,         
          }
        });

        // Add a delay (empty tween) so user can read Panel 1 before Panel 2 slides in
        tl.to({}, { duration: 0.5 })
          .fromTo(panel2Ref.current, 
            { x: "100vw" }, 
            { x: "0%", ease: "none", duration: 1 }
          );
      }

      // 4. GSAP Pinned Stacking for Associate Network (Panel 3 & 4)
      if (associatePinRef.current && associatePanel2Ref.current) {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: associatePinRef.current,
            start: "top 100px", 
            end: "+=150%",    // Increased scroll duration for the pause
            pin: true,        
            scrub: 1,         
          }
        });

        // Add a delay (empty tween) so user can read Dr. Anil Gupta before CS Akansha slides in
        tl2.to({}, { duration: 0.5 })
           .fromTo(associatePanel2Ref.current, 
             { x: "100vw" }, 
             { x: "0%", ease: "none", duration: 1 }
           );
      }

      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] font-sans">
      
      {/* 1. Fixed Background Hero (Animates on Scroll) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#050505] overflow-hidden flex items-center justify-center pointer-events-none">
        <img 
          ref={heroBgRef}
          src="/images/partners-hero-bg.png" 
          alt="Leadership Partners" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 w-full pointer-events-none origin-center">
          <div ref={heroTextGroupRef} className="flex flex-col items-center justify-center origin-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Our Leadership Partners
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium max-w-3xl mx-auto drop-shadow-md">
              Visionaries shaping our legacy with leadership and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Scroll Driver Spacer */}
      <div ref={heroScrollContainerRef} className="h-[120vh] relative w-full pointer-events-none"></div>

      {/* 2. The Pinned Profile Container */}
      <div className="relative z-20 bg-[#FFFFFF] shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        
        {/* We pin this specific container which holds both profiles */}
        <div ref={pinContainerRef} className="relative w-full overflow-hidden bg-[#FFFFFF]">
          
          {/* Use CSS Grid to overlap panels while allowing parent to expand to tallest panel */}
          <div className="grid grid-cols-1">
            
            {/* ============================================================== */}
            {/* PANEL 1: CA Satya Prakash Gupta (Stays fixed in background) */}
            {/* ============================================================== */}
            <div className="col-start-1 row-start-1 w-full bg-[#FFFFFF] px-4 pt-20 pb-8">
              <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-2 border-l-[4px] border-[#FF3D3D] pl-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
                    CA Satya Prakash Gupta
                  </h2>
                  <p className="text-lg md:text-xl font-bold text-[#FF3D3D]">
                    Founder Partner, B.Com, FCA
                  </p>
                </div>
                <div className="space-y-3 text-[#1A1A1A]/80 text-[14px] md:text-[15px] leading-relaxed font-medium">
                  <p className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-snug">
                    A visionary leader with unmatched financial acumen and four decades of industry wisdom.
                  </p>
                  <p>
                    With over 40 years of hands-on experience, CA Satya Prakash Gupta is the cornerstone of SPGK & ASSOCIATES' legacy and leadership. A qualified Chartered Accountant and founder partner, he brings unmatched depth in <strong className="text-[#1A1A1A] font-bold">Statutory, Management, and System Audits, Direct & Indirect Taxation, Accounting, Corporate Law,</strong> and <strong className="text-[#1A1A1A] font-bold">Finance-Loan Syndication.</strong> His career includes leadership and consulting roles with iconic organizations such as T-Series, Somany Group, and Cosmo Films Ltd., where he successfully managed financial syndications exceeding ₹800 crore.
                  </p>
                  <p>
                    Known for developing robust <strong className="text-[#1A1A1A] font-bold">MIS systems, SOPs,</strong> and audit frameworks, his strategic foresight continues to inspire the firm's quality-driven approach and long-standing client relationships. His collaborative approach with PSU and private banks further strengthens the firm's credibility in handling high-value funding projects and regulatory matters.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group">
                  <Image unoptimized src="/images/ca-satya-prakash-gupta.png" alt="CA Satya Prakash Gupta" fill className="object-cover object-top" />
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* PANEL 2: CA Pradeep Kumar (Slides in from the right over Panel 1) */}
          {/* ============================================================== */}
          {/* Start offscreen to the right by using GSAP fromTo */}
          <div ref={panel2Ref} className="col-start-1 row-start-1 w-full bg-[#FAFAFA] px-4 pt-20 pb-8 shadow-[-20px_0_50px_rgba(0,0,0,0.15)] z-10">
            <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group">
                  <Image unoptimized src="/images/ca-pradeep-kumar.png" alt="CA Pradeep Kumar" fill className="object-cover object-top" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <div className="space-y-2 border-l-[4px] border-[#FF3D3D] pl-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
                    CA Pradeep Kumar
                  </h2>
                  <p className="text-lg md:text-xl font-bold text-[#FF3D3D]">
                    Partner, B.Com, FCA, DISA, Concurrent Audit Certified
                  </p>
                </div>
                <div className="space-y-3 text-[#1A1A1A]/80 text-[14px] md:text-[15px] leading-relaxed font-medium">
                  <p className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-snug">
                    A detail-oriented professional known for blending technology with traditional audit expertise.
                  </p>
                  <p>
                    CA Pradeep Kumar, a Chartered Accountant and DISA-qualified audit specialist, brings more than 9 years of rigorous experience to SPGK & ASSOCIATES. Known for his meticulous execution and adaptive thinking, he leads assignments in <strong className="text-[#1A1A1A] font-bold">Statutory and Internal Audits, Bank Audits, GST, and Income Tax Assessments and Appeals.</strong>
                  </p>
                  <p>
                    A certified Concurrent Audit professional, he is adept at navigating the evolving financial and regulatory ecosystem with clarity and control. His proficiency lies not just in identifying gaps, but in bridging them with insightful strategies that support long-term compliance and efficiency. With an unwavering focus on quality and precision, he has earned a reputation as a trusted advisor for businesses looking to strengthen their financial governance.
                  </p>
                </div>
              </div>

            </div>
          </div>

          </div>

        </div>
        {/* End of Grid */}
        
        {/* End of Pin Container */}
      </div>
      
      {/* 3. Associate Network Section */}
      <div className="relative z-20 bg-[#FFFFFF] py-20 px-4 border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="max-w-[1300px] w-full mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight">
            Associate Network
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Domain-aligned experts supporting holistic client delivery across verticals.
          </p>
        </div>

        {/* Sliding Cards Container */}
        <div ref={associatePinRef} className="relative max-w-[1300px] w-full mx-auto grid grid-cols-1">
          
          {/* Dr. Anil Gupta Profile (Stays fixed in background) */}
          <div className="col-start-1 row-start-1 w-full bg-[#FFFDF5] rounded-3xl p-6 lg:px-12 lg:py-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-3 lg:space-y-4">
                <div className="space-y-1 lg:space-y-2 border-l-[4px] border-[#FF3D3D] pl-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                    Dr. Anil Gupta
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-[#FF3D3D]">
                    International Business Strategist, Founder &ndash; Connect Ventures
                  </p>
                </div>
                <div className="space-y-2 text-[#1A1A1A]/80 text-[13px] md:text-[14px] leading-relaxed font-medium">
                  <p className="text-base md:text-lg font-bold text-[#1A1A1A] leading-snug">
                    A global thinker empowering businesses to scale across borders with confidence.
                  </p>
                  <p>
                    Dr. Anil Gupta serves as the international growth catalyst for SPGK & ASSOCIATES' clients. As the founder of <strong className="text-[#1A1A1A] font-bold">Connect Ventures</strong>, a global compliance powerhouse operating across 40+ countries, he brings specialized knowledge in <strong className="text-[#1A1A1A] font-bold">Foreign Company Incorporation, International Taxation, and Secretarial Compliances</strong> across diverse jurisdictions.
                  </p>
                  <p>
                    With deep insight into cross-border laws and an unmatched ability to align strategy with compliance, Dr. Gupta has positioned himself as <strong className="text-[#1A1A1A] font-bold">India's leading coach for international business expansion</strong>. His solutions are tailored, scalable, and structured to empower Indian enterprises to build a global presence while remaining legally and financially resilient.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[240px] lg:max-w-[280px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group">
                  <Image unoptimized src="/images/dr-anil-gupta.png" alt="Dr. Anil Gupta" fill className="object-cover object-top" />
                </div>
              </div>

            </div>
          </div>

          {/* CS Akansha Agarwal Profile (Slides in from right) */}
          <div ref={associatePanel2Ref} className="col-start-1 row-start-1 w-full bg-[#FAFAFA] rounded-3xl p-6 lg:px-12 lg:py-8 shadow-2xl border border-gray-100 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[240px] lg:max-w-[280px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#EAF2FA] group">
                <Image unoptimized src="/images/cs-akansha-agarwal.png" alt="CS Akansha Agarwal" fill className="object-cover object-top" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 lg:space-y-4 order-1 lg:order-2">
              <div className="space-y-1 lg:space-y-2 border-l-[4px] border-[#FF3D3D] pl-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                  CS Akansha Agarwal
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-bold text-[#FF3D3D]">
                  Company Secretary
                </p>
              </div>
              <div className="space-y-2 text-[#1A1A1A]/80 text-[13px] md:text-[14px] leading-relaxed font-medium">
                <p className="text-base md:text-lg font-bold text-[#1A1A1A] leading-snug">
                  A compliance expert known for her precision, consistency, and corporate law finesse.
                </p>
                <p>
                  With over a decade of specialized experience, CS Akansha Agarwal is a vital asset to the firm's <strong className="text-[#1A1A1A] font-bold">corporate law and compliance practice</strong>. She brings deep expertise in <strong className="text-[#1A1A1A] font-bold">Company Law, MCA Filings, GST Compliance,</strong> and <strong className="text-[#1A1A1A] font-bold">Income Tax procedures</strong>, making her the go-to professional for seamless execution of statutory responsibilities.
                </p>
                <p>
                  Her methodical work ethic, command over legal documentation, and strategic interpretation of corporate regulations enable clients to maintain full regulatory alignment without disruptions. Akansha's consistent delivery and practical understanding of corporate frameworks position her as a trusted compliance partner for growing businesses navigating complex legal landscapes.
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>
        {/* End of Sliding Cards Container */}

      </div>
    </div>
  );
}
