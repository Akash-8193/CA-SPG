"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

// FAQS
const faqs = [
  { question: "What is CMA data and why is it important for an IPO?", answer: "CMA data includes financial projections, current performance, and fund utilization plans. It provides a clear picture of your business to bankers and investors, helping secure funding or underwriting support for the IPO." },
  { question: "How early should a company begin IPO preparations?", answer: "Ideally, 12–18 months in advance. This allows time for audit readiness, regulatory compliance, financial restructuring, and strategic advisory to ensure a smooth and successful listing." },
  { question: "Can a startup or MSME go for an IPO?", answer: "Yes, under specific platforms like SME IPOs. We assist in determining your eligibility and preparing all necessary documentation and strategies tailored for smaller enterprises." },
  { question: "How does capital structure affect IPO performance?", answer: "A well-balanced capital structure improves investor confidence and valuation. We ensure your mix of equity and debt is optimal for attracting long-term investors and maintaining promoter control." },
  { question: "Why is loan restructuring needed before an IPO?", answer: "Reducing or restructuring liabilities before an IPO improves your financial ratios and signals better fiscal discipline, making your company more attractive to investors and regulators." },
  { question: "What is included in the project report for an IPO?", answer: "The project report includes business overview, objectives, market analysis, financial forecasts, promoter background, risk factors, and planned use of funds raised via IPO." },
  { question: "What compliance support is offered for IPO services?", answer: "We guide you through SEBI, ROC, and stock exchange compliance, including documentation, filings, disclosures, and coordination with merchant bankers, auditors, and legal teams." }
];

export default function IpoServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-[#b90a2a] selection:text-white overflow-hidden">
      
      {/* 1. Hero Section: Ultra Premium Dark with Floating Elements */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/ipo_hero_1783616296688.png" 
            alt="IPO Services" 
            fill 
            className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/60" />
        </div>

        {/* Floating Orbs for extra visual complexity */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#b90a2a]/20 rounded-full blur-[100px] z-0 animate-[ping_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#76c3a6]/10 rounded-full blur-[120px] z-0 animate-[pulse_8s_ease-in-out_infinite]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Text Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-ping" />
              <span className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                IPO Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.1]">
              Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Capital</span><br />
              <span className="font-serif italic font-light text-gray-300">& Market Credibility</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              From financial preparation and project reports to capital structuring and advisory, we ensure a seamless, compliant, and confident journey to the stock market.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
           <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-md bg-black/50">
              <ArrowDown className="w-6 h-6" />
           </div>
        </div>
      </section>

      {/* 2. Section 1: Preparation (Asymmetric Bento Grid) */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="mb-16">
               <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#b90a2a] mb-4">Phase 1</h2>
               <h3 className="text-5xl font-bold text-[#1A1A1A]">Financial <span className="font-serif italic font-light text-gray-400">Preparation</span></h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* Large Left Card with Image */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="lg:col-span-7 relative rounded-[2rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-[500px] lg:h-[700px]"
               >
                  <Image 
                     unoptimized
                     src="/images/ipo_financials_1783616319445.png"
                     alt="Financial Preparation"
                     fill
                     className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                  
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                     <div className="w-16 h-16 rounded-full bg-[#b90a2a]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#b90a2a]/50">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                     </div>
                     <h4 className="text-3xl font-bold text-white mb-4">Preparation of CMA Data & Financials</h4>
                     <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                        We prepare detailed Credit Monitoring Arrangement (CMA) data and financial statements in alignment with IPO requirements. These reports provide lenders and investors with clarity on your financial health, projections, and viability—essential for building trust and securing capital.
                     </p>
                  </div>
               </motion.div>

               {/* Right Side: Stacked Glowing Cards */}
               <div className="lg:col-span-5 flex flex-col gap-8 h-full">
                  
                  {/* Top Small Card */}
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 bg-white rounded-[2rem] p-10 border border-gray-200 shadow-lg relative group hover:border-[#b90a2a]/30 hover:shadow-[0_20px_40px_rgba(185,10,42,0.05)] transition-all duration-500 overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#b90a2a]/5 rounded-bl-[100px] transition-transform group-hover:scale-150" />
                     <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#b90a2a]/10 flex items-center justify-center mb-6">
                           <svg className="w-7 h-7 text-[#b90a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Preparation of Project Report</h4>
                        <p className="text-gray-600 text-[16px] leading-relaxed">
                           Our expert team drafts comprehensive project reports that highlight your business model, growth strategy, market opportunity, and financial forecasts.
                        </p>
                        <ul className="mt-6 space-y-3">
                           <li className="flex items-center text-gray-700 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-[#b90a2a] mr-3" /> Investor Presentations</li>
                           <li className="flex items-center text-gray-700 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-[#b90a2a] mr-3" /> Underwriting Support</li>
                           <li className="flex items-center text-gray-700 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-[#b90a2a] mr-3" /> Regulatory Approvals</li>
                        </ul>
                     </div>
                  </motion.div>

                  {/* Bottom Small Card (Promo / Stat) */}
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="h-48 bg-gradient-to-br from-[#b90a2a] to-[#800015] rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden"
                  >
                     {/* Decorative circles */}
                     <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-white/20 rounded-full" />
                     <div className="absolute -bottom-16 -right-16 w-56 h-56 border-4 border-white/10 rounded-full" />
                     
                     <h4 className="text-5xl font-black text-white mb-2">12-18</h4>
                     <p className="text-white/80 font-medium tracking-wide uppercase text-sm">Months Ideal Preparation Time</p>
                  </motion.div>

               </div>

            </div>
         </div>
      </section>

      {/* 3. Section 2: Advisory (Complex Overlapping Layered Layout) */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
            <div className="mb-16 text-center">
               <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#b90a2a] mb-4">Phase 2</h2>
               <h3 className="text-5xl font-bold text-[#1A1A1A]">Strategic <span className="font-serif italic font-light text-gray-400">Advisory</span></h3>
            </div>

            <div className="relative w-full min-h-[800px] lg:min-h-[700px] flex items-center">
               
               {/* Background AI Image spanning partial width */}
               <div className="absolute right-0 top-0 w-full lg:w-[65%] h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image 
                     unoptimized
                     src="/images/ipo_advisory_1783616329031.png"
                     alt="Strategic Advisory Boardroom"
                     fill
                     className="object-cover"
                  />
                  {/* Blueish gradient overlay for premium feel */}
                  <div className="absolute inset-0 bg-[#0A192F]/20" />
               </div>

               {/* Overlapping Content Boxes on the Left */}
               <div className="relative z-10 w-full lg:w-[50%] pt-[350px] lg:pt-0 lg:left-0 flex flex-col gap-8">
                  
                  {/* Card 1 */}
                  <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-[#b90a2a] flex items-center justify-center mb-6 shadow-lg shadow-[#b90a2a]/30">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Start-up & MSME Advisory</h4>
                     <p className="text-gray-600 text-[16px] leading-relaxed">
                        Startups and MSMEs require tailored strategies for IPO readiness. We offer guidance on compliance, financial streamlining, and business model refinement to meet eligibility criteria and attract investor interest while preserving long-term value.
                     </p>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-[#1A1A1A] p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-800 ml-0 lg:ml-12"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                     </div>
                     <h4 className="text-2xl font-bold text-white mb-4">Advice on Capital Structure</h4>
                     <p className="text-gray-400 text-[16px] leading-relaxed">
                        We evaluate your existing capital setup and recommend an optimal structure to support IPO success. Our approach ensures a balanced mix of equity, debt, and promoter holding, maximizing both valuation and investor appeal while minimizing future dilution.
                     </p>
                  </motion.div>

               </div>

            </div>
         </div>
      </section>

      {/* 4. Section 3: Restructuring (Clean Premium Split Layout) */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col lg:flex-row bg-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
            >
               {/* Left: AI Image */}
               <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
                  <Image 
                     unoptimized
                     src="/images/ipo_restructuring_1783616340940.png"
                     alt="Loan Restructuring"
                     fill
                     className="object-cover"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
               </div>

               {/* Right: Clean Content Area */}
               <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-[#FCFBF7] relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[40px] border-[#b90a2a]/5 rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                     <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-[#b90a2a]/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#b90a2a]" />
                        <span className="text-[#b90a2a] text-xs font-bold tracking-[0.2em] uppercase">Phase 3</span>
                     </div>
                     
                     <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                        Loan <span className="text-[#b90a2a]">Restructuring</span>
                     </h2>
                     <p className="text-[17px] text-gray-600 leading-[1.9] font-medium">
                        Prior to IPO, financial hygiene is critical. We help restructure existing loans to improve your balance sheet, reduce liabilities, and align your debt profile with investor expectations. This process enhances your company's financial image before going public.
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 5. Section 4: FAQ (Rich Design with Sidebar Image) */}
      <section className="py-12 lg:py-16 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Sticky Sidebar Info */}
            <div className="w-full lg:w-1/3">
               <div className="sticky top-12 space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                    Frequently Asked <br/><span className="text-[#b90a2a]">Questions</span>
                  </h2>
                  <p className="text-gray-600 text-lg">Everything you need to know about preparing for an IPO and going public.</p>
                  
                  {/* Small decorative card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-4">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                     </div>
                     <div>
                        <h5 className="font-bold text-gray-900">100% Compliant</h5>
                        <p className="text-sm text-gray-500 mt-1">Our IPO processes strictly adhere to SEBI and ROC guidelines.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: FAQs */}
            <div className="w-full lg:w-2/3 space-y-4">
               {faqs.map((faq, index) => {
                  const isActive = openFaq === index;
                  return (
                     <motion.div 
                        key={index} 
                        initial={false} 
                        className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${isActive ? 'bg-white ring-2 ring-[#b90a2a] shadow-lg' : 'bg-white border border-gray-200'}`}
                     >
                        <button 
                           onClick={() => setOpenFaq(isActive ? null : index)} 
                           className={`w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none transition-colors ${isActive ? 'text-[#b90a2a]' : 'text-[#1A1A1A] hover:bg-gray-50'}`}
                        >
                           <span className="font-bold text-[17px] md:text-[19px] pr-8 leading-snug">
                           {faq.question}
                           </span>
                           <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-[#b90a2a] text-white' : 'bg-gray-100 text-gray-500'}`}>
                           {isActive ? (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                           ) : (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                           )}
                           </div>
                        </button>
                        <AnimatePresence>
                           {isActive && (
                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                              <div className="px-6 md:px-8 pb-8 text-gray-600 text-[16px] leading-relaxed border-t border-gray-100 pt-6">
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
      </section>

    </main>
  );
}
