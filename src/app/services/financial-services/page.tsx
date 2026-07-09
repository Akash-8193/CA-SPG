"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2, Building2 } from "lucide-react";



// Content Data
const financialServices = [
  // First 7 Services (For Sticky Tabs)
  { 
    title: "Term Loan and Working Capital for Projects", 
    description: "We assist businesses in securing term loans for fixed asset investments and working capital for day-to-day operations. Whether you're starting a new project or scaling an existing one, we match you with the most suitable financial institutions and guide you through documentation, evaluation, and disbursal to ensure smooth funding access.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Non-Convertible Debentures (NCDs)", 
    description: "NCDs offer a reliable way for companies to raise long-term capital without diluting equity. We help structure, issue, and comply with SEBI guidelines for NCDs. This service is ideal for businesses seeking predictable returns for investors and fixed-rate capital for expansion or restructuring.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Equity Participation from Investor", 
    description: "Raising equity can provide a solid capital base for growth. We connect businesses with private investors, family offices, and venture capitalists, facilitating strategic equity participation. From pitch deck preparation to negotiation, we ensure a smooth and value-driven fundraising experience.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Foreign Direct Investment (FDI)", 
    description: "FDI brings not just capital but also global expertise. We support businesses in receiving FDI by ensuring legal compliance, regulatory approvals, FEMA guidelines, and RBI reporting. Our service ensures that foreign investors can safely and effectively participate in your business ventures.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "PI and Machine Loan", 
    description: "For manufacturing and industrial businesses, we offer assistance in availing Plant & Machinery loans. These loans help acquire new or upgraded equipment, boosting production capacity and efficiency. Our team ensures quick processing and optimal terms with leading banks and NBFCs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Overdraft (OD) and Cash Credit (CC) Limits", 
    description: "OD and CC facilities provide flexible funding for working capital needs. We help assess eligibility, prepare financials, and coordinate with banks to sanction appropriate credit limits—ensuring your liquidity is never compromised due to operational cycles.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Unsecured Loan", 
    description: "Need quick funding without collateral? We help eligible businesses obtain unsecured loans based on cash flow, credit rating, and performance. These loans are perfect for meeting short-term requirements such as inventory, marketing, or vendor payments.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  
  // Next 7 Services (For Timeline Layout)
  { 
    title: "Loan for MSME Project", 
    description: "We specialize in funding solutions specifically designed for MSMEs. From initial assessments to preparing DPRs (Detailed Project Reports), we help small and medium enterprises secure the right project funding.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "CGTMSE Scheme Loan (Collateral-Free)", 
    description: "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme enables entrepreneurs to avail loans without providing collateral. We help structure the proposal, align with lender requirements, and secure approvals under this government-backed scheme.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Venture Capital", 
    description: "High-growth startups and innovation-driven companies can benefit from venture capital. We offer fundraising support including investor matching, business modeling, and deal negotiation to help you attract and close VC funding for rapid scaling.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Loan to Infrastructure Projects", 
    description: "We offer comprehensive support for securing long-term loans for infrastructure projects like roads, power plants, logistics, and urban development. Our services include financial modeling, liaison with institutions, and regulatory clearances to enable seamless financing.",
    image: "https://images.unsplash.com/photo-1541888087625-f81464c57768?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Finance for Renewable Energy", 
    description: "We assist in securing green financing for solar, wind, and other renewable energy projects. From structuring the financial plan to leveraging subsidies and investor interest, our expertise helps clean energy ventures become financially viable and future-ready.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "All Central & State Govt. Grant & Subsidy", 
    description: "We help identify and apply for all applicable government grants and subsidies for your project. Whether it's capital subsidies, interest subvention, or sector-specific benefits, we ensure proper documentation, eligibility checks, and timely submissions.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "All Financial Projects", 
    description: "No matter the complexity or scale, we handle all types of financial projects—from project financing and refinancing to strategic financial planning. We provide end-to-end execution support, acting as your extended finance partner throughout the lifecycle.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];

const faqs = [
  { question: "Who needs to file an Income Tax Return (ITR)?", answer: "Any individual, HUF, firm, company, or trust with taxable income must file an ITR. Even those with exempt income or foreign assets may need to file." },
  { question: "What is the penalty for late filing of ITR?", answer: "Penalties can range up to ₹5,000 depending on your income and filing delay. Delayed filing also affects interest on refunds and loss carry-forwards." },
  { question: "What is the benefit of advance tax computation?", answer: "It helps avoid interest penalties under Sections 234B and 234C and ensures better cash flow planning." },
  { question: "How can you help with scrutiny or tax appeals?", answer: "We offer end-to-end support including documentation, representation, and legal drafting to defend your case effectively." },
  { question: "Is TDS compliance mandatory for all businesses?", answer: "Yes. If your organization makes payments subject to TDS thresholds, compliance is mandatory. Non-compliance can result in disallowance of expenses and penalties." },
  { question: "How do exemptions under Section 10 & 12 work?", answer: "These apply to trusts and NGOs. We assess eligibility, handle application procedures, and guide compliance for long-term tax benefits." },
  { question: "Why is it better to consult professionals for return filing?", answer: "Professional filing ensures accurate calculations, claim of eligible deductions, and audit-ready documentation, minimizing risks and maximizing refunds." }
];

export default function FinancialServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);

  const stickyServices = financialServices.slice(0, 7);
  const timelineServices = financialServices.slice(7, 14);

  return (
    <main className="min-h-screen bg-white selection:bg-[#FF3D3D] selection:text-white">
      
      
      {/* 1. Hero Section: Kept Dark/Full Width Homepage Style for Authority */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/finance-hero.png" 
            alt="Financial Services Authority" 
            fill 
            className="object-cover object-center"
          />
          {/* Gradient Overlays for Readability */}
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
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-[#1A1A1A]/60 border border-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-white text-sm md:text-base font-black tracking-[0.2em] uppercase">
                Financial Services
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05]">
              Strategic Solutions,<br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Empowered Growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
              Whether launching a new venture or expanding an existing one, having the right financial strategy is crucial. We help you access the right capital at the right time.
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

      {/* 2. First 7 Services: Interactive Sticky Tabs (LIGHT THEME) */}
      <section className="py-24 bg-[#F8F9FA] relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
              Core <span className="text-[#FF3D3D] font-serif italic font-normal">Capital</span> Solutions
            </h2>
            <div className="w-20 h-1 bg-[#FF3D3D] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Sticky List */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 space-y-3">
              {stickyServices.map((service, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                      isActive 
                        ? "bg-[#b90a2a] text-white border-[#b90a2a] shadow-xl transform scale-[1.02]" 
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-black shadow-sm"
                    }`}
                  >
                    <span className={`font-mono text-sm font-bold ${isActive ? "text-white/80" : "text-gray-400"}`}>
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-[16px] leading-tight flex-1">
                      {service.title}
                    </span>
                    {isActive && <CheckCircle2 className="w-6 h-6 text-white" />}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Content Display with Image */}
            <div className="w-full lg:w-7/12 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-200 p-2 rounded-3xl relative overflow-hidden h-full flex flex-col shadow-2xl"
                >
                  {/* High Quality Image at Top */}
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                     <Image
                        unoptimized
                        src={stickyServices[activeTab].image}
                        alt={stickyServices[activeTab].title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                     />
                     {/* Light gradient overlay at bottom of image to blend with white content */}
                     <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  
                  <div className="relative z-10 px-8 pb-8 md:px-12 md:pb-12 flex-grow flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4 leading-tight">
                      {stickyServices[activeTab].title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      {stickyServices[activeTab].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Next 7 Services: The Growth Timeline Layout (LIGHT THEME) */}
      <section className="py-32 bg-white relative border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
              Strategic <span className="text-[#FF3D3D] font-serif italic font-normal">Growth</span> Projects
            </h2>
            <div className="w-20 h-1 bg-[#FF3D3D] mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-medium text-lg">
              Specialized funding and grants structured as a continuous journey for scaling enterprises.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100 transform md:-translate-x-1/2" />

            {timelineServices.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center justify-between mb-16 md:mb-32 last:mb-0">
                  
                  {/* Central Node / Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#FF3D3D] border-4 border-white z-20 shadow-md" />
                  
                  {/* LEFT SIDE (Content if Even, Image if Odd) */}
                  <div className={`hidden md:block w-5/12 pr-16`}>
                    {isEven ? (
                      // Text Content for Even
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:border-gray-300 transition-colors text-right"
                      >
                        <span className="block text-[#FF3D3D] font-mono font-bold mb-3 tracking-widest uppercase">Step 0{idx + 1}</span>
                        <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4 leading-tight">{service.title}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                      </motion.div>
                    ) : (
                      // Image for Odd
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl relative"
                      >
                         <Image unoptimized src={service.image} alt={service.title} fill className="object-cover" />
                      </motion.div>
                    )}
                  </div>

                  {/* RIGHT SIDE (Image if Even, Content if Odd) */}
                  <div className={`w-full pl-16 md:w-5/12 md:pl-16 relative z-10`}>
                    
                    <div className="md:hidden mb-6 rounded-2xl overflow-hidden shadow-lg h-48 relative">
                       <Image unoptimized src={service.image} alt={service.title} fill className="object-cover" />
                    </div>

                    {!isEven ? (
                      // Text Content for Odd
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:border-gray-300 transition-colors text-left"
                      >
                        <span className="block text-[#FF3D3D] font-mono font-bold mb-3 tracking-widest uppercase">Step 0{idx + 1}</span>
                        <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4 leading-tight">{service.title}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                      </motion.div>
                    ) : (
                      // Image for Even
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl relative hidden md:block"
                      >
                         <Image unoptimized src={service.image} alt={service.title} fill className="object-cover" />
                      </motion.div>
                    )}
                    
                    {/* Mobile Text Content Fallback for Even items */}
                    {isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl md:hidden text-left"
                      >
                        <span className="block text-[#FF3D3D] font-mono font-bold mb-2">Step 0{idx + 1}</span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FAQ Section (Unified Light Design) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/finance-faq.png" 
                  alt="Financial Consultants" 
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
                      className={`rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${isActive ? 'bg-[#b90a2a]' : 'bg-white border border-gray-200'}`}
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
