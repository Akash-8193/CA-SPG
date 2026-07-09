"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, ArrowDown, ChevronDown, Plus, Minus } from "lucide-react";

const faqData = [
  { question: "Project Reports", answer: "We draft customized project reports with industry analysis, financial projections, and execution plans. These are crucial for bank funding, investor pitches, and regulatory submissions." },
  { question: "Financial Review and Advisory", answer: "We review financial statements, processes, and forecasts to identify risks, inefficiencies, and opportunities — delivering strategic recommendations for improvement." },
  { question: "Risk Management", answer: "Our risk advisory helps you assess internal and external vulnerabilities and design mitigation plans. This includes insurance, compliance, credit exposure, and business continuity risks." },
  { question: "Project Loan", answer: "We support clients in securing long-term financing for infrastructure, plant setup, capacity expansion, or capital equipment. From preparing lender-ready documents to coordinating with banks and NBFCs, we manage the end-to-end process to ensure timely approvals." },
  { question: "Working Capital", answer: "We assess your working capital cycle and design funding solutions like overdrafts, invoice financing, and supply chain credit. Our goal is to keep your operations running smoothly by ensuring liquidity without over-leveraging." },
  { question: "Infrastructure Project", answer: "We offer capital structuring, financial modeling, and fundraising support for infrastructure projects in sectors like roads, energy, water, and urban development. Our team assists in proposal preparation, budgeting, investor outreach, and regulatory alignment." },
  { question: "Finance for Renewable Energy", answer: "We help green energy ventures raise funds through banks, financial institutions, and climate-focused investors. Our services include viability analysis, incentive mapping, and structuring finance for solar, wind, biomass, and other renewable projects." },
  { question: "Non-Convertible Debenture (NCD)", answer: "We assist in the issuance of secured and unsecured NCDs for long-term debt requirements. Our services include drafting offer documents, liaising with trustees, regulatory filings, and investor coordination, ensuring transparent and compliant execution." },
  { question: "Equity Participation from Investor", answer: "We help businesses attract strategic investors by structuring equity offers with aligned valuation, rights, and exit terms. This includes preparing investor decks, negotiating term sheets, and facilitating onboarding of domestic or international investors." },
  { question: "FDI", answer: "We provide advisory and end-to-end compliance support for foreign direct investment — from business structuring and FEMA reporting to RBI filings and sector-specific approvals. Our services help ensure seamless capital inflow and regulatory clarity." },
  { question: "School & Hospital Projects", answer: "We offer detailed financial planning, budgeting, funding advisory, and capital structuring for schools, colleges, hospitals, and healthcare institutions. Whether it's a new venture or expansion, we guide projects from feasibility to fund mobilization." }
];

export default function CapitalAdvisoryPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section (Strictly matching Due Diligence) */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/finance_hero_1783601728603.png" 
            alt="Capital Advisory Services" 
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
              <Landmark className="w-4 h-4 text-[#b90a2a]" />
              <span className="text-[#b90a2a] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                Expert Analysis
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Capital Advisory</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Raising and managing funds through equity, debt, and alternative finance to empower your business vision.
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

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <p className="text-gray-600 text-[18px] md:text-[20px] leading-[1.9] font-medium">
               Our Capital Advisory services help businesses raise and manage funds through equity, debt, and alternative finance. We support IPOs, private equity, venture capital, project loans, working capital, and loan syndication. From startups to large enterprises, we offer end-to-end guidance — from financial structuring to investor liaison and compliance. Our solutions are strategic, compliant, and tailored to your growth goals.
            </p>
         </div>
      </section>

      {/* 2. Equity Fund Raising (Circular Orbit Style) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Creative Orbit Image */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
               >
                  <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex items-center justify-center">
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" 
                     />
                     <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#b90a2a]" />
                     <div className="absolute bottom-4 left-1/2 w-3 h-3 rounded-full bg-gray-400" />
                     
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
                        <Image unoptimized src="/images/dd_commercial_1783618550397.png" alt="Equity" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>

               {/* Right: Content with Drop Cap */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">E</span>quity Fund Raising
                  </h2>
                  <div className="space-y-6">
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">IPO / SME IPO</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We provide end-to-end advisory for IPO and SME IPO processes — from documentation and compliance to financial structuring and coordination with intermediaries.</p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Rights Issue</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We help companies plan and execute rights issues to strengthen their capital base, tailored to regulatory and shareholder requirements.</p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Angel Investor</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We identify and engage suitable angel investors for startups, ensuring founders are well-prepared with valuations and investor decks.</p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Private Equity / VC</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We advise businesses on PE/VC fundraising, including deal structuring, term sheet negotiation, and investor alignment.</p>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 3. Debt Fund Raising (Strict 3-Column Screenshot Style) */}
      <section className="py-12 lg:py-16 bg-[#FCFCFC] border-y border-gray-100 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-16">Debt Fund Raising</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               
               {[{
                  title: "Term Loan",
                  desc: "We help secure structured term loans from banks and NBFCs by preparing bankable proposals and financial models.",
                  img: "/images/dd_financial_1783618507090.png"
               }, {
                  title: "Working Capital",
                  desc: "We assess your short-term financing needs and arrange overdrafts, cash credit, and bill discounting facilities.",
                  img: "/images/ipo_financials_1783616319445.png"
               }, {
                  title: "Debenture",
                  desc: "We assist in raising capital through secured and unsecured debentures, ideal for funding without equity dilution.",
                  img: "/images/dd_compliance_1783618540795.png"
               }, {
                  title: "Loan Syndication",
                  desc: "We manage the entire syndication process, from projections to liaising with banks, ensuring timely access to funding.",
                  img: "/images/dd_legal_1783618518553.png"
               }].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#FFFCF5] rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                     <div className="relative h-48 w-full">
                        <Image unoptimized src={item.img} alt={item.title} fill className="object-cover" />
                     </div>
                     <div className="p-6 flex-1 text-center">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-[1.8]">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Business Collaboration (Drop Cap Reverse Layout) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Content */}
               <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">B</span>usiness Collaboration
                  </h2>
                  <div className="space-y-6">
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Mergers and Acquisitions</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We offer comprehensive M&A support including due diligence, valuation, structuring, and negotiation. Whether you're acquiring, selling, or merging, we ensure smooth execution.</p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Partnerships & Joint Ventures</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">From drafting agreements to defining responsibilities and compliance mechanisms, we help businesses form legally sound and mutually beneficial partnerships.</p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center">Project Finances</h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">We create detailed project finance structures, prepare lender documentation, and coordinate with financial institutions to secure funds for long-term ventures.</p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Orbit Image */}
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative">
                  <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex items-center justify-center">
                     <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, ease: "linear", repeat: Infinity }} className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#80c3a6]" />
                     
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
                        <Image unoptimized src="/images/dd_buysell_1783618560179.png" alt="Business Collaboration" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 5. Startups, MSMEs & Alternate Finances (Cards Grid) */}
      <section className="py-12 lg:py-16 bg-[#FCFBF7] border-y border-gray-200 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-16">Startups, MSMEs & Alternate Finances</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {[
                  { title: "Crowdfunding & Leasing", desc: "We guide startups through crowdfunding campaigns and arrange lease finance solutions tailored for businesses needing capital assets without upfront ownership." },
                  { title: "Seed Funding", desc: "We connect startups with angel investors, incubators, and seed funds. Our services include business plan refinement, valuation, and investor outreach." },
                  { title: "Government Schemes & Grants", desc: "We help access subsidies, grants, and credit schemes under various government programs, including CGMST for MSME loans without security." },
                  { title: "Venture Capital", desc: "We guide startups through the VC funding cycle including pitch decks, valuation, term sheets, and investor negotiations." },
                  { title: "Factoring / Invoice Discounting", desc: "We assist in availing funds against receivables via factoring and discounting arrangements to improve liquidity without increasing liabilities." }
               ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#b90a2a] transition-all">
                     <h3 className="text-xl font-bold text-[#b90a2a] mb-4">{item.title}</h3>
                     <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}

            </div>
         </div>
      </section>

      {/* 6. FAQ Section (Report & Advisory) at the VERY BOTTOM */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Report & Advisory</h2>
               <p className="text-gray-500 text-lg">Comprehensive insights and structuring across key domains.</p>
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
