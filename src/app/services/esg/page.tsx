"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Plus, Minus, ArrowRight } from "lucide-react";

export default function ESGPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    { 
       question: "Stakeholder Engagement and Governance Advisory", 
       answer: "We strengthen your governance framework through better board practices, ethical codes, and stakeholder communication. This ensures long-term trust and alignment with ESG expectations from investors and regulators." 
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/dd_hero_1783618496301.png" 
            alt="ESG Services" 
            fill 
            className="object-cover object-center scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-[#b90a2a]/20 border border-[#b90a2a]/50 mb-8 backdrop-blur-md">
              <Leaf className="w-4 h-4 text-[#b90a2a]" />
              <span className="text-[#b90a2a] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                Sustainable Future
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Environment, Social & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Governance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Building resilient and responsible businesses through strategic ESG integration and reporting.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-4">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="w-full h-1/2 bg-[#b90a2a]"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. ESG Strategy & Risk (2-Column Cards) */}
      <section className="py-12 lg:py-16 bg-[#FCFBF7] border-y border-gray-100 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Strategy & Assessment</h2>
               <div className="w-16 h-1 bg-[#b90a2a] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Policy Card */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#b90a2a] transition-colors group"
               >
                  <div className="w-16 h-16 bg-[#b90a2a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#b90a2a] transition-colors">
                     <Leaf className="w-8 h-8 text-[#b90a2a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">ESG Policy Drafting and Implementation</h3>
                  <p className="text-gray-600 leading-[1.8] text-[16px]">
                     We develop customized ESG policies aligned with your business objectives, industry standards, and global frameworks. Our support includes rollout strategies, internal communication, and operational integration.
                  </p>
               </motion.div>

               {/* Risk Card */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, transition: { delay: 0.1 } }}
                  className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#b90a2a] transition-colors group"
               >
                  <div className="w-16 h-16 bg-[#b90a2a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#b90a2a] transition-colors">
                     <ArrowRight className="w-8 h-8 text-[#b90a2a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">ESG Risk Assessment</h3>
                  <p className="text-gray-600 leading-[1.8] text-[16px]">
                     Our assessments identify material risks related to climate change, labor practices, governance lapses, and supply chain issues. This enables businesses to take proactive action and safeguard reputation and resilience.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. Reporting & Compliance (Image Split Layout) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Content */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">R</span>eporting & Compliance
                  </h2>
                  <div className="space-y-10">
                     <div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">ESG Reporting and Disclosures</h4>
                        <p className="text-gray-600 leading-relaxed text-[16px]">
                           We prepare ESG reports in line with SEBI BRSR, GRI, and other international frameworks. Whether you're reporting to regulators, investors, or stakeholders, we ensure your disclosures are clear, credible, and compliant.
                        </p>
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">BRSR & CSR Compliance</h4>
                        <p className="text-gray-600 leading-relaxed text-[16px]">
                           We help companies meet the Business Responsibility and Sustainability Reporting (BRSR) mandates and plan impactful CSR initiatives. This includes tracking CSR spends, drafting policies, and filing necessary returns.
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Image */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
               >
                  <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                     <Image unoptimized src="/images/dd_commercial_1783618550397.png" alt="Reporting" fill className="object-cover" />
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. Audits & Green Finance (Circular Layout) */}
      <section className="py-12 lg:py-16 bg-[#FCFCFC] border-y border-gray-100 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Orbit Image */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
               >
                  <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex items-center justify-center">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, ease: "linear", repeat: Infinity }} className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#80c3a6]" />
                     
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
                        <Image unoptimized src="/images/dd_financial_1783618507090.png" alt="Sustainability" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>

               {/* Right: Content */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">S</span>ustainability & Advisory
                  </h2>
                  <div className="space-y-10">
                     <div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Sustainability Audits</h4>
                        <p className="text-gray-600 leading-relaxed text-[16px]">
                           Our audits evaluate the implementation and impact of ESG initiatives across business functions. We identify gaps, measure KPIs, and provide recommendations to align actions with intent.
                        </p>
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Green Finance Advisory</h4>
                        <p className="text-gray-600 leading-relaxed text-[16px]">
                           We help businesses access green bonds, sustainability-linked loans, and climate finance opportunities. Our team supports end-to-end planning — from project identification to compliance with green finance norms.
                        </p>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 5. FAQ Section (Governance) at the VERY BOTTOM */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Governance & Engagement</h2>
               <p className="text-gray-500 text-lg">Ensuring long-term trust and alignment with expectations.</p>
            </div>

            <div className="space-y-4">
               {faqData.map((faq, index) => (
                  <div 
                     key={index}
                     className="border-b border-gray-200 pb-4"
                  >
                     <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                     >
                        <span className={`text-lg font-bold transition-colors ${activeFaq === index ? 'text-[#b90a2a]' : 'text-[#1A1A1A] group-hover:text-[#b90a2a]'}`}>
                           {faq.question}
                        </span>
                        <div className={`ml-4 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${activeFaq === index ? 'border-[#b90a2a] bg-[#b90a2a] text-white' : 'border-gray-300 text-gray-500 group-hover:border-[#b90a2a] group-hover:text-[#b90a2a]'}`}>
                           {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                     </button>
                     
                     <AnimatePresence>
                        {activeFaq === index && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                           >
                              <p className="pb-6 text-gray-600 text-base leading-relaxed pr-12">
                                 {faq.answer}
                              </p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}
