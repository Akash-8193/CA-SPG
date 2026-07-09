"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Users, Target, ArrowRight, Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Regular fade-up animations for the rest of the page
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fade-up",
            start: "top 85%",
          }
        }
      );

      // Video-Accurate Massive Zoom-Through Scroll Effect
      if (scrollContainerRef.current && diamondRef.current && textGroupRef.current && bgRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: "top top",
            end: "bottom top", // Drives animation over the 150vh spacer
            scrub: 1,
          }
        });

        // 1. Background fades out slowly at the end of the scroll
        tl.to(bgRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        }, 0.6); // Starts fading out at 60% of the scroll

        // 2. The Diamond ALSO scales up massively to fly past the camera
        tl.to(diamondRef.current, {
          scale: 40,      // Massive scale for diamond
          opacity: 0,     // Fades out as it flies past
          duration: 1,
          ease: "power3.in"
        }, 0);

        // 3. The "ABOUT US" Text scales up MASSIVELY and comes out towards the camera
        tl.to(textGroupRef.current, {
          scale: 100,     // Massive scale to fly past the camera
          opacity: 0,     // Fades out as it flies past
          duration: 1,
          ease: "power3.in" // Accelerates as it gets closer
        }, 0);
      }
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const strengths = [
    {
      title: "Client's Goodwill",
      desc: "Built on our ability to serve and retain long-term association; we build long-lasting partnerships that help.",
      icon: Users
    },
    {
      title: "Commercial Sense",
      desc: "Gained through decades of experience in solving diverse business and financial challenges.",
      icon: TrendingUp
    },
    {
      title: "Continuity Of Personnel",
      desc: "A motivated team supported by ongoing professional development and rewarding career opportunities within the firm.",
      icon: Target
    },
    {
      title: "Personalised Services",
      desc: "Rooted in the core principles established by our founders, ensuring dedicated and customized solutions for every client.",
      icon: ShieldCheck
    }
  ];

  const foundations = [
    "Comprehensive business perspective",
    "Absolute confidentiality",
    "Transparent communication",
    "Uncompromising honesty",
    "Dedication to client success"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] font-sans pb-16">
      
      {/* 1. Fixed Background Hero (Animates on Scroll) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#050505] overflow-hidden flex items-center justify-center pointer-events-none">
        
        {/* The CA Image Background (Fades out to black as we fly through) */}
        <img 
          ref={bgRef}
          src="/ca_hero_bg.png" 
          alt="About Us CA Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
        />
        
        {/* The 3D Diamond */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none origin-center">
          <div ref={diamondRef} className="flex items-center justify-center origin-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-[30px] md:border-[40px] border-[#111111] rotate-45 shadow-[0_0_100px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(0,0,0,0.8)]" style={{
              background: 'transparent',
              borderColor: 'rgba(20, 20, 20, 0.95)',
            }}></div>
          </div>
        </div>

        {/* Text Overlay inside the Diamond (Scales up massively) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 w-full pointer-events-none origin-center">
          <div ref={textGroupRef} className="flex flex-col items-center justify-center origin-center">
            <h1 className="text-white text-xl md:text-3xl font-black tracking-[0.4em] uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
              About Us
            </h1>
            <p className="text-gray-300 mt-2 md:mt-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,1)] max-w-xs">
              For businesses that want to grow beyond limits.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Scroll Trigger Spacer (Invisible, drives the GSAP animation) */}
      <div ref={scrollContainerRef} className="relative w-full h-[120vh] z-0 bg-transparent pointer-events-none">
        {/* Scroll Indicator - Moved higher up to be visible */}
        <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 opacity-50 animate-bounce pointer-events-auto">
          <span className="text-white text-sm md:text-base font-mono tracking-[0.4em] uppercase whitespace-nowrap">Scroll to explore</span>
        </div>
      </div>

      {/* The Rest of the Content */}
      <div className="relative z-20 bg-[#FFFFFF] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-4">
        {/* About Our Firm Section */}
        <div className="bg-transparent pt-10">
          <section className="py-16 lg:py-20 px-4 max-w-[1300px] mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Side: Content */}
              <div className="space-y-8 fade-up">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-black/5 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#FF3D3D]" />
                  <span className="text-[13px] font-bold text-gray-900 tracking-wider uppercase">About Our Firm</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.1] font-extrabold tracking-tight">
                  Legacy of Excellence & Trust
                </h2>
                
                <div className="space-y-6 text-[17px] text-[#1A1A1A]/80 leading-[1.8]">
                  <p>
                    SPGK & ASSOCIATES was founded by CA Satya Prakash Gupta, who brought over 40 years of industry expertise. Today, our firm is a coalition of highly qualified and experienced professionals dedicated to adding value and optimizing financial outcomes for our clients. As a trusted Chartered Accountancy firm, we work alongside seasoned professionals in allied legal and financial sectors.
                  </p>
                  <p>
                    We believe in staying at the forefront of India's growing financial and regulatory terms, ensuring that our clients receive consistent, up-to-date, and superior-quality services. Our team comprises highly skilled professionals who provide holistic business solutions under one roof, continuously enhancing their knowledge to keep pace with industry advancements.
                  </p>
                  
                  <div className="pl-6 border-l-[4px] border-[#FF3D3D] mt-8 bg-gray-50/80 py-5 pr-5 rounded-r-xl shadow-sm">
                    <p className="font-medium text-gray-900 italic text-[16px] leading-relaxed">
                      "At SPGK & ASSOCIATES, we uphold the highest standards of integrity, transparency, loyalty, and result oriented solutions. Our commitment to professional ethics is unwavering, ensuring that every client receives honest, ethical, and top-tier financial guidance."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Premium Image */}
              <div className="relative h-[450px] sm:h-[500px] lg:h-[650px] w-full mt-12 lg:mt-0 fade-up">
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10">
                  <Image unoptimized 
                    src="/images/ai-about-firm.png" 
                    alt="Professional CA Desk" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-12 bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center gap-5 z-20 border border-gray-100">
                  <div className="w-16 h-16 bg-[#FF3D3D] rounded-full flex items-center justify-center text-[#1A1A1A] font-extrabold text-2xl shadow-inner">
                    40+
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-extrabold text-xl leading-tight">Years of<br/>Expertise</p>
                  </div>
                </div>
                
                <div className="absolute top-10 -right-10 w-32 h-32 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-60 z-0" />
              </div>

            </div>
          </section>
        </div>

        {/* Core Strengths Section */}
        <section className="pt-10 pb-16 lg:pt-16 lg:pb-20 px-4 max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Text & Cards */}
            <div className="space-y-10 lg:pr-4">
              <div className="space-y-5">
                <div className="fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5">
                  <div className="w-2 h-2 rounded-full bg-[#FF3D3D]" />
                  <span className="text-[13px] font-bold text-gray-900 tracking-wider">Our Core Strengths</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] leading-[1.15] fade-up font-extrabold tracking-tight">
                  Our approach ensures that our clients stay ahead
                </h2>
                
                <p className="text-[#1A1A1A]/80 leading-[1.8] text-[17px] fade-up">
                  We add value through professional, proactive, and flexible financial strategies that align with individual business goals. Our core strengths include:
                </p>
              </div>

              {/* 2x2 Grid for Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="fade-up bg-white p-6 lg:p-7 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-[#FF3D3D]/5 border border-[#FF3D3D]/10 flex items-center justify-center text-[#FF3D3D]">
                         <strength.icon className="w-6 h-6 stroke-[2px]" />
                      </div>
                      <h3 className="font-extrabold text-gray-900 text-lg leading-tight">{strength.title}</h3>
                    </div>
                    <p className="text-[#1A1A1A]/70 text-[15px] leading-relaxed font-medium">
                      {strength.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image Collage */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[400px] sm:h-[500px] lg:h-[600px] w-full fade-up relative">
              <div className="flex flex-col gap-4 lg:gap-6 h-full">
                <div className="h-[60%] relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg z-10">
                  <Image unoptimized 
                    src="/images/ai-ca-image.png" 
                    alt="Corporate Office" 
                    fill 
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="h-[40%] bg-[#FF3D3D] rounded-[1.5rem] lg:rounded-[2rem] shadow-lg flex flex-col items-center justify-center text-center p-4 lg:p-6 z-20">
                  <h3 className="text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-1 lg:mb-2">98%</h3>
                  <p className="text-[#1A1A1A]/70 text-[11px] lg:text-sm font-semibold tracking-wide uppercase">Client Satisfaction<br/>Rate</p>
                </div>
              </div>

              <div className="h-full w-full relative z-10 flex flex-col justify-end">
                <div className="relative w-full h-[85%] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg">
                  <Image unoptimized 
                    src="/images/ai-ca-meeting.png" 
                    alt="Client Meeting" 
                    fill 
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-[10%] left-[-5%] w-24 h-24 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-50 z-0" />
            </div>

          </div>
        </section>
      </div>

      {/* The Unified Premium Dark Section */}
      <div className="relative z-20">
        <section className="bg-[#050505] relative py-12 lg:py-16 px-4 overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t border-white/5">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          <div className="max-w-[1300px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Avatar & Tags */}
              <div className="space-y-10">
                <div className="space-y-3 fade-up">
                  <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">Comprehensive Financial Services</h2>
                  <p className="text-gray-300 text-[17px] font-medium leading-relaxed">Our experienced advisors are always available to help you navigate complex financial aspects and achieve long-term success.</p>
                </div>

                {/* 4 Tags Grid */}
                <div className="grid grid-cols-2 gap-3 fade-up">
                  {["Tax Consultancy", "NRI Advisory", "Accounting & Auditing", "Capital Advisory"].map((tag, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-center text-gray-200 font-bold tracking-wide hover:bg-white/10 transition-colors cursor-pointer text-center text-[13px] md:text-[15px]">
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Globe & Avatar */}
                <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full mt-0 fade-up">
                  {/* Subtle globe overlay in background */}
                  <div className="absolute left-1/2 top-[5%] w-[90%] h-[90%] -translate-x-1/2 opacity-30 pointer-events-none flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite]"></div>
                    <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite_reverse]"></div>
                  </div>
                  
                  {/* Floating Map Pins */}
                  <div className="absolute top-[15%] left-[25%] flex flex-col items-center animate-bounce z-20">
                    <div className="w-5 h-5 rounded-full bg-[#FF3D3D] flex items-center justify-center shadow-[0_0_15px_rgba(255,61,61,0.6)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <div className="w-1 h-2 bg-[#FF3D3D]"></div>
                  </div>
                  <div className="absolute top-[30%] right-[20%] flex flex-col items-center animate-bounce delay-300 z-20">
                    <div className="w-4 h-4 rounded-full bg-[#FF3D3D] flex items-center justify-center shadow-[0_0_10px_rgba(255,61,61,0.6)]">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div className="w-0.5 h-1.5 bg-[#FF3D3D]"></div>
                  </div>

                  {/* Avatar in Suit */}
                  <Image unoptimized
                    src="/avatar_in_suit.png"
                    alt="Professional Advisor"
                    fill
                    className="object-contain object-top drop-shadow-2xl z-10"
                  />
                </div>
              </div>

              {/* Right Column: Accordion & Content */}
              <div className="space-y-8 lg:pl-8">
                <div className="space-y-4 fade-up">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF3D3D]/10 border border-[#FF3D3D]/20 shadow-inner">
                    <span className="text-[#FF3D3D] text-xs font-bold tracking-widest uppercase">* Our Core Strengths</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl text-white font-black leading-[1.15] tracking-tight">
                    SPGK & ASSOCIATES
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.7] font-medium">
                      SPGK & ASSOCIATES is a distinguished Chartered Accountants firm registered under Rules 190 of the Chartered Accountant Act. Established in 2007 by CA Satya Prakash Gupta, our firm is headquartered in Ghaziabad, U.P., India.
                    </p>
                    <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.7] font-medium">
                      We provide a wide range of financial services, including Tax Consultancy, NRI Advisory Services, Company Incorporation in India and Abroad, Accounting & Auditing, Company Law Services, Financial & Corporate Advisory, Capital Advisory and much more. Our firm is committed to delivering high-quality, financial solutions to help businesses navigate complex financial aspects and achieve long-term success.
                    </p>
                  </div>
                </div>

                {/* Accordion List */}
                <div className="space-y-3 pt-2 fade-up">
                  {strengths.map((strength, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-3">
                      <button 
                        onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left group"
                      >
                        <span className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors pr-4">
                          {idx + 1}. {strength.title}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#FF3D3D]/10 text-[#FF3D3D] flex items-center justify-center shrink-0 border border-[#FF3D3D]/30 shadow-[0_0_15px_rgba(255,61,61,0.1)] group-hover:bg-[#FF3D3D]/20 transition-all">
                          {openAccordion === idx ? <Minus className="w-4 h-4 stroke-[3px]" /> : <Plus className="w-4 h-4 stroke-[3px]" />}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === idx ? 'max-h-40 opacity-100 pt-3' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium pr-8">
                          {strength.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-20 bg-[#FFFFFF] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
      {/* 4. Client Relationships Foundations */}
      <section className="bg-[#FFFFFF] py-16 lg:py-20 px-4 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl fade-up group">
              <Image unoptimized 
                src="/images/ai-handshake.png" 
                alt="Client Partnership" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            <div className="space-y-10 fade-up lg:pl-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-[#1A1A1A] font-extrabold leading-[1.2] tracking-tight">
                Our client relationships are built on the foundation of:
              </h2>
              
              <ul className="space-y-6">
                {foundations.map((item, idx) => (
                  <li key={idx} className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-[#FF3D3D]/10 flex items-center justify-center mr-5 shrink-0 group-hover:bg-[#FF3D3D] transition-colors duration-300">
                       <ArrowRight className="w-5 h-5 text-[#FF3D3D] group-hover:text-[#1A1A1A] transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 text-lg lg:text-xl font-medium tracking-wide group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
              
            </div>
          </div>
        </section>

        {/* Services & Final Outro */}
        <section className="bg-transparent py-16 lg:py-20 px-4 overflow-hidden">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <div className="space-y-8 fade-up lg:pr-6">
                <p className="text-[#1A1A1A]/80 leading-[1.8] text-[17px] lg:text-[18px]">
                  With a broad range of services offered by our partners, qualified staff, and an extensive network of empaneled associates and technical experts, we deliver expert opinions and solutions across various domains, including regulatory compliance for businesses in India, FEMA compliance & compounding, and GST consultancy services.
                </p>
                
                <h3 className="text-2xl md:text-3xl lg:text-[2rem] text-[#1A1A1A] font-extrabold leading-[1.3] tracking-tight border-l-[4px] border-[#FF3D3D] pl-6 py-2">
                  At SPGK & ASSOCIATES, we don't just provide financial solutions—we build lasting partnerships that help businesses grow.
                </h3>
                
                <div className="pt-6">
                  <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-[#1A1A1A] text-white uppercase tracking-widest text-[13px] font-bold hover:bg-[#0f241c] transition-colors rounded-full shadow-[0_10px_30px_rgba(26,54,43,0.2)] hover:shadow-[0_15px_40px_rgba(26,54,43,0.3)]">
                    Partner With Us
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl fade-up group">
                <Image unoptimized 
                  src="/images/ai-client-success.png" 
                  alt="Client Success & Satisfaction" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
