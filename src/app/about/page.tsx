"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, TrendingUp, Users, Target, CheckCircle2, Star, ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
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
    <div ref={containerRef} className="min-h-screen bg-[#FFFFFF] font-sans pt-28 pb-16">
      
      {/* First Section (Hero/Intro replacing previous design) */}
      <section className="pt-8 pb-8 lg:pt-12 lg:pb-10 px-4 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Side: Staggered Image Layout (Robust Grid Approach) */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[400px] sm:h-[500px] lg:h-[600px] w-full fade-up">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top Left Green Box */}
              <div className="h-[40%] bg-[#1A1A1A] rounded-[1.5rem] lg:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-lg flex flex-col justify-center">
                <div className="flex gap-1 sm:gap-1.5 text-[#9FB586] mb-2 sm:mb-4 lg:mb-5">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                </div>
                <p className="text-[#1A1A1A] text-[10px] sm:text-xs lg:text-sm mb-3 sm:mb-4 lg:mb-6 font-medium leading-snug tracking-wide">Established in 2007</p>
                <div className="flex -space-x-2 sm:-space-x-3">
                  <img src="/images/about-us-image-1.jpg" alt="Team" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-[3px] border-[#1A1A1A] object-cover" />
                  <img src="/images/about-us-image-2.jpg" alt="Team" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-[3px] border-[#1A1A1A] object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Team" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-[3px] border-[#1A1A1A] object-cover" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-[3px] border-[#1A1A1A] bg-[#FF3D3D] flex items-center justify-center text-[#1A1A1A] text-xs lg:text-lg font-bold">+</div>
                </div>
              </div>

              {/* Bottom Left Image */}
              <div className="h-[60%] relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg">
                <Image unoptimized 
                  src="/images/about-us-image-1.jpg" 
                  alt="Corporate" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="h-full relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg">
              <Image unoptimized 
                src="/images/about-us-image-2.jpg" 
                alt="Team Meeting" 
                fill 
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

          </div>

          {/* Right Side: Text Content (Strictly from Screenshot 2) */}
          <div className="space-y-6">
            <div className="fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5">
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <span className="text-[13px] font-bold text-gray-900 tracking-wider">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-[#1A1A1A] leading-[1.1] fade-up font-extrabold tracking-tight">
              SPGK & ASSOCIATES
            </h1>
            
            <div className="pt-2">
              <p className="text-[#1A1A1A]/80 leading-[1.8] text-[17px] fade-up mb-6">
                SPGK & ASSOCIATES is a distinguished Chartered Accountants firm registered under Rules 190 of the Chartered Accountant Act. Established in 2007 by CA Satya Prakash Gupta, our firm is headquartered in Ghaziabad, U.P., India.
              </p>
              
              <p className="text-[#1A1A1A]/80 leading-[1.8] text-[17px] fade-up">
                We provide a wide range of financial services, including Tax Consultancy, NRI Advisory Services, Company Incorporation in India and Abroad, Accounting & Auditing, Company Law Services, Financial & Corporate Advisory, Capital Advisory and much more. Our firm is committed to delivering high-quality, financial solutions to help businesses navigate complex financial aspects and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section (New Layout based on Reference) */}
      <section className="pt-10 pb-16 lg:pt-10 lg:pb-20 px-4 max-w-[1300px] mx-auto">
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

          {/* Right Side: Image Collage (Robust Grid Approach) */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[400px] sm:h-[500px] lg:h-[600px] w-full fade-up relative">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top Left Tall Image */}
              <div className="h-[60%] relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg z-10">
                <Image unoptimized 
                  src="/images/ai-ca-image.png" 
                  alt="Corporate Office" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Bottom Left Stats Box (Maroon) */}
              <div className="h-[40%] bg-[#FF3D3D] rounded-[1.5rem] lg:rounded-[2rem] shadow-lg flex flex-col items-center justify-center text-center p-4 lg:p-6 z-20">
                <h3 className="text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-1 lg:mb-2">98%</h3>
                <p className="text-[#1A1A1A]/70 text-[11px] lg:text-sm font-semibold tracking-wide uppercase">Client Satisfaction<br/>Rate</p>
              </div>
            </div>

            {/* Right Column (Staggered image) */}
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
            
            {/* Decorative Dots Pattern (Optional subtle element behind) */}
            <div className="absolute top-[10%] left-[-5%] w-24 h-24 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-50 z-0" />
          </div>

        </div>
      </section>

      {/* About Our Firm Section (Awaken Themes Premium Style) */}
      <div className="bg-transparent">
        <section className="py-16 lg:py-20 px-4 max-w-[1300px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Content */}
            <div className="space-y-8 fade-up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-black/5">
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
              
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-12 bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center gap-5 z-20 border border-gray-100">
                <div className="w-16 h-16 bg-[#FF3D3D] rounded-full flex items-center justify-center text-[#1A1A1A] font-extrabold text-2xl shadow-inner">
                  40+
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-extrabold text-xl leading-tight">Years of<br/>Expertise</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-60 z-0" />
            </div>

          </div>
        </section>
      </div>

      {/* Client Relationships Foundations (Premium Zig-Zag Section 1) */}
      <section className="bg-[#FFFFFF] py-16 lg:py-20 px-4 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Image */}
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

            {/* Right Side: Content & List */}
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

      {/* Services & Final Outro (Premium Zig-Zag Section 2) */}
      <section className="bg-transparent py-16 lg:py-20 px-4 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Content & CTA */}
            <div className="space-y-8 fade-up lg:pr-6">
              <p className="text-[#1A1A1A]/80 leading-[1.8] text-[17px] lg:text-[18px]">
                With a broad range of services offered by our partners, qualified staff, and an extensive network of empaneled associates and technical experts, we deliver expert opinions and solutions across various domains, including regulatory compliance for businesses in India, FEMA compliance & compounding, and GST consultancy services.
              </p>
              
              <h3 className="text-2xl md:text-3xl lg:text-[2rem] text-[#1A1A1A] font-extrabold leading-[1.3] tracking-tight border-l-[4px] border-[#FF3D3D] pl-6 py-2">
                At SPGK & ASSOCIATES, we don't just provide financial solutions—we build lasting partnerships that help businesses grow.
              </h3>
              
              <div className="pt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-[#1A1A1A] text-[#1A1A1A] uppercase tracking-widest text-[13px] font-bold hover:bg-[#0f241c] transition-colors rounded-full shadow-[0_10px_30px_rgba(26,54,43,0.2)] hover:shadow-[0_15px_40px_rgba(26,54,43,0.3)]">
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right Side: Image */}
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
  );
}
