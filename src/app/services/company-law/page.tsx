"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";



// Content Data
const legalServices = [
  { title: "Incorporation – Public, Private, and LLP", description: "We provide end-to-end support for the incorporation of Public Limited Companies, Private Limited Companies, and LLPs. Our experts assist with structure selection, documentation, digital signatures, name approvals, and MCA registration." },
  { title: "MCA Filings and Annual Returns", description: "Timely MCA filings are critical to avoid penalties and maintain corporate transparency. We manage the preparation and submission of annual returns, financial statements, and periodic disclosures as mandated under the Companies Act." },
  { title: "MCA Compliance & Filings", description: "Stay on top of changing compliance norms with our ongoing support. From filing event-based forms to tracking statutory due dates, we handle the nitty-gritty. We ensure zero lapses and full adherence to legal mandates." },
  { title: "Drafting of Minutes, Registers & Legal Docs", description: "Proper documentation builds a strong legal foundation. We meticulously draft and maintain minutes of board/general meetings, statutory registers, resolutions, share certificates, and other secretarial records." },
  { title: "Corporate Mergers & Demergers", description: "We provide strategic and legal guidance on mergers and demergers to help you scale, restructure, or separate business units seamlessly. Services cover due diligence, drafting schemes, approvals, and post-merger compliance." },
  { title: "Liquidation at the Company", description: "Whether voluntary or regulatory, liquidation demands expert legal handling. We prepare resolutions, appoint liquidators, deal with creditors, file reports, and close the company with MCA." },
  { title: "Representation before ROC & NCLT", description: "Facing legal scrutiny or needing approvals? We represent clients before the Registrar of Companies (ROC), National Company Law Tribunal (NCLT), and other authorities to safeguard your interests." },
  { title: "Corporate Law Advisory", description: "Stay ahead with proactive legal advice tailored to your business. We provide guidance on company law matters, statutory changes, corporate structuring, and risk management to mitigate potential liabilities." }
];

const faqs = [
  { question: "What is the difference between a Private Limited Company, Public Limited Company, and LLP?", answer: "A Private Limited Company limits ownership and restricts share transfers, a Public Limited Company can raise funds from the public, and an LLP offers flexibility with limited liability while operating as a partnership." },
  { question: "How often do companies need to file returns with the MCA?", answer: "Companies must file annual returns once every financial year and also file forms for specific events such as board meetings, changes in directors, share allotments, etc., as and when they occur." },
  { question: "What are the consequences of missing MCA compliance deadlines?", answer: "Delayed filings attract penalties, interest, and in severe cases, directors may face disqualification or legal proceedings. Timely compliance helps avoid reputational and financial damage." },
  { question: "Why are board meeting minutes and statutory registers important?", answer: "These records form the legal proof of decisions taken and compliance with governance requirements. They are mandatory under the Companies Act and are scrutinized during audits or legal disputes." },
  { question: "When should a company consider a merger or demerger?", answer: "Mergers and demergers are ideal during business expansions, restructuring for tax efficiency, consolidations, or strategic separation of divisions to enhance focus and value." },
  { question: "What is the process of company liquidation in India?", answer: "It involves board and shareholder approval, appointment of a liquidator, settlement of debts, submission of reports to ROC/NCLT, and formal closure. We manage each step to ensure legal closure." },
  { question: "Can you help if a company is struck off and needs revival?", answer: "Yes. We assist in filing restoration petitions with the NCLT and complete the required documentation and representation to revive struck-off companies under Section 252 of the Companies Act." }
];

export default function CompanyLawPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#FF3D3D] selection:text-[#050505]">
      
      
      {/* 1. Hero Section: Full Width Homepage Style */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/law-hero.png" 
            alt="Corporate Law Authority" 
            fill 
            className="object-cover object-center"
          />
          {/* Gradient Overlays for Readability (like homepage) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            {/* Pill Badge matching homepage style */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-[#1A1A1A]/60 border border-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-white text-sm md:text-base font-black tracking-[0.2em] uppercase">
                Corporate Law
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05]">
              Legal Compliance,<br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Smooth Functioning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
              Navigating the intricate world of company law requires precision. From incorporation to liquidation, we ensure you remain compliant, protected, and strategically guided.
            </p>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Absolute Bottom Center */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
           <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-md bg-black/50">
              <ArrowDown className="w-6 h-6" />
           </div>
        </div>
      </section>

      {/* 2. Legal Services: Frosted Glass Grid */}
      <section className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute -left-[500px] top-[20%] w-[1000px] h-[1000px] rounded-full border border-white/5" />
           <div className="absolute -right-[500px] bottom-[10%] w-[1200px] h-[1200px] rounded-full border border-white/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Expert <span className="text-[#FF3D3D] font-serif italic font-normal">Legal</span> Services
            </h2>
            <div className="w-24 h-1 bg-[#FF3D3D] mx-auto rounded-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-full"
              >
                {/* Glow behind card on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#FF3D3D]/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Main Card (Frosted Glass) */}
                <div className="relative h-full bg-[#111111]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-[#FF3D3D]/50 transition-all duration-500 flex flex-col">
                  
                  {/* Subtle watermark icon in background */}
                  <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-[#FF3D3D]/20 transition-colors duration-500">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug mb-4 group-hover:text-[#FF3D3D] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FAQ Section (Unified Design - Back to Standard Theme) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/law-faq.png" 
                  alt="Legal Professionals" 
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

