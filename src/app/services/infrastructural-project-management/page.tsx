"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";



// Content Data
const infrastructureServices = [
  { 
    title: "MOU/Lease Negotiation & Terms Review", 
    description: "We assist in drafting, negotiating, and reviewing Memorandums of Understanding (MOUs), lease agreements, and related contracts to ensure favorable terms for our clients. Our goal is to protect your interests, mitigate risks, and establish clear obligations before any project groundwork begins.",
    image: "/images/ipm_contracts_new.png"
  },
  { 
    title: "Pre-award Contract Research", 
    description: "Before awarding any contracts, we conduct thorough research on contractors, vendors, and proposed terms. This due diligence ensures you make informed decisions, avoid overpricing, and select the most capable partners—laying the foundation for successful project execution.",
    image: "/images/ipm_accounting_new.png"
  },
  { 
    title: "Control over Contract Awards", 
    description: "We implement structured processes to maintain oversight over all contract awards. This includes setting up evaluation criteria, reviewing bid documents, and monitoring compliance with procurement policies—ensuring transparency, cost-efficiency, and legal integrity.",
    image: "/images/ipm_compliance_new.png"
  },
  { 
    title: "Verification of Contractor Bills", 
    description: "To prevent overbilling and ensure accurate payments, we verify contractor bills based on actual site work, BOQ (Bill of Quantities), and work progress. This process ensures accountability, reduces financial leakages, and enhances trust across stakeholders.",
    image: "/images/ipm_accounting_new.png"
  },
  { 
    title: "Disbursement Payment to Contractor", 
    description: "We manage the scheduling, documentation, and release of payments to contractors as per pre-approved milestones and contractual obligations. Our structured approach ensures timely payments without compromising on project checks and balances.",
    image: "/images/ipm_contracts_new.png"
  },
  { 
    title: "Complete Accounting Work for Infra Projects", 
    description: "We offer dedicated accounting services tailored for infrastructure projects, covering budgeting, expense tracking, billing cycles, taxation, and financial reporting. This ensures transparency, investor confidence, and full compliance with regulatory norms.",
    image: "/images/ipm_accounting_new.png"
  },
  { 
    title: "Project Land Registration & Regulatory Clearances", 
    description: "We handle the critical aspects of land registration, mutation, title verification, and obtaining required regulatory clearances for infrastructure projects. Our expertise ensures legal sanctity of land acquisition and speeds up project commencement timelines.",
    image: "/images/ipm_compliance_new.png"
  },
  { 
    title: "RERA Compliant", 
    description: "We ensure that your real estate and infrastructure projects are fully compliant with RERA (Real Estate Regulatory Authority) norms. This includes documentation, project registration, periodic updates, and customer transparency—enhancing credibility and reducing legal exposure.",
    image: "/images/ipm_contracts_new.png"
  }
];

const faqs = [
  { question: "Why is MOU and lease negotiation important in infrastructure projects?", answer: "It defines legal boundaries, obligations, and rights. A well-negotiated MOU or lease avoids disputes, protects your investments, and ensures smoother project execution." },
  { question: "What is included in Pre-award Contract Research?", answer: "It includes vendor background checks, financial stability reviews, technical competency assessments, and analysis of past project performance to select the most suitable contractors." },
  { question: "How does verification of contractor bills benefit the client?", answer: "It ensures you're only paying for actual completed work as per contract, thus eliminating overbilling, fraud, or duplicate claims—ultimately saving money." },
  { question: "Is RERA compliance mandatory for all infrastructure projects?", answer: "For real estate and certain residential-commercial infrastructure projects, RERA compliance is mandatory. It protects buyer interests and enhances project transparency." },
  { question: "What types of regulatory clearances are typically required?", answer: "Depending on project type and location, clearances may include land-use approvals, environmental NOCs, building permits, fire safety certifications, and local municipal approvals." },
  { question: "Do you provide post-disbursement audits or financial tracking?", answer: "Yes. We offer ongoing accounting and audit services to track fund utilization, reconcile budgets, and prepare periodic reports for lenders, investors, or internal stakeholders." },
  { question: "Can you manage accounting for multiple infrastructure sites simultaneously?", answer: "Absolutely. We deploy scalable teams and digital tools to manage accounting, compliance, and reporting across multi-site infrastructure operations efficiently." }
];

export default function InfrastructurePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white selection:bg-[#FF3D3D] selection:text-white">
      
      
      {/* 1. Hero Section: Dark / Full Width Homepage Style */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/ipm_hero_new.png" 
            alt="Infrastructure Project Management" 
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
                Project Management
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05]">
              Build with <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Confidence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
              Infrastructure projects demand precise planning, legal clarity, and financial discipline. We provide end-to-end support—minimizing risks and maximizing value for stakeholders.
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

      {/* 2. Services Section: "Staggered Parallax Layout" */}
      <section className="py-32 bg-[#F8F9FA] relative border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
              Comprehensive <span className="text-[#FF3D3D]">Oversight</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF3D3D] mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-medium text-lg">
              We ensure that every phase of your infrastructure project is professionally handled, allowing you to focus on execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
             
             {/* LEFT COLUMN (Evens: 0, 2, 4, 6) */}
             <div className="space-y-8 lg:space-y-16">
                {infrastructureServices.filter((_, i) => i % 2 === 0).map((service, index) => {
                   const originalIndex = index * 2;
                   return (
                      <motion.div 
                        key={originalIndex}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                         {/* Card Image */}
                         <div className="w-full h-64 relative overflow-hidden">
                            <Image unoptimized src={service.image} alt={service.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                               <div className="w-12 h-12 bg-[#FF3D3D] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                                  0{originalIndex + 1}
                               </div>
                            </div>
                         </div>
                         {/* Card Content */}
                         <div className="p-8 lg:p-10">
                            <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#FF3D3D] transition-colors">{service.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                         </div>
                      </motion.div>
                   );
                })}
             </div>

             {/* RIGHT COLUMN (Odds: 1, 3, 5, 7) - STAGGERED DOWN */}
             <div className="space-y-8 lg:space-y-16 lg:mt-32">
                {infrastructureServices.filter((_, i) => i % 2 !== 0).map((service, index) => {
                   const originalIndex = index * 2 + 1;
                   return (
                      <motion.div 
                        key={originalIndex}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                         {/* Card Image */}
                         <div className="w-full h-64 relative overflow-hidden">
                            <Image unoptimized src={service.image} alt={service.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                               <div className="w-12 h-12 bg-[#FF3D3D] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                                  0{originalIndex + 1}
                               </div>
                            </div>
                         </div>
                         {/* Card Content */}
                         <div className="p-8 lg:p-10">
                            <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#FF3D3D] transition-colors">{service.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                         </div>
                      </motion.div>
                   );
                })}
             </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section (Unified Light Design) */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/ipm_compliance_new.png" 
                  alt="Infrastructure Consultants" 
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
