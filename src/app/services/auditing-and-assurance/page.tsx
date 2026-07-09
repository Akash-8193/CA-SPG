"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";



// Data
const carouselServices = [
  {
    title: "Statutory Audit",
    description: "We perform statutory audits in accordance with applicable laws and standards, ensuring fair representation of financial statements for companies, firms, and entities.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Internal Audit",
    description: "Internal audits help businesses evaluate their internal controls, risk management practices, and governance. We design customized internal audit plans that help organizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Information System Audit",
    description: "In a digital world, our IS audits assess your IT systems for data integrity, cybersecurity, and operational controls. This service is critical for tech-driven companies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Management Audit",
    description: "Our management audits evaluate your business's efficiency, productivity, and decision-making processes. This is a strategic tool for top-level executives aiming to align goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Concurrent Audit",
    description: "We offer concurrent audits for real-time examination of financial transactions, especially suited for banks, NBFCs, and high-transaction businesses. Ensures early detection.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Revenue Risk Audit",
    description: "This audit identifies revenue leakages and suggests corrective strategies. Ideal for businesses looking to optimize income streams and minimize operational losses.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Process Audit",
    description: "We assess operational workflows to ensure consistency, compliance, and optimization. This is perfect for manufacturing units, logistics companies, or service providers.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Special Purpose Audit",
    description: "Tailored to unique client requirements — whether it's regulatory compliance, forensic investigation, or due diligence — our special audits deliver focused insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  }
];

const zigZagServices = [
  {
    title: "Forensic Investigation",
    dropcap: "F",
    description: "Our forensic investigation services dive deep into financial records to uncover fraud, misstatements, or regulatory breaches. We use data-driven analysis and audit trails to deliver defensible findings, supporting litigation or internal decisions with credibility and clarity.",
    image: "/images/audit-c1.png",
    layout: "image-left",
    shape: "circle"
  },
  {
    title: "Organization Health Checkup",
    dropcap: "O",
    description: "This diagnostic service assesses your organization's compliance status, risk exposure, and financial hygiene. It helps identify gaps, inefficiencies, and potential liabilities — ensuring you're prepared for investors, audits, or strategic shifts.",
    image: "/images/audit-c2.png",
    layout: "text-left",
    shape: "circle"
  },
  {
    title: "Certification Services",
    dropcap: "C",
    description: "From turnover and net worth certificates to custom certifications required by financial institutions or government bodies, we issue all necessary statutory and regulatory certifications with precision and authority.",
    image: "/images/audit-c3.png",
    layout: "image-left",
    shape: "square"
  },
  {
    title: "Operational Audit Purpose Audit",
    dropcap: "O",
    description: "We evaluate the efficiency and effectiveness of your operational activities. This is ideal for businesses aiming to reduce costs, streamline workflows, and enhance overall productivity.",
    image: "/images/audit-c4.png",
    layout: "text-left",
    shape: "circle"
  }
];

const faqs = [
  { question: "What is the difference between statutory and internal audits?", answer: "Statutory audits are mandatory under the law, whereas internal audits are conducted voluntarily to improve internal processes and controls." },
  { question: "Who needs a concurrent audit?", answer: "Banks, financial institutions, and businesses with large volumes of transactions benefit the most from concurrent audits for real-time monitoring." },
  { question: "What is the importance of a management audit?", answer: "A management audit provides strategic insights into the organization's performance and helps leadership make informed decisions." },
  { question: "How does an information system audit help my business?", answer: "It ensures the security, reliability, and efficiency of your IT systems, which is crucial for data-driven businesses." },
  { question: "Do I need certification services even if my financials are audited?", answer: "Yes, specific certifications may still be required for tenders, bank loans, or regulatory filings beyond your audit report." },
  { question: "What industries benefit most from operational audits?", answer: "Manufacturing, logistics, retail, and service sectors often see significant gains in efficiency and cost-saving from operational audits." },
  { question: "Are special purpose audits legally binding?", answer: "While not always mandated by law, special purpose audits are recognized and often required in legal, financial, or compliance contexts." }
];

export default function AuditingAssurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400; // width of one card + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      
      
      {/* 1. Hero Section (Redesigned & Verified) */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#FFFDF5] overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#1A1A1A] uppercase">Core Service</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight">
              Auditing and <span className="text-[#FF3D3D]">Assurance</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-xl md:text-2xl font-medium text-[#1A1A1A]/70 leading-relaxed max-w-3xl">
              Building Trust, Ensuring Transparency. Our services go beyond compliance — we create value and provide insights for smarter decision-making.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="pt-4">
              <button className="group relative px-8 py-4 bg-[#1A1A1A] text-white rounded-sm font-bold text-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-[#FF3D3D] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Audited
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating 3D Image 1 (Right) */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="hidden lg:flex absolute top-[15%] right-[5%] w-72 h-72 rounded-[3rem] shadow-2xl border border-gray-100 p-2 rotate-6 z-0 bg-white items-center justify-center overflow-hidden">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-50">
            <Image unoptimized src="/images/auditing-icon-1.png" alt="Auditing and Assurance Icon" fill className="object-cover" />
          </div>
        </motion.div>

        {/* Floating 3D Image 2 (Left) */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hidden lg:flex absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full shadow-[0_20px_60px_rgba(255,61,61,0.15)] border border-gray-100 p-2 -rotate-12 z-0 bg-white items-center justify-center overflow-hidden">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-50">
            <Image unoptimized src="/images/auditing-icon-2.png" alt="Financial Growth Icon" fill className="object-cover scale-110" />
          </div>
        </motion.div>
      </section>

      {/* 2. Horizontal Carousel Services (1-8) */}
      <section className="py-12 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">Core Audit Solutions</h2>
            <div className="w-20 h-1 bg-[#FF3D3D] rounded-full" />
          </div>
          
          {/* Custom Carousel Controls */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => scrollCarousel('left')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF3D3D] hover:text-white hover:border-[#FF3D3D] transition-all text-[#1A1A1A]/70">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scrollCarousel('right')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF3D3D] hover:text-white hover:border-[#FF3D3D] transition-all text-[#1A1A1A]/70">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselServices.map((service, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[350px] max-w-[350px] flex-shrink-0 snap-start bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image unoptimized src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">{service.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Zig-Zag Special Services (9-12) */}
      <section className="bg-white overflow-hidden pb-8">
        {zigZagServices.map((service, idx) => (
          <div key={idx} className="relative w-full py-12 lg:py-16">
            {/* Connecting lines for zig zag */}
            {idx !== 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-gray-200 to-transparent opacity-50 hidden lg:block" />
            )}
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col gap-12 lg:gap-24 items-center ${service.layout === 'image-left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`relative ${service.shape === 'circle' ? 'w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full' : 'w-[90%] lg:w-full aspect-square rounded-2xl'} p-2`}>
                    
                    {/* Dotted border for circles matching the screenshot */}
                    {service.shape === 'circle' && (
                      <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-gray-300 animate-spin-slow pointer-events-none" style={{ animationDuration: '40s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF3D3D] rounded-full border-4 border-white" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#FF3D3D] rounded-full border-4 border-white" />
                      </div>
                    )}

                    <div className={`relative w-full h-full overflow-hidden ${service.shape === 'circle' ? 'rounded-full' : 'rounded-xl shadow-2xl'}`}>
                      <Image unoptimized src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>

                {/* Text Container */}
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight relative">
                      <span className="text-6xl md:text-8xl text-[#FF3D3D] float-left mr-2 -mt-2 leading-none font-black">{service.dropcap}</span>
                      {service.title.substring(1)}
                    </h2>
                    <p className="text-[#1A1A1A]/70 text-lg leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. FAQ Section (Redesigned) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/faq-audit.png" 
                  alt="Audit Professionals" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Overlapping Rating Card */}
              <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-[#b90a2a] text-white p-6 rounded-2xl shadow-2xl w-56 transform transition-transform hover:-translate-y-2">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#b90a2a] bg-gray-300 overflow-hidden relative">
                      <Image unoptimized src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User Avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-3xl font-black">4.9/5</span>
                </div>
                <p className="text-sm text-white/90 font-medium">Based on 2500+ reviews</p>
              </div>
            </div>

            {/* Right Column: FAQs */}
            <div className="flex flex-col space-y-4 pt-12 lg:pt-0">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
                Frequently Asked <span className="text-[#FF3D3D]">Questions</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isActive = openFaq === index;
                  return (
                    <motion.div 
                      key={index} 
                      initial={false} 
                      className={`rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${isActive ? 'bg-[#b90a2a]' : 'bg-white'}`}
                    >
                      <button 
                        onClick={() => setOpenFaq(isActive ? null : index)} 
                        className={`w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors ${isActive ? 'text-white' : 'text-[#1A1A1A] hover:bg-gray-50'}`}
                      >
                        <span className="font-bold text-[17px] pr-8 uppercase tracking-wide">
                          {index + 1}. {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          {isActive ? (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          ) : (
                            <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                            <div className="p-6 pt-0 text-white/90 text-[16px] leading-relaxed mt-2 border-t border-white/20">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </main>
  );
}
